import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem("token", "dummy_token");
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          className="w-full p-2 border rounded mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-2 border rounded mb-3"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 text-white py-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="text-sm mt-3 text-center">
          Don't have an account?  
          <Link to="/register" className="text-blue-600"> Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
