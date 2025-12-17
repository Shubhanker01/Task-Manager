import { useMutation } from "@tanstack/react-query";
import type { LoginInterface, AuthResponse } from "../types/auth.types";
import { userLogin } from "../api/auth.api";


export const useLogin = () => {
    return useMutation<AuthResponse, Error, LoginInterface>({
        mutationFn: userLogin
    })
}