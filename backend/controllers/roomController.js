const createRoom = (req, res) => {
    const roomId = generateRoomId(); 
    res.json({ roomId }); 
};

const generateRoomId = () => {
    return Math.random().toString(36).substr(2, 9);
};

module.exports = { createRoom };
