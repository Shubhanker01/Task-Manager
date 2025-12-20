import { z } from "zod";

export const addTaskSchema = z.object({
    title: z
        .string()
        .min(1, "Title is required")
        .max(100, "Title cannot exceed 100 characters"),

    description: z
        .string()
        .min(5, "Description must be at least 5 characters"),

    dueDate: z
        .string()
        .min(1, "Due date is required"),

    priority: z.enum(["Low", "Medium", "High", "Urgent"]),

    status: z.enum(["To Do", "In Progress", "Review", "Completed"]),
    assignedTo: z
        .string()
        .min(1, "Assigned user is required"),
});

export type AddTaskFormData = z.infer<typeof addTaskSchema>;
