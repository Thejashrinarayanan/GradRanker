import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import banner from "../assets/home_banner.png";

function Result() {
  const location = useLocation();
  const data = location.state || {};

  const job_role = data.job_role || "Data Analyst";
  const matched_skills = data.matched_skills || ["Python", "SQL"];
  const missing_skills = data.missing_skills || ["Excel", "Tableau"];
  const project_keywords = data.project_keywords || ["Machine Learning", "API"];
  const suggestions = data.suggestions || [
    "Improve Excel skills",
    "Add certifications",
    "Gain more experience",
  ];

  // Randomized final resume score
  const final_score = Math.floor(Math.random() * 50) + 50; // 50-99%

  // Peer rank as percentage
  const peer_percentile = Math.floor(Math.random() * 50) + 50; // 50-99%

  const batch_summary = {
    average_score: Math.floor(Math.random() * 40) + 60,
    top_performers: Math.floor(Math.random() * 5) + 1,
    students_above_80: Math.floor(Math.random() * 20) + 5,
    total_students: 50,
  };

  const role_courses = {
    "Data Analyst": ["Advanced Excel", "Tableau Certification", "SQL for Analysis", "Python for Data Science"],
    "Software Engineer": ["Java Masterclass", "React Crash Course", "Node.js Backend", "Full Stack Certification"],
    "Backend Developer": ["REST API Dev", "MongoDB Dev", "Microservices", "Spring Boot Certification"],
    "Data Engineer": ["Spark & Hadoop", "AWS Data Engineering", "ETL Development", "Big Data Certification"],
    "Marketing Lead": ["Digital Marketing Strategy", "SEO & SEM", "Content Marketing", "Google Analytics Certified"],
  };

  const courses = role_courses[job_role] || [];

  return (
    <>
      <Navbar />

      <div className="w-full">
        <img src={banner} alt="Result Banner" className="w-full h-[300px] object-cover" />
      </div>

      {/* Role & Final Score */}
      <div className="bg-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-[#0B1F3A] mb-4">Resume Analysis Result</h1>
        <h2 className="text-2xl mb-6 text-gray-700">Role: {job_role}</h2>

        <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded-xl shadow-lg mb-8">
          <h3 className="text-xl font-semibold mb-3">Final Resume Score</h3>
          <div className="w-full bg-gray-300 rounded-full h-6">
            <div
              className="bg-blue-600 h-6 rounded-full text-white flex items-center justify-center"
              style={{ width: `${final_score}%` }}
            >
              {final_score}%
            </div>
          </div>
        </div>

        {/* Peer Rank */}
        <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-3">Peer Benchmark Percentile</h3>
          <p className="text-lg">{peer_percentile}%</p>
        </div>
      </div>

      {/* Matched & Missing Skills */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Matched Skills</h2>
            <div className="flex flex-wrap gap-3">
              {matched_skills.map((skill, idx) => (
                <span key={idx} className="bg-green-100 text-green-700 px-4 py-2 rounded-full">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Missing Skills</h2>
            <div className="flex flex-wrap gap-3">
              {missing_skills.map((skill, idx) => (
                <span key={idx} className="bg-red-100 text-red-700 px-4 py-2 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Keywords */}
      {project_keywords.length > 0 && (
        <div className="bg-white py-16 px-6">
          <h2 className="text-3xl font-bold text-center text-[#0B1F3A] mb-8">Project Keywords Detected</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {project_keywords.map((word, idx) => (
              <span key={idx} className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">{word}</span>
            ))}
          </div>
        </div>
      )}

      {/* Courses & Certifications */}
      {courses.length > 0 && (
        <div className="bg-gray-100 py-16 px-6">
          <h2 className="text-3xl font-bold text-center text-[#0B1F3A] mb-8">Recommended Courses & Certifications</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {courses.map((course, idx) => (
              <span key={idx} className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full">{course}</span>
            ))}
          </div>
        </div>
      )}

      {/* Batch Summary */}
      <div className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-[#0B1F3A] mb-8">Batch Level Summary</h2>
        <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-xl shadow-lg text-center">
          <p className="text-lg mb-2">Average Score: {batch_summary.average_score}%</p>
          <p className="text-lg mb-2">Top Performers: {batch_summary.top_performers}</p>
          <p className="text-lg mb-2">Students Above 80%: {batch_summary.students_above_80} / {batch_summary.total_students}</p>
        </div>
      </div>

      {/* AI Suggestions */}
      {suggestions.length > 0 && (
        <div className="bg-white py-16 px-6">
          <h2 className="text-3xl font-bold text-center text-[#0B1F3A] mb-8">AI Suggestions</h2>
          <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-xl shadow">
            <ul className="space-y-3 text-gray-700">
              {suggestions.map((tip, idx) => <li key={idx}>• {tip}</li>)}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Result;