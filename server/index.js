const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./src/config/database");
require("./src/config/redis");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const authRouter = require("./src/routes/auth");
const userRouter = require("./src/routes/user");
app.use("/auth", authRouter);
app.use("/users", userRouter);

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something went wrong!");
// });

// app.use((req, res) => {
//   res.status(404).send("Route not found!");
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
