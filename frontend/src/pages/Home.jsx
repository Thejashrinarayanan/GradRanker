import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to GradRanker</h1>
        <p className="text-gray-700 mb-6 text-center">
          AI-powered Resume Evaluation for Students & Professionals
        </p>

        <Link
          to="/upload"
          className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700"
        >
          Upload Resume
        </Link>
      </div>
    </>
  );
}

export default Home;
