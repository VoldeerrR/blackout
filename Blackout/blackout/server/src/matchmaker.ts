import { Server } from "socket.io";
import { Player } from "./types/index.d";
import { Lobby } from "./lobby";

export class Matchmaker {
    private lobbies: Lobby[] = [];
    private io: Server;

    constructor(io: Server) {
        this.io = io;
    }

    public createLobby(player: Player): Lobby {
        const lobby = new Lobby(this.io);
        lobby.addPlayer(player);
        this.lobbies.push(lobby);
        return lobby;
    }

    public findLobby(player: Player): Lobby | null {
        for (const lobby of this.lobbies) {
            if (lobby.canJoin(player)) {
                lobby.addPlayer(player);
                return lobby;
            }
        }
        return null;
    }

    public removeLobby(lobby: Lobby): void {
        this.lobbies = this.lobbies.filter(l => l !== lobby);
    }

    public getLobbies(): Lobby[] {
        return this.lobbies;
    }
}