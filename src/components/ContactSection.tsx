"use client";
import "../css/contact.css";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Code2,
  Send,
} from "lucide-react";
import { Button } from "./ui/button";

const socials = [
  {
    href: "https://www.linkedin.com/in/aadeshkhamkar/",
    Icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/aadeshkhamkar",
    Icon: Github,
    label: "GitHub",
  },
  {
    href: "https://leetcode.com/u/Aadeshkhamkar/",
    Icon: Code2,
    label: "LeetCode",
  },
  {
    href: "https://www.instagram.com/aadeshbkhamkar/",
    Icon: Instagram,
    label: "Instagram",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative animate-blur-reveal overflow-hidden bg-black py-20 lg:py-28 font-display"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-14">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <span className="mb-6 inline-flex rounded-full border border-white/70 px-4 py-1 text-sm text-sky-400 animate-pulse">
            Get in Touch
          </span>

          <h2 className="mb-5 text-3xl sm:text-4xl lg:text-5xl text-white">
            Ideas & Insights
          </h2>

          <p className="mx-auto max-w-xl text-sm sm:text-base text-white/70">
            Let’s collaborate to turn your ideas into impactful, real-world
            solutions.
          </p>
        </div>

        {/* CONTACT CARD */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
          {/* EMAIL */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 px-6 lg:px-10 py-6 border-b border-white/10">
            <div className="flex items-center gap-3 text-white">
              <Mail size={16} />
              <span className="text-sm">Mail</span>
            </div>
            <a
              href="mailto:aadeshbkhamkar@gmail.com"
              className="text-sm text-sky-300 hover:underline break-all"
            >
              aadeshbkhamkar@gmail.com
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="px-6 lg:px-10 py-8 border-b border-white/10">
            {/* MOBILE */}
            <div className="flex flex-col gap-4 lg:hidden">
              <div className="flex items-center gap-3 text-white">
                <Send size={16} />
                <span className="text-sm">Socials</span>
              </div>

              <div className="flex gap-5">
                {socials.map(({ href, Icon, label }) => (
                  <Button key={label} variant="aadesh" asChild>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* LAPTOP / TAB / PC */}
            <div className="hidden lg:grid grid-cols-[auto_1fr] items-center">
              {/* LEFT LABEL */}
              <div className="flex items-center gap-3 text-white">
                <Send size={16} />
                <span className="text-sm">Socials</span>
              </div>

              {/* RIGHT ICONS */}
              <div className="flex justify-end gap-6">
                {socials.map(({ href, Icon, label }) => (
                  <Button key={label} variant="aadesh" asChild>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 px-6 lg:px-10 py-6 border-b border-white/10">
            <div className="flex items-center gap-3 text-white">
              <Phone size={16} />
              <span className="text-sm">Phone</span>
            </div>
            <a
              href="https://wa.link/lz7f8u"
              className="text-sm font-bold text-sky-300 hover:underline"
            >
              +91 93739-18571
            </a>
          </div>

          {/* LOCATION */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 px-6 lg:px-10 py-6">
            <div className="flex items-center gap-3 text-white">
              <MapPin size={16} />
              <span className="text-sm">Location</span>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=sector29+kundanpark+ravet"
              className="text-sm text-sky-300 hover:underline"
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
