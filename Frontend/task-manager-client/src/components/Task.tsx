type TaskPriority = "Low" | "Medium" | "High" | "Urgent";
type TaskStatus = "To Do" | "In Progress" | "Review" | "Completed";

interface TaskCardProps {
    title: string;
    description: string;
    dueDate: string;
    priority: TaskPriority;
    status: TaskStatus;
    creatorName?: string;
    assignedToName?: string;
}

const priorityStyles: Record<TaskPriority, string> = {
    Low: "bg-green-500/20 text-green-400",
    Medium: "bg-yellow-500/20 text-yellow-400",
    High: "bg-orange-500/20 text-orange-400",
    Urgent: "bg-red-500/20 text-red-400",
};

const statusStyles: Record<TaskStatus, string> = {
    "To Do": "bg-slate-600/30 text-slate-300",
    "In Progress": "bg-blue-500/20 text-blue-400",
    Review: "bg-purple-500/20 text-purple-400",
    Completed: "bg-green-500/20 text-green-400",
};

export default function TaskCard({
    title,
    description,
    dueDate,
    priority,
    status,
    creatorName,
    assignedToName,
}: TaskCardProps) {
    return (
        <div className="bg-slate-800 rounded-2xl p-5 shadow-md hover:shadow-xl transition border border-slate-700">
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-slate-100 line-clamp-1">
                    {title}
                </h3>
                <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${priorityStyles[priority]}`}
                >
                    {priority}
                </span>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-400 mb-4 line-clamp-3">
                {description}
            </p>

            {/* Status */}
            <div className="mb-4">
                <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${statusStyles[status]}`}
                >
                    {status}
                </span>
            </div>

            {/* Meta Info */}
            <div className="flex justify-between items-center text-xs text-slate-400">
                <div>
                    <p>Due: {new Date(dueDate).toLocaleDateString()}</p>
                    {creatorName && <p>Created by: {creatorName}</p>}
                </div>
                {assignedToName && (
                    <div className="text-right">
                        <p className="text-slate-300 font-medium">Assigned to</p>
                        <p>{assignedToName}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
