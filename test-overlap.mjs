import { NfpPlacer } from './src/nfpPlacer.mjs';

// Let's create two shapes of size ~35x35 and ~40x40
// Shape 1 (blade-like: curved)
const footprint0 = [
    { x: -15, y: -5 },
    { x: 15, y: -5 },
    { x: 10, y: 15 },
    { x: -10, y: 15 }
];

// Shape 2 (blocky: square-like)
const footprint1 = [
    { x: -20, y: -20 },
    { x: 20, y: -20 },
    { x: 20, y: 20 },
    { x: -20, y: 20 }
];

const placer = new NfpPlacer(100, 3);
const items = [
    { id: 0, footprint: footprint0 },
    { id: 1, footprint: footprint1 }
];

const results = placer.arrange(items);
console.log("Placer Results:", JSON.stringify(results, null, 2));
