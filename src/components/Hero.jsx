import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function HeroSection() {
  const drops = Array.from({ length: 80 }); // more drops for denser effect

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/back.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-0"></div>

      {/* White Dot Rain */}
      {drops.map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-rain"
          style={{
            width: `${Math.random() * 3 + 1}px`, // small circles: 1px to 4px
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            backgroundColor: "white",
            opacity: Math.random() * 0.5 + 0.3,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 w-full max-w-3xl sm:max-w-5xl flex flex-col items-center">
        <img
          src="/logo.webp"
          alt="Grove Link Consult Logo"
          className="w-20 sm:w-28 md:w-32 h-auto mb-4 sm:mb-6 animate-fadeInUp"
        />

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-transparent bg-clip-text drop-shadow-2xl animate-fadeInUp whitespace-normal">
          Partnering for Lasting Impact
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xl sm:max-w-2xl text-gray-200 mb-8 sm:mb-12 leading-relaxed animate-fadeInUp delay-200 px-2">
          Welcome to{" "}
          <span className="text-yellow-300 font-semibold">
            Grove Link Consult
          </span>
          , where your vision meets expert guidance to create meaningful,
          sustainable change. We partner with organizations across sectors to
          deliver tailored solutions that drive real, lasting impact.
        </p>

        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer inline-block px-6 sm:px-10 py-3 sm:py-4 bg-yellow-400 text-green-900 font-bold rounded-full hover:bg-yellow-500 transition transform hover:scale-105 sm:hover:scale-110 shadow-lg sm:shadow-xl hover:shadow-2xl animate-fadeInUp delay-400 text-sm sm:text-lg"
        >
          Let’s Work Together
        </ScrollLink>
      </div>

      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 1s ease forwards; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }

        @keyframes rain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(110vh); opacity: 0; }
        }
        .animate-rain {
          animation: rain linear infinite;
        }
      `}</style>
    </section>
  );
}
