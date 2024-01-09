const Message = require("../models/Message");

const messageService = {
  async sendMessage(roomID, messageText, senderID) {
    try {
      // Create a new message
      const newMessage = new Message({
        sender: senderID,
        chatRoom: roomID,
        message: messageText,
      });

      // Save the message to the database
      await newMessage.save();

      return newMessage;
    } catch (error) {
      throw error;
    }
  },

  async getMessagesForRoom(roomID) {
    try {
      // Fetch messages for a specific room from the database
      const messages = await Message.find({ chatRoom: roomID });
      return messages;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = messageService;
