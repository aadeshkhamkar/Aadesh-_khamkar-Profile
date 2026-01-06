import { useState } from "react";
import pr1 from "@/assets/Finetech.png";
import pr2 from "@/assets/RealEstate.png";
import pr3 from "@/assets/petXpert.png";
import pr4 from "@/assets/HearNSee.png";
import pr5 from "@/assets/SurveyApp.png";
import pr6 from "@/assets/nextU.png";
import WorkCard from "./Cards/WorkCard";
import { Button } from "./ui/button";

const projects = [
  {
    id: 1,
    title: "Behind The Smile",
    category: "Web App",
    image: pr5,
    year: "2023-24",
  },
  {
    id: 2,
    title: "PlotPilot",
    category: "Java Full-Stack",
    image: pr2,
    year: "2024-25",
  },
  {
    id: 3,
    title: "HearNSee",
    category: "Python Design",
    image: pr4,
    year: "2024-25",
  },
  {
    id: 4,
    title: "FinTrack",
    category: "Java Full-Stack",
    image: pr1,
    year: "2025-25",
  },
  {
    id: 5,
    title: "NextU",
    category: "Web Design",
    image: pr6,
    year: "2025-25",
  },
  {
    id: 6,
    title: "PetXpert",
    category: "Web App",
    image: pr3,
    year: "2025-26",
  },
];

const categories = [
  "All",
  "Java Full-Stack",
  "Web App",
  "Web Design",
  "Python Design",
];

const WorksSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative animate-blur-reveal bg-black py-24 lg:py-32 text-white"
    >
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="get-in-touch-badge border-white/50 animate-pulse mb-6 inline-flex items-center px-3 py-1 text-sm leading-none">
            What I Build
          </p>

          <h2 className="mb-10 font-display animate-blur-reveal text-3xl font-medium leading-tight md:text-4xl lg:text-5xl text-white">
            Lets Explore
          </h2>

          <p className="mx-auto animate-blur-reveal mb-8 max-w-xl font-serif text-lg text-white/70">
            From idea to execution, these projects reflect creativity and
            expertise.
          </p>
        </div>

        {/* CATEGORY FILTER */}
        <div className="mb-14 flex flex-wrap justify-center gap-6">
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              variant="aadesh"
              className={`transition-all ${activeCategory === cat
                  ? "bg-white text-black"
                  : "bg-transparent text-white/70 hover:text-black"
                }`}
            >
              {cat}
            </Button>

          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-8 md:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <WorkCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
