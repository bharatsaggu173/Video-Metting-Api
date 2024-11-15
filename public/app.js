const socket = io();
let localStream;
const remoteVideosContainer = document.getElementById('remoteVideos');
const localVideo = document.getElementById('localVideo');

// Function to start video stream
async function startVideo() {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideo.srcObject = localStream;

    // Emit event to join room
    const roomId = prompt("Enter Room ID:"); // User input for room ID
    socket.emit('join-room', roomId); // Join the room
}

// Call startVideo when the script loads
startVideo();

// Listen for other user's stream
socket.on('user-connected', userId => {
    // Here you would add logic to handle incoming streams
    console.log(`User connected: ${userId}`);
});

// Send message on button click
document.getElementById('send-button').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    if (message) {
        socket.emit('chat-message', message);
        messageInput.value = '';
    }
});

// Listen for incoming messages
socket.on('chat-message', message => {
    const messagesDiv = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);
});
