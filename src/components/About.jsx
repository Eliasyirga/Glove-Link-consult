import React, { useEffect, useState } from "react";
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
      icon: <Lightbulb className="h-10 w-10 text-yellow-400" />,
      bg: "/vision.jpg",
      text: "To be the trusted partner for businesses seeking innovative and sustainable solutions—empowering organizations to grow strategically, adapt to change, and achieve long-term success.",
    },
    {
      title: "Mission",
      icon: <ShieldCheck className="h-10 w-10 text-green-400" />,
      bg: "/mission.jpg",
      text: "At Grove Link Consult, we provide strategic advisory services that help businesses navigate challenges, seize opportunities, and drive sustainable growth. We use data-driven insights, innovation, and a client-first approach.",
    },
  ];

  // Responsive cards per view
  const [cardsPerPage, setCardsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerPage(1); // mobile
      else if (window.innerWidth < 1024) setCardsPerPage(2); // tablet
      else setCardsPerPage(4); // desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = values.length - cardsPerPage + 1;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="relative bg-gradient-to-b from-green-50 via-white to-green-100 py-24 px-6 sm:px-12 overflow-hidden w-full">
      {/* Header */}
      <div className="text-center mb-20">
        <h2
          data-aos="zoom-in"
          className="text-5xl md:text-6xl font-extrabold text-green-900 drop-shadow-md mb-4"
        >
          About Us
        </h2>
        <p className="text-lg md:text-xl text-green-800 font-medium max-w-3xl mx-auto">
          At Grove Link Consult, we empower organizations with innovative,
          sustainable, and data-driven strategies to achieve long-term success.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        {cards.map((card, i) => (
          <div
            key={card.title}
            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer transform transition duration-500 hover:scale-105"
          >
            <img
              src={card.bg}
              alt={card.title}
              className="w-full h-96 object-cover brightness-90 group-hover:brightness-75 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/40 flex flex-col items-center justify-center px-6 text-center text-white">
              <div className="mb-4 animate-bounce-slow">{card.icon}</div>
              <h3 className="text-3xl font-bold mb-4 drop-shadow-lg">
                {card.title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed drop-shadow-sm">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Core Values Carousel */}
      <div data-aos="fade-up" className="relative w-full">
        <h3 className="text-3xl font-semibold text-green-800 text-center mb-8 drop-shadow-sm">
          Our Core Values
        </h3>

        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsPerPage}%)`,
            }}
          >
            {values.map((value, i) => (
              <div
                key={i}
                className={`flex-shrink-0 px-2 ${
                  cardsPerPage === 4
                    ? "w-1/4"
                    : cardsPerPage === 2
                    ? "w-1/2"
                    : "w-full"
                }`}
              >
                <div className="bg-white/80 border border-green-200 rounded-3xl shadow-lg p-6 flex flex-col items-center text-center h-full">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-green-500 to-green-700 text-white shadow-lg mb-4">
                    {value.icon}
                  </div>
                  <span className="font-semibold text-green-900">
                    {value.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition ${
                  idx === currentIndex ? "bg-green-700" : "bg-green-300"
                }`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Decorations */}
      <div className="absolute -top-24 -left-16 w-72 h-72 bg-green-200/30 rounded-full animate-floatSlow"></div>
      <div className="absolute -bottom-28 -right-12 w-80 h-80 bg-green-300/20 rounded-full animate-floatSlowReverse"></div>

      <style>{`
        @keyframes floatSlow { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-25px);} }
        @keyframes floatSlowReverse { 0%,100%{transform:translateY(0);} 50%{transform:translateY(25px);} }
        @keyframes bounce-slow { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
        .animate-floatSlow { animation: floatSlow 14s ease-in-out infinite; }
        .animate-floatSlowReverse { animation: floatSlowReverse 16s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
