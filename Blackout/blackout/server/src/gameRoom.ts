import { Player } from './types';
import { RoundManager } from './gameLogic/roundManager';

export class GameRoom {
    private players: Player[] = [];
    private roundManager: RoundManager;
    private isGameActive: boolean = false;

    constructor() {
        this.roundManager = new RoundManager();
    }

    public addPlayer(player: Player): void {
        this.players.push(player);
    }

    public removePlayer(playerId: string): void {
        this.players = this.players.filter(player => player.id !== playerId);
    }

    public startGame(): void {
        this.isGameActive = true;
        this.roundManager.startRound();
    }

    public endGame(): void {
        this.isGameActive = false;
        this.roundManager.endRound();
    }

    public getPlayers(): Player[] {
        return this.players;
    }

    public isGameInProgress(): boolean {
        return this.isGameActive;
    }
}