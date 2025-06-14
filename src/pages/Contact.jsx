import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-amber-100 px-6 py-20 sm:px-20">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-10 inline-flex items-center space-x-2 text-amber-300 hover:text-amber-200 font-medium transition duration-300"
        aria-label="Go back"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        <span>Back</span>
      </button>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Contact Info */}
        <section>
          <h1 className="text-5xl font-extrabold mb-8 tracking-tight text-amber-300">
            Get in Touch
          </h1>
          <p className="mb-10 text-amber-100/90 max-w-lg leading-relaxed text-lg">
            We’d love to hear from you! Whether you have questions, ideas, or
            want to collaborate, drop us a message or reach out through the
            contact details below.
          </p>

          <div className="space-y-10 max-w-lg text-lg">
            <div>
              <h2 className="text-2xl font-semibold text-amber-300 mb-2">
                📍 Office Address
              </h2>
              <address className="not-italic text-amber-200 italic">
                Grove Link Consult
                <br />
                Addis Ababa, Ethiopia
                <br />
                (To be opened soon)
              </address>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-amber-300 mb-2">
                📞 Phone
              </h2>
              <a
                href="tel:+251911572382"
                className="hover:text-amber-200 transition-colors font-medium"
              >
                +251 911 572 382
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-amber-300 mb-2">
                📧 Email
              </h2>
              <a
                href="mailto:netsanetyrg@gmail.com"
                className="hover:text-amber-200 transition-colors font-medium"
              >
                netsanetyrg@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <h2 className="text-4xl font-extrabold mb-8 tracking-wide text-amber-300">
            Send Us a Message
          </h2>

          {submitted ? (
            <div className="bg-amber-300/90 text-green-900 p-6 rounded-xl shadow-2xl animate-fade-in">
              <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
              <p>
                Your message has been received. We'll get back to you as soon as
                possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 max-w-lg">
              <label className="block">
                <span className="text-amber-300 font-semibold mb-2 block">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-amber-400 bg-green-900 text-amber-100 p-3 placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
                  placeholder="Your full name"
                />
              </label>

              <label className="block">
                <span className="text-amber-300 font-semibold mb-2 block">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-amber-400 bg-green-900 text-amber-100 p-3 placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block">
                <span className="text-amber-300 font-semibold mb-2 block">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-amber-400 bg-green-900 text-amber-100 p-3 placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
                  placeholder="Write your message here..."
                ></textarea>
              </label>

              <button
                type="submit"
                className="bg-amber-300 text-green-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-amber-200 transition transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}
