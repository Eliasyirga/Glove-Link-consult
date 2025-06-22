import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Strategy & Advisory",
    icon: "📊",
    description:
      "Crafting data-driven strategies that align with your goals and deliver measurable results.",
  },
  {
    title: "Research & Policy Analysis",
    icon: "📚",
    description:
      "Providing deep insights to shape effective policies and programs.",
  },
  {
    title: "Project Design & Management",
    icon: "🛠️",
    description:
      "Turning ideas into action with efficient, impactful project execution.",
  },
  {
    title: "Capacity Building & Training",
    icon: "🧠",
    description:
      "Empowering teams with the skills and tools to succeed long-term.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-green-800">
        What We Do?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const delay = index * 0.1;
          return <AnimatedCard key={index} delay={delay} service={service} />;
        })}
      </div>
    </section>
  );
}

function AnimatedCard({ service, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border-t-4 border-green-400"
    >
      <div className="text-3xl sm:text-4xl mb-4">{service.icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-2">
        {service.title}
      </h3>
      <p className="text-sm sm:text-base text-green-900 leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}
