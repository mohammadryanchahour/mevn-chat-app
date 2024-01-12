const socketIOClient = require("socket.io-client");

const socket = socketIOClient("http://localhost:3000"); // Replace with your server URL

socket.on("connect", () => {
  console.log("Connected to server");

  socket.emit("sendMessage", {
    senderID: "senderUserID",
    receiverID: "receiverUserID",
    content: "Hello, this is a test message!",
  });
});

socket.on("receive message", (message) => {
  console.log("Received message:", message);
});

// Handle other events or assertions based on your testing requirements
