import { Server } from "socket.io";
import { Player } from "./types/index.d";
import { Matchmaker } from "./matchmaker";

class Lobby {
    private players: Player[] = [];
    private matchmaker: Matchmaker;

    constructor(private io: Server) {
        this.matchmaker = new Matchmaker(this.io);
    }

    public addPlayer(player: Player) {
        this.players.push(player);
        this.io.emit("playerJoined", player);
        this.checkForMatch();
    }

    public removePlayer(playerId: string) {
        this.players = this.players.filter(player => player.id !== playerId);
        this.io.emit("playerLeft", playerId);
    }

    private checkForMatch() {
        if (this.players.length >= 10) {
            const teams = this.matchmaker.createTeams(this.players);
            this.startMatch(teams);
        }
    }

    private startMatch(teams: { attackers: Player[], defenders: Player[] }) {
        this.io.emit("matchStarted", teams);
        // Additional logic to transition to the game room can be added here
    }
}

export default Lobby;