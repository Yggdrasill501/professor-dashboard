import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-64 flex-1 p-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Quick Stats */}
          <div className="rounded-lg bg-gray-800 p-6">
            <h2 className="text-xl font-semibold mb-4">Active Courses</h2>
            <p className="text-3xl font-bold">4</p>
          </div>

          <div className="rounded-lg bg-gray-800 p-6">
            <h2 className="text-xl font-semibold mb-4">Total Students</h2>
            <p className="text-3xl font-bold">120</p>
          </div>

          <div className="rounded-lg bg-gray-800 p-6">
            <h2 className="text-xl font-semibold mb-4">Pending Assignments</h2>
            <p className="text-3xl font-bold">8</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
          <div className="rounded-lg bg-gray-800 p-6">
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <span>New assignment submission in CS101</span>
                <span className="text-sm text-gray-400">2 hours ago</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Grade updated for MATH201</span>
                <span className="text-sm text-gray-400">5 hours ago</span>
              </li>
              <li className="flex items-center justify-between">
                <span>New course announcement posted</span>
                <span className="text-sm text-gray-400">1 day ago</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
