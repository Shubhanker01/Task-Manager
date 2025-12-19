import { Request, Response } from 'express'
import { Task } from '../models/task.model'


// creating task
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
        const date = new Date(dueDate)
        const task = await Task.create({
            title,
            description,
            dueDate: date,
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

// delete task which is created by creater
export const deleteTask = async (req: Request, res: Response) => {
    try {
        const creatorId = req.user?.userId
        const { taskId } = req.params
        if (!taskId) {
            return res.status(401).json({
                message: "Invalid ID or Id not present"
            })
        }
        const deletedTask = await Task.findOneAndDelete({ _id: taskId, creatorId: creatorId })
        if (!deletedTask) {
            return res.status(404).json({
                message: "Task not found or you are not authorized to delete it",
            });
        }
        return res.status(200).send({
            message: "Successfully deleted"
        })
    } catch (error) {
        console.error("Delete task error:", error);

        return res.status(500).json({
            message: "Internal server error",
        });
    }
}

// show all the task that is created by creator
export const showTasks = async (req: Request, res: Response) => {
    try {
        const creatorId = req.user?.userId;

        if (!creatorId) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }

        const tasks = await Task.find({ creatorId })
            .sort({ createdAt: -1 }) // newest first
            .populate("assignedTo", "username email");

        return res.status(200).json({
            message: "Tasks fetched successfully",
            count: tasks.length,
            tasks,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}

export const getAllTasks = async (req: Request, res: Response) => {
    try {
        // Optional: ensure user is authenticated
        if (!req.user?.userId) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }

        const tasks = await Task.find()
            .sort({ createdAt: -1 })
            .populate("creatorId", "username email")
            .populate("assignedTo", "username email");

        return res.status(200).json({
            message: "All tasks fetched successfully",
            count: tasks.length,
            tasks,
        });
    } catch (error) {
        console.error("Get all tasks error:", error);

        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

// update the task
export const updateTask = async (req: Request, res: Response) => {
    try {
        const creatorId = req.user?.userId;
        if (!creatorId) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }
        const { taskId } = req.params
        const { status, priority, assignedTo } = req.body
        if (!taskId) {
            return res.status(400).json({
                message: "Task Id is required"
            })
        }
        const task = await Task.findOne({ _id: taskId })
        if (!task) {
            return res.status(404).json({
                message: "Unauthorized"
            })
        }
        const updatedTask = await Task.findOneAndUpdate({ _id: taskId }, {
            status: status || task?.status,
            priority: priority || task?.priority,
            assignedTo: assignedTo || task?.assignedTo
        }, { new: true }).populate("creatorId", "username email")
            .populate("assignedTo", "username email");
        if (!updatedTask) {
            return res.status(500).json({
                message: "Some error occured"
            })
        }
        return res.status(201).json({
            message: "Successfully updated",
            task: updatedTask
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}



