import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

interface LoginProps {
    email: string;
    password: string;
}
function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginProps>();
    const onSubmit = (data: LoginProps) => {
        console.log(data)
    }

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900/80 backdrop-blur-md shadow-2xl p-8"
                >
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-white mb-2">Welcome Back 👋</h1>
                        <p className="text-slate-400 text-sm">
                            Login to continue managing your tasks
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                {
                                ...register("email", { required: true })
                                }
                                placeholder="you@example.com"
                                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            {
                                errors.email && <span className="text-red-500 text-sm mt-1">
                                    {errors.email.message || "Email is required."}
                                </span>
                            }
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                {
                                ...register("password", { required: true })
                                }
                                placeholder="••••••••"
                                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            {
                                errors.password && <span className="text-red-500 text-sm mt-1">
                                    {errors.password.message || "Password is required."}
                                </span>
                            }
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-600 py-2.5 text-base font-medium text-white hover:bg-blue-700 transition"
                        >
                            Login
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="mt-6 text-center text-sm text-slate-400">
                        Don’t have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-blue-500 hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Login