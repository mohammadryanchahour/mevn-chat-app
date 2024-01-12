const Message = require("../models/Message");

const MessageController = {
  async sendMessage(req, res) {
    try {
      const { senderID, receiverID, content } = req.body;

      if (!senderID || !receiverID || !content) {
        return res.status(400).json({ error: "Kindly complete the message" });
      }

      const newMessage = new Message({
        sender: senderID,
        receiver: receiverID,
        content,
      });

      await newMessage.save();
      res
        .status(201)
        .json({ message: "Message Sent Succesfully", data: newMessage });
    } catch (error) {
      console.error(error);
      res.status(401).json({ error: "Error sending the message" });
    }
  },

  // async getMessagesForRoom(req, res) {
  //   try {
  //     const { roomID } = req.params;

  //     // Call the service to get messages for a room
  //     const messages = await messageService.getMessagesForRoom(roomID);

  //     // Send the messages as a response
  //     res.status(200).json(messages);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: "Server error" });
  //   }
  // },
};

module.exports = MessageController;
