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
      icon: <FaPiggyBank className="text-green-600 w-8 h-8" />,
      description:
        "Our experts have held key roles in commercial and development banks, with deep knowledge in credit analysis, regulatory compliance, investment structuring, and financial sector policy.",
    },
    {
      title: "Academic & Research",
      icon: <FaUniversity className="text-green-600 w-8 h-8" />,
      description:
        "Team members hold advanced degrees and have served as university lecturers and researchers, contributing to national economic and policy discourse through publications and advisory roles.",
    },
    {
      title: "Strategy & Organizational Development",
      icon: <FaChartLine className="text-green-600 w-8 h-8" />,
      description:
        "We bring practical experience in strategic planning, institutional reform, and performance improvement across public, private, and nonprofit sectors.",
    },
    {
      title: "Cross-sector Engagement",
      icon: <FaHandshake className="text-green-600 w-8 h-8" />,
      description:
        "Our consultants have worked with government bodies, private enterprises, and development partners on policy reforms, capacity building, and program evaluation.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-tr from-green-100 via-white to-green-200 relative overflow-hidden py-24 px-6 sm:px-12 lg:px-24">
      {/* Floating animated blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-green-300/30 blur-3xl animate-blob"></div>
      <div className="pointer-events-none absolute -bottom-44 -right-36 w-80 h-80 rounded-full bg-yellow-300/25 blur-3xl animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-green-800 tracking-tight drop-shadow-md mb-10">
          Our Team
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-black/80 font-light leading-relaxed mb-16">
          Grove Link Consult is powered by a team of highly qualified
          professionals with diverse experience across banking, academia, and
          strategic consulting.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {teamExpertise.map(({ title, icon, description }) => (
            <article
              key={title}
              className="flex items-start gap-6 bg-white rounded-3xl shadow-lg border border-green-200 p-8
                hover:shadow-xl hover:scale-[1.04] transition-transform duration-300 ease-in-out cursor-pointer"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600 shadow-inner">
                {icon}
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-green-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-800 font-medium leading-relaxed text-justify">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-20 max-w-4xl mx-auto text-center text-black/70 font-light leading-relaxed text-lg">
          This multidisciplinary blend equips us to deliver evidence-based,
          practical, and sustainable solutions tailored to our clients’ needs.
        </p>
      </div>

      {/* Blob animation */}
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
