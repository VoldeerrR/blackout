import { Map } from '../types/index.d';

const alphaZone: Map = {
    name: 'Alpha Zone',
    theme: 'Industrial + Neon',
    bombSites: {
        A: {
            location: { x: 100, y: 0, z: 50 },
            description: 'A site located in the center of the industrial area, surrounded by crates for cover.'
        },
        B: {
            location: { x: -100, y: 0, z: -50 },
            description: 'B site is positioned near the neon-lit alley, providing multiple entry points.'
        }
    },
    layout: [
        { type: 'corridor', points: [{ x: 0, y: 0, z: 0 }, { x: 50, y: 0, z: 0 }] },
        { type: 'ramp', points: [{ x: 50, y: 0, z: 0 }, { x: 50, y: 0, z: 50 }] },
        { type: 'chokePoint', points: [{ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 50 }] }
    ],
    strategicPoints: [
        { name: 'Mid', location: { x: 0, y: 0, z: 25 }, description: 'Central area for control and flanking.' },
        { name: 'High Ground', location: { x: 50, y: 10, z: 50 }, description: 'Elevated position for better visibility.' }
    ]
};

export default alphaZone;