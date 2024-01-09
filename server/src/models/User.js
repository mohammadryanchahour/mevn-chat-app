const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
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
    profile: { type: mongoose.Schema.Types.ObjectId, ref: "UserProfile" }, // Reference to UserProfile
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
