import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function HeroSection() {
  return (
    <section
      className="relative py-16 sm:py-20 text-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/back.jpg')" }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50 z-0"
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col items-center">
        {/* Logo */}
        <img
          src="/logo.jpg"
          alt="Grove Link Consult Logo"
          className="w-24 sm:w-28 md:w-32 h-auto mb-6"
        />

        {/* Title */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-yellow-400 text-shadow"
          style={{
            textShadow:
              "2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 10px rgba(0, 0, 0, 0.7)",
          }}
        >
          Partnering for Lasting Impact
        </h1>

        {/* Subheading */}
        <p
          className="text-base sm:text-lg md:text-xl max-w-2xl text-green-100 mb-8 leading-relaxed px-2 sm:px-0"
          style={{
            textShadow: "1px 1px 6px rgba(0,0,0,0.6)",
          }}
        >
          Welcome to Grove Link Consult, where your vision meets expert guidance
          to create meaningful, sustainable change. We partner with
          organizations across sectors to deliver tailored solutions that drive
          real, lasting impact.
        </p>

        {/* CTA Button */}
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer inline-block px-6 sm:px-8 py-3 bg-yellow-400 text-green-900 font-bold rounded-2xl hover:bg-yellow-500 transition shadow-lg hover:shadow-xl text-sm sm:text-base"
        >
          Let’s Work Together
        </ScrollLink>
      </div>
    </section>
  );
}
