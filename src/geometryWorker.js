import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { ConvexGeometry } from "three/examples/jsm/geometries/ConvexGeometry.js";
import { parse3MF, initLib3mf } from "./lib3mfLoader.mjs";
import { initWasm, wasmInstance, getPolygonCentroid } from "./nfpPlacer.mjs";
import * as layflat from "./Layflatnormal.mjs";

// Initialize WASM runtimes inside the Web Worker
let wasmReadyPromise = Promise.all([initWasm(), initLib3mf().catch(() => {})]);

self.onmessage = async function (e) {
  const { fileBuffer, fileName, fileType, fileId } = e.data;

  try {
    await wasmReadyPromise;
    console.log(`[Worker] Started processing file "${fileName}" (${fileType})`);

    // Parse geometries from files
    const parsedGeometries = [];
    if (fileType === "3mf") {
      const meshes = await parse3MF(fileBuffer);
      meshes.forEach((mesh) => {
        parsedGeometries.push(mesh.geometry);
      });
    } else {
      const loader = new STLLoader();
      const stlGeometry = loader.parse(fileBuffer);
      parsedGeometries.push(stlGeometry);
    }

    // Phase 1: Post the raw parsed geometry back immediately for instant rendering
    const geometryData = parsedGeometries.map((geom) => {
      // Clone array buffer structures to avoid transfer issues
      const vertices = geom.attributes.position.array;
      const indices = geom.index ? geom.index.array : null;
      return {
        vertices: vertices,
        indices: indices,
      };
    });

    self.postMessage({
      type: "parsed",
      success: true,
      geometries: geometryData,
      fileName,
      fileId,
    });

    // Phase 2: Compute footprints & convex hulls (extremely fast)
    const footprintsResults = [];
    const convexGeometries = [];

    for (let index = 0; index < parsedGeometries.length; index++) {
      const geometry = parsedGeometries[index];
      const positions = geometry.attributes.position.array;

      // Downsample points first (max 5,000 points) for both convex hull and footprint speedups
      const totalVertices = positions.length / 3;
      const step = Math.max(1, Math.floor(totalVertices / 5000));

      const downsampledPoints = [];
      for (let i = 0; i < positions.length; i += 3 * step) {
        downsampledPoints.push(
          new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]),
        );
      }

      // Generate 3D Convex Hull Geometry using the downsampled points
      const convexGeometry = new ConvexGeometry(downsampledPoints);
      convexGeometries.push(convexGeometry);

      // Serialize convex hull geometry attributes
      const convexVertices = convexGeometry.attributes.position.array;
      const convexIndices = convexGeometry.index
        ? convexGeometry.index.array
        : null;

      // Calculate 2D footprint points using WASM on the 3D convex hull vertices (very few points, extremely fast!)
      const cppPoints = new wasmInstance.VectorDouble();
      for (let i = 0; i < convexVertices.length; i += 3) {
        cppPoints.push_back(convexVertices[i]);
        cppPoints.push_back(convexVertices[i + 2]); // X and Z for 2D footprint projection
      }

      const cppHull = wasmInstance.convexHullFlat(cppPoints);
      cppPoints.delete();

      const footprintPoints = [];
      for (let i = 0; i < cppHull.size(); i += 2) {
        footprintPoints.push({ x: cppHull.get(i), y: cppHull.get(i + 1) });
      }
      cppHull.delete();

      footprintsResults.push({
        footprintPoints: footprintPoints,
        convexVertices: convexVertices,
        convexIndices: convexIndices,
      });
    }

    // Post footprints back immediately so Autoarrange becomes instantly ready!
    self.postMessage({
      type: "footprints",
      success: true,
      results: footprintsResults,
      fileName,
      fileId,
    });

    // Phase 3: Compute heavy layflat helpers (asynchronous, takes longer)
    const layflatResults = [];

    for (let index = 0; index < parsedGeometries.length; index++) {
      const geometry = parsedGeometries[index];
      const convexGeometry = convexGeometries[index];

      // 3. Generate Layflat Outer Faces and Highlights
      const selectedOuterFaces =
        layflat.selectOuterFacesAutomatically(convexGeometry);

      // Recreate selectedNeighbours logic inside worker
      let mergedGeometries = [];
      const originalFaceIndicesMap = [];

      selectedOuterFaces.forEach((selectedFaceIndex) => {
        const neighbors = layflat.findAllNeighboringFaces(
          convexGeometry,
          selectedFaceIndex,
        );
        originalFaceIndicesMap.push(selectedFaceIndex);
        neighbors.forEach((nIndex) => {
          originalFaceIndicesMap.push(nIndex);
        });

        // Add highlight geometry representation
        const highlightGeom = createHighlightFaceGeometry(
          convexGeometry,
          selectedFaceIndex,
          neighbors,
        );
        if (highlightGeom) {
          mergedGeometries.push(highlightGeom);
        }
      });

      let finalMergedVertices = null;
      let finalMergedIndices = null;
      if (mergedGeometries.length > 0) {
        // Simple merge geometries inside worker
        const merged = mergeGeometriesFlat(mergedGeometries);
        finalMergedVertices = merged.vertices;
        finalMergedIndices = merged.indices;
      }

      // 4. Raycast faces to calculate largest neighbors
      let largestNeighborIndex = -1;
      if (finalMergedVertices && finalMergedVertices.length > 0) {
        const dummyHighlightGeometry = new THREE.BufferGeometry();
        dummyHighlightGeometry.setAttribute(
          "position",
          new THREE.BufferAttribute(finalMergedVertices, 3),
        );
        if (finalMergedIndices)
          dummyHighlightGeometry.setIndex(
            new THREE.BufferAttribute(finalMergedIndices, 1),
          );

        const dummyOriginalMesh = new THREE.Mesh(geometry);
        const intersectedresults = raycastFacesWorker(
          dummyHighlightGeometry,
          selectedOuterFaces,
          dummyOriginalMesh,
          0.1,
        );
        largestNeighborIndex = findLargestNeighborIndexWorker(
          dummyHighlightGeometry,
          intersectedresults,
        );
      }

      // Serialize all data to send back
      layflatResults.push({
        selectedOuterFaces: selectedOuterFaces,
        highlightVertices: finalMergedVertices,
        highlightIndices: finalMergedIndices,
        highlightFaceMap: originalFaceIndicesMap,
        largestNeighborIndex: largestNeighborIndex,
      });

      // Cleanup
      convexGeometry.dispose();
    }

    self.postMessage({
      type: "completed",
      success: true,
      results: layflatResults,
      fileName,
      fileId,
    });
  } catch (err) {
    console.error("[Worker] Error processing geometry:", err);
    self.postMessage({
      type: "error",
      success: false,
      error: err.message,
      fileName,
      fileId,
    });
  }
};

