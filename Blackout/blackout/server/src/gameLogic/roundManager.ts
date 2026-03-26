import { GameRoom } from '../gameRoom';
import { Player } from '../types/index.d';

export class RoundManager {
    private gameRoom: GameRoom;
    private roundTime: number;
    private currentRound: number;
    private roundActive: boolean;
    private roundEndTime: number | null;

    constructor(gameRoom: GameRoom) {
        this.gameRoom = gameRoom;
        this.roundTime = 120; // Example round time in seconds
        this.currentRound = 0;
        this.roundActive = false;
        this.roundEndTime = null;
    }

    public startRound(): void {
        this.currentRound++;
        this.roundActive = true;
        this.roundEndTime = Date.now() + this.roundTime * 1000;
        this.gameRoom.notifyPlayers(`Round ${this.currentRound} has started!`);
    }

    public endRound(winningTeam: 'attackers' | 'defenders'): void {
        this.roundActive = false;
        this.roundEndTime = null;
        this.gameRoom.notifyPlayers(`${winningTeam} win Round ${this.currentRound}!`);
        // Additional logic for round end, like updating scores
    }

    public checkRoundStatus(): void {
        if (this.roundActive && Date.now() >= (this.roundEndTime as number)) {
            this.endRound('defenders'); // Example logic for round timeout
        }
    }

    public isRoundActive(): boolean {
        return this.roundActive;
    }

    public getCurrentRound(): number {
        return this.currentRound;
    }
}