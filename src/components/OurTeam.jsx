import React from "react";
import {
  FaUniversity,
  FaChartLine,
  FaHandshake,
  FaPiggyBank,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function OurTeam() {
  const teamExpertise = [
    {
      title: "Banking & Finance",
      icon: <FaPiggyBank />,
      description:
        "Our experts have held key roles in commercial and development banks, with deep knowledge in credit analysis, regulatory compliance, investment structuring, and financial sector policy.",
    },
    {
      title: "Academic & Research",
      icon: <FaUniversity />,
      description:
        "Team members hold advanced degrees and have served as university lecturers and researchers, contributing to national economic and policy discourse through publications and advisory roles.",
    },
    {
      title: "Strategy & Organizational Development",
      icon: <FaChartLine />,
      description:
        "We bring practical experience in strategic planning, institutional reform, and performance improvement across public, private, and nonprofit sectors.",
    },
    {
      title: "Cross-sector Engagement",
      icon: <FaHandshake />,
      description:
        "Our consultants have worked with government bodies, private enterprises, and development partners on policy reforms, capacity building, and program evaluation.",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-tr from-green-100 via-white to-green-200 py-16 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-28 overflow-hidden">
      {/* Floating Blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-72 h-72 sm:w-96 sm:h-96 rounded-[45%] bg-green-300/30 blur-3xl animate-blob"></div>
      <div className="pointer-events-none absolute -bottom-40 -right-36 w-64 h-64 sm:w-80 sm:h-80 rounded-[40%] bg-yellow-300/25 blur-3xl animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 tracking-tight drop-shadow-md mb-3">
          Our Team
        </h2>
        <div className="w-20 sm:w-24 h-1 mx-auto mb-10 rounded-full bg-gradient-to-r from-green-400 to-yellow-300 shadow-lg"></div>

        <p className="max-w-2xl sm:max-w-3xl mx-auto text-base sm:text-lg text-green-900/90 font-light leading-relaxed mb-12 px-2">
          Grove Link Consult is powered by a team of highly qualified
          professionals with diverse experience across banking, academia, and
          strategic consulting.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {teamExpertise.map(({ title, icon, description }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.15, duration: 0.5, ease: "easeOut" }}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-green-200 p-4 sm:p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-400 flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-green-400 to-yellow-300 text-white shadow-md text-2xl mb-4">
                {React.cloneElement(icon, {
                  className: "w-6 h-6 sm:w-7 sm:h-7",
                })}
              </div>
              <h3 className="text-md sm:text-lg font-bold text-green-900 mb-2">
                {title}
              </h3>
              <p className="text-green-900/80 text-sm sm:text-sm leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 sm:mt-16 max-w-3xl mx-auto text-center text-green-900/70 font-light leading-relaxed text-base sm:text-lg px-2">
          This multidisciplinary blend equips us to deliver evidence-based,
          practical, and sustainable solutions tailored to our clients’ needs.
        </p>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 30px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite ease-in-out;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
