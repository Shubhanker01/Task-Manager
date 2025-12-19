import TaskCard from "./Task";
import AddTask from "./AddTask";

export default function MainDashboard() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100">
            {/* Header */}
            <header className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                <h1 className="text-2xl font-bold tracking-wide">Task Manager</h1>
                <AddTask />
            </header>

            {/* Main Content */}
            <main className="p-6">
                <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>

                {/* Task Grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Task Card */}
                    <TaskCard title="Random title" description="random description" dueDate="12-12-2025" priority="Low" status="In Progress" creatorName="User1" assignedToName="User2" />

                    {/* Empty State Example */}
                    <div className="border border-dashed border-slate-700 rounded-2xl p-4 flex items-center justify-center text-slate-500">
                        More tasks will appear here 🚀
                    </div>
                </div>
            </main>
        </div>
    );
}
