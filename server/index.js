require("dotenv").config();
require("./src/config/database");
require("./src/config/redis");
const express = require("express");
const cors = require("cors");
const http = require("http");
const setupSocketServer = require("./src/sockets/SocketManager");
const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = setupSocketServer(server);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const authRouter = require("./src/routes/auth");
const userRouter = require("./src/routes/user");
const messageRouter = require("./src/routes/message");
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/messages", messageRouter);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
