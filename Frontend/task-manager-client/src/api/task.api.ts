import api from './axios'
import type { Task, AddTaskFormData } from '../types/task.types'

export const getAllTasks = async (): Promise<Task[]> => {
    const response = await api.get('/api/v1/task/showalltasks', {
        withCredentials: true,
    });
    return response.data.tasks;
}

export const createTask = async (data: AddTaskFormData) => {
    const response = await api.post('/api/v1/task/create', data, {
        withCredentials: true,
    });
    return response.data;
}