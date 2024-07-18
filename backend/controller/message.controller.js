
import MessageSchema from '../database Schema/message.schema.js';

class Message {


    getMessage = async (req, res) => {
        const chatId = req.params.chatId;
        console.log(chatId);
        try {
            const messages = await MessageSchema.find({ chatId });
            console.log(messages);
            if (messages) {
                return res.status(200).json({ status: true, message: "Messages fetched successfully", data: messages });
            } else {
                return res.status(404).json({ status: false, message: "No messages found" });
            }
        } catch (err) {
            return res.status(500).json({ status: false, message: "Error in fetching messages", error: err.message });
        }
    };

    sendMessage = async (req, res) => {
        const chatId = req.params.chatId;
        const content = req.body.content;
        const sender = req.body.sender;
        console.log(chatId, content, sender);
        try {
            const message = await new MessageSchema({ chatId, content, sender }).save();
            console.log(message);
            return res.status(201).json({ status: true, message: "Message sent successfully", data: message });
        } catch (err) {
            return res.status(500).json({ status: false, message: "Error in sending message", error: err.message });
        }
    };

}
export default new Message;