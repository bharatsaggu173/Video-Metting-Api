const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('New user connected:', socket.id);

    socket.on('join-room', roomId => {
        socket.join(roomId);
        console.log(`${socket.id} joined room: ${roomId}`);

        // Notify other users in the room
        socket.to(roomId).emit('user-connected', socket.id);
    });

    socket.on('chat-message', message => {
        socket.broadcast.emit('chat-message', message);
    });

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});
