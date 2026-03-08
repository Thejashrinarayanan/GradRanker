import React from "react";
import Navbar from "../components/Navbar";
import ResumeUpload from "../components/ResumeUpload";
import banner from "../assets/home_banner.png";

function Upload() {
  return (
    <>
      <Navbar />

      {/* Banner */}

      <div className="w-full">
        <img
          src={banner}
          alt="Upload Banner"
          className="w-full h-[300px] object-cover"
        />
      </div>

      {/* Upload Section */}

      <div className="bg-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold text-[#0B1F3A] mb-4">
          Upload Your Resume
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Upload your resume and let GradRanker's AI evaluate your profile.
          Our system will analyze your skills, keywords, and experience to
          provide an ATS compatibility score and improvement suggestions.
        </p>

        <div className="flex justify-center">
          <ResumeUpload />
        </div>

      </div>

      {/* Resume Tips */}

      <div className="bg-gray-100 py-16 px-6">

        <h2 className="text-3xl font-bold text-center text-[#0B1F3A] mb-12">
          Tips for Better Resume Ranking
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
            <h3 className="text-xl font-semibold mb-3">
              Use Relevant Keywords
            </h3>
            <p className="text-gray-600">
              Include industry keywords related to your job role so
              ATS systems can easily detect your expertise.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
            <h3 className="text-xl font-semibold mb-3">
              Highlight Your Skills
            </h3>
            <p className="text-gray-600">
              Clearly mention technical and soft skills that match
              the job requirements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
            <h3 className="text-xl font-semibold mb-3">
              Keep It Structured
            </h3>
            <p className="text-gray-600">
              Use clear headings like Education, Skills, and Experience
              so the AI parser can read your resume correctly.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Upload;