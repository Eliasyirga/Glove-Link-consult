import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Mail, Phone, MapPin } from "lucide-react"; // Optional for icons

export default function Footer() {
  const links = ["home", "about", "services", "contact"];

  return (
    <footer className="relative bg-gradient-to-tr from-green-50 via-green-100 to-lime-100 text-green-900 py-24 px-6 sm:px-12 lg:px-32 font-sans overflow-hidden shadow-xl">
      {/* Decorative blurred circles */}
      <div className="pointer-events-none absolute top-[-60px] left-[-60px] w-72 h-72 rounded-full bg-green-300 opacity-30 blur-3xl animate-pulse"></div>
      <div className="pointer-events-none absolute bottom-[-80px] right-[-80px] w-96 h-96 rounded-full bg-lime-400 opacity-20 blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-16 text-center md:text-left">
        {/* Contact Section */}
        <div className="space-y-6">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-green-900 tracking-tight">
            Get in Touch
          </h3>
          <p className="text-green-800 leading-relaxed max-w-lg mx-auto md:mx-0">
            We’d love to collaborate and create lasting impact. Reach out for
            strategic advice, project support, or partnerships.
          </p>

          <div className="space-y-6 text-green-900 text-base sm:text-lg">
            <div className="flex items-start gap-3 justify-center md:justify-start">
              <MapPin className="w-6 h-6 text-lime-600" />
              <address className="not-italic text-green-700">
                Grove Link Consult <br />
                Legehar, ORDA Ethiopia Building <br />
                Addis Ababa
              </address>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Phone className="w-6 h-6 text-lime-600" />
              <a
                href="tel:+251911572382"
                className="underline hover:text-lime-600 transition"
              >
                +251 911 572 382
              </a>
            </div>
            <div className="flex flex-col gap-2 items-center md:items-start">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-lime-600" />
                <a
                  href="mailto:netsanetyrg@gmail.com"
                  className="underline hover:text-lime-600 transition"
                >
                  netsanetyrg@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-lime-600" />
                <a
                  href="mailto:info@grovelinkconsult.com"
                  className="underline hover:text-lime-600 transition"
                >
                  info@grovelinkconsult.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Links and Social */}
        <div className="space-y-8">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-green-900">
            Quick Links
          </h3>
          <ul className="space-y-4 font-medium text-green-800">
            {links.map((link) => (
              <li key={link}>
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  className="cursor-pointer hover:text-lime-600 transition relative group inline-block"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-lime-600 rounded transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex justify-center md:justify-start gap-6">
            {[
              {
                label: "Twitter",
                href: "https://twitter.com",
                svgPath:
                  "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
              },
              {
                label: "Facebook",
                href: "https://facebook.com",
                svgPath:
                  "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com",
                svgPath:
                  "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 3a2 2 0 11.001 3.999A2 2 0 014 3z",
              },
            ].map(({ href, label, svgPath }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="hover:text-lime-600 transition transform hover:scale-110 duration-300"
              >
                <svg
                  className="w-8 h-8 sm:w-9 sm:h-9 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d={svgPath} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <div className="mt-12 text-center">
        <button
          onClick={() => scroll.scrollToTop({ duration: 600 })}
          className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition transform hover:scale-105"
        >
          Back to Top ↑
        </button>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-lime-400 pt-6 text-center text-green-700 text-sm tracking-wide">
        © {new Date().getFullYear()} Grove Link Consult. All rights reserved.
      </div>
    </footer>
  );
}
