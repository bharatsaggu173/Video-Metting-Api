const express = require('express');
const { createRoom } = require('../controllers/roomController');
const router = express.Router();

// Route to create a new room
router.post('/create', createRoom);

module.exports = router;
