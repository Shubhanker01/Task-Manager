import { Router } from "express";
import { userRegistration } from "../controllers/user.controller";

const router = Router()

router.route('/register').post(userRegistration)


export default router