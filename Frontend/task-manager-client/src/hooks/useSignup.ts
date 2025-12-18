import { useMutation } from "@tanstack/react-query";
import type { AuthResponse, registerInput } from "../types/auth.types";
import { userRegister } from "../api/auth.api";
import type { AxiosError } from "axios";


export const useRegister = () => {
    return useMutation<AuthResponse, AxiosError, registerInput>({
        mutationFn: userRegister
    })
}