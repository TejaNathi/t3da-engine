/**
 * nfpPlacer.mjs
 * Irregular shape 2D bin packing / auto-arrangement.
 *
 * Improvements over v1:
 *  1. NFP boundary candidates — placement positions sampled from the
 *     Minkowski-sum boundary of each placed item, giving exact tight-contact
 *     positions instead of a brute-force grid.
 *  2. Hard bed boundary — candidates that fall outside the bed are rejected
 *     before scoring (no more soft penalty that can be outweighed).
 *  3. Convex hull preprocessing — footprints are hull-ified before SAT and
 *     NFP computation so concave inputs don't cause false collision misses.
 *  4. Grid fallback — when no placed items exist yet the first item is still
 *     placed via a small concentric grid (only for item #1).
 *
 * Public API is 100% unchanged:
 *   new NfpPlacer(bedSize, spacing)
 *   placer.arrange(items)  →  [{ id, x, y, rotation, polygon }, ...]
 *
 * Each item passed to arrange() must have:
 *   { id: any, footprint: Array<{ x, y }> }
 */

import NfpCore from "./wasm/nfp_core.js";

export let wasmInstance = null;
let wasmPromise = null;

export async function initWasm() {
  if (wasmInstance) return wasmInstance;
  if (!wasmPromise) {
    const locateFile = (path) => {
      if (path.endsWith(".wasm")) {
        return new URL("./wasm/nfp_core.wasm", import.meta.url).href;
      }
      return path;
    };
    wasmPromise = NfpCore({ locateFile }).then((instance) => {
      wasmInstance = instance;
      console.log("NfpCore WASM loaded successfully!");
      return wasmInstance;
    }).catch((err) => {
      console.error("Failed to initialize WASM nfp_core:", err);
      wasmInstance = null;
    });
  }
  return wasmPromise;
}

function flattenPolygon(poly) {
  const flat = [];
  for (let i = 0; i < poly.length; i++) {
    flat.push(poly[i].x, poly[i].y);
  }
  return flat;
}

function toWasmVectorDouble(flatArr, wasm) {
  const vec = new wasm.VectorDouble();
  for (let i = 0; i < flatArr.length; i++) {
    vec.push_back(flatArr[i]);
  }
  return vec;
}

function toWasmVectorInt(arr, wasm) {
  const vec = new wasm.VectorInt();
  for (let i = 0; i < arr.length; i++) {
    vec.push_back(arr[i]);
  }
  return vec;
}

function toJsPoints(vec) {
  const points = [];
  const size = vec.size();
  for (let i = 0; i < size; i += 2) {
    points.push({ x: vec.get(i), y: vec.get(i + 1) });
  }
  return points;
}


// ---------------------------------------------------------------------------
// Geometry helpers (all exported — same as before so callers don't break)
// ---------------------------------------------------------------------------

/** Separating Axis Theorem collision test for two convex polygons. */
export function polygonsOverlap(polyA, polyB, spacing = 0) {
  if (wasmInstance) {
    const flatA = flattenPolygon(polyA);
    const flatB = flattenPolygon(polyB);
    const wasmA = toWasmVectorDouble(flatA, wasmInstance);
    const wasmB = toWasmVectorDouble(flatB, wasmInstance);
    const overlap = wasmInstance.polygonsOverlapFlat(wasmA, wasmB, spacing);
    wasmA.delete();
    wasmB.delete();
    return overlap;
  }
  const polygons = [polyA, polyB];
  for (let pi = 0; pi < polygons.length; pi++) {
    const polygon = polygons[pi];
    for (let i1 = 0; i1 < polygon.length; i1++) {
      const i2 = (i1 + 1) % polygon.length;
      const p1 = polygon[i1];
      const p2 = polygon[i2];
      const normal = { x: -(p2.y - p1.y), y: p2.x - p1.x };
      const len = Math.sqrt(normal.x * normal.x + normal.y * normal.y);
      if (len === 0) continue;
      normal.x /= len;
      normal.y /= len;

      let minA = Infinity,
        maxA = -Infinity;
      for (const v of polyA) {
        const p = normal.x * v.x + normal.y * v.y;
        if (p < minA) minA = p;
        if (p > maxA) maxA = p;
      }
      let minB = Infinity,
        maxB = -Infinity;
      for (const v of polyB) {
        const p = normal.x * v.x + normal.y * v.y;
        if (p < minB) minB = p;
        if (p > maxB) maxB = p;
      }
      if (maxA + spacing < minB || maxB + spacing < minA) return false;
    }
  }
  return true;
}

