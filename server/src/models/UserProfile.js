const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
  avatar: { type: String },
  bio: { type: String },
  online: { type: Boolean, default: false },
});

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

module.exports = UserProfile;
