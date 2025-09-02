import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const links = ["home", "about", "services", "contact"];

  return (
    <footer className="relative bg-gradient-to-tr from-green-700 via-green-600 to-green-500 text-green-50 py-20 px-6 sm:px-12 lg:px-24 font-sans overflow-hidden shadow-xl">
      {/* Decorative blurred circles */}
      <div className="pointer-events-none absolute top-[-60px] left-[-60px] w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-green-400 opacity-25 blur-3xl animate-blob"></div>
      <div className="pointer-events-none absolute bottom-[-80px] right-[-80px] w-80 h-80 rounded-full bg-green-500 opacity-20 blur-3xl animate-blob animation-delay-3000"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid gap-16 md:grid-cols-2 text-center md:text-left">
        {/* Contact Section */}
        <div className="space-y-6">
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Get in Touch
          </h3>
          <p className="leading-relaxed max-w-lg mx-auto md:mx-0 text-green-100 text-base sm:text-lg">
            Reach out for strategic advice, project support, or collaborations.
            Our team is ready to guide you.
          </p>

          <div className="space-y-4 text-green-50 text-base sm:text-base font-semibold">
            <div className="flex items-start gap-3 justify-center md:justify-start">
              <MapPin className="w-6 h-6 text-green-200 mt-1" />
              <address className="not-italic leading-relaxed">
                Grove Link Consult <br />
                Legehar, ORDA Ethiopia Building <br />
                Addis Ababa
              </address>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Phone className="w-6 h-6 text-green-200" />
              <a
                href="tel:+251911572382"
                className="hover:text-green-200 transition font-semibold"
              >
                +251 911 572 382
              </a>
            </div>
            <div className="flex flex-col gap-2 items-center md:items-start">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-green-200" />
                <a
                  href="mailto:netsanetyrg@gmail.com"
                  className="hover:text-green-200 transition font-semibold"
                >
                  netsanetyrg@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-green-200" />
                <a
                  href="mailto:info@grovelinkconsult.com"
                  className="hover:text-green-200 transition font-semibold"
                >
                  info@grovelinkconsult.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Links and Social */}
        <div className="space-y-6">
          <h3 className="text-3xl sm:text-4xl font-bold">Quick Links</h3>
          <ul className="flex flex-col gap-3 font-medium text-green-100 text-base sm:text-base">
            {links.map((link) => (
              <li key={link}>
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  className="cursor-pointer relative group hover:text-green-200 transition inline-block font-semibold"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-200 rounded transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-center md:justify-start gap-4 mt-2">
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
                className="hover:text-green-200 transition transform hover:scale-110 duration-300"
              >
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 fill-current"
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
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition transform hover:scale-105"
        >
          ↑ Back to Top
        </button>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-green-400 pt-6 text-center text-green-50 text-sm tracking-wide">
        © {new Date().getFullYear()} Grove Link Consult. All rights reserved.
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 30px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 10s infinite ease-in-out;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </footer>
  );
}
