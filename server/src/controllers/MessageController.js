const messageService = require("../services/MessageService");

const MessageController = {
  async sendMessage(req, res) {
    try {
      const { roomID, messageText, senderID } = req.body;

      const newMessage = await messageService.sendMessage(
        roomID,
        messageText,
        senderID
      );
      res.status(201).json({ message: "Message Sent Succesfully", newMessage });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  },

  async getMessagesForRoom(req, res) {
    try {
      const { roomID } = req.params;

      // Call the service to get messages for a room
      const messages = await messageService.getMessagesForRoom(roomID);

      // Send the messages as a response
      res.status(200).json(messages);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  },
};

module.exports = messageController;
