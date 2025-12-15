import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-xl font-bold text-blue-600">GradRanker</h2>

      <div className="space-x-4">
        <Link to="/home" className="hover:text-blue-600">Home</Link>
        <Link to="/upload" className="hover:text-blue-600">Upload</Link>
        <Link to="/result" className="hover:text-blue-600">Results</Link>

        <button
          className="bg-blue-600 text-white px-3 py-1 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
