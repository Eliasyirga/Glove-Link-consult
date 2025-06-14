import React, { useState, useEffect } from "react";
import aboutDetailImg from "../assets/about.jpg";

export default function AboutDetail() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define font sizes based on screen width
  // You can adjust these breakpoints & sizes as you want
  const getFontSize = (index) => {
    if (screenWidth < 480) return "0.75rem"; // mobile small font
    if (screenWidth < 768) return "0.875rem"; // small tablets
    return "1rem"; // default base font size for larger screens
  };

  const getHeadingSize = () => {
    if (screenWidth < 480) return "1.5rem";
    if (screenWidth < 768) return "1.875rem";
    return "3rem";
  };

  const getHighlightSize = () => {
    if (screenWidth < 480) return "0.875rem";
    if (screenWidth < 768) return "1rem";
    return "1.125rem";
  };

  return (
    <section
      className="py-24 px-6 relative text-green-900"
      style={{
        backgroundImage: `url(${aboutDetailImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <style>{`
        @keyframes slideInLeftFade {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .slideInLeftFade {
          animation: slideInLeftFade 0.8s ease forwards;
        }
      `}</style>

      <div
        className="relative z-10 max-w-4xl mx-auto rounded-3xl p-8 md:p-12 shadow-2xl space-y-8 md:space-y-10 transform transition-transform duration-300 hover:scale-[1.02]"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <h2
          className="font-serif font-extrabold text-green-900 drop-shadow-md mb-2"
          style={{ fontSize: getHeadingSize() }}
        >
          About{" "}
          <span
            className="text-yellow-500 tracking-wide drop-shadow-md"
            style={{ fontSize: getHighlightSize() }}
          >
            Grove Link Consult
          </span>
        </h2>

        <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-yellow-400 via-yellow-500 to-green-400 rounded-full mb-6 md:mb-8 shadow-lg" />

        {[
          `At Grove Link Consult, we believe that lasting impact is created through strong partnerships and thoughtful solutions. Founded on the principles of integrity, collaboration, and innovation, we are dedicated to helping organizations navigate complex challenges and unlock their full potential.`,
          `Our team brings together diverse expertise in strategy, research, policy analysis, and project management across sectors including finance, agriculture, governance, and development. We combine deep local knowledge with global best practices to design and implement initiatives that are not only effective but sustainable over the long term.`,
          `We work closely with our clients, understanding their unique needs and aspirations, to co-create strategies and solutions that drive real change. Whether supporting a start-up, advising government agencies, or partnering with international development actors, Grove Consult is committed to delivering value that lasts.`,
          `At the heart of our approach is a commitment to ethical, inclusive, and transparent practices — ensuring that every project contributes positively to communities, stakeholders, and the environment.`,
        ].map((text, index) => (
          <p
            key={index}
            className="leading-relaxed text-green-900 text-justify tracking-wide border-l-8 pl-5 slideInLeftFade"
            style={{
              borderColor: `hsl(${120 - index * 20}, 70%, 50%)`,
              animationDelay: `${index * 0.3}s`,
              fontSize: getFontSize(index),
            }}
          >
            {text}
          </p>
        ))}

        <p
          className="text-yellow-600 font-semibold tracking-wide pt-4 drop-shadow-md border-l-8 pl-5 slideInLeftFade"
          style={{
            borderColor: "hsl(45, 90%, 55%)",
            animationDelay: "1.2s",
            fontSize:
              screenWidth < 480
                ? "0.75rem"
                : screenWidth < 768
                ? "0.875rem"
                : "1.125rem",
          }}
        >
          Partner with{" "}
          <span className="text-yellow-500 font-bold">Grove Consult</span> and
          let’s create lasting impact together.
        </p>
      </div>
    </section>
  );
}