// Helper to create highlight face geometry
function createHighlightFaceGeometry(geometry, selectedFaceIndex, neighbors) {
  const allFaces = [selectedFaceIndex, ...neighbors];
  const vertices = [];

  allFaces.forEach((faceIndex) => {
    const faceVertices = getFaceVerticesWorker(geometry, faceIndex);
    faceVertices.forEach((v) => {
      vertices.push(v.x, v.y, v.z);
    });
  });

  return new Float32Array(vertices);
}

// Flat merge float arrays
function mergeGeometriesFlat(geometries) {
  let totalLength = 0;
  geometries.forEach((g) => {
    totalLength += g.length;
  });

  const merged = new Float32Array(totalLength);
  let offset = 0;
  geometries.forEach((g) => {
    merged.set(g, offset);
    offset += g.length;
  });

  return { vertices: merged, indices: null };
}

function getFaceVerticesWorker(geometry, faceIndex) {
  const positions = geometry.attributes.position.array;
  const startIndex = faceIndex * 9;
  return [
    new THREE.Vector3(
      positions[startIndex],
      positions[startIndex + 1],
      positions[startIndex + 2],
    ),
    new THREE.Vector3(
      positions[startIndex + 3],
      positions[startIndex + 4],
      positions[startIndex + 5],
    ),
    new THREE.Vector3(
      positions[startIndex + 6],
      positions[startIndex + 7],
      positions[startIndex + 8],
    ),
  ];
}

