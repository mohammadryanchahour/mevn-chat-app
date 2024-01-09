const socketIO = require("socket.io");
const Message = require("../models/Message"); // Corrected model import path
const ChatRoom = require("../models/ChatRoom"); // Corrected model import path

function setupSocketServer(server) {
  const io = socketIO(server);

  io.on("connection", (socket) => {
    console.log("New user connected");

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });

    socket.on("joinRoom", async ({ roomID }) => {
      socket.join(roomID);
      console.log(`User joined room ${roomID}`);
    });

    socket.on("leaveRoom", async ({ roomID }) => {
      socket.leave(roomID);
      console.log(`User left room ${roomID}`);
    });

    socket.on("sendMessage", async ({ roomID, messageText, senderID }) => {
      try {
        const newMessage = new Message({
          sender: senderID,
          chatRoom: roomID,
          message: messageText,
        });
        console.log(newMessage);
        await newMessage.save();

        io.to(roomID).emit("newMessage", newMessage);
      } catch (error) {
        console.error(error);
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });

  return io;
}

module.exports = setupSocketServer;
