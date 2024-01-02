const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 3,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String, required: true },
    avatar: { type: String },
    bio: { type: String },
    online: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
