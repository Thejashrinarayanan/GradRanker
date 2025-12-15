import React from "react";
import Navbar from "../components/Navbar";

function Result() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Your Resume Result</h2>

        <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-center">
          <h3 className="text-xl font-semibold mb-4">Analysis</h3>

          <p className="text-gray-700">
            Your score and AI feedback will be displayed here after processing.
          </p>
        </div>
      </div>
    </>
  );
}

export default Result;
