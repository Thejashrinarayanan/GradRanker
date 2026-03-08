import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="w-full bg-[#0B1F3A] text-white shadow-lg p-4 flex justify-between items-center">

      <h2 className="text-2xl font-bold">GradRanker</h2>

      <div className="space-x-6">

        <Link to="/home" className="hover:text-gray-300">Home</Link>

        <Link to="/upload" className="hover:text-gray-300">Upload</Link>

        <Link to="/result" className="hover:text-gray-300">Results</Link>

        <button
          onClick={handleLogout}
          className="bg-white text-[#0B1F3A] px-3 py-1 rounded font-semibold hover:bg-gray-200"
        >
          Logout
        </button>

      </div>
    </nav>
  );
}

export default Navbar;