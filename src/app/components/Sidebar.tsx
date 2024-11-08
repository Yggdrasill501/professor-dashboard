import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="fixed h-full w-64 bg-gray-800 p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold">Teacher Dashboard</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="block p-2 hover:bg-gray-700 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/courses"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              href="/students"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Students
            </Link>
          </li>
          <li>
            <Link
              href="/assignments"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Assignments
            </Link>
          </li>
          <li>
            <Link
              href="/grades"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Grades
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
