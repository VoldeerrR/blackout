export class Recoil {
    private recoilPattern: number[];
    private currentRecoil: number;

    constructor() {
        this.recoilPattern = [0, 1, 2, 1, 0]; // Example recoil pattern
        this.currentRecoil = 0;
    }

    public applyRecoil(shotCount: number): number {
        if (shotCount < this.recoilPattern.length) {
            this.currentRecoil += this.recoilPattern[shotCount];
        }
        return this.currentRecoil;
    }

    public resetRecoil(): void {
        this.currentRecoil = 0;
    }
}