const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjecId, ref: "User" },
  chatRoom: { type: mongoose.Schema.Types.ObjectId, ref: "ChatRoom" },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

model.exports = Message;
