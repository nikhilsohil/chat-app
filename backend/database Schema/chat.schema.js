import mongoose from "mongoose";

const chat = new mongoose.Schema({
    participants:[{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }],
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
})

export default mongoose.model("Chat", chat);