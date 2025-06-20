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
import { Helmet } from "react-helmet-async";

import { Element } from "react-scroll";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Grovelink Consulting – Business Growth Services</title>
        <meta
          name="description"
          content="Grovelink helps businesses grow through expert consulting, strategy, and execution."
        />
        <meta property="og:title" content="Grovelink Consulting" />
        <meta
          property="og:description"
          content="Helping businesses grow through strategic consulting."
        />
        <meta property="og:url" content="https://grovelinkconsult.com" />
      </Helmet>
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
