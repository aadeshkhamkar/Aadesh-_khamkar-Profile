import { useEffect, useState } from "react";
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "Software Developer",
  "Backend Developer",
  "Java Full Stack Developer",
  "Software Testing Engineer",
  "System Developer",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-black text-white"
    >
      <div className="container mx-auto px-6 text-center">

        {/* MAIN TEXT */}
        <h1 className="animate-blur-reveal mb-4 font-display text-5xl leading-tight md:text-xl lg:text-5xl">
          <span className="animate-pulse">Building</span>
          <span className="text-slate-400 "> experiences</span>
          <br />
          <span>that</span>
          <span className="text-slate-400 animate-pulse"> matter..!</span>
        </h1>

        <br />

        {/* ROLE TEXT */}
        <div className="relative animate-blur-reveal h-7 overflow-hidden">
          <p
            key={index}
            className="animate-slide-up animate-color-sweep font-mono text-sm tracking-wide"
          >
            {roles[index]}
          </p>
        </div>

        {/* BUTTON */}
        <div className="mt-10 animate-blur-nav flex justify-center">
          <a href="#contact">
            <Button variant="aadesh">
              Let's Connect
              <ArrowDownCircle size={14} />
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
