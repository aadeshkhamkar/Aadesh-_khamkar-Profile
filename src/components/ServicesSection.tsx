import ServiceCard from "./Cards/ServiceCard";

import {
  Palette,
  Layout,
  Sparkles,
  Monitor,
  PenTool,
  Camera,
  CupSoda,
  Coffee,
  Brain,
  Braces,
  Puzzle,
  Cpu,
  Code2,
} from "lucide-react";

const skills = [
  {
    icon: Coffee,
    title: "Java Development",
    description:
      "Designing and developing secure, scalable backend systems using Java, Spring, and clean architectural patterns.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces and seamless experiences that delight users and drive engagement.",
  },
  {
    icon: Monitor,
    title: "Web Design",
    description:
      "Crafting beautiful, responsive websites that combine aesthetic excellence with functional perfection.",
  },
  {
    icon: Code2,
    title: "Python Development",
    description:
      "Writing clean, efficient Python code for automation, data processing, and intelligent applications.",
  },

  {
    icon: Braces,
    title: "Algorithmic Reasoning",
    description:
      "Solving complex problems using efficient data structures, algorithms, and optimization techniques.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Building data-driven models to analyze patterns, make predictions, and support intelligent decision-making.",
  },
];

const ServicesSection = () => {
  return (
    <section id="skills" className="relative bg-black overflow-hidden py-24 lg:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-backgroundopacity-20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-4 get-in-touch-badge font-body text-sm uppercase tracking-[0.3em] text-sky-500">
            Core Skills
          </p>
          <h2 className="mb-10 animate-blur-reveal font-display text-3xl font-medium leading-tight md:text-4xl lg:text-5xl">
            Areas of expertise
          </h2>
          <p className="md:text-1xl animate-blur-reveal font-serif text-white/70">
            Transforming ideas into extraordinary visual experiences through a
            blend strategic design thinking.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <ServiceCard key={skill.title} skills={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
