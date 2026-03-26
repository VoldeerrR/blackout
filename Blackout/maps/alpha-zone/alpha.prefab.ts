export const alphaZonePrefab = {
    name: "Alpha Zone",
    theme: "Industrial + Neon",
    bombSites: {
        A: {
            position: { x: 100, y: 0, z: 100 },
            description: "Main bomb site located in the industrial area."
        },
        B: {
            position: { x: -100, y: 0, z: -100 },
            description: "Secondary bomb site near the neon-lit corridors."
        }
    },
    layout: {
        corridors: [
            { start: { x: 50, y: 0, z: 50 }, end: { x: 150, y: 0, z: 50 } },
            { start: { x: -50, y: 0, z: -50 }, end: { x: -150, y: 0, z: -50 } }
        ],
        ramps: [
            { position: { x: 0, y: 0, z: 0 }, height: 5 },
            { position: { x: 50, y: 0, z: -50 }, height: 10 }
        ]
    },
    chokePoints: [
        { position: { x: 75, y: 0, z: 75 }, description: "Narrow corridor leading to bomb site A." },
        { position: { x: -75, y: 0, z: -75 }, description: "Choke point near bomb site B." }
    ]
};