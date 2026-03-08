import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white py-6 mt-10">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <h2 className="text-lg font-semibold">
          GradRanker
        </h2>

        <p className="text-sm text-gray-300">
          © 2026 GradRanker. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;