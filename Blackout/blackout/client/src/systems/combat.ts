import { Player } from '../types/index.d';
import { Weapon } from '../weapons/index';

export class CombatSystem {
    private players: Player[];
    private weapons: Weapon[];

    constructor(players: Player[], weapons: Weapon[]) {
        this.players = players;
        this.weapons = weapons;
    }

    shoot(playerId: string, weaponId: string, targetId: string): void {
        const player = this.players.find(p => p.id === playerId);
        const target = this.players.find(p => p.id === targetId);
        const weapon = this.weapons.find(w => w.id === weaponId);

        if (!player || !target || !weapon) return;

        const damage = this.calculateDamage(player, weapon, target);
        this.applyDamage(target, damage);
    }

    private calculateDamage(player: Player, weapon: Weapon, target: Player): number {
        let baseDamage = weapon.damage;
        if (this.isHeadshot(player, target)) {
            baseDamage *= weapon.headshotMultiplier;
        }
        return baseDamage;
    }

    private isHeadshot(player: Player, target: Player): boolean {
        // Logic to determine if the shot is a headshot
        return Math.random() < 0.2; // Placeholder for headshot logic
    }

    private applyDamage(target: Player, damage: number): void {
        target.health -= damage;
        if (target.health <= 0) {
            this.handlePlayerDeath(target);
        }
    }

    private handlePlayerDeath(target: Player): void {
        // Logic for handling player death
        console.log(`${target.name} has been eliminated.`);
    }
}