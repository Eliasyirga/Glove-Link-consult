import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ShieldCheck,
  Users,
  Lightbulb,
  Handshake,
  Award,
  Leaf,
  RefreshCcw,
} from "lucide-react";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      label: "Integrity & Transparency",
    },
    { icon: <Users className="w-6 h-6" />, label: "Client-Centric Approach" },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      label: "Innovation & Continuous Improvement",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      label: "Collaboration & Partnership",
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "Excellence & Professionalism",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      label: "Sustainability & Long-Term Growth",
    },
    {
      icon: <RefreshCcw className="w-6 h-6" />,
      label: "Adaptability & Agility",
    },
  ];

  const cards = [
    {
      title: "Vision",
      icon: <Lightbulb className="h-8 w-8 text-yellow-300" />,
      bg: "/vision.jpg",
      text: "To be the trusted partner for businesses seeking innovative and sustainable solutions—empowering organizations to grow strategically, adapt to change, and achieve long-term success.",
    },
    {
      title: "Mission",
      icon: <ShieldCheck className="h-8 w-8 text-green-300" />,
      bg: "/mission.jpg",
      text: "At Grove Link Consult, we provide strategic advisory services that help businesses navigate challenges, seize opportunities, and drive sustainable growth. We use data-driven insights, innovation, and a client-first approach.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-green-50 via-white to-green-100 min-h-screen">
      <div className="max-w-screen-lg mx-auto backdrop-blur-xl bg-white/70 shadow-2xl border border-green-100 rounded-3xl p-6 sm:p-12">
        <h2
          data-aos="zoom-in"
          className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-16"
        >
          About Us
        </h2>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-20">
          {cards.map((card, i) => (
            <div
              key={card.title}
              data-aos={i % 2 === 0 ? "fade-up-right" : "fade-up-left"}
              className="relative h-[22rem] sm:h-[28rem] rounded-3xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-[1.04] group bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${card.bg})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-black/20 backdrop-blur-[1px] group-hover:backdrop-blur-[2px] transition-all" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 sm:px-8 text-center text-white">
                <div className="mb-4 animate-bounce-slow">{card.icon}</div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 drop-shadow-md">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90 drop-shadow-sm">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <h3
          data-aos="fade-up"
          className="text-3xl font-semibold text-green-800 text-center mb-12"
        >
          Our Core Values
        </h3>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-md mx-auto">
          {values.map((value, index) => (
            <li
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex items-start gap-4 bg-white/90 border border-green-200 rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-600 text-white shadow-md">
                {value.icon}
              </div>
              <span className="text-green-900 text-base font-medium leading-snug">
                {value.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
