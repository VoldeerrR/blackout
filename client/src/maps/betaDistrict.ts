// This file defines the layout and properties of the Beta District map.

export const betaDistrictMap = {
    name: "Beta District",
    theme: "Urban Night City",
    layout: {
        bombSites: {
            A: { position: { x: 100, y: 0, z: 100 }, radius: 10 },
            B: { position: { x: -100, y: 0, z: -100 }, radius: 10 }
        },
        mid: {
            position: { x: 0, y: 0, z: 0 },
            flankingRoutes: [
                { start: { x: -50, y: 0, z: 50 }, end: { x: -100, y: 0, z: 100 } },
                { start: { x: 50, y: 0, z: -50 }, end: { x: 100, y: 0, z: -100 } }
            ]
        },
        corridors: [
            { start: { x: 0, y: 0, z: 50 }, end: { x: 0, y: 0, z: 100 } },
            { start: { x: 0, y: 0, z: -50 }, end: { x: 0, y: 0, z: -100 } }
        ],
        chokePoints: [
            { position: { x: 0, y: 0, z: 75 }, width: 5 },
            { position: { x: 0, y: 0, z: -75 }, width: 5 }
        ]
    },
    features: {
        lighting: "Neon",
        verticality: true,
        accessibility: {
            spawnPoints: [
                { position: { x: 0, y: 0, z: -150 } },
                { position: { x: 0, y: 0, z: 150 } }
            ]
        }
    }
};