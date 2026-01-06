"use client";
import { useState } from "react";
import "../css/contact.css";
import { ArrowDownCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden font-display animate-blur-reveal bg-black py-24 lg:py-32"
    >
      <div className="container mx-auto max-w-4xl px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="get-in-touch-badge border-white animate-pulse mb-6 inline-flex px-3 py-1 text-sm">
            Get in Touch
          </span>

          <h2 className="mb-6 font-display text-3xl md:text-4xl lg:text-5xl">
            Ideas & Insights
          </h2>

          <p className="mx-auto max-w-xl text-white/70 font-display">
            Let’s collaborate to turn your ideas into impactful, real-world
            solutions.
          </p>
        </div>

        {/* CONTACT TABLE */}
        <div className="divide-y divide-white/10">

          {/* EMAIL */}
          <div className="flex items-center justify-between py-6">
            <span className="text-sm text-white">Mail</span>
            <a
              href="mailto:aadeshbkhamkar@gmail.com"
              className="text-sm font-medium text-sky-200 hover:underline"
            >
              aadeshbkhamkar@gmail.com
            </a>
          </div>

          {/* SOCIALS */}
          <div className="flex items-center justify-between py-6">
            <span className="text-sm text-white">Socials</span>
            <div className="flex gap-4 text-sm">
              <a
                href="https://www.linkedin.com/in/aadeshkhamkar/"
                className="hover:underline text-sky-200"
              >
                LinkedIn
              </a>
              <span className="text-sky-200">•</span>
              <a
                href="https://github.com/aadeshkhamkar"
                className="hover:underline text-sky-200"
              >
                GitHub
              </a>
              <span className="text-sky-200">•</span>
              <a
                href="https://leetcode.com/u/Aadeshkhamkar/"
                className="hover:underline text-sky-200"
              >
                LeetCode
              </a>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-center justify-between py-6">
            <span className="text-sm text-white">Phone number</span>
            <a
              href="https://wa.link/lz7f8u"
              className="font-display text-sky-200 hover:underline"
            >
              +91 9373918571
            </a>
          </div>

          {/* LOCATION */}
          <div className="flex items-center justify-between py-6">
            <span className="text-display text-white">Location</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=sector29+kundanpark+ravet"
              className="text-sm text-sky-200 hover:underline"
            >
              Pune, Maharashtra
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
