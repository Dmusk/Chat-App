//Chat Name
// User
// latest message

import mongoose from "mongoose";

const chatModel = mongoose.Schema(
  {
    chatName: {
      type: String,
      trim: true,
    },
    users: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      re: "Message",
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
