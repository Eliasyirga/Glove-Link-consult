import React from "react";
import {
  FaUniversity,
  FaChartLine,
  FaHandshake,
  FaPiggyBank,
} from "react-icons/fa";

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
    <section className="w-full bg-gradient-to-tr from-green-100 via-white to-green-200 relative overflow-hidden py-16 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-28">
      {/* Floating blobs */}
      <div className="pointer-events-none absolute -top-36 -left-36 w-72 h-72 sm:w-96 sm:h-96 rounded-[45%] bg-green-300/30 blur-3xl animate-blob"></div>
      <div className="pointer-events-none absolute -bottom-36 -right-32 w-64 h-64 sm:w-80 sm:h-80 rounded-[40%] bg-yellow-300/25 blur-3xl animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-green-900 tracking-tight drop-shadow-md mb-3">
          Our Team
        </h2>
        <div className="w-20 sm:w-24 h-1 mx-auto mb-10 rounded-full bg-gradient-to-r from-green-400 to-yellow-300 shadow-lg"></div>

        <p className="max-w-2xl sm:max-w-3xl mx-auto text-base sm:text-lg text-green-900/90 font-light leading-relaxed mb-16 sm:mb-20 px-2">
          Grove Link Consult is powered by a team of highly qualified
          professionals with diverse experience across banking, academia, and
          strategic consulting.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 max-w-6xl mx-auto">
          {teamExpertise.map(({ title, icon, description }, idx) => (
            <article
              key={title}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-md border border-green-200 p-6 sm:p-8 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-500 ease-in-out"
              style={{
                animation: `fadeInUp 0.7s ease forwards`,
                animationDelay: `${idx * 0.15}s`,
                opacity: 0,
              }}
            >
              <div className="flex items-start gap-4 sm:gap-5 mb-5 sm:mb-6">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-tr from-green-400 to-yellow-300 text-white shadow-lg">
                  {React.cloneElement(icon, {
                    className: "w-5 h-5 sm:w-6 sm:h-6",
                  })}
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-green-900 leading-snug">
                  {title}
                </h3>
              </div>

              <p className="text-green-900/90 text-sm sm:text-base font-medium leading-relaxed tracking-wide text-justify">
                {description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-16 sm:mt-24 max-w-3xl mx-auto text-center text-green-900/70 font-light leading-relaxed text-base sm:text-lg px-2">
          This multidisciplinary blend equips us to deliver evidence-based,
          practical, and sustainable solutions tailored to our clients’ needs.
        </p>
      </div>

      {/* Animations */}
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
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
