import { EventEmitter } from 'events';

interface Bomb {
    planted: boolean;
    plantTime: number;
    defuseTime: number;
    explosionTime: number;
    explosionRadius: number;
    timer: NodeJS.Timeout | null;
}

class BombManager extends EventEmitter {
    private bomb: Bomb;

    constructor() {
        super();
        this.bomb = {
            planted: false,
            plantTime: 4000, // 4 seconds to plant
            defuseTime: 3000, // 3 seconds to defuse
            explosionTime: 0,
            explosionRadius: 300, // Example radius
            timer: null,
        };
    }

    plantBomb() {
        if (!this.bomb.planted) {
            this.bomb.planted = true;
            this.bomb.explosionTime = Date.now() + this.bomb.plantTime;
            this.timer = setTimeout(() => this.explode(), this.bomb.plantTime);
            this.emit('bombPlanted');
        }
    }

    defuseBomb() {
        if (this.bomb.planted) {
            this.bomb.timer = setTimeout(() => {
                this.bomb.planted = false;
                clearTimeout(this.timer!);
                this.emit('bombDefused');
            }, this.bomb.defuseTime);
        }
    }

    private explode() {
        if (this.bomb.planted) {
            this.emit('bombExploded');
            this.bomb.planted = false;
            clearTimeout(this.timer!);
        }
    }

    isBombPlanted(): boolean {
        return this.bomb.planted;
    }
}

export default BombManager;