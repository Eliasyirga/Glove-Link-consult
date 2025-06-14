import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function HeroSection() {
  return (
    <section
      className="relative py-20 text-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/back.jpg')" }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50 z-0"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 px-4 flex flex-col items-center">
        <img
          src="/logo.jpg"
          alt="Grove Link Consult Logo"
          className="w-32 h-auto mb-6"
        />

        <h1
          className="text-5xl font-extrabold mb-4 text-yellow-400"
          style={{
            textShadow:
              "2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 10px rgba(0, 0, 0, 0.7)",
          }}
        >
          Partnering for Lasting Impact
        </h1>

        <p
          className="text-xl max-w-3xl text-green-100 mb-8"
          style={{
            textShadow: "1px 1px 6px rgba(0,0,0,0.6)",
          }}
        >
          Welcome to Grove Link Consult, where your vision meets expert guidance
          to create meaningful, sustainable change.
        </p>

        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-70} // adjust if you have fixed headers
          className="cursor-pointer inline-block px-8 py-3 bg-yellow-400 text-green-900 font-bold rounded-2xl hover:bg-yellow-500 transition shadow-lg hover:shadow-xl z-10"
        >
          Let’s Work Together
        </ScrollLink>
      </div>
    </section>
  );
}
