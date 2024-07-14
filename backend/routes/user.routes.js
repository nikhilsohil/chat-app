import { Router } from "express";
import {findUserByEmail,login,signup} from "../controller/user.controler.js"

const router = Router();

router.post('/findUser',findUserByEmail);
router.post('/signup',signup);
router.post('/login',login);







 export default router