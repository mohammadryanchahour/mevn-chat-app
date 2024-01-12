const socketIO = require("socket.io");
const messageController = require("../controllers/MessageController");

function setupSocketServer(server) {
  const io = socketIO(server);

  io.on("connection", (socket) => {
    console.log("New user connected");

    socket.on("sendMessage", async ({ senderID, receiverID, content }) => {
      try {
        const newMessage = await messageController.sendMessage({
          senderID: "65953581f6673756d4dc879f",
          receiverID: "659e298c37f4f81b1b3bac1f",
          content: "Hi.",
        });
        io.to(receiverID).emit("receive message", newMessage);
      } catch (error) {
        console.error("Error sending message via socket: ", error);
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });

  return io;
}

module.exports = setupSocketServer;
