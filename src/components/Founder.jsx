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
  `Before founding Grove Consult, Netsanet held senior roles in Ethiopia’s financial sector. As Deputy Chief Credit Officer at NIB International Bank, he played a critical role during a period of institutional crisis marked by a liquidity crunch and governance failures. He led the redesign of the entire credit value chain, improving asset quality and reversing the bank’s declining performance. Under his leadership, and as part of the new executive team, the bank achieved strong performance improvements across all key indicators.`,
  `Previously, as Director of Microbusiness Banking at the Commercial Bank of Ethiopia (CBE), Netsanet led the bank’s efforts to expand financial inclusion through innovation and digital finance. His department introduced several uncollateralized digital lending products via the bank’s digital platforms and in partnership with Ethio Telecom that targets MSMEs, women, youth, and smallholder farmers.`,
  `In this role, he also led strategic partnerships with major stakeholders including the Mastercard Foundation, SNV, Safaricom, and other governmental and non-governmental organizations, playing a central role in the design and rollout of inclusive financial products.`,
  `Netsanet also served as a Project Manager in CBE’s institution-wide transformation program, contributing to the bank’s turnaround by leading reforms in asset quality and credit management—two historically weak areas. His work helped reposition CBE for long-term competitiveness and operational efficiency.`,
  `His professional journey began at the Development Bank of Ethiopia, where he developed strong foundations in credit analysis and project finance. He then transitioned to academia, joining Dilla University as a lecturer. There, he developed and delivered specialized teaching modules and conducted business and economic research, with findings published in peer-reviewed journals.`,
  `Netsanet is a Certified Management Consultant by the Ethiopian Management Institute and has advised a wide range of clients on strategy, credit, market development, and institutional strengthening. He is also a certified teacher educator and has taught extensively in both public and private higher education institutions.`,
  `Netsanet is widely recognized for his ability to lead under pressure, translate complexity into action, and build strategic partnerships that create shared value. His leadership at Grove Consult reflects a deep commitment to integrity, collaboration, and impact.`,
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

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % bioParagraphs.length);
  };

  const handleBack = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? bioParagraphs.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="w-screen py-24 bg-gradient-to-tr from-green-100 via-white to-yellow-100 shadow-xl"
      style={{ overflowX: "hidden" }} // prevent horizontal scroll if any
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12 rounded-3xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-12 mb-20">
          {/* Text Info */}
          <div className="flex-1 text-center sm:text-left space-y-4">
            <h2 className="text-3xl sm:text-6xl font-extrabold text-green-900 tracking-tight drop-shadow-lg">
              Netsanet Yirga
            </h2>
            <p className="text-xl sm:text-3xl font-semibold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent tracking-wide">
              Founder & CEO, Grove Link Consult
            </p>
            <p className="text-sm sm:text-lg text-green-900 font-semibold max-w-md mx-auto sm:mx-0 leading-relaxed drop-shadow-md tracking-wide">
              Certified Management Consultant | Strategic Advisor | Former
              Executive Banker and Lecturer
            </p>
          </div>

          {/* Image */}
          <motion.img
            src="/netsanet.jpg"
            alt="Netsanet Yirga"
            className="w-52 h-52 rounded-3xl shadow-2xl object-cover cursor-pointer border-4 border-yellow-400 transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-yellow-500/80"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Bio Section */}
        <div className="max-w-4xl mx-auto space-y-12 text-justify">
          {isMobile ? (
            <div className="bg-yellow-50/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-yellow-400/30 transition-shadow duration-400 p-6 border-l-6 border-yellow-400 flex flex-col">
              {/* Paragraph text first */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  className="text-gray-900 text-sm sm:text-lg font-medium leading-relaxed tracking-wide"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  {bioParagraphs[currentIndex]}
                </motion.p>
              </AnimatePresence>

              {/* Navigation buttons below paragraph */}
              <div className="mt-6 flex justify-between px-4">
                <button
                  onClick={handleBack}
                  className="text-green-700 hover:text-green-900 text-4xl transition-transform duration-300 hover:scale-125 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 bg-yellow-100/80 backdrop-blur-sm"
                  aria-label="Previous"
                >
                  <FiChevronLeft />
                </button>

                <button
                  onClick={handleNext}
                  className="text-green-700 hover:text-green-900 text-4xl transition-transform duration-300 hover:scale-125 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 bg-yellow-100/80 backdrop-blur-sm"
                  aria-label="Next"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          ) : (
            bioParagraphs.map((text, index) => (
              <motion.p
                key={index}
                className="border-l-6 border-yellow-400 pl-8 pr-6 text-gray-900 text-lg font-medium leading-relaxed tracking-wide bg-yellow-50/90 backdrop-blur-sm py-6 rounded-xl shadow-md hover:shadow-yellow-400/30 transition-shadow duration-400"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {text}
              </motion.p>
            ))
          )}
        </div>

        {/* Expertise */}
        <div className="mt-24">
          <h3 className="text-4xl font-extrabold text-green-800 mb-12 border-b-4 border-green-500 inline-block drop-shadow-md tracking-tight">
            Areas of Expertise
          </h3>
          <div className="flex flex-wrap gap-6 mt-10 justify-center sm:justify-start">
            {expertiseList.map((item, i) => (
              <motion.span
                key={i}
                className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg cursor-default select-none
                  hover:from-green-500 hover:to-green-700 hover:shadow-xl hover:scale-110 transition-transform duration-300 ease-in-out"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
