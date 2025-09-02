import React, { useEffect } from "react";
import aboutDetailImg from "../assets/about.jpg";
import { motion } from "framer-motion";

export default function AboutDetail() {
  useEffect(() => {
    const paragraphs = document.querySelectorAll(".slideInLeftFade");
    paragraphs.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.3}s`;
    });
  }, []);

  return (
    <section
      className="relative py-16 px-4 sm:px-6 md:py-20 text-white w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutDetailImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Slide-in animation */}
      <style>{`
        @keyframes slideInLeftFade {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .slideInLeftFade {
          animation: slideInLeftFade 0.8s ease forwards;
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto rounded-2xl p-6 sm:p-8 md:p-12 bg-white/10 shadow-lg space-y-6 sm:space-y-8 hover:scale-[1.01] transition-transform duration-300"
      >
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-white drop-shadow-lg">
          About{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
            Grove Link Consult
          </span>
        </h2>

        {/* Divider */}
        <div className="h-1 w-20 sm:w-24 md:w-28 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-green-400 shadow-md" />

        {/* Paragraphs */}
        {[
          `At Grove Link Consult, we believe that lasting impact is created through strong partnerships and thoughtful solutions. Founded on the principles of integrity, collaboration, and innovation, we are dedicated to helping organizations navigate complex challenges and unlock their full potential.`,
          `Our team brings together diverse expertise in strategy, research, policy analysis, and project management across sectors including finance, agriculture, governance, and development. We combine deep local knowledge with global best practices to design and implement initiatives that are not only effective but sustainable over the long term.`,
          `We work closely with our clients, understanding their unique needs and aspirations, to co-create strategies and solutions that drive real change. Whether supporting a start-up, advising government agencies, or partnering with international development actors, Grove Consult is committed to delivering value that lasts.`,
          `At the heart of our approach is a commitment to ethical, inclusive, and transparent practices — ensuring that every project contributes positively to communities, stakeholders, and the environment.`,
        ].map((text, index) => (
          <p
            key={index}
            className="text-sm sm:text-base md:text-lg leading-relaxed tracking-wide text-justify border-l-4 sm:border-l-6 pl-4 sm:pl-5 slideInLeftFade hover:translate-x-1 transition-transform duration-300"
            style={{ borderColor: `hsl(${120 - index * 20}, 70%, 50%)` }}
          >
            {text}
          </p>
        ))}

        {/* Call to Action */}
        <p
          className="text-sm sm:text-base md:text-lg font-semibold tracking-wide border-l-4 sm:border-l-6 pl-4 sm:pl-5 pt-4 slideInLeftFade bg-gradient-to-r from-yellow-400 via-yellow-300 to-green-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          style={{ borderColor: "hsl(45, 90%, 55%)" }}
        >
          Partner with <span className="font-bold">Grove Consult</span> and
          let’s create lasting impact together.
        </p>
      </motion.div>
    </section>
  );
}
