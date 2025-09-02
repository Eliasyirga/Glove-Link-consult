// LoadingPage.jsx
import React from "react";

export default function LoadingPage() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-gradient-to-br from-green-700 to-green-900">
      {/* Logo */}
      <img
        src="/logo.webp" // Place your logo in the public folder
        alt="GroveLink Consult Logo"
        className="w-24 sm:w-32 md:w-40 h-auto mb-6 animate-fadeInUp"
      />

      {/* Spinner */}
      <div className="w-20 h-20 border-4 border-yellow-400 border-t-transparent border-r-transparent rounded-full animate-spin shadow-lg"></div>

      <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-300 drop-shadow-lg animate-fadeInUp">
        GroveLink Consult
      </h1>

      <p className="mt-2 text-yellow-100 text-sm sm:text-base animate-fadeInUp delay-200">
        Loading, please wait...
      </p>

      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 1s ease forwards; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  );
}
