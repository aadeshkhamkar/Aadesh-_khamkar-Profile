"use client";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Instagram,
  Linkedin,
  Github,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import "../css/contact.css";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/15_aadesh_khamkar_07/",
    label: "Instagram",
  },
  {
    icon: Code,
    href: "https://leetcode.com/u/Aadeshkhamkar/",
    label: "LeetCode",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/aadeshkhamkar/",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/aadeshkhamkar",
    label: "GitHub",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("access_key", "a7261993-74f8-400e-abc7-38430707717c");
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const res = await response.json();

      if (res.success) {
        setSubmitted(true);
        setResult("Thank you for your response!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setResult("Submission failed");
      }
    } catch {
      setResult("Network error");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-24 lg:py-32"
    >
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* LEFT */}
          <div>
            {/* Animated Badge */}
            <span className="get-in-touch-badge border-white   mb-6 inline-block">
              Get in Touch
            </span>

            <h2 className="animate-blur-reveal mb-10 font-display text-3xl leading-tight md:text-4xl lg:text-5xl">
              Ideas & Insights
            </h2>

            <p className="mb-12 animate-blur-reveal max-w-md text-white/70">
              Let’s collaborate to turn your ideas into impactful, real-world
              solutions.
            </p>

            {/* Contact Info */}
            <div className="mb-12 space-y-6">
              <a
                href="mailto:aadeshbkhamkar@gmail.com"
                className="group flex items-center gap-4 transition-colors hover:text-sky-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">aadeshbkhamkar@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 hover:text-sky-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="https://wa.link/lz7f8u" className="font-medium">
                    +91 9373918571
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 hover:text-sky-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=sector29+kundanpark+ravet"
                    className="font-medium"
                  >
                    Pune, Maharashtra
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label}>
                  <Button variant="aadesh">
                    <social.icon size={20} />
                  </Button>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            {submitted ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                <h2 className="mb-6 text-3xl font-semibold">Thank you!</h2>
                <p className="text-muted-foreground">
                  Your response has been received.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="rounded-lg bg-secondary px-4 py-3"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="rounded-lg bg-secondary px-4 py-3"
                    required
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full rounded-lg bg-secondary px-4 py-3"
                  required
                />

                <textarea
                  rows={5}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-lg bg-secondary px-4 py-3"
                  required
                />

                <Button type="submit" variant="aadesh">
                  Send Message <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