/** Centroid (average of vertices). */
export function getPolygonCentroid(points) {
  let x = 0,
    y = 0;
  for (const p of points) {
    x += p.x;
    y += p.y;
  }
  return { x: x / points.length, y: y / points.length };
}

/** Translate a polygon by (dx, dy). */
export function translatePolygon(points, dx, dy) {
  return points.map((p) => ({ x: p.x + dx, y: p.y + dy }));
}

/** Rotate a polygon around the origin. */
export function rotatePolygon(points, angleRad) {
  const cos = Math.cos(angleRad);
  const sin = Math.sin(angleRad);
  return points.map((p) => ({
    x: p.x * cos - p.y * sin,
    y: p.x * sin + p.y * cos,
  }));
}

/** Axis-aligned bounding box. */
export function getPolygonBounds(points) {
  let minX = Infinity,
    maxX = -Infinity;
  let minY = Infinity,
    maxY = -Infinity;
  for (const p of points) {
    if (p.x < minX) minX = p.x;
    if (p.x > maxX) maxX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.y > maxY) maxY = p.y;
  }
  return { minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY };
}

// ---------------------------------------------------------------------------
// NEW helpers
// ---------------------------------------------------------------------------

/**
 * Convex hull via Andrew's monotone chain.
 * Returns CCW-ordered hull vertices.
 * Used to make SAT and NFP correct for concave footprints.
 */
export function convexHull(points) {
  if (wasmInstance) {
    const flatPoints = flattenPolygon(points);
    const wasmIn = toWasmVectorDouble(flatPoints, wasmInstance);
    const wasmOut = wasmInstance.convexHullFlat(wasmIn);
    const result = toJsPoints(wasmOut);
    wasmIn.delete();
    wasmOut.delete();
    return result;
  }
  if (points.length <= 3) return [...points];
  const pts = [...points].sort((a, b) => (a.x !== b.x ? a.x - b.x : a.y - b.y));
  const cross = (o, a, b) =>
    (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);

  const lower = [];
  for (const p of pts) {
    while (
      lower.length >= 2 &&
      cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0
    )
      lower.pop();
    lower.push(p);
  }
  const upper = [];
  for (let i = pts.length - 1; i >= 0; i--) {
    const p = pts[i];
    while (
      upper.length >= 2 &&
      cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0
    )
      upper.pop();
    upper.push(p);
  }
  upper.pop();
  lower.pop();
  return lower.concat(upper);
}

export function simplifyPolygon(points, maxPoints = 24) {
  if (points.length <= maxPoints) return points;
  const simplified = [];
  const step = points.length / maxPoints;
  for (let i = 0; i < maxPoints; i++) {
    const idx = Math.floor(i * step);
    simplified.push(points[idx]);
  }
  return simplified;
}

/**
 * Minkowski sum of two convex polygons A and B.
 * The NFP of A relative to B (i.e., positions where B's reference point
 * can be placed so B touches A without overlapping) is computed as:
 *   NFP = A ⊕ (-B)
 * where -B means B reflected through the origin.
 *
 * Algorithm: merge edge vectors of both polygons sorted by angle, then
 * trace the resulting polygon. O(n + m).
 */
