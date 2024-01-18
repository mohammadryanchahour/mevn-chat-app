require("dotenv").config();
require("./src/config/database");
require("./src/config/redis");
const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIO = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "*",
  },
});
app.use(cors());
app.use(express.json());

// Serve static files (including the HTML file)
app.use(express.static(path.join(__dirname, "/public/")));

// Socket.IO setup
io.on("connection", (socket) => {
  console.log("User connected");

  // Listen for chat messages
  socket.on("chat message", (message) => {
    console.log(`Message received: ${message}`);

    // Broadcast the message to all connected clients
    io.emit("chat message", message);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes for authentication and user management
const authRouter = require("./src/routes/AuthRoutes");
const userRouter = require("./src/routes/user");
app.use("/auth", authRouter);
app.use("/users", userRouter);

// Route for testing real-time communication
app.get("/chat", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "index.html"));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
