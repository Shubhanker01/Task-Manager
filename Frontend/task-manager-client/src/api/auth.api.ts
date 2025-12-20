import type { AuthResponse, LoginInterface, registerInput, PopulateUsers } from "../types/auth.types"
import api from "./axios"

// endpoint for login/registration
export const userRegister = async (data: registerInput) => {
    const response = await api.post<AuthResponse>(
        "api/v1/user/register",
        data
    )
    return response.data
}


export const userLogin = async (data: LoginInterface) => {
    const response = await api.post<AuthResponse>(
        "api/v1/user/login",
        data
    )
    return response.data
}

export const populateUsers = async () => {
    const response = await api.get<PopulateUsers>("api/v1/user/populate/users", {
        withCredentials: true,
    })
    return response.data
}