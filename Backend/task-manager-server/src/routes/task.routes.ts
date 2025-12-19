import { Router } from "express";
import { createTask, deleteTask, showTasks, getAllTasks, updateTask } from "../controllers/task.controller";
import { authenticateToken } from "../middlewares/authenticateToken";

const router = Router()

router.route('/create').post(authenticateToken, createTask)
router.route('/delete/:taskId').delete(authenticateToken, deleteTask)
router.route('/showcreatertasks').get(authenticateToken, showTasks)
router.route('/showalltasks').get(authenticateToken, getAllTasks)
router.route('/update/:taskId').post(authenticateToken, updateTask)

export default router
