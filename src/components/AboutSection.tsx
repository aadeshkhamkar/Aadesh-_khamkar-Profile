"use client";

import IconCard from "@/components/Cards/IconCard";

const skills = [
  { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Web", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Cloud", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative animate-blur-reveal font-body overflow-hidden bg-black py-24 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">

          {/* Badge */}
          <p className="get-in-touch-badge border-white mb-6 inline-flex px-3 py-1 text-sm">
            About Me
          </p>

          {/* Heading */}
          <h2 className="mb-10 font-display text-3xl md:text-4xl lg:text-5xl">
            Professional Snapshot
          </h2>

          {/* Description */}
          <p className="md:text-lg mx-auto mb-16 max-w-3xl text-base font-display text-gray-100">
            Building scalable data-driven systems and intelligent applications with modern
            engineering practices.
          </p>


          {/* RIGHT → LEFT MARQUEE USING ICONCARD */}
          <div className="mx-auto max-w-3xl overflow-hidden">
            <div className="flex w-max animate-marquee gap-10">
              {[...skills, ...skills].map((skill, index) => (
                <IconCard
                  key={index}
                  src={skill.src}
                  alt={skill.name}
                />
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default AboutSection;
