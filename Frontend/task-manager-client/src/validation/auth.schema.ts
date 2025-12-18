import { z } from 'zod'

export const signupSchema = z.object({
    username: z.string().min(3, "Username must be atleast 3 characters"),
    email: z.email("invalid email address"),
    password: z.string().min(5, "Password be must atleast 5 characters"),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})

export const loginSchema = z.object({
    email: z.email("invalid email address"),
    password: z.string().min(5, "Please enter minimum length for password")
})

export type SignupFormData = z.infer<typeof signupSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;