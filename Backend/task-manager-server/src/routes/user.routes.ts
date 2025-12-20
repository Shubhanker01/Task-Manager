import { Router } from "express";
import { userRegistration, userLogin, showUsers } from "../controllers/user.controller";
import { authenticateToken } from "../middlewares/authenticateToken";

const router = Router()

router.route('/register').post(userRegistration)
router.route('/login').post(userLogin)
router.route('/populate/users').get(authenticateToken, showUsers)


export default router