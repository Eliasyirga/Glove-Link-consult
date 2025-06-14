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
    <section className="bg-green-50 py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-14 text-green-800">
        What We Do?
      </h2>
      <div className="grid gap-8 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-green-400"
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-semibold text-green-700 mb-3">
        {service.title}
      </h3>
      <p className="text-green-900 text-sm">{service.description}</p>
    </motion.div>
  );
}
