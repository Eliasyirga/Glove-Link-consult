import React from "react";
import aboutDetailImg from "../assets/about.jpg";

export default function AboutDetail() {
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
      {/* Dark overlay full width */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Add keyframes style for animation */}
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

      {/* Card container with stronger blur and more translucent background */}
      <div
        className="relative z-10 max-w-4xl mx-auto rounded-3xl p-8 md:p-12 shadow-2xl space-y-8 md:space-y-10 transform transition-transform duration-300 hover:scale-[1.02]"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-green-900 drop-shadow-md mb-2">
          About{" "}
          <span className="text-yellow-500 tracking-wide drop-shadow-md">
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
            className={`leading-relaxed text-sm md:text-base text-green-900 text-justify tracking-wide border-l-8 pl-5 slideInLeftFade`}
            style={{
              borderColor: `hsl(${120 - index * 20}, 70%, 50%)`,
              animationDelay: `${index * 0.3}s`,
            }}
          >
            {text}
          </p>
        ))}

        <p
          className="text-yellow-600 font-semibold text-base md:text-lg tracking-wide pt-4 drop-shadow-md border-l-8 pl-5 slideInLeftFade"
          style={{
            borderColor: "hsl(45, 90%, 55%)",
            animationDelay: "1.2s",
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
