import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import AboutSection from "../components/About";
import ServicesSection from "../components/Services";
import AboutDetail from "../components/AboutDetail";
import ServicesDetail from "../components/ServicesDetail";
import Founder from "../components/Founder";
import OurTeam from "../components/OurTeam";
import Footer from "../components/Footer";

import { Element } from "react-scroll";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div
        style={{ fontFamily: "'Inter', sans-serif" }}
        className="text-gray-800 bg-white"
      >
        <Element name="home">
          <HeroSection />
        </Element>

        <Element name="services">
          <ServicesSection />
          <ServicesDetail />
        </Element>

        <Element name="about">
          <AboutSection />
          <AboutDetail />
          <Founder />
          <OurTeam />
        </Element>

        <Element name="contact">
          <Footer />
        </Element>
      </div>
    </>
  );
}
