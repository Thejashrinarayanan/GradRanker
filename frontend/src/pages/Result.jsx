import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import banner from "../assets/home_banner.png";

function Result() {

  const location = useLocation();
  const data = location.state || {};

  const score = data.score || 0;
  const matchedSkills = data.matched_skills || [];
  const missingSkills = data.missing_skills || [];
  const suggestions = data.suggestions || [];

  return (
    <>
      <Navbar />

      {/* Banner */}

      <div className="w-full">
        <img
          src={banner}
          alt="Result Banner"
          className="w-full h-[300px] object-cover"
        />
      </div>

      {/* Score Section */}

      <div className="bg-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold text-[#0B1F3A] mb-6">
          Resume Analysis Result
        </h1>

        <div className="max-w-xl mx-auto bg-gray-100 p-8 rounded-xl shadow-lg">

          <h2 className="text-2xl font-semibold mb-4">ATS Score</h2>

          <div className="w-full bg-gray-300 rounded-full h-6">

            <div
              className="bg-blue-600 h-6 rounded-full text-white flex items-center justify-center"
              style={{ width: `${score}%` }}
            >
              {score}%
            </div>

          </div>

        </div>

      </div>

      {/* Skills Section */}

      <div className="bg-gray-100 py-16 px-6">

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Matched Skills */}

          <div className="bg-white p-8 rounded-xl shadow">

            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Matched Skills
            </h2>

            <div className="flex flex-wrap gap-3">

              {matchedSkills.map((skill, index) => (

                <span
                  key={index}
                  className="bg-green-100 text-green-700 px-4 py-2 rounded-full"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

          {/* Missing Skills */}

          <div className="bg-white p-8 rounded-xl shadow">

            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Missing Skills
            </h2>

            <div className="flex flex-wrap gap-3">

              {missingSkills.map((skill, index) => (

                <span
                  key={index}
                  className="bg-red-100 text-red-700 px-4 py-2 rounded-full"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        </div>

      </div>

      {/* Suggestions */}

      <div className="bg-white py-16 px-6">

        <h2 className="text-3xl font-bold text-center text-[#0B1F3A] mb-8">
          AI Suggestions
        </h2>

        <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-xl shadow">

          <ul className="space-y-3 text-gray-700">

            {suggestions.map((tip, index) => (

              <li key={index}>• {tip}</li>

            ))}

          </ul>

        </div>

      </div>

    </>
  );
}

export default Result;