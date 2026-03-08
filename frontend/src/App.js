import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Result from "./pages/Result"; // ✅ Import Result page
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/result" element={<Result />} />  {/* ✅ Add Result route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;