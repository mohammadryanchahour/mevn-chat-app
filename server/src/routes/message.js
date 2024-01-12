const express = require("express");
const router = express.Router();
const messageController = require("../controllers/MessageController");
const authenticate = require("../middlewares/authenticate.middleware");

// Endpoint to send a message
router.post("/send", authenticate, messageController.sendMessage);

// Endpoint to fetch messages for a room
// router.get("/room/:roomId", MessageController.getMessagesForRoom);

module.exports = router;
