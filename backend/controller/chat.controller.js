import Chat from "../database Schema/chat.schema.js";


const findChat = async (req, res) => {
    const userId = req.body.userId;
    console.log(userId);
    try {
        const chats = await Chat.find({ participants: { $in: [userId] } });
        if (chats.length > 0) {
            return res.status(200).json({ chats: chats, message: "Chats found successfully" });
        }
        else {
            return res.status(404).json({ message: "Chat not exist" });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const createChat = async (req, res) => {
    const userId = req.body.userId;
    const reciverId = req.params.reciverId;
    console.log(userId, reciverId);

    try {
        const existingChat = await Chat.findOne({ participants: { $all: [userId, reciverId] } });
        if (!existingChat) {
            const chat = await new Chat({ participants: [userId, reciverId] }).save();
            return res.status(200).json({ chat: chat, message: "Chat created successfully" });
        }
        return res.status(409).json({ message: "Chat already exists between these users" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const deleteChat = async (req, res) => {
    const chatId = req.params.chatId;
    const userId = req.body.userId;
    console.log(chatId, userId);
    try {
        const chat = await Chat.findByIdAndDelete(chatId);
        if (!chat) {
            return res.status(404).json({ message: "Chat not found" });
        }
        if (!chat.participants.includes(userId)) {
            return res.status(403).json({ message: "You are not a participant in this chat" });
        }
        return res.status(200).json({ message: "Chat deleted successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


export { findChat, createChat, deleteChat };