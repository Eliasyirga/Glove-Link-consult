import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaChartLine, FaBook, FaProjectDiagram, FaUsers } from "react-icons/fa";

const services = [
  {
    title: "Strategy & Advisory",
    icon: <FaChartLine />,
    description:
      "Crafting data-driven strategies that align with your goals and deliver measurable results.",
  },
  {
    title: "Research & Policy Analysis",
    icon: <FaBook />,
    description:
      "Providing deep insights to shape effective policies and programs.",
  },
  {
    title: "Project Design & Management",
    icon: <FaProjectDiagram />,
    description:
      "Turning ideas into action with efficient, impactful project execution.",
  },
  {
    title: "Capacity Building & Training",
    icon: <FaUsers />,
    description:
      "Empowering teams with the skills and tools to succeed long-term.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-gray-50 py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800 drop-shadow-sm">
        What We Do
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 cursor-pointer overflow-visible group"
    >
      {/* Icon */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl shadow-md group-hover:scale-105 transition-transform duration-300 z-10">
        {service.icon}
      </div>

      {/* Content */}
      <div className="pt-14 sm:pt-16 md:pt-20 px-4 sm:px-6 md:px-8 pb-6 text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
          {service.title}
        </h3>
        <p className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Decorative accents */}
      <div className="absolute -bottom-4 -right-4 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-green-100 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute -top-4 -left-4 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-green-200 rounded-full opacity-20 blur-lg"></div>
    </motion.div>
  );
}
