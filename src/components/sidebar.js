import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="w-64 p-4 bg-gray-100 shadow-md h-screen">
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="p-2 bg-blue-600 text-white rounded-md">
          Home
        </Link>
        <Link to="/Profile" className="p-2 bg-blue-600 text-white rounded-md">
          Profile
        </Link>
        <Link to="/Message" className="p-2 bg-blue-600 text-white rounded-md">
          Message
        </Link>
        <Link
          to="/Notifications"
          className="p-2 bg-blue-600 text-white rounded-md"
        >
          Notifications
        </Link>
      </nav>
    </aside>
  );
};
