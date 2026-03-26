import { PlayerStats } from '../../types/index.d';

class HUD {
    private healthElement: HTMLElement;
    private ammoElement: HTMLElement;
    private scoreboardElement: HTMLElement;

    constructor() {
        this.healthElement = document.getElementById('health')!;
        this.ammoElement = document.getElementById('ammo')!;
        this.scoreboardElement = document.getElementById('scoreboard')!;
    }

    public updateStats(playerStats: PlayerStats): void {
        this.healthElement.innerText = `Health: ${playerStats.health}`;
        this.ammoElement.innerText = `Ammo: ${playerStats.ammo}`;
        this.updateScoreboard(playerStats.scoreboard);
    }

    private updateScoreboard(scoreboard: Record<string, number>): void {
        this.scoreboardElement.innerHTML = '';
        for (const player in scoreboard) {
            const scoreLine = document.createElement('div');
            scoreLine.innerText = `${player}: ${scoreboard[player]}`;
            this.scoreboardElement.appendChild(scoreLine);
        }
    }
}

export default HUD;