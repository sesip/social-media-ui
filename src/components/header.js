import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header
      className="bg-gray-800 text-white p-4 flex justify-between
  items-center"
    >
      <div className="logo text-2xl font-bold">
        <h1>SSM</h1>
      </div>

      <div>
        <input type="text" placeholder="Search..." />
        <button></button>
      </div>

      <nav className="nav-menu">
        <ul className="flex space-x-6">
          <li>
            <Link to="/Login" className="hover:text-gray-400">
              Login
            </Link>
          </li>
          <li>
            <Link to="/Register" className="hover:text-gray-400">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
