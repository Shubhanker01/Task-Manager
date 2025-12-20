export interface AddTaskFormData {
    title: string;
    description: string;
    dueDate: string;
    priority: "Low" | "Medium" | "High" | "Urgent";
    status: "To Do" | "In Progress" | "Review" | "Completed";
    assignedTo: string;
}

export interface AddTaskResponse {
    message: string;
    task: Task;
}

export interface Task {
    _id: string;
    title: string;
    description: string;
    dueDate: string;
    priority: "Low" | "Medium" | "High" | "Urgent";
    status: "To Do" | "In Progress" | "Review" | "Completed";
    creatorId: {
        _id: string;
        username: string;
        email: string;
    };
    assignedTo: {
        _id: string;
        username: string;
        email: string;
    };
    createdAt: string;
    updatedAt: string;
}
