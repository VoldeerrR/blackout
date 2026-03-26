import { Howl, Howler } from 'howler';

class AudioManager {
    private sounds: { [key: string]: Howl } = {};

    constructor() {
        Howler.volume(1.0); // Set default volume
    }

    loadSound(key: string, src: string) {
        this.sounds[key] = new Howl({
            src: [src],
            html5: true, // Use HTML5 Audio for streaming
        });
    }

    playSound(key: string) {
        if (this.sounds[key]) {
            this.sounds[key].play();
        }
    }

    stopSound(key: string) {
        if (this.sounds[key]) {
            this.sounds[key].stop();
        }
    }

    setVolume(volume: number) {
        Howler.volume(volume);
    }

    mute() {
        Howler.mute(true);
    }

    unmute() {
        Howler.mute(false);
    }
}

export const audioManager = new AudioManager();