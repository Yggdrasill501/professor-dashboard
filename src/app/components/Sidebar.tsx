export default function Sidebar() {
  return (
    <div className="fixed h-full w-64 bg-gray-600 p-4">
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold">Dashboard</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="/" className="block p-2 hover:bg-gray-700 rounded">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/courses" className="block p-2 hover:bg-gray-700 rounded">
              Courses
            </a>
          </li>
          <li>
            <a href="/students" className="block p-2 hover:bg-gray-700 rounded">
              Students
            </a>
          </li>
          <li>
            <a
              href="/assignments"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Assignments
            </a>
          </li>
          <li>
            <a href="/grades" className="block p-2 hover:bg-gray-700 rounded">
              Grades
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
