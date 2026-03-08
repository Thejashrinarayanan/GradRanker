import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import banner from "../assets/home_banner.png";

const ROLE_DESCRIPTIONS = {
  "Data Analyst": "Analyze data, generate insights, and create dashboards using Python, SQL, Excel, and BI tools.",
  "Software Engineer": "Develop software applications using languages like Python, Java, JavaScript, frameworks, and APIs.",
  "Marketing Lead": "Plan and execute marketing campaigns, manage social media, SEO/SEM, and branding strategies.",
  "HR Manager": "Manage recruitment, employee engagement, performance, and HR policies effectively.",
  "Financial Analyst": "Analyze financial statements, create models, forecasts, and reports to support business decisions."
};

function Upload() {
  const [file, setFile] = useState(null);
  const [jobRole, setJobRole] = useState("Data Analyst");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file before uploading.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("job_role", jobRole);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/resume/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        alert(error.detail || "Upload failed");
        setLoading(false);
        return;
      }

      const data = await response.json();

      const resultData = {
        final_score: data.final_score,
        skill_percentage: data.skill_match_percentage,
        experience_score: data.experience_score,
        matched_skills: data.skills_detected,
        missing_skills: data.missing_skills,
        project_keywords: data.project_keywords_detected,
        suggestions: data.feedback,
        job_role: data.job_role
      };

      navigate("/result", { state: resultData });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* Banner */}
      <div className="w-full">
        <img src={banner} alt="Upload Banner" className="w-full h-[300px] object-cover" />
      </div>

      {/* Upload Section */}
      <div className="bg-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-[#0B1F3A] mb-4">Upload Your Resume</h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Select your target role and upload your resume to get an AI-powered evaluation.
        </p>

        <select
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          className="border p-2 rounded w-80 mb-2"
        >
          {Object.keys(ROLE_DESCRIPTIONS).map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>

        <p className="text-gray-500 italic mb-4">{ROLE_DESCRIPTIONS[jobRole]}</p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <input
            type="file"
            accept=".pdf,.docx"
            onChange={handleFileChange}
            className="border p-2 rounded w-80"
          />
          <button
            type="submit"
            className="bg-[#0B1F3A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#132E55] transition"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Upload;