function minkowskiSum(polyA, polyB) {
  if (wasmInstance) {
    const flatA = flattenPolygon(polyA);
    const flatB = flattenPolygon(polyB);
    const wasmA = toWasmVectorDouble(flatA, wasmInstance);
    const wasmB = toWasmVectorDouble(flatB, wasmInstance);
    const wasmOut = wasmInstance.minkowskiSumFlat(wasmA, wasmB);
    const result = toJsPoints(wasmOut);
    wasmA.delete();
    wasmB.delete();
    wasmOut.delete();
    return result;
  }
  // Reflect B through origin to get -B
  const negB = polyB.map((p) => ({ x: -p.x, y: -p.y }));

  // Reorder both polygons to start at bottom-most (then left-most) vertex
  const startIdx = (poly) => {
    let idx = 0;
    for (let i = 1; i < poly.length; i++) {
      if (
        poly[i].y < poly[idx].y ||
        (poly[i].y === poly[idx].y && poly[i].x < poly[idx].x)
      )
        idx = i;
    }
    return idx;
  };

  const reorder = (poly) => {
    const s = startIdx(poly);
    return [...poly.slice(s), ...poly.slice(0, s)];
  };

  const A = reorder(polyA);
  const B = reorder(negB);

  const edgeAngle = (poly, i) => {
    const j = (i + 1) % poly.length;
    return Math.atan2(poly[j].y - poly[i].y, poly[j].x - poly[i].x);
  };

  const result = [];
  let ia = 0,
    ib = 0;
  // Start from the bottom-most point of A + bottom-most point of -B
  let cur = { x: A[0].x + B[0].x, y: A[0].y + B[0].y };

  const na = A.length,
    nb = B.length;

  while (ia < na || ib < nb) {
    result.push({ ...cur });

    const angleA = ia < na ? edgeAngle(A, ia % na) : Infinity;
    const angleB = ib < nb ? edgeAngle(B, ib % nb) : Infinity;

    if (Math.abs(angleA - angleB) < 1e-10) {
      // Both edges have the same angle — advance both
      const eax = A[(ia + 1) % na].x - A[ia % na].x;
      const eay = A[(ia + 1) % na].y - A[ia % na].y;
      cur = { x: cur.x + eax, y: cur.y + eay };
      ia++;
      ib++;
    } else if (angleA <= angleB) {
      const eax = A[(ia + 1) % na].x - A[ia % na].x;
      const eay = A[(ia + 1) % na].y - A[ia % na].y;
      cur = { x: cur.x + eax, y: cur.y + eay };
      ia++;
    } else {
      const ebx = B[(ib + 1) % nb].x - B[ib % nb].x;
      const eby = B[(ib + 1) % nb].y - B[ib % nb].y;
      cur = { x: cur.x + ebx, y: cur.y + eby };
      ib++;
    }
  }

  return result;
}

/**
 * Sample points densely along each edge of a polygon.
 * `step` is the maximum spacing between samples in the same units as coords.
 */
function samplePolygonEdges(poly, step) {
  const pts = [];
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.sqrt(dx * dx + dy * dy);
    const steps = Math.max(1, Math.ceil(len / step));
    for (let s = 0; s < steps; s++) {
      const t = s / steps;
      pts.push({ x: a.x + dx * t, y: a.y + dy * t });
    }
  }
  return pts;
}

/** Returns true if the entire polygon fits within the square bed (centred at origin). */
function isInsideBed(poly, halfBed) {
  for (const p of poly) {
    if (p.x < -halfBed || p.x > halfBed || p.y < -halfBed || p.y > halfBed)
      return false;
  }
  return true;
}

// ---------------------------------------------------------------------------
// NfpPlacer
// ---------------------------------------------------------------------------

export class NfpPlacer {
  /**
   * @param {number} bedSize  - Side length of the square build plate (mm).
   *                            Bed is centred at origin: [-bedSize/2, bedSize/2].
   * @param {number} spacing  - Minimum gap between parts (mm).
   * @param {number} edgeStep - Sampling resolution along NFP edges (mm).
   *                            Smaller = denser candidates = better packing but slower.
   *                            Default 1.5 mm is a good balance for typical slicers.
   */
  constructor(bedSize = 100, spacing = 2, edgeStep = 1.5) {
    this.bedSize = bedSize;
    this.spacing = spacing;
    this.edgeStep = edgeStep;
  }

