# **🎥 Video Meeting App**  

A real-time video meeting application built with **Socket.IO** and **WebRTC**. It allows users to join virtual rooms, send messages, and interact through video and audio streams.  

---

## **✨ Features**
- 📹 **Video Call**: Real-time video communication between users.
- 💬 **Message Chat**: Send and receive chat messages during the call.
- 🚪 **Room Management**: Join and manage rooms with a unique Room ID.
- 🔔 **Real-Time Notifications**: Be notified when other users join the room.

---

## **🛠 Tech Stack**
- 🌐 **Frontend**: HTML, CSS, JavaScript (vanilla).
- ⚙️ **Backend**: Node.js, Express.js, Socket.IO.
- 📡 **Real-Time Communication**: WebRTC for video streaming, Socket.IO for messaging.

---

## **🚀 Setup Instructions**

Follow these steps to set up the project on your local machine:

### **📋 Prerequisites**
- Install [Node.js](https://nodejs.org/) (Version 14 or higher).
- Install [npm](https://www.npmjs.com/).

### **📦 Installation Steps**
1. **Clone the repository**:  
   ```bash
   git clone https://github.com/bharatsaggu173/video-meeting-app.git
   cd video-meeting-app
1.**Install dependencies**:
npm install
2.**Start the server**:
npm start
3.**Open the browser and go to**:
http://localhost:3000

🚪 Creating and Joining Rooms
 When the application starts, a prompt will ask the user to enter a Room ID.
 Multiple users can join the same room to communicate via video and chat.

💬 Sending Messages
Users can send chat messages that are broadcast to all other users in the room.
The chat will be visible to everyone in real time.

📚 Dependencies
To install all required dependencies, run:
npm install
Key dependencies include:
a.**express**: Web framework for Node.js.
b.**socket.io**: For real-time communication.
c.**webrtc**: For video and audio streaming.

📂 Folder Structure
video-meeting-app/
├── server.js         # Express server setup
├── socket.js         # Socket.io signaling logic
├── config/
│   └── stun-turn.js  # STUN/TURN server configuration
├── routes/
│   └── rooms.js      # API routes to manage rooms and users
├── controllers/
│   └── roomController.js  # Business logic for rooms
├── index.html        # Main HTML file for the video call interface
├── app.js            # WebRTC + Socket.io frontend logic
├── styles.css        # Basic styles for the UI
├── utils/
│   └── webrtc.js     # WebRTC connection logic
├── public/           # Static files (images, etc.)
├── package.json      # Node dependencies (Express, Socket.io, etc.)
└── README.md         # Project documentation

👨‍💻 Author
Name: Bharat Saggu
📧 Email: bharatsaggu6@gmail.com
🐙 GitHub: github.com/bharatsaggu173
