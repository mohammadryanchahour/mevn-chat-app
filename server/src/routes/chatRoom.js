const express = require("express");
const router = express.Router();
const ChatRoomController = require("../controllers/ChatRoomController");

// Endpoint to create a new chat room
router.post("/createChatRoom", ChatRoomController.createChatRoom);

// Endpoint to fetch chat room details
router.get("/getChatRoom/:roomId", ChatRoomController.getChatRoomDetails);

module.exports = router;
