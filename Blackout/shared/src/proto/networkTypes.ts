// This file defines network-related types used for communication between client and server.

export interface Player {
    id: string;
    name: string;
    team: 'attacker' | 'defender';
    position: { x: number; y: number; z: number };
    health: number;
    isAlive: boolean;
}

export interface GameState {
    players: Player[];
    round: number;
    bombPlanted: boolean;
    bombTimer: number;
    winningTeam: 'attacker' | 'defender' | null;
}

export interface Message {
    type: string;
    payload: any;
}

export interface ConnectMessage extends Message {
    type: 'connect';
    payload: {
        playerId: string;
        playerName: string;
    };
}

export interface DisconnectMessage extends Message {
    type: 'disconnect';
    payload: {
        playerId: string;
    };
}

export interface UpdatePlayerMessage extends Message {
    type: 'updatePlayer';
    payload: Player;
}

export interface GameStateUpdateMessage extends Message {
    type: 'gameStateUpdate';
    payload: GameState;
}

export interface BombActionMessage extends Message {
    type: 'bombAction';
    payload: {
        action: 'plant' | 'defuse';
        playerId: string;
    };
}