  /**
   * Arrange items on the bed.
   *
   * @param {Array<{ id: any, footprint: Array<{x,y}> }>} items
   * @returns {Array<{ id, x, y, rotation, polygon }>}
   */
  arrange(items) {
    const placedItems = [];

    // FFD: sort largest bounding-box area first
    const sortedItems = [...items]
      .map((item) => {
        const bounds = getPolygonBounds(item.footprint);
        return { ...item, area: bounds.width * bounds.height };
      })
      .sort((a, b) => b.area - a.area);

    // Precompute convex hulls once per item (rotation is applied per-attempt)
    const hulledItems = sortedItems.map((item) => {
      const hull = convexHull(item.footprint);
      const simplifiedHull = simplifyPolygon(hull, 24);
      return {
        ...item,
        hull: simplifiedHull,
      };
    });

    const rotations = [
      0,
      Math.PI / 4,
      Math.PI / 2,
      (3 * Math.PI) / 4,
      Math.PI,
      (5 * Math.PI) / 4,
      (3 * Math.PI) / 2,
      (7 * Math.PI) / 4,
    ];

    const halfBed = this.bedSize / 2;

    for (const item of hulledItems) {
      if (wasmInstance) {
        // Flatten footprint
        const flatFootprint = flattenPolygon(item.hull);

        // Gather all placed items flat data
        const flatPlaced = [];
        const placedSizes = [];
        const placedCentroids = [];

        for (const placed of placedItems) {
          placedSizes.push(placed.polygon.length);
          const cCentroid = getPolygonCentroid(placed.polygon);
          placedCentroids.push(cCentroid.x, cCentroid.y);
          for (const p of placed.polygon) {
            flatPlaced.push(p.x, p.y);
          }
        }

        // Convert to WASM vectors
        const wasmFootprint = toWasmVectorDouble(flatFootprint, wasmInstance);
        const wasmPlaced = toWasmVectorDouble(flatPlaced, wasmInstance);
        const wasmSizes = toWasmVectorInt(placedSizes, wasmInstance);
        const wasmCentroids = toWasmVectorDouble(placedCentroids, wasmInstance);

        // Call WASM arrangement solver
        const result = wasmInstance.arrangeSingleItem(
          wasmFootprint,
          wasmPlaced,
          wasmSizes,
          wasmCentroids,
          this.bedSize,
          this.spacing,
          this.edgeStep
        );

        // Free WASM memory
        wasmFootprint.delete();
        wasmPlaced.delete();
        wasmSizes.delete();
        wasmCentroids.delete();

        if (result.success) {
          const finalRotated = rotatePolygon(item.hull, result.rotation);
          const finalPlacedPoly = translatePolygon(
            finalRotated,
            result.x,
            result.y
          );

          placedItems.push({
            id: item.id,
            x: result.x,
            y: result.y,
            rotation: result.rotation,
            polygon: finalPlacedPoly,
          });
          continue; // Move to next item
        }
      }

      // JS Fallback
      let bestPos = null;
      let bestScore = Infinity;
      let bestRotation = 0;

      for (const rot of rotations) {
        const rotatedHull = rotatePolygon(item.hull, rot);

        // Generate candidates for this rotation
        const candidates = this._generateCandidates(rotatedHull, placedItems);

        for (const cand of candidates) {
          const candidatePoly = translatePolygon(rotatedHull, cand.x, cand.y);

          // Hard boundary check — reject before any collision work
          if (!isInsideBed(candidatePoly, halfBed)) continue;

          // Collision check against all placed items (with spacing)
          let overlaps = false;
          for (const placed of placedItems) {
            if (polygonsOverlap(candidatePoly, placed.polygon, this.spacing)) {
              overlaps = true;
              break;
            }
          }
          if (overlaps) continue;

          // Score: minimise distance to centre + cling to placed items
          const distToCenter = Math.sqrt(cand.x * cand.x + cand.y * cand.y);

          let minDistToOthers = 0;
          if (placedItems.length > 0) {
            minDistToOthers = Infinity;
            const cCentroid = getPolygonCentroid(candidatePoly);
            for (const placed of placedItems) {
              const pCentroid = getPolygonCentroid(placed.polygon);
              const dx = cCentroid.x - pCentroid.x;
              const dy = cCentroid.y - pCentroid.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < minDistToOthers) minDistToOthers = dist;
            }
          }

          const score = distToCenter * 0.3 + minDistToOthers * 0.7;

          if (score < bestScore) {
            bestScore = score;
            bestPos = cand;
            bestRotation = rot;
          }
        }
      }

      // Fallback: if nothing was valid, try placing at origin
      // (can happen if the item is larger than the bed)
      const finalPos = bestPos || { x: 0, y: 0 };
      const finalRotated = rotatePolygon(item.hull, bestRotation);
      const finalPlacedPoly = translatePolygon(
        finalRotated,
        finalPos.x,
        finalPos.y,
      );

      placedItems.push({
        id: item.id,
        x: finalPos.x,
        y: finalPos.y,
        rotation: bestRotation,
        polygon: finalPlacedPoly,
      });
    }

