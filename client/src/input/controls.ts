export class Controls {
    private keys: { [key: string]: boolean } = {};

    constructor() {
        this.initializeControls();
    }

    private initializeControls() {
        window.addEventListener('keydown', (event) => {
            this.keys[event.code] = true;
        });

        window.addEventListener('keyup', (event) => {
            this.keys[event.code] = false;
        });
    }

    public isKeyPressed(key: string): boolean {
        return this.keys[key] || false;
    }

    public getMovementDirection(): { x: number; y: number } {
        const direction = { x: 0, y: 0 };

        if (this.isKeyPressed('KeyW')) {
            direction.y = 1; // Move forward
        }
        if (this.isKeyPressed('KeyS')) {
            direction.y = -1; // Move backward
        }
        if (this.isKeyPressed('KeyA')) {
            direction.x = -1; // Move left
        }
        if (this.isKeyPressed('KeyD')) {
            direction.x = 1; // Move right
        }

        return direction;
    }

    public isSprinting(): boolean {
        return this.isKeyPressed('ShiftLeft');
    }

    public isCrouching(): boolean {
        return this.isKeyPressed('ControlLeft');
    }

    public isJumping(): boolean {
        return this.isKeyPressed('Space');
    }

    public isShooting(): boolean {
        return this.isKeyPressed('Mouse0'); // Left mouse button
    }

    public isReloading(): boolean {
        return this.isKeyPressed('KeyR');
    }

    public isPlanting(): boolean {
        return this.isKeyPressed('E');
    }

    public isInteracting(): boolean {
        return this.isKeyPressed('F');
    }
}