import { io, Socket } from 'socket.io-client';

class ClientSocket {
    private socket: Socket;

    constructor(serverUrl: string) {
        this.socket = io(serverUrl);
        this.setupListeners();
    }

    private setupListeners() {
        this.socket.on('connect', () => {
            console.log('Connected to server');
        });

        this.socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

        this.socket.on('message', (data) => {
            console.log('Message from server:', data);
        });

        // Add more event listeners as needed
    }

    public sendMessage(event: string, data: any) {
        this.socket.emit(event, data);
    }

    public on(event: string, callback: (data: any) => void) {
        this.socket.on(event, callback);
    }

    public disconnect() {
        this.socket.disconnect();
    }
}

export default ClientSocket;