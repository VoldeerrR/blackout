export interface Weapon {
    id: string;
    name: string;
    damage: number;
    fireRate: number;
    magazineSize: number;
    reloadTime: number;
    range: number;
}

export const weapons: Weapon[] = [
    {
        id: 'pistol',
        name: 'Standard Pistol',
        damage: 30,
        fireRate: 0.5,
        magazineSize: 12,
        reloadTime: 1.5,
        range: 50,
    },
    {
        id: 'rifle',
        name: 'Assault Rifle',
        damage: 25,
        fireRate: 0.1,
        magazineSize: 30,
        reloadTime: 2.0,
        range: 100,
    },
    {
        id: 'sniper',
        name: 'Sniper Rifle',
        damage: 90,
        fireRate: 1.0,
        magazineSize: 5,
        reloadTime: 3.0,
        range: 200,
    },
];