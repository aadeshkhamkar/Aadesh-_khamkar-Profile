const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black py-24 lg:py-32"
    >
      {/* Background Accent */}
      <div className="animate-blur-reveal pointer-events-none absolute inset-0 opacity-10" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Content Wrapper */}
        <div className="mx-auto max-w-5xl animate-fade-up text-center">
          {/* Section Label */}
          <p className="mb-4 get-in-touch-badge text-sm uppercase tracking-[0.3em] text-sky-500">
            About Me
          </p>

          {/* Heading */}
          <h2 className="animate-blur-reveal mb-10 font-display text-3xl leading-tight md:text-4xl lg:text-5xl">
            Professional Snapshot
          </h2>


          {/* Description */}
          <p className="md:text-1xl  mx-auto mb-16 max-w-4xl animate-fade-up text-justify text-base font-medium leading-relaxed text-gray-100 delay-200">
            I’m{" "}
            <span className="font-extrabold text-slate-400">
              Aadesh Khamkar
            </span>
            , an industry-focused engineering professional with hands-on
            experience in building scalable,{" "}
            <span className="text-slate-400">data-driven applications</span> and
            <span className="text-slate-400"> intelligent systems</span>. I
            specialize in designing clean, efficient, and maintainable solutions
            using robust{" "}
            <span className="text-slate-400">backend architectures</span>,
            modern
            <span className="text-slate-400">frontend technologies</span>, and
            practical machine-learning integration. I’ve delivered multiple
            end-to-end and research-oriented projects and continue to explore
            advanced <span className="text-slate-400">system design</span>,
            applied <span className="text-slate-400">AI/ML</span>, and
            performance optimization to build reliable, high-impact solutions
            that create measurable business value.
          </p>

          {/* Skills */}
          <div className="grid animate-fade-up grid-cols-1 gap-6 delay-300 sm:grid-cols-2">
            {[
              { skill: "Java Full-Stack", level: 92 },
              { skill: "Algorithmic Reasoning", level: 90 },
              { skill: "UI/UX Design", level: 89 },
              { skill: "Machine Learning", level: 88 },
            ].map((item) => (
              <div key={item.skill} className="group text-left">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    {item.skill}
                  </span>
                  <span className="text-sm text-white">{item.level}%</span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="bg-gradient-white h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_12px_hsl(var(--gold)/0.5)]"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
