import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface SignupProps {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}
export default function Signup() {

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
                <form className="space-y-5">
                    {/* Username */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
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
