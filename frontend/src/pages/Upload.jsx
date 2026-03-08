import React from "react";
import Navbar from "../components/Navbar";
import ResumeUpload from "../components/ResumeUpload";
import Footer from "../components/Footer";
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
          className="w-full h-[320px] object-cover"
        />
      </div>

      {/* Upload Section */}

      <div className="bg-gray-50 py-20 flex justify-center">

        <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-lg border">

          <h1 className="text-3xl font-bold text-[#0B1F3A] text-center mb-6">
            Upload Resume
          </h1>

          <ResumeUpload />

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Upload;