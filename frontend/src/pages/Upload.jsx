import React from "react";
import Navbar from "../components/Navbar";
import ResumeUpload from "../components/ResumeUpload";

function Upload() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
        <ResumeUpload />
      </div>
    </>
  );
}

export default Upload;
