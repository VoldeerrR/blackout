import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { createServer } from 'http';
import { setupSocket } from './socket';

const app = express();
const server = createServer(app);
const io = new Server(server);

// Middleware to serve static files
app.use(express.static('public'));

// Initialize Socket.io
setupSocket(io);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});