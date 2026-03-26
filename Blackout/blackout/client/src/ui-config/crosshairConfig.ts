export interface CrosshairConfig {
    size: number;
    color: string;
    thickness: number;
    dynamic: boolean;
    expandOnMove: boolean;
    expandOnShoot: boolean;
}

export const defaultCrosshairConfig: CrosshairConfig = {
    size: 5,
    color: '#FFFFFF',
    thickness: 2,
    dynamic: true,
    expandOnMove: true,
    expandOnShoot: true,
};