export interface Agent {
    name: string;
    model: string;
    skinVariants?: string[];
}

export const agents: Agent[] = [
    {
        name: "Shade",
        model: "shadeModel",
        skinVariants: ["shadeSkin1", "shadeSkin2"]
    },
    {
        name: "Vanta",
        model: "vantaModel",
        skinVariants: ["vantaSkin1", "vantaSkin2"]
    },
    {
        name: "Noir",
        model: "noirModel",
        skinVariants: ["noirSkin1", "noirSkin2"]
    },
    {
        name: "Eclipse",
        model: "eclipseModel",
        skinVariants: ["eclipseSkin1", "eclipseSkin2"]
    }
];