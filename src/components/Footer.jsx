import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-tr from-green-50 via-green-100 to-lime-100 text-green-900 py-24 px-8 sm:px-16 lg:px-32 font-sans overflow-hidden shadow-xl">
      {/* Background decorative blurred circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-60px] left-[-60px] w-60 h-60 rounded-full bg-gradient-to-br from-green-300 to-lime-400 opacity-30 blur-3xl animate-pulse"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-80px] right-[-80px] w-72 h-72 rounded-full bg-gradient-to-tr from-lime-400 to-green-300 opacity-25 blur-2xl animate-pulse animation-delay-2000"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 text-center md:text-left">
        {/* Contact Us */}
        <div>
          <h3 className="text-4xl font-extrabold tracking-wide mb-8 text-green-900 drop-shadow-sm">
            Contact Us
          </h3>
          <p className="max-w-lg mx-auto md:mx-0 text-lg text-green-800 font-light leading-relaxed mb-12">
            Let’s work together to create lasting impact. Whether you're looking
            for strategic advice, project support, or a thought partner to drive
            change, we’d love to hear from you.
          </p>

          <div className="max-w-lg mx-auto md:mx-0 space-y-10 text-green-900">
            <div>
              <strong className="block mb-3 text-lg font-semibold tracking-wide">
                Office Address
              </strong>
              <address className="not-italic text-base leading-relaxed text-green-700 italic">
                Grove Link Consult
                <br />
                Addis Ababa
                <br />
                <span className="text-green-600 italic">To be opened soon</span>
              </address>
            </div>

            <div>
              <strong className="block mb-3 text-lg font-semibold tracking-wide">
                Phone
              </strong>
              <a
                href="tel:+251911572382"
                className="underline underline-offset-2 decoration-lime-600 decoration-2 hover:text-lime-600 transition-colors duration-300 font-medium"
              >
                +251 911 572 382
              </a>
            </div>

            <div>
              <strong className="block mb-3 text-lg font-semibold tracking-wide">
                Email
              </strong>
              <a
                href="mailto:netsanetyrg@gmail.com"
                className="underline underline-offset-2 decoration-lime-600 decoration-2 hover:text-lime-600 transition-colors duration-300 font-medium"
              >
                netsanetyrg@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-4xl font-extrabold tracking-wide mb-8 text-green-900 drop-shadow-sm">
            Quick Links
          </h3>
          <ul className="max-w-xs mx-auto md:mx-0 space-y-8 text-green-900 font-semibold text-lg">
            {["About Us", "Services", "Our Team", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="relative group inline-block hover:text-lime-600 transition-colors duration-300"
                >
                  {item}
                  <span
                    className="absolute left-0 -bottom-1 w-0 h-0.5 bg-lime-600 rounded transition-all group-hover:w-full"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Social Media */}
          <div className="mt-16 flex justify-center md:justify-start space-x-14 text-green-700">
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
                className="hover:text-lime-600 transition-colors duration-300 transform hover:-translate-y-1 hover:drop-shadow-lg"
              >
                <svg
                  className="w-9 h-9 fill-current"
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

      {/* Bottom Bar */}
      <div className="mt-28 border-t border-lime-400 pt-6 text-center text-green-700 text-sm select-none tracking-widest font-semibold relative z-10">
        © {new Date().getFullYear()} Grove Link Consult. All rights reserved.
      </div>
    </footer>
  );
}
