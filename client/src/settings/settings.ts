export interface Settings {
    graphics: 'low' | 'medium' | 'high';
    sensitivity: number;
    crosshair: {
        size: number;
        color: string;
        thickness: number;
    };
    audio: {
        masterVolume: number;
        musicVolume: number;
        sfxVolume: number;
    };
}

export const defaultSettings: Settings = {
    graphics: 'medium',
    sensitivity: 1.0,
    crosshair: {
        size: 5,
        color: '#FFFFFF',
        thickness: 2,
    },
    audio: {
        masterVolume: 100,
        musicVolume: 80,
        sfxVolume: 80,
    },
};

export class SettingsManager {
    private settings: Settings;

    constructor() {
        this.settings = { ...defaultSettings };
    }

    getSettings(): Settings {
        return this.settings;
    }

    updateSettings(newSettings: Partial<Settings>): void {
        this.settings = { ...this.settings, ...newSettings };
    }

    resetSettings(): void {
        this.settings = { ...defaultSettings };
    }
}