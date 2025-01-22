const express = require('express');
const http = require('http');
const { Server } = require('socket.io'); // Destructure to get 'Server' from 'socket.io'

const app = express();
const server = http.createServer(app); // Rename 'Server' to 'server' to avoid conflict
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    console.log("connected");
    
    socket.on("chat", (chat) => {
        io.emit("chat", chat);
    });

    socket.on("disconnected", () => {
        console.log("disconnected");
    });
});

server.listen(3001, () => {
    console.log("server is running on 3001");
});