// Raycasting calculations ported inside Web Worker
function raycastFacesWorker(
  geometry,
  selectedOuterFaces,
  originalMesh,
  threshold,
) {
  const raycaster = new THREE.Raycaster();
  const intersectionResults = [];

  for (const selectedFaceIndex of selectedOuterFaces) {
    let invertedNormal = getFaceNormalWorker(geometry, selectedFaceIndex);
    invertedNormal.negate();
    const facePosition = getFacePositionWorker(geometry, selectedFaceIndex);

    raycaster.set(facePosition, invertedNormal);
    const intersection = raycaster.intersectObject(originalMesh, true);

    if (intersection.length > 0) {
      const distance = getDistanceWorker(intersection[0].point, facePosition);
      if (distance <= threshold) {
        const neighbors = layflat.findAllNeighboringFaces(
          geometry,
          selectedFaceIndex,
        );
        intersectionResults.push({
          selectedFaceIndex,
          neighborIndices: neighbors,
        });
        continue;
      }
    } else {
      const neighbors = layflat.findAllNeighboringFaces(
        geometry,
        selectedFaceIndex,
      );
      const neighborIndices = [];

      for (const neighborIndex of neighbors) {
        const neighborFacePosition = getFacePositionWorker(
          geometry,
          neighborIndex,
        );
        const invertedNormals = getFaceNormalWorker(geometry, neighborIndex);
        invertedNormals.negate();
        raycaster.set(neighborFacePosition, invertedNormals);

        const neighborIntersection = raycaster.intersectObject(
          originalMesh,
          true,
        );
        if (neighborIntersection.length > 0) {
          const neighborDistance = getDistanceWorker(
            neighborIntersection[0].point,
            neighborFacePosition,
          );
          if (neighborDistance <= threshold) {
            neighborIndices.push(neighborIndex);
          }
        }
      }

      if (neighborIndices.length > 0) {
        intersectionResults.push({ selectedFaceIndex, neighborIndices });
      }
    }
  }

  return intersectionResults;
}

function findLargestNeighborIndexWorker(geometry, intersectionResults) {
  let largestNeighbor = -1;
  let largestSize = 0;

  for (const result of intersectionResults) {
    const selectedFaceIndex = result.selectedFaceIndex;
    const neighborIndices = result.neighborIndices;

    const dimensions = findCombinedFaceDimensionsWorker(
      geometry,
      neighborIndices,
      selectedFaceIndex,
    );
    const combinedSize =
      dimensions.width + dimensions.height + dimensions.depth;

    if (combinedSize > largestSize) {
      largestSize = combinedSize;
      largestNeighbor = selectedFaceIndex;
    }
  }

  return largestNeighbor;
}

function getFaceNormalWorker(geometry, faceIndex) {
  const positions = geometry.attributes.position.array;
  const startIndex = faceIndex * 9;
  const pA = new THREE.Vector3(
    positions[startIndex],
    positions[startIndex + 1],
    positions[startIndex + 2],
  );
  const pB = new THREE.Vector3(
    positions[startIndex + 3],
    positions[startIndex + 4],
    positions[startIndex + 5],
  );
  const pC = new THREE.Vector3(
    positions[startIndex + 6],
    positions[startIndex + 7],
    positions[startIndex + 8],
  );

  const cb = new THREE.Vector3(),
    ab = new THREE.Vector3();
  cb.subVectors(pC, pB);
  ab.subVectors(pA, pB);
  cb.cross(ab);
  cb.normalize();
  return cb;
}

function getFacePositionWorker(geometry, faceIndex) {
  const positions = geometry.attributes.position.array;
  const startIndex = faceIndex * 9;
  return new THREE.Vector3(
    (positions[startIndex] +
      positions[startIndex + 3] +
      positions[startIndex + 6]) /
      3,
    (positions[startIndex + 1] +
      positions[startIndex + 4] +
      positions[startIndex + 7]) /
      3,
    (positions[startIndex + 2] +
      positions[startIndex + 5] +
      positions[startIndex + 8]) /
      3,
  );
}

function getDistanceWorker(point1, point2) {
  return Math.sqrt(
    Math.pow(point2.x - point1.x, 2) +
      Math.pow(point2.y - point1.y, 2) +
      Math.pow(point2.z - point1.z, 2),
  );
}

function findCombinedFaceDimensionsWorker(
  geometry,
  neighboringFaces,
  selectedFaceIndex,
) {
  let minX = Infinity,
    minY = Infinity,
    minZ = Infinity;
  let maxX = -Infinity,
    maxY = -Infinity,
    maxZ = -Infinity;

  const updateMinMax = (vertex) => {
    minX = Math.min(minX, vertex.x);
    minY = Math.min(minY, vertex.y);
    minZ = Math.min(minZ, vertex.z);
    maxX = Math.max(maxX, vertex.x);
    maxY = Math.max(maxY, vertex.y);
    maxZ = Math.max(maxZ, vertex.z);
  };

  const selectedFaceVertices = getFaceVerticesWorker(
    geometry,
    selectedFaceIndex,
  );
  selectedFaceVertices.forEach(updateMinMax);

  neighboringFaces.forEach((faceIndex) => {
    const faceVertices = getFaceVerticesWorker(geometry, faceIndex);
    faceVertices.forEach(updateMinMax);
  });

  return {
    width: maxX - minX,
    height: maxY - minY,
    depth: maxZ - minZ,
  };
}
