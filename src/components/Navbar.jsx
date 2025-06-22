import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Services", "About", "Contact"];

  return (
    <>
      <nav className="sticky top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 shadow-lg transition-all duration-300">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img
              src="/logo.jpg"
              alt="Grove Link Consult Logo"
              className="h-10 sm:h-12 w-auto rounded-full border border-green-600 shadow-md"
            />
            <span className="text-xl sm:text-2xl font-extrabold text-green-800 tracking-wide">
              Grove Link
            </span>
          </ScrollLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-base sm:text-lg font-medium text-gray-700 hover:text-green-600 transition-colors cursor-pointer"
              >
                {item}
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            style={{ touchAction: "manipulation" }}
          >
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden animate-slideDown bg-white/90 backdrop-blur-lg shadow-lg border-t border-gray-200"
          >
            <div className="flex flex-col px-6 py-6 space-y-6">
              {navItems.map((item) => (
                <ScrollLink
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors cursor-pointer"
                >
                  {item}
                </ScrollLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease forwards;
        }
      `}</style>
    </>
  );
}
