import { Player } from '../types/index.d';

export class AccuracySystem {
    private static readonly BASE_ACCURACY = 0.5; // Base accuracy when standing still
    private static readonly MOVEMENT_PENALTY = 0.2; // Penalty for moving
    private static readonly JUMP_PENALTY = 0.4; // Penalty for jumping
    private static readonly CROUCH_BONUS = 0.1; // Bonus for crouching

    public static calculateAccuracy(player: Player): number {
        let accuracy = this.BASE_ACCURACY;

        if (player.isMoving) {
            accuracy -= this.MOVEMENT_PENALTY;
        }

        if (player.isJumping) {
            accuracy -= this.JUMP_PENALTY;
        }

        if (player.isCrouching) {
            accuracy += this.CROUCH_BONUS;
        }

        return Math.max(0, Math.min(1, accuracy)); // Clamp between 0 and 1
    }
}