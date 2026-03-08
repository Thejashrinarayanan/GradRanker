import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import banner from "../assets/home_banner.png";

function Home() {
  return (
    <>
      <Navbar />

      {/* Banner Image */}

      <div className="w-full">
        <img
          src={banner}
          alt="GradRanker Banner"
          className="w-full h-[350px] object-cover"
        />
      </div>

      {/* Hero Section */}

      <div className="bg-white text-center py-16 px-6">

        <h1 className="text-4xl font-bold text-[#0B1F3A] mb-4">
          Welcome to GradRanker
        </h1>

        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          GradRanker is an AI-powered platform that analyzes your resume
          against industry requirements. Get an ATS score, identify missing
          skills, and improve your chances of landing your dream job.
        </p>

        <Link
          to="/upload"
          className="bg-[#0B1F3A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#132E55] transition"
        >
          Analyze Your Resume
        </Link>

      </div>

      {/* FEATURES */}

      <div className="py-16 px-6 bg-gray-100">

        <h2 className="text-3xl font-bold text-center text-[#0B1F3A] mb-12">
          Why Use GradRanker?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
            <h3 className="text-xl font-semibold mb-3">
              AI Resume Analysis
            </h3>
            <p className="text-gray-600">
              Our AI scans your resume and compares it with job requirements
              to evaluate how well it matches the role.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
            <h3 className="text-xl font-semibold mb-3">
              ATS Score
            </h3>
            <p className="text-gray-600">
              Understand how Applicant Tracking Systems rate your resume
              and identify areas that need improvement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
            <h3 className="text-xl font-semibold mb-3">
              Skill Gap Detection
            </h3>
            <p className="text-gray-600">
              Discover missing skills and keywords that recruiters expect
              so you can strengthen your resume.
            </p>
          </div>

        </div>

      </div>

      {/* HOW IT WORKS */}

      <div className="py-16 px-6 bg-white">

        <h2 className="text-3xl font-bold text-center text-[#0B1F3A] mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">

          <div>
            <h3 className="text-xl font-semibold mb-2">
              1. Upload Resume
            </h3>
            <p className="text-gray-600">
              Upload your resume and choose the job role you want to apply for.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              2. AI Analysis
            </h3>
            <p className="text-gray-600">
              Our AI analyzes your resume, skills, and keywords instantly.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              3. Get Results
            </h3>
            <p className="text-gray-600">
              View your ATS score, matched skills, and suggestions for
              improving your resume.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Home;