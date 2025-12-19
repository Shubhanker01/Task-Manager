import { useState } from "react";

interface AddTaskFormData {
    title: string;
    description: string;
    dueDate: string;
    priority: "Low" | "Medium" | "High" | "Urgent";
    status: "To Do" | "In Progress" | "Review" | "Completed";
    assignedToId: string;
}

export default function AddTask() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState<AddTaskFormData>({
        title: "",
        description: "",
        dueDate: "",
        priority: "Medium",
        status: "To Do",
        assignedToId: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Add Task Payload:", formData);
        setIsOpen(false);
    };

    return (
        <>
            {/* Add Task Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="bg-indigo-600 hover:bg-indigo-500 transition px-4 py-2 rounded-xl text-sm font-medium shadow"
            >
                + Add Task
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-slate-900 rounded-2xl w-full max-w-lg p-6 border border-slate-700 shadow-xl">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Create New Task</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-slate-400 hover:text-slate-200"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Title */}
                            <div>
                                <label className="text-sm text-slate-400">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    maxLength={100}
                                    required
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="text-sm text-slate-400">Description</label>
                                <textarea
                                    name="description"
                                    rows={3}
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            {/* Due Date */}
                            <div>
                                <label className="text-sm text-slate-400">Due Date</label>
                                <input
                                    type="datetime-local"
                                    name="dueDate"
                                    required
                                    value={formData.dueDate}
                                    onChange={handleChange}
                                    className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2"
                                />
                            </div>

                            {/* Priority & Status */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm text-slate-400">Priority</label>
                                    <select
                                        name="priority"
                                        value={formData.priority}
                                        onChange={handleChange}
                                        className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2"
                                    >
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                        <option>Urgent</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm text-slate-400">Status</label>
                                    <select
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}
                                        className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2"
                                    >
                                        <option>To Do</option>
                                        <option>In Progress</option>
                                        <option>Review</option>
                                        <option>Completed</option>
                                    </select>
                                </div>
                            </div>

                            {/* Assigned To */}
                            <div>
                                <label className="text-sm text-slate-400">Assign To (User ID)</label>
                                <input
                                    type="text"
                                    name="assignedToId"
                                    value={formData.assignedToId}
                                    onChange={handleChange}
                                    className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2"
                                />
                            </div>

                            {/* Actions */}
                            <div className="flex justify-end gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500"
                                >
                                    Create Task
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
