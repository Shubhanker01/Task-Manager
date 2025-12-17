import { useMutation } from "@tanstack/react-query";
import type { registerInput, AuthResponse } from "../types/auth.types";
import { userRegister } from "../api/auth.api";


export const useRegister = () => {
    return useMutation<AuthResponse, Error, registerInput>({
        mutationFn: userRegister
    })
}