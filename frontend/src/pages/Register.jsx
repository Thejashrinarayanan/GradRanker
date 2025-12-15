import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>

        <input className="w-full p-2 border rounded mb-3" placeholder="Name" />
        <input className="w-full p-2 border rounded mb-3" placeholder="Email" />
        <input className="w-full p-2 border rounded mb-3" placeholder="Password" type="password" />

        <button
          className="w-full bg-blue-600 text-white py-2 rounded"
          onClick={handleRegister}
        >
          Register
        </button>

        <p className="text-sm mt-3 text-center">
          Already have an account?  
          <Link to="/" className="text-blue-600"> Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
