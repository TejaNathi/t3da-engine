import * as THREE from "three";
import lib3mf from "@3mfconsortium/lib3mf";

let lib3mfInstance = null;
let lib3mfPromise = null;
let wasmModule = null;

/**
 * Initializes and returns the lib3mf WASM wrapper and raw module.
 */
export async function initLib3mf() {
  if (lib3mfInstance) return { wrapper: lib3mfInstance, wasm: wasmModule };
  if (!lib3mfPromise) {
    lib3mfPromise = (async () => {
      try {
        const wasm = await lib3mf();
        wasmModule = wasm;
        lib3mfInstance = new wasm.CWrapper();
        console.log("lib3mf WASM loaded successfully!");
        return { wrapper: lib3mfInstance, wasm: wasmModule };
      } catch (err) {
        console.error("Failed to load lib3mf WASM:", err);
        lib3mfPromise = null;
        throw err;
      }
    })();
  }
  return lib3mfPromise;
}

/**
 * Parses a 3MF file arrayBuffer and returns an array of THREE.Mesh objects.
 * 
 * @param {ArrayBuffer} arrayBuffer - The raw file buffer.
 * @param {THREE.Material} defaultMaterial - Optional material to apply.
 * @returns {Promise<Array<THREE.Mesh>>}
 */
export async function parse3MF(arrayBuffer, defaultMaterial) {
  const { wrapper, wasm } = await initLib3mf();
  const model = wrapper.CreateModel();
  let reader = null;
  let meshIterator = null;
  
  try {
    reader = model.QueryReader("3mf");
    
    // Workaround Emscripten's unbound CInputVector IhEE (uint8_t vector) type error:
    // Write the binary data to Emscripten's in-memory virtual filesystem and read it as a file.
    const tempFileName = `/temp_${Math.random().toString(36).substring(2)}.3mf`;
    try {
      wasm.FS.writeFile(tempFileName, new Uint8Array(arrayBuffer));
      reader.ReadFromFile(tempFileName);
    } finally {
      try {
        wasm.FS.unlink(tempFileName);
      } catch (e) {
        console.warn("Failed to remove virtual temp 3MF file:", e);
      }
    }

    const material = defaultMaterial || new THREE.MeshNormalMaterial({ flatShading: true });

    // 1. First parse all mesh objects and keep their geometries mapped by resource ID
    const geometryMap = new Map();
    meshIterator = model.GetMeshObjects();
    while (meshIterator.MoveNext()) {
      const meshObj = meshIterator.GetCurrentMeshObject();
      try {
        const id = meshObj.GetUniqueResourceID();
        const vertCount = meshObj.GetVertexCount();
        const triCount = meshObj.GetTriangleCount();

        const vertices = new Float32Array(vertCount * 3);
        const indices = [];

        // Extract vertices (keep original 3MF X, Y, Z coordinates)
        for (let i = 0; i < vertCount; i++) {
          const v = meshObj.GetVertex(i);
          vertices[i * 3] = v.get_Coordinates0();
          vertices[i * 3 + 1] = v.get_Coordinates1();
          vertices[i * 3 + 2] = v.get_Coordinates2();
        }

        // Extract triangle indices
        for (let i = 0; i < triCount; i++) {
          const t = meshObj.GetTriangle(i);
          indices.push(t.get_Indices0(), t.get_Indices1(), t.get_Indices2());
        }

        // Build the Three.js BufferGeometry
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
        geometry.setIndex(indices);
        geometry.computeVertexNormals();

        geometryMap.set(id, geometry);
      } finally {
        if (meshObj) meshObj.delete();
      }
    }

    const meshesList = [];

    // 2. Iterate over build items to instantiate the geometries at their correct transforms
    let buildItemIterator = null;
    try {
      buildItemIterator = model.GetBuildItems();
      while (buildItemIterator.MoveNext()) {
        const buildItem = buildItemIterator.GetCurrent();
        try {
          const objectID = buildItem.GetObjectResourceID();
          const baseGeom = geometryMap.get(objectID);
          if (baseGeom) {
            // Clone geometry to apply specific build transform in 3MF coordinate space
            const geometry = baseGeom.clone();

            if (buildItem.HasObjectTransform()) {
              const transform = buildItem.GetObjectTransform();
              const matrix = new THREE.Matrix4().set(
                transform.get_Fields_0_0(), transform.get_Fields_0_1(), transform.get_Fields_0_2(), transform.get_Fields_3_0(),
                transform.get_Fields_1_0(), transform.get_Fields_1_1(), transform.get_Fields_1_2(), transform.get_Fields_3_1(),
                transform.get_Fields_2_0(), transform.get_Fields_2_1(), transform.get_Fields_2_2(), transform.get_Fields_3_2(),
                0,                          0,                          0,                          1
              );
              geometry.applyMatrix4(matrix);
            }

            // Rotate the geometry by -90 degrees around X axis to map Z-up (3MF) to Y-up (Three.js)
            // This is a pure rotation that preserves handedness/winding order, avoiding any lighting/inside-out distortion.
            geometry.rotateX(-Math.PI / 2);

            const mesh = new THREE.Mesh(geometry, material);
            meshesList.push(mesh);
          }
        } finally {
          if (buildItem) buildItem.delete();
        }
      }
    } catch (e) {
      console.warn("Failed to read build items, falling back to raw mesh definitions:", e);
    } finally {
      if (buildItemIterator) buildItemIterator.delete();
    }

    // 3. Fallback: if no build items were instantiated, return raw mesh definitions
    if (meshesList.length === 0) {
      geometryMap.forEach((geom) => {
        // Rotate raw geometry to map Z-up to Y-up
        geom.rotateX(-Math.PI / 2);
        const mesh = new THREE.Mesh(geom, material);
        meshesList.push(mesh);
      });
    } else {
      // Clean up the unused geometry definitions in map if build items were loaded
      geometryMap.forEach((geom) => {
        geom.dispose();
      });
    }

    return meshesList;
  } finally {
    if (reader) reader.delete();
    if (meshIterator) meshIterator.delete();
    if (model) model.delete();
  }
}
