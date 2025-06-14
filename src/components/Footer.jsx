import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Footer() {
  const links = ["home", "about", "services", "contact"];

  return (
    <footer className="relative bg-gradient-to-tr from-green-50 via-green-100 to-lime-100 text-green-900 py-24 px-6 sm:px-12 lg:px-32 font-sans overflow-hidden shadow-xl">
      {/* Blurred background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-60px] left-[-60px] w-60 h-60 rounded-full bg-gradient-to-br from-green-300 to-lime-400 opacity-30 blur-3xl animate-pulse"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-80px] right-[-80px] w-72 h-72 rounded-full bg-gradient-to-tr from-lime-400 to-green-300 opacity-25 blur-2xl animate-pulse animation-delay-2000"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-20 text-center md:text-left">
        {/* Contact Us Section */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-extrabold mb-6 text-green-900">
            Contact Us
          </h3>
          <p className="text-base sm:text-lg text-green-800 font-light leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
            Let’s work together to create lasting impact. Whether you're looking
            for strategic advice, project support, or a thought partner, we’d
            love to hear from you.
          </p>

          <div className="space-y-8 text-green-900 text-base sm:text-lg max-w-lg mx-auto md:mx-0">
            <div>
              <strong className="block mb-2 font-semibold">
                Office Address
              </strong>
              <address className="not-italic text-green-700 italic">
                Grove Link Consult
                <br />
                Addis Ababa
                <br />
                <span className="text-green-600 italic">To be opened soon</span>
              </address>
            </div>
            <div>
              <strong className="block mb-2 font-semibold">Phone</strong>
              <a
                href="tel:+251911572382"
                className="underline hover:text-lime-600 transition"
              >
                +251 911 572 382
              </a>
            </div>
            <div>
              <strong className="block mb-2 font-semibold">Email</strong>
              <a
                href="mailto:netsanetyrg@gmail.com"
                className="underline hover:text-lime-600 transition"
              >
                netsanetyrg@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links + Social */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-extrabold mb-6 text-green-900">
            Quick Links
          </h3>
          <ul className="space-y-6 text-green-900 font-medium text-base sm:text-lg mb-12">
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
                  <span
                    className="absolute left-0 -bottom-1 w-0 h-0.5 bg-lime-600 rounded transition-all group-hover:w-full"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex justify-center md:justify-start gap-10 text-green-700">
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
                className="hover:text-lime-600 transition duration-300"
              >
                <svg
                  className="w-8 h-8 sm:w-9 sm:h-9 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d={svgPath} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="mt-12 text-center">
        <button
          onClick={() => scroll.scrollToTop({ duration: 600 })}
          className="text-green-700 hover:text-lime-600 font-semibold underline transition"
          aria-label="Scroll to top"
        >
          Back to Top ↑
        </button>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-lime-400 pt-6 text-center text-green-700 text-sm tracking-wide font-medium">
        © {new Date().getFullYear()} Grove Link Consult. All rights reserved.
      </div>
    </footer>
  );
}
