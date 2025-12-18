import { Request, Response } from 'express'
import { Task } from '../models/task.model'
import { JwtPayload } from 'jsonwebtoken'

export const createTask = async (req: Request, res: Response) => {
    try {
        const creatorId = req.user?.userId
        if (!creatorId) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }

        const {
            title,
            description,
            dueDate,
            priority,
            status,
            assignedTo,
        } = req.body;

        // Basic validation
        if (
            !title ||
            !description ||
            !dueDate ||
            !priority ||
            !assignedTo
        ) {
            return res.status(400).json({
                message: "All required fields must be provided",
            });
        }

        const task = await Task.create({
            title,
            description,
            dueDate,
            priority,
            status, // optional (default handled by schema)
            creatorId,
            assignedTo,
        });

        return res.status(201).json({
            message: "Task created successfully",
            task,
        });


    } catch (error) {
        console.error("Create task error:", error);

        return res.status(500).json({
            message: "Internal server error",
        });
    }
}
