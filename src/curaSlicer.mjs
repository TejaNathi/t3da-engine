// curaSlicer.mjs
import * as THREE from "three";
import CuraEngineInit from "./CuraEngine/build/Release/CuraEngine"; // adjust path to your WASM build

let enginePromise = null;

// Lazy-init the WASM engine once, reuse across multiple slice calls
async function getEngine() {
  if (!enginePromise) {
    globalThis.onCuraProgress = (p) => console.log("Progress:", p);
    globalThis.onCuraSliceInfo = (s) => {};
    globalThis.onCuraGcodeHeader = (h) => {};
    globalThis.onCuraEngineInfo = (i) => {};
    enginePromise = CuraEngineInit();
  }
  return enginePromise;
}

export function extractGeometryForCura(model, machineWidth = 220, machineDepth = 220) {
  const mesh = model.mesh;
  mesh.updateMatrixWorld(true);

  // Three.js: Y-up, bed centered at (0,0)
  // CuraEngine: Z-up, bed origin at corner (0,0) -> (machineWidth, machineDepth)
  const yUpToZUp = new THREE.Matrix4().makeRotationX(Math.PI / 2);
  const centerToCorner = new THREE.Matrix4().makeTranslation(machineWidth / 2, machineDepth / 2, 0);

  const finalMatrix = new THREE.Matrix4()
    .multiply(centerToCorner)
    .multiply(yUpToZUp)
    .multiply(mesh.matrixWorld);

  const geometry = mesh.geometry.clone();
  geometry.applyMatrix4(finalMatrix);

  const posAttr = geometry.getAttribute("position");
  const positions = new Float32Array(posAttr.array);

  let indices;
  if (geometry.index) {
    indices = new Uint32Array(geometry.index.array);
  } else {
    const vertexCount = posAttr.count;
    indices = new Uint32Array(vertexCount);
    for (let i = 0; i < vertexCount; i++) indices[i] = i;
  }

  geometry.dispose();
  return { positions, indices };
}

export async function sliceScene(loadedModels, printerSettings = {}) {
  if (loadedModels.length === 0) throw new Error("No parts loaded");

  const engine = await getEngine();

  // Write def files to MEMFS first so inheritance lookup works
  engine.FS.mkdir("/definitions");
  const [printerDefJson, extruderDefJson] = await Promise.all([
    fetch("./CuraEngine/definitions/fdmprinter.def.json").then((r) => r.text()),
    fetch("./CuraEngine/definitions/fdmextruder.def.json").then((r) => r.text()),
  ]);
  engine.FS.writeFile("/definitions/fdmprinter.def.json", printerDefJson);
  engine.FS.writeFile("/definitions/fdmextruder.def.json", extruderDefJson);

  // Load printer defaults first
  engine.loadPrinterDef(printerDefJson);

  // Printer-level settings
  engine.setPrinterSetting("machine_width", printerSettings.width ?? "220");
  engine.setPrinterSetting("machine_depth", printerSettings.depth ?? "220");
  engine.setPrinterSetting("machine_height", printerSettings.height ?? "250");
  engine.setPrinterSetting("layer_height", printerSettings.layerHeight ?? "0.2");
  engine.setPrinterSetting("layer_height_0", printerSettings.layerHeight ?? "0.2");
  engine.setPrinterSetting("infill_sparse_density", "15");
  engine.setPrinterSetting("top_layers", "4");
  engine.setPrinterSetting("bottom_layers", "4");

  const usedExtruders = [
    ...new Set(
      loadedModels.map((m) => (Number.isInteger(m.extruderIndex) ? m.extruderIndex : 0)),
    ),
  ].sort((a, b) => a - b);
  const maxExtruder = Math.max(...usedExtruders);
  console.log("usedExtruders:", usedExtruders, "maxExtruder:", maxExtruder);
  engine.setPrinterSetting("machine_extruder_count", String(maxExtruder + 1));
  engine.setExtruderCount(maxExtruder + 1);
  engine.setPrinterSetting("extruders_enabled_count", String(maxExtruder + 1));

  // Load extruder defs in order — 0 first, always
  for (let idx = 0; idx <= maxExtruder; idx++) {
    engine.loadExtruderDef(extruderDefJson, idx);
    engine.setExtruderSetting(idx, "extruder_nr", String(idx));
    engine.setExtruderSetting(idx, "machine_nozzle_size", "0.4");
    engine.setExtruderSetting(idx, "material_diameter", "1.75");
    engine.setExtruderSetting(idx, "material_print_temperature", idx === 0 ? "200" : "210");
  }

  const machineWidth = Number(printerSettings.width ?? 220);
  const machineDepth = Number(printerSettings.depth ?? 220);

  loadedModels.forEach((model) => {
    const { positions, indices } = extractGeometryForCura(model, machineWidth, machineDepth);
    const extruderIdx = model.extruderIndex ?? 0;
    engine.addMesh(positions, indices, extruderIdx);
  });

  const start = Date.now();
  const gcode = engine.slice();
  console.log(`Sliced in ${Date.now() - start}ms, ${gcode.length} bytes`);

  engine.reset();
  return gcode;
}

export function downloadGcode(gcode, filename = "output.gcode") {
  const blob = new Blob([gcode], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
