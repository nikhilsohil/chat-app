import { Router } from "express";
import messageController from "../controller/message.controller.js";
import { validateChat } from "../middelware/chat.middelware.js";


const router = Router();

router.get("/:chatId",validateChat, messageController.getMessage);

router.post("/:chatId", messageController.sendMessage);

export default router;