    return placedItems;
  }

  /**
   * Generate placement candidates for `newHull` given already-placed items.
   *
   * Strategy:
   *  - For each placed item, compute the NFP (Minkowski sum of placed hull + reflected newHull).
   *    The NFP boundary contains all positions where newHull's centroid can be placed
   *    such that newHull exactly touches that placed item.
   *  - Sample points densely along each NFP edge.
   *  - Also add a small concentric grid around the origin for the first item
   *    and as a sparse fallback.
   *
   * @param {Array<{x,y}>} newHull  - Convex hull of the item being placed (already rotated).
   * @param {Array<object>} placedItems - Already-placed items with `.polygon` field.
   * @returns {Array<{x,y}>} candidate reference positions.
   */
  _generateCandidates(newHull, placedItems) {
    const candidates = [];

    if (placedItems.length === 0) {
      // First item: concentric grid from centre outward (small, fast)
      const step = Math.max(3, this.edgeStep * 2);
      const maxR = this.bedSize / 2;
      candidates.push({ x: 0, y: 0 });
      for (let r = step; r <= maxR; r += step) {
        for (let x = -r; x <= r; x += step) {
          candidates.push({ x, y: -r });
          candidates.push({ x, y: r });
        }
        for (let y = -r + step; y < r; y += step) {
          candidates.push({ x: -r, y });
          candidates.push({ x: r, y });
        }
      }
      return candidates;
    }

    // Compute the centroid offset of newHull (its local reference point)
    const newCentroid = getPolygonCentroid(newHull);

    for (const placed of placedItems) {
      // NFP = Minkowski sum of placed polygon and (-newHull)
      // This gives the locus of newHull's reference point such that
      // it touches `placed` without overlapping.
      let nfp;
      try {
        nfp = minkowskiSum(placed.polygon, newHull);
      } catch (e) {
        // Degenerate case — skip this placed item's NFP
        continue;
      }

      // Sample along the NFP boundary
      const edgePts = samplePolygonEdges(nfp, this.edgeStep);

      // Each point on the NFP is a position for newHull's bottom-most vertex.
      // We need the centroid offset to get the position for centroid-anchored placement.
      // Actually: the Minkowski sum gives absolute positions directly usable as (x, y)
      // for placing the reference vertex. We want (x, y) for the centroid, so offset.
      for (const pt of edgePts) {
        candidates.push({
          x: pt.x - newCentroid.x,
          y: pt.y - newCentroid.y,
        });
      }
    }

    // Sparse fallback grid in case NFP candidates all fail (e.g. all outside bed)
    // This is intentionally coarse — just a safety net.
    const fallbackStep = Math.max(8, this.bedSize / 20);
    const halfBed = this.bedSize / 2;
    for (let x = -halfBed; x <= halfBed; x += fallbackStep) {
      for (let y = -halfBed; y <= halfBed; y += fallbackStep) {
        candidates.push({ x, y });
      }
    }

    return candidates;
  }
}
