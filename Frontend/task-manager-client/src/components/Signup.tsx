import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

interface SignupProps {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}
export default function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm<SignupProps>();

    const onSubmit = (data: SignupProps) => {
        console.log(data)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900/80 backdrop-blur-md shadow-2xl p-8"
            >
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-white mb-2">
                        Create an Account ✨
                    </h1>
                    <p className="text-slate-400 text-sm">
                        Sign up to start collaborating on tasks
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                    {/* Username */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="Your name"
                            {...register("username", { required: true })}
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        {errors.username && <span className="text-red-500 text-sm mt-1">
                            {errors.username.message || "Username is required."}
                        </span>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            {...register("email", { required: true })}
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        {errors.email && <span className="text-red-500 text-sm mt-1">
                            {errors.email.message || "Email is required."}
                        </span>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            {...register("password", { required: true })}
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        {errors.password && <span className="text-red-500 text-sm mt-1">
                            {errors.password.message || "Password is required."}
                        </span>}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            {...register("confirmPassword", { required: true })}
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        {errors.confirmPassword && <span className="text-red-500 text-sm mt-1">
                            {errors.confirmPassword.message || "Confirm password field is required."}
                        </span>}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-2.5 text-base font-medium text-white hover:bg-blue-700 transition"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-slate-400">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-blue-500 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}
