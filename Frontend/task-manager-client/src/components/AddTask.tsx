import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addTaskSchema, type AddTaskFormData } from "../validation/task.schema";
import { useCreateTask } from "../hooks/useTasks";
import { usePopulate } from "../hooks/usePopulate";
import type { PopulateIndividualUser } from "../types/auth.types";
import { pendingMessage, updateToast } from "../utils/toast.utils";
import type { AxiosError } from "axios";
import { socket } from "../socket";

export default function AddTask() {
    const createTaskMutation = useCreateTask()
    const populateUsersQuery = usePopulate()
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<AddTaskFormData>({
        resolver: zodResolver(addTaskSchema)
    })
    const onSubmit = async (formData: AddTaskFormData) => {
        const toast = pendingMessage()
        try {
            const response = await createTaskMutation.mutateAsync(formData)
            console.log("Create Task Response:", response);
            socket.emit("taskCreated", response.task.assignedTo);
            updateToast(toast, response.message, "success")
            reset()
            setIsOpen(false);
        } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            updateToast(
                toast,
                err.response?.data?.message || "Adding task failed",
                "error"
            );
        }

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
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            {/* Title */}
                            <div>
                                <label className="text-sm text-slate-400">Title</label>
                                <input
                                    type="text"
                                    maxLength={100}
                                    required
                                    {...register("title")}

                                    className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                {errors.title && (
                                    <p className="text-red-400 text-xs mt-1">
                                        {errors.title.message}
                                    </p>
                                )}
                            </div>

                            {/* Description */}
                            <div>
                                <label className="text-sm text-slate-400">Description</label>
                                <textarea
                                    rows={3}
                                    {...register("description")}

                                    className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                {errors.description && (
                                    <p className="text-red-400 text-xs mt-1">
                                        {errors.description.message}
                                    </p>
                                )}
                            </div>

                            {/* Due Date */}
                            <div>
                                <label className="text-sm text-slate-400">Due Date</label>
                                <input
                                    type="datetime-local"
                                    required
                                    {...register("dueDate")}

                                    className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2"
                                />
                                {errors.dueDate && (
                                    <p className="text-red-400 text-xs mt-1">
                                        {errors.dueDate.message}
                                    </p>
                                )}
                            </div>

                            {/* Priority & Status */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm text-slate-400">Priority</label>
                                    <select
                                        {...register("priority")}
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
                                        {...register("status")}
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
                                <label className="text-sm text-slate-400">Assign To</label>
                                <select
                                    {...register("assignedTo")}
                                    className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2"
                                >
                                    {
                                        populateUsersQuery.data?.users.map((user: PopulateIndividualUser) => (
                                            <option key={user._id} value={user._id}>{user.username}</option>
                                        ))
                                    }
                                </select>
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
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500"
                                >
                                    {isSubmitting ? "Adding.." : "Add Task"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
