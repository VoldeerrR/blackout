import { Skin } from '../types/index.d';

class SkinManager {
    private skins: Skin[] = [];
    private unlockedSkins: Set<string> = new Set();

    constructor() {
        this.loadSkins();
    }

    private loadSkins(): void {
        // Load skins from a predefined list or external source
        this.skins = [
            { id: 'default', name: 'Default Skin', description: 'The standard skin for weapons.', isUnlocked: true },
            { id: 'camo', name: 'Camouflage', description: 'A skin that blends in with the environment.', isUnlocked: false },
            { id: 'neon', name: 'Neon Glow', description: 'A vibrant skin that glows in the dark.', isUnlocked: false },
            // Add more skins as needed
        ];
    }

    public unlockSkin(skinId: string): void {
        const skin = this.skins.find(s => s.id === skinId);
        if (skin && !skin.isUnlocked) {
            skin.isUnlocked = true;
            this.unlockedSkins.add(skinId);
            // Optionally, save the unlocked skin to user profile or database
        }
    }

    public getAvailableSkins(): Skin[] {
        return this.skins.filter(skin => skin.isUnlocked);
    }

    public applySkin(weaponId: string, skinId: string): void {
        if (this.unlockedSkins.has(skinId)) {
            // Logic to apply the skin to the weapon
            console.log(`Applied ${skinId} to weapon ${weaponId}`);
        } else {
            console.log(`Skin ${skinId} is not unlocked.`);
        }
    }
}

export default new SkinManager();