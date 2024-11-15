const express = require('express');
const http = require('http');
const {Server} = require('socket.io')
const socketIO = require('socket.io');
const path = require('path'); 

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public'))); // Yahan path sahi hai

// Socket.io events
io.on('connection', socket => {
    console.log('New user connected:', socket.id);

    socket.on('join-room', roomId => {
        socket.join(roomId);
        socket.to(roomId).emit('user-connected',socket.id);
        console.log(`User ${socket.id} joined room ${roomId}`);
    });

    socket.on('chat-message',message=>{
        console.log(`Message recived:${message}`);
        io.emit('chat-message',message);
    })

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

server.listen(5000, () => {
    console.log('Server running on port 5000');
});
