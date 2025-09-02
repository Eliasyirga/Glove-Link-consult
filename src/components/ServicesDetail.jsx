import React, { useState, useRef, useEffect } from "react";
import { ChartBar, BookOpen, Hammer, Brain, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <ChartBar />,
    title: "Strategy & Business Advisory",
    description:
      "We help you define your direction, strengthen operations, and make informed decisions.",
    details: [
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
    details: [
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
    details: [
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
    details: [
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
    details: [
      "Stakeholder mapping and dialogue facilitation",
      "Public-private partnership (PPP) development",
      "Consortium and network building",
      "Communications and advocacy strategy",
    ],
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

export default function ServicesGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const width = containerRef.current.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  const scrollToIndex = (index) => {
    if (!containerRef.current) return;
    const width = containerRef.current.offsetWidth;
    containerRef.current.scrollTo({ left: width * index, behavior: "smooth" });
  };

  // Auto-scroll every 5 seconds on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % services.length;
      scrollToIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center max-w-4xl mb-16 bg-white/20 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-green-200"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 mb-4 drop-shadow-lg">
          Our Services
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-green-800 font-semibold mb-2">
          Strategic Solutions for Sustainable Growth
        </p>
        <p className="text-sm sm:text-base md:text-lg text-green-700">
          At Grove Consult, we offer a suite of consulting services designed to
          help organizations achieve clarity, resilience, and long-term success.
          Our approach is rooted in collaboration, evidence, and results.
        </p>
      </motion.div>

      {/* Desktop Grid */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full max-w-7xl">
        {services.map((service, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 flex flex-col overflow-hidden border-l-4 border-green-400"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-green-400 to-green-600 flex items-center justify-center text-white text-2xl mb-4 shadow-md ring-4 ring-green-100">
              {React.cloneElement(service.icon, { className: "w-6 h-6" })}
            </div>
            <h3 className="text-xl font-bold text-green-900 mb-2">
              {service.title}
            </h3>
            <p className="text-green-800 text-sm mb-3">{service.description}</p>
            <ul className="list-disc pl-5 text-green-700 text-sm space-y-1">
              {service.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="sm:hidden w-full">
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-none w-full gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="snap-center flex-shrink-0 w-full relative bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 flex flex-col overflow-hidden border-l-4 border-green-400"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-green-400 to-green-600 flex items-center justify-center text-white text-2xl mb-4 shadow-md ring-4 ring-green-100">
                {React.cloneElement(service.icon, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2">
                {service.title}
              </h3>
              <p className="text-green-800 text-sm mb-3">
                {service.description}
              </p>
              <ul className="list-disc pl-5 text-green-700 text-sm space-y-1">
                {service.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === activeIndex ? "bg-green-600" : "bg-green-300"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
