const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

const database = process.env.DATABASE;

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error(`MongoDB Connection Error: ${error}`);
  });

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error(`MongoDB Connection Error: ${err.message}`);
});

module.exports = mongoose;
