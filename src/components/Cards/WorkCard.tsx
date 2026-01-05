import { useState } from "react";
import {
  ArrowDown,
  ArrowDownCircleIcon,
  ArrowUpRight,
  Book,
  Github,
  Linkedin,
  LinkIcon,
  X,
} from "lucide-react";
import { ReadStream } from "tty";
import { Button } from "../ui/button";
import { Close } from "@radix-ui/react-toast";

/* ======================================================
   PROJECT DETAILS
   ====================================================== */

// https://www.linkedin.com/in/aadeshkhamkar/details/projects/

const getProjectDetails = (projectId) => {
  const projectData = {
    1: {
      description:
        "A smart personal finance web app that helps users track income, expenses, savings, budget alerts, and AI-based financial predictions.",
      github: "https://www.linkedin.com/in/aadeshkhamkar/details/projects/",
    },
    2: {
      description:
        "A real estate web platform for searching, listing, and managing properties with advanced filters, maps, and user roles.",
      github: "https://www.linkedin.com/in/aadeshkhamkar/details/projects/",
    },
    3: {
      description:
        "An AI-powered pet care web app offering vet booking, pet services, health resources, and personalized pet health assistance.",
      github: "https://www.linkedin.com/in/aadeshkhamkar/details/projects/",
    },
    4: {
      description:
        "An inclusive EdTech web application designed for deaf and blind students with audio learning, sign recognition, and adaptive tools.",
      github: "https://www.linkedin.com/in/aadeshkhamkar/details/projects/",
    },
    5: {
      description:
        "A mental health and wellness web app featuring surveys, age-based care, home health monitoring, and Ayurvedic insights.",
      github: "https://www.linkedin.com/in/aadeshkhamkar/details/projects/",
    },
    6: {
      description:
        "A responsive university website with modern UI, AI chatbot integration, and scalable design for future educational platforms.",
      github: "https://www.linkedin.com/in/aadeshkhamkar/details/projects/",
    },
  };

  return (
    projectData[projectId] || {
      description:
        "A thoughtfully designed project focused on clean architecture and real-world usability.",
      github: "https://www.linkedin.com/in/aadeshkhamkar/details/projects/",
    }
  );
};

/* ======================================================
   WORK CARD
   ====================================================== */
const WorkCard = ({ project, index }) => {
  const [open, setOpen] = useState(false);
  const details = getProjectDetails(project.id);

  return (
    <div
      className={`group relative bg-black overflow-hidden rounded-2xl transition-all duration-500
      ${
        open
          ? "bg-white/10 backdrop-blur-xl border border-white/30"
          : "bg-black"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* IMAGE */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`h-full w-full object-cover transition-transform duration-700
          ${open ? "scale-110 blur-sm" : "group-hover:scale-110"}`}
        />
      </div>

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* MAIN CONTENT */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
        <div className="flex items-end justify-between">
          <div>
            {/* CATEGORY */}
            <p className="mb-2 text-sm text-white">{project.category}</p>

            {/* TITLE */}
            <h3 className="font-display text-2xl text-white">
              {project.title}
            </h3>

            {/* YEAR */}
            <p className="mt-1 text-sm text-white">{project.year}</p>

            {/* ICONS (DESKTOP) */}
            <div
              className={`mt-4 hidden gap-3 md:flex transition-opacity duration-300
              ${open ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
            >
              <a
                href={details.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full
                border border-white/30 text-white backdrop-blur-md
                hover:border-sky-400 transition"
              >
                <ArrowDownCircleIcon size={16} />
              </a>
            </div>
          </div>

          {/* OPEN BUTTON */}
          {/* <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
            className="rounded-full bg-white/20 p-2 text-white
            backdrop-blur-md hover:bg-white/30 transition"
          >
            <ArrowUpRight size={22} />
          </button> */}

          <Button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
            variant="aadesh"
          >
            <ArrowUpRight size={22} />
          </Button>
        </div>
      </div>

      {/* EXPAND PANEL */}
      <div
        className={`absolute bottom-0 left-0 z-20 w-full
        bg-white/10 backdrop-blur-xl transition-all duration-500 ease-out
        ${open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
      >
        <div className="relative p-6">
          {/* CLOSE */}
          {/* <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            className="absolute right-4 top-4 rounded-full
            bg-white/5 p-1.5 text-white backdrop-blur-md
            hover:bg-black transition"
          >
            <X size={18} />
          </button> */}

          <Button
            variant="aadesh"
            className="absolute right-4 top-4 rounded-full
             p-1.5 text-white backdrop-blur-1xl
            "
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            <X size={18} />
          </Button>

          {/* DESCRIPTION */}
          <p className="mb-6 pr-8 text-sm leading-relaxed text-white">
            {details.description}
          </p>

          {/* ICONS (MOBILE) */}
          <div className="flex gap-4 md:hidden">
            <a
              href={details.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center
              rounded-full border border-white/30 text-white backdrop-blur-md"
            >
              <ArrowDownCircleIcon size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* ACCENT LINE */}
      <div
        className="absolute bottom-0 left-0 h-1 w-0
      bg-gradient-to-r from-sky-400 via-cyan-500 to-sky-300
      transition-all duration-500 group-hover:w-full"
      />
    </div>
  );
};

export default WorkCard;
