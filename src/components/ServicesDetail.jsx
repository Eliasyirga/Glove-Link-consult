import React from "react";
import { ChartBar, BookOpen, Hammer, Brain, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <ChartBar />,
    title: "Strategy & Business Advisory",
    description:
      "We help you define your direction, strengthen operations, and make informed decisions.",
    points: [
      "Business model development",
      "Strategic and operational planning",
      "Market entry and growth strategies",
      "Organizational reviews and restructuring",
    ],
  },
  {
    icon: <BookOpen />,
    title: "Research & Policy Analysis",
    description:
      "We conduct rigorous, context-aware research to inform policy, program, and investment decisions.",
    points: [
      "Sectoral and thematic studies",
      "Socioeconomic and impact assessments",
      "Regulatory and policy reviews",
      "Baseline, midline, and endline evaluations",
    ],
  },
  {
    icon: <Hammer />,
    title: "Project Design & Implementation",
    description:
      "From concept to execution, we support high-impact initiatives that deliver measurable outcomes.",
    points: [
      "Project ideation and proposal development",
      "Results-based management (RBM) frameworks",
      "Monitoring & evaluation (M&E) systems",
      "Technical assistance and program management",
    ],
  },
  {
    icon: <Brain />,
    title: "Capacity Building & Training",
    description:
      "We build institutional and individual capacity through targeted training and coaching.",
    points: [
      "Leadership and change management",
      "Financial literacy and business skills",
      "Public sector capacity development",
      "Customized workshops and learning sessions",
    ],
  },
  {
    icon: <Handshake />,
    title: "Partnership Development & Stakeholder Engagement",
    description:
      "We facilitate collaboration between sectors, aligning interests for shared success.",
    points: [
      "Stakeholder mapping and dialogue facilitation",
      "Public-private partnership (PPP) development",
      "Consortium and network building",
      "Communications and advocacy strategy",
    ],
    fullWidth: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

export default function ServicesDetail() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl shadow-2xl max-w-screen-xl mx-auto">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-900 mb-3 tracking-tight drop-shadow-sm">
          Our Services
        </h2>
        <p className="text-lg sm:text-xl text-green-800 font-semibold">
          Strategic Solutions for Sustainable Growth
        </p>
        <p className="text-base text-green-700 mt-3 max-w-xl mx-auto leading-relaxed">
          At Grove Consult, we offer consulting services to help organizations
          achieve clarity, resilience, and success. Our approach is
          collaborative, evidence-based, and impact-driven.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-2 sm:px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`p-6 sm:p-8 bg-white border-l-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${
              service.fullWidth ? "md:col-span-2" : ""
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            custom={index}
            style={{
              borderColor: `hsl(${120 - index * 20}, 80%, 45%)`,
              boxShadow: `0 3px 10px -2px hsla(${
                120 - index * 20
              }, 80%, 45%, 0.3)`,
            }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div
                className="p-3 sm:p-4 rounded-full shadow"
                style={{
                  background: `linear-gradient(135deg, hsl(${
                    120 - index * 20
                  }, 90%, 55%), hsl(${120 - index * 20}, 70%, 40%))`,
                }}
              >
                {React.cloneElement(service.icon, {
                  className: "w-5 h-5 sm:w-6 sm:h-6 text-white",
                })}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-green-900 leading-tight">
                {service.title}
              </h3>
            </div>

            <p className="mb-4 text-green-800 text-sm sm:text-base leading-relaxed">
              {service.description}
            </p>
            <ul className="list-disc list-inside text-green-700 text-sm sm:text-base space-y-1">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
