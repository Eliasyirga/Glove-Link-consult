import React from "react";
import { motion } from "framer-motion";

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
  return (
    <section className="max-w-6xl my-8 mx-auto px-6 sm:px-12 py-20 bg-gradient-to-br from-green-50 via-white to-yellow-50 rounded-3xl shadow-2xl">
      {/* Header with image side-by-side */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10 mb-16">
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-5xl font-extrabold text-green-900 tracking-wide mb-3 drop-shadow-md">
            Netsanet Yirga
          </h2>
          <p className="text-2xl font-semibold text-yellow-600 mb-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Founder & CEO, Grove Link Consult
          </p>
          <p className="text-md sm:text-lg text-green-900 font-semibold max-w-md mx-auto sm:mx-0 leading-relaxed drop-shadow">
            Certified Management Consultant | Strategic Advisor | Former
            Executive Banker and Lecturer
          </p>
        </div>

        <motion.img
          src="/netsanet.jpg"
          alt="Netsanet Yirga"
          className="w-44 h-44 rounded-3xl shadow-2xl object-cover cursor-pointer
            border-4 border-yellow-400
            transition-transform duration-300 ease-in-out
            hover:scale-105 hover:shadow-yellow-400/60"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
      {/* Bio paragraphs section with proper layout */}
      <div className="max-w-4xl mx-auto space-y-10 text-justify">
        {bioParagraphs.map((text, index) => (
          <motion.p
            key={index}
            className="border-l-4 border-yellow-400 pl-6 pr-4 text-gray-900 text-lg font-medium leading-relaxed
        bg-yellow-50/70 backdrop-blur-sm
        py-4 rounded-lg shadow-lg hover:shadow-yellow-300 transition-shadow duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            viewport={{ once: true }}
          >
            {text}
          </motion.p>
        ))}
      </div>

      {/* Expertise Section */}
      <div className="mt-20">
        <h3 className="text-3xl font-extrabold text-green-800 mb-8 border-b-4 border-green-400 inline-block drop-shadow-sm">
          Areas of Expertise
        </h3>
        <div className="flex flex-wrap gap-5 mt-8 justify-center sm:justify-start">
          {expertiseList.map((item, i) => (
            <motion.span
              key={i}
              className="bg-gradient-to-r from-green-300 to-green-500 text-white px-5 py-3 rounded-full text-base font-semibold shadow-lg cursor-default
                hover:from-green-400 hover:to-green-600 hover:shadow-xl hover:scale-105
                transition-transform duration-300 ease-in-out select-none"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.12 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
