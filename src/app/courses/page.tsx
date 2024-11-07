import Sidebar from "../components/Sidebar";

export default function Courses() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-64 flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">My Courses</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Course Cards */}
          <div className="rounded-lg bg-gray-800 p-6">
            <h2 className="text-xl font-semibold mb-2">Computer Science 101</h2>
            <p className="text-gray-400 mb-4">Introduction to Programming</p>
            <div className="flex justify-between text-sm">
              <span>30 Students</span>
              <span>MWF 10:00 AM</span>
            </div>
          </div>

          <div className="rounded-lg bg-gray-800 p-6">
            <h2 className="text-xl font-semibold mb-2">Mathematics 201</h2>
            <p className="text-gray-400 mb-4">Advanced Calculus</p>
            <div className="flex justify-between text-sm">
              <span>25 Students</span>
              <span>TTH 2:00 PM</span>
            </div>
          </div>

          {/* Add Course Button */}
          <div className="rounded-lg border-2 border-dashed border-gray-700 p-6 flex items-center justify-center">
            <button className="text-gray-400 hover:text-white">
              + Add New Course
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
