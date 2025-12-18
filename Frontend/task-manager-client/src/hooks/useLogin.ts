import { useMutation } from "@tanstack/react-query";
import type { AuthResponse, LoginInterface } from "../types/auth.types";
import { userLogin } from "../api/auth.api";
import type { AxiosError } from "axios";


export const useLogin = () => {
    return useMutation<AuthResponse, AxiosError, LoginInterface>({
        mutationFn: userLogin
    })
}