// This file handles player movement mechanics, including acceleration and friction.

class PlayerMovement {
    constructor() {
        this.speed = 5; // Base speed
        this.acceleration = 0.1; // Acceleration rate
        this.friction = 0.05; // Friction rate
        this.velocity = { x: 0, y: 0 }; // Current velocity
    }

    updateMovement(input) {
        // Update velocity based on input
        if (input.up) {
            this.velocity.y -= this.acceleration;
        }
        if (input.down) {
            this.velocity.y += this.acceleration;
        }
        if (input.left) {
            this.velocity.x -= this.acceleration;
        }
        if (input.right) {
            this.velocity.x += this.acceleration;
        }

        // Apply friction
        this.velocity.x *= (1 - this.friction);
        this.velocity.y *= (1 - this.friction);

        // Limit speed
        const speed = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2);
        if (speed > this.speed) {
            const ratio = this.speed / speed;
            this.velocity.x *= ratio;
            this.velocity.y *= ratio;
        }
    }

    getPosition(deltaTime) {
        // Calculate new position based on velocity and deltaTime
        return {
            x: this.velocity.x * deltaTime,
            y: this.velocity.y * deltaTime,
        };
    }
}

export default PlayerMovement;