import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    res: "User",
    required: true,
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    res: "User",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, {timestamps: true});

const Message = mongoose.model("Message", messageSchema);

export default Message;