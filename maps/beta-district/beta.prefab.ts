import { MapPrefab } from '../../client/src/types/index.d';

const betaDistrict: MapPrefab = {
    name: 'Beta District',
    theme: 'Urban Night City',
    layout: {
        bombSites: {
            A: { position: { x: 100, y: 0, z: 100 }, radius: 10 },
            B: { position: { x: -100, y: 0, z: -100 }, radius: 10 },
        },
        corridors: [
            { start: { x: 50, y: 0, z: 50 }, end: { x: 150, y: 0, z: 50 } },
            { start: { x: -50, y: 0, z: -50 }, end: { x: -150, y: 0, z: -50 } },
        ],
        verticalRamps: [
            { position: { x: 0, y: 0, z: 0 }, height: 5 },
        ],
        chokePoints: [
            { position: { x: 75, y: 0, z: 75 }, width: 5 },
        ],
    },
    features: {
        lighting: 'Neon',
        accessibility: 'Balanced layout for competitive play',
    },
};

export default betaDistrict;