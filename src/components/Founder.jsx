import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const expertiseList = [
  "Credit risk assessment and restructuring",
  "Project design, evaluation, and execution",
  "Digital finance and financial inclusion strategy",
  "Monitoring & evaluation frameworks",
  "Institutional transformation and stakeholder engagement",
  "Academic research, training, and curriculum development",
];

const bioParagraphs = [
  `Netsanet Yirga is the Founder and CEO of Grove Consult, bringing an extensive experience in banking, consulting, research, and academia. Known for his strategic insight and results-oriented leadership, Netsanet has built a reputation for driving institutional transformation and delivering tailored solutions that generate lasting impact.`,
  `Before founding Grove Consult, Netsanet held senior roles in Ethiopia’s financial sector. As Deputy Chief Credit Officer at NIB International Bank, he played a critical role during a period of institutional crisis marked by a liquidity crunch and governance failures. He led the redesign of the entire credit value chain, improving asset quality and reversing the bank’s declining performance.`,
  `Previously, as Director of Microbusiness Banking at the Commercial Bank of Ethiopia (CBE), Netsanet led the bank’s efforts to expand financial inclusion through innovation and digital finance. His department introduced several uncollateralized digital lending products via the bank’s digital platforms and in partnership with Ethio Telecom that targets MSMEs, women, youth, and smallholder farmers.`,
  `In this role, he also led strategic partnerships with major stakeholders including the Mastercard Foundation, SNV, Safaricom, and other governmental and non-governmental organizations, playing a central role in the design and rollout of inclusive financial products.`,
  `Netsanet also served as a Project Manager in CBE’s institution-wide transformation program, contributing to the bank’s turnaround by leading reforms in asset quality and credit management—two historically weak areas.`,
  `His professional journey began at the Development Bank of Ethiopia, where he developed strong foundations in credit analysis and project finance. He then transitioned to academia, joining Dilla University as a lecturer. There, he developed and delivered specialized teaching modules and conducted business and economic research, with findings published in peer-reviewed journals.`,
  `Netsanet is a Certified Management Consultant by the Ethiopian Management Institute and has advised a wide range of clients on strategy, credit, market development, and institutional strengthening.`,
  `Netsanet is widely recognized for his ability to lead under pressure, translate complexity into action, and build strategic partnerships that create shared value.`,
];

export default function Founder() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 640);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % bioParagraphs.length);
  const handleBack = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? bioParagraphs.length - 1 : prev - 1
    );

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-tr from-green-100 via-white to-yellow-100 shadow-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-12 rounded-3xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 mb-16 sm:mb-20">
          {/* Text Info */}
          <div className="flex-1 text-center sm:text-left space-y-3">
            <h2 className="text-2xl sm:text-5xl font-extrabold text-green-900 leading-tight tracking-tight">
              Netsanet Yirga
            </h2>
            <p className="text-base sm:text-2xl font-semibold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Founder & CEO, Grove Link Consult
            </p>
            <p className="text-sm sm:text-base text-green-900 max-w-md mx-auto sm:mx-0 leading-relaxed">
              Certified Management Consultant | Strategic Advisor | Former
              Executive Banker and Lecturer
            </p>
          </div>

          {/* Image */}
          <motion.img
            src="/photo.jpg"
            alt="Netsanet Yirga"
            className="w-36 sm:w-52 h-36 sm:h-52 rounded-3xl shadow-xl object-cover border-4 border-yellow-400 hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Bio */}
        <div className="max-w-4xl mx-auto space-y-10 text-justify">
          {isMobile ? (
            <div className="bg-yellow-50/90 backdrop-blur-sm rounded-xl shadow-md p-5 border-l-4 border-yellow-400">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  className="text-gray-900 text-[clamp(0.85rem,2.5vw,1rem)] leading-relaxed"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  {bioParagraphs[currentIndex]}
                </motion.p>
              </AnimatePresence>

              {/* Mobile Nav */}
              <div className="mt-6 flex justify-between items-center">
                <button
                  onClick={handleBack}
                  className="text-green-700 hover:text-green-900 text-2xl p-2 bg-yellow-100 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                  <FiChevronLeft />
                </button>
                <button
                  onClick={handleNext}
                  className="text-green-700 hover:text-green-900 text-2xl p-2 bg-yellow-100 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          ) : (
            bioParagraphs.map((text, i) => (
              <motion.p
                key={i}
                className="border-l-4 border-yellow-400 pl-6 pr-4 py-6 text-gray-900 text-base sm:text-lg bg-yellow-50/90 rounded-xl shadow-md leading-relaxed"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                {text}
              </motion.p>
            ))
          )}
        </div>

        {/* Expertise Tags */}
        <div className="mt-16 sm:mt-24">
          <h3 className="text-xl sm:text-3xl font-extrabold text-green-800 mb-8 inline-block max-w-6xl mx-auto px-4 sm:px-12">
            <span className="border-b-2 border-green-500 pb-1">
              Areas of Expertise
            </span>
          </h3>

          {/* FULL WIDTH WRAPPER */}
          <div className="w-full max-w-none mx-auto px-0">
            <div className="flex flex-wrap justify-center sm:justify-start gap-y-4 gap-x-0 sm:gap-4 max-w-6xl mx-auto px-4 sm:px-12">
              {expertiseList.map((item, index) => (
                <motion.span
                  key={index}
                  className="
            relative
            w-full sm:w-auto h-14
            bg-gradient-to-br from-green-500 via-green-600 to-emerald-600
            text-white text-sm sm:text-base font-semibold
            px-6 sm:px-8 py-3
            flex items-center justify-center
            rounded-xl sm:rounded-full
            shadow-md shadow-green-300/30
            backdrop-blur-md bg-opacity-80
            hover:scale-[1.03] hover:shadow-lg transition-all duration-300
          "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 hidden sm:inline-block"></span>
                  <span className="text-center w-full">{item}</span>
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
