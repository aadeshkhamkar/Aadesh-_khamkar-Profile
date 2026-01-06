import { useEffect, useState } from "react";
import { Menu, X, ArrowRightCircle } from "lucide-react";
import logo from "../assets/Home-Logo.png";
import resume from "../assets/Resume Of Aadesh Khamkar.pdf";
import { Button } from "@/components/ui/button";

/* ================= NAV LINKS ================= */
const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

/* ================= SCROLL SPY ================= */
const useScrollSpy = () => {
  useEffect(() => {
    let activeId = "";

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length === 0) return;

        const topSection = visible[0].target.id;

        if (topSection !== activeId) {
          activeId = topSection;
          history.replaceState(null, "", `#${topSection}`);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};



const Navbar = () => {
  useScrollSpy();

  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsMounted(true);
    requestAnimationFrame(() => setIsOpen(true));
  };

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => setIsMounted(false), 500);
  };

  return (
    <nav className="fixed top-6 md:top-4 left-0 right-0 z-50">
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">

        {/* ================= CENTER GLASS BAR ================= */}
        <div className="mx-auto flex animate-blur-nav h-14 md:h-16 items-center rounded-full px-2 md:px-6 bg-white/5 backdrop-blur-xl">

          {/* LOGO */}
          <a href="#home" className="flex items-center">
            <div className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full">
              <img src={logo} alt="Logo" className="object-cover scale-[1.8]" />
            </div>
          </a>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm text-white/80 hover:text-white transition group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* DESKTOP RESUME */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex ml-auto"
          >
            <Button variant="aadesh">
              Resume
              <ArrowRightCircle size={14} />
            </Button>
          </a>

          {/* MOBILE TOGGLE */}
          <button
            onClick={openMenu}
            className="ml-auto md:hidden p-3 text-white"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isMounted && (
          <div className="md:hidden fixed inset-0 z-50">

            {/* BACKDROP */}
            <div
              onClick={closeMenu}
              className={`absolute inset-0 bg-white/5 backdrop-blur-2xl
              transition-opacity duration-500
              ${isOpen ? "opacity-100" : "opacity-0"}`}
            />

            {/* MENU CONTENT */}
            <div
              className={`relative z-10 flex h-full flex-col items-center justify-center text-center
              transform transition-all duration-500 ease-in-out
              ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}`}
            >

              {/* CLOSE */}
              <button
                onClick={closeMenu}
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 backdrop-blur-lg text-white"
              >
                <X size={20} />
              </button>

              {/* LOGO */}
              <div className="mb-12 flex h-16 w-16 items-center justify-center rounded-full bg-black/25 backdrop-blur-xl">
                <img src={logo} alt="Logo" className="object-cover scale-[1.8]" />
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-7 text-2xl font-semibold text-white/90">
                {navLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className={`transition-all duration-500
                    ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
                    style={{
                      transitionDelay: isOpen
                        ? `${200 + index * 120}ms`
                        : "0ms",
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* RESUME */}
              <div
                className={`mt-16 transition-all duration-500
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
                style={{
                  transitionDelay: isOpen
                    ? `${200 + navLinks.length * 120}ms`
                    : "0ms",
                }}
              >
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  <Button variant="aadesh">
                    Resume
                    <ArrowRightCircle size={16} />
                  </Button>
                </a>
              </div>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
