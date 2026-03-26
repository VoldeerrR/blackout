import { CrosshairConfig } from '../ui-config/crosshairConfig';

class Crosshair {
    private config: CrosshairConfig;
    private element: HTMLDivElement;

    constructor(config: CrosshairConfig) {
        this.config = config;
        this.element = this.createCrosshairElement();
        document.body.appendChild(this.element);
    }

    private createCrosshairElement(): HTMLDivElement {
        const crosshair = document.createElement('div');
        crosshair.style.position = 'absolute';
        crosshair.style.width = `${this.config.size}px`;
        crosshair.style.height = `${this.config.size}px`;
        crosshair.style.backgroundColor = this.config.color;
        crosshair.style.border = `${this.config.thickness}px solid ${this.config.color}`;
        crosshair.style.transform = 'translate(-50%, -50%)';
        crosshair.style.pointerEvents = 'none';
        this.updatePosition(window.innerWidth / 2, window.innerHeight / 2);
        return crosshair;
    }

    public updatePosition(x: number, y: number): void {
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;
    }

    public updateConfig(newConfig: CrosshairConfig): void {
        this.config = newConfig;
        this.element.style.width = `${this.config.size}px`;
        this.element.style.height = `${this.config.size}px`;
        this.element.style.border = `${this.config.thickness}px solid ${this.config.color}`;
    }

    public remove(): void {
        document.body.removeChild(this.element);
    }
}

export default Crosshair;