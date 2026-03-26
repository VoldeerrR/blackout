export interface DamageInfo {
    attackerId: string;
    victimId: string;
    damage: number;
    headshot: boolean;
    armorPenetration: number;
}

export function calculateDamage(damageInfo: DamageInfo, victimHealth: number, victimArmor: number): number {
    let damageDealt = damageInfo.damage;

    if (damageInfo.headshot) {
        damageDealt *= 2; // Headshot multiplier
    }

    if (victimArmor > 0) {
        const armorDamage = Math.min(victimArmor, damageDealt);
        victimArmor -= armorDamage;
        damageDealt -= armorDamage * (1 - damageInfo.armorPenetration);
    }

    return Math.max(victimHealth - damageDealt, 0);
}