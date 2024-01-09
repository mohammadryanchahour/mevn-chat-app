const express = require("express");
const router = express.Router();
const MessageController = require("../controllers/MessageController");

// Endpoint to send a message
router.post("/sendMessage", MessageController.sendMessage);

// Endpoint to fetch messages for a room
router.get("/room/:roomId", MessageController.getMessagesForRoom);

module.exports = router;
