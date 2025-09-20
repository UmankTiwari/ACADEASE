import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home.jsx";
import StudentLife from "./StudentLife.jsx";
import PythonLessons from "./components/PythonLessons.jsx";
import ComputerBasics from "./components/ComputerBasics.jsx";
import TerminalBasics from "./components/TerminalBasics.jsx";
import BitsTransistors from "./components/BitsTransistors.jsx";

function Stub({ title }) {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-600 text-lg">Content coming soon. Use the search to jump between topics.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Learning Module Routes */}
        <Route path="/topics/python" element={<PythonLessons />} />
        <Route path="/topics/computer-basics" element={<ComputerBasics />} />
        <Route path="/topics/terminal" element={<TerminalBasics />} />
        <Route path="/topics/bits-transistors" element={<BitsTransistors />} />
        <Route path="/topics/student-life" element={<StudentLife />} />

        {/* 404 */}
        <Route path="*" element={<Stub title="Page Not Found" />} />
      </Routes>
    </BrowserRouter>
  );
}