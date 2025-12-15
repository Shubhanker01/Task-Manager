import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Home() {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900/80 backdrop-blur-md shadow-2xl p-8 text-center"
                >
                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                        Collaborative Task Manager
                    </h1>

                    {/* Tagline */}
                    <p className="text-slate-400 mb-6 leading-relaxed">
                        Manage tasks, collaborate in real-time, and stay productive — all in one place.
                    </p>

                    {/* Features */}
                    <div className="text-slate-300 text-sm space-y-2 mb-8 text-left">
                        <p>🚀 <span className="ml-1">Create and manage tasks effortlessly</span></p>
                        <p>🤝 <span className="ml-1">Collaborate with live real-time updates</span></p>
                        <p>🔔 <span className="ml-1">Instant notifications on task assignment</span></p>
                        <p>📊 <span className="ml-1">Personalized dashboards to track progress</span></p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-4">
                        <Link to="/login">
                            <button className="w-full rounded-lg bg-blue-600 py-2.5 text-base font-medium text-white hover:bg-blue-700 transition">
                                Login
                            </button>
                        </Link>

                        <Link to="/signup">
                            <button className="w-full rounded-lg border border-slate-600 py-2.5 text-base font-medium text-white hover:bg-slate-800 transition">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Home