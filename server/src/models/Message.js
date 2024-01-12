const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: { type: String, required: true, maxlength: 1000 },
    isRead: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// Indexing
messageSchema.index({ sender: 1, receiver: 1 });

// Virtuals
messageSchema.virtual("senderDetails", {
  ref: "User",
  localField: "sender",
  foreignField: "_id",
  justOne: true,
});

// Hooks
messageSchema.pre("save", function (next) {
  // Perform actions before saving (if needed)
  next();
});

// Population
messageSchema.post("find", function (messages) {
  messages.forEach(async (message) => {
    await message.populate("senderDetails").execPopulate();
  });
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
