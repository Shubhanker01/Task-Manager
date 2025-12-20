import { useMutation, useQuery } from "@tanstack/react-query";
import type { Task } from '../types/task.types';
import { getAllTasks, createTask } from "../api/task.api";
import type { AddTaskFormData } from "../validation/task.schema";
import type { AddTaskResponse } from "../types/task.types";
import type { AxiosError } from "axios";

export const useTasks = () => {
    return useQuery<Task[]>({
        queryKey: ['tasks'],
        queryFn: () => getAllTasks()
    })
}

export const useCreateTask = () => {
    return useMutation<AddTaskResponse, AxiosError, AddTaskFormData>({
        mutationFn: (data: AddTaskFormData) => createTask(data)
    })
}