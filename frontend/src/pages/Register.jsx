import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    // dummy register logic
    localStorage.setItem("token", "dummy_token");

    navigate("/home");

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-white">

      <div className="bg-white p-8 rounded-xl shadow-xl w-96 border">

        {/* Logo + Title */}

        <div className="flex flex-col items-center mb-6">

          <img
            src={logo}
            alt="GradRanker Logo"
            className="h-40 mb-3"
          />

          <h2 className="text-3xl font-bold text-[#0B1F3A]">
            Register
          </h2>

        </div>

        {/* Name */}

        <div className="mb-4">

          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Name
          </label>

          <input
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />

        </div>

        {/* Email */}

        <div className="mb-4">

          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Email
          </label>

          <input
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>

        {/* Password */}

        <div className="mb-5">

          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Password
          </label>

          <input
            type="password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
            placeholder="Create a password"
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>

        {/* Register Button */}

        <button
          className="w-full bg-[#0B1F3A] text-white py-3 rounded-lg font-semibold hover:bg-[#132E55] transition duration-200"
          onClick={handleRegister}
        >
          Register
        </button>

        {/* Login Link */}

        <p className="text-sm mt-4 text-center text-gray-600">

          Already have an account?{" "}

          <Link
            to="/"
            className="text-[#0B1F3A] font-semibold hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;