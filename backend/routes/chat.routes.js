import { Router } from "express";
import { findChat,createChat,deleteChat } from "../controller/chat.controller.js";

const router =  Router();

router.get('/', findChat);

router.post('/c/:reciverId', createChat);

router.delete('/delete/:chatId', deleteChat);



export default router