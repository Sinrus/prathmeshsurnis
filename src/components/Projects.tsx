"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    tag: "Enterprise AI",
    title: "AI Business Process Optimization @ Schaeffler",
    description:
      "Identified and prioritized high-value AI use cases across multiple business units. Collaborated with engineering, product, and IT teams to transform ideas into scalable AI workflows. Developed KPI dashboards to measure and scale AI impact.",
  },
  {
    tag: "Innovation",
    title: "AI Innovation Workshops & Training Program",
    description:
      "Designed and delivered interactive AI workshops at Schaeffler to empower employees to effectively use internal AI tools. Created training materials and hands-on exercises bridging technical capabilities and practical application.",
  },
  {
    tag: "Trend Analysis",
    title: "AI Innovation Trend Analysis",
    description:
      "Served as the primary point of contact for internal business units on AI integration, process automation, and knowledge management. Translated user feedback into clear requirements for the product team.",
  },
  {
    tag: "Startup Consulting",
    title: "Market Strategy for Algaecap",
    description:
      "Led an independent consulting project analyzing international markets for a carbon-tech startup. Developed an AI-powered evaluation framework for assessing market attractiveness and technology readiness.",
  },
];

const featured = {
  tag: "Research",
  title: "Master's Thesis: GenAI for Market Opportunity Identification",
  description:
    "Researched the potential of Generative AI to identify new market opportunities, focusing on AI strategies and business development. Explored how LLMs can uncover untapped markets and generate data-driven strategic recommendations.",
};

export default function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.05 });
  const { ref: featuredRef, isVisible: featuredVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="projects">
      {/* Section Header — editorial 2-col */}
      <div
        ref={headerRef}
        className={`grid grid-cols-1 md:grid-cols-2 px-6 sm:px-12 py-16 sm:py-20 border-b border-border ${
          headerVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-[56px] font-black tracking-tight leading-tight">
          Selected<br />Works
        </h2>
        <p className="font-editorial text-xl sm:text-2xl font-normal leading-[1.4] tracking-tight pt-4 md:pt-4">
          From enterprise AI at Schaeffler to startup consulting — a curated collection of projects that define my approach to making AI work.
        </p>
      </div>

      {/* Projects Grid — editorial 2-col with borders */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`border-b border-border ${
              index % 2 === 0 ? "md:border-r" : ""
            } px-6 sm:px-12 py-12 relative overflow-hidden group cursor-default min-h-[320px] sm:min-h-[420px] flex flex-col justify-end transition-colors duration-400 hover:bg-primary/[0.03] stagger-${Math.min(index + 1, 6)} ${
              gridVisible ? "scroll-visible" : "scroll-hidden"
            }`}
          >
            <div className="absolute top-5 right-8 font-editorial font-black text-[100px] sm:text-[120px] leading-none text-foreground/[0.04] select-none">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="text-[10px] tracking-[0.15em] uppercase text-primary font-medium mb-3.5">
              {project.tag}
            </div>
            <h3 className="font-editorial text-2xl sm:text-[32px] font-bold tracking-tight mb-3 transition-colors duration-300 group-hover:text-primary leading-tight">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[360px] font-light">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      {/* Featured — asymmetric block */}
      <div
        ref={featuredRef}
        className={`grid grid-cols-1 lg:grid-cols-[2fr_1fr] border-b border-border min-h-[400px] sm:min-h-[500px] ${
          featuredVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1923] relative flex items-center justify-center overflow-hidden min-h-[300px]">
          <span className="font-editorial font-black text-5xl sm:text-7xl md:text-[80px] text-white/[0.04] tracking-tight select-none">
            FEATURED WORK
          </span>
        </div>
        <div className="px-6 sm:px-12 py-12 sm:py-16 flex flex-col justify-center lg:border-l border-border">
          <div className="text-[10px] tracking-[0.15em] uppercase text-primary font-medium mb-5">
            {featured.tag}
          </div>
          <h3 className="font-editorial text-2xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
            {featured.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-[1.7] font-light">
            {featured.description}
          </p>
        </div>
      </div>
    </section>
  );
}
