"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    title: "AI Strategy & Roadmapping",
    description:
      "Defining AI roadmaps — from identifying high-value use cases to building scalable adoption strategies that align with business goals.",
    tag: "Strategy",
  },
  {
    title: "Business Process Optimization",
    description:
      "Analyzing workflows and designing AI-powered solutions that automate, accelerate, and improve organizational decision-making.",
    tag: "Optimization",
  },
  {
    title: (<>AI-driven Innovation &<br className="sm:hidden" /> Strategic Foresight</>),
    description:
      "Discovering, evaluating, and prioritizing innovation opportunities across business units — connecting emerging technology to real needs.",
    tag: "Innovation",
  },
  {
    title: "Workshops & Enablement",
    description:
      "Designing and facilitating interactive sessions that empower teams to understand, adopt, and leverage AI tools and new ways of working.",
    tag: "Enablement",
  },
  {
    title: "New Business Development",
    description:
      "Identifying new market opportunities, analyzing competitive landscapes, and building strategic frameworks for growth and expansion.",
    tag: "Growth",
  },
  {
    title: "Stakeholder & Cross-Functional Leadership",
    description:
      "Bridging the gap between technical and business teams — translating complex ideas into clear strategies and actionable outcomes.",
    tag: "Leadership",
  },
];

export default function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="services">
      {/* Section Header — editorial 2-col */}
      <div
        ref={headerRef}
        className={`grid grid-cols-1 md:grid-cols-[1fr_2fr] md:gap-12 px-6 sm:px-12 py-16 sm:py-20 border-b border-border ${
          headerVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-[56px] font-black tracking-tight leading-tight">
          What I<br />Do
        </h2>
        <p className="font-editorial text-xl sm:text-2xl font-normal leading-[1.4] tracking-tight pt-4 md:pt-4">
          These are the areas where I bring depth and hands-on experience — from AI strategy to innovation management and beyond.
        </p>
      </div>

      {/* Services Grid — editorial 2-col with borders */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className={`border-b border-border ${
              index % 2 === 0 ? "md:border-r" : ""
            } px-6 sm:px-12 py-12 relative overflow-hidden group cursor-default min-h-[280px] sm:min-h-[340px] flex flex-col justify-end transition-colors duration-400 hover:bg-primary/[0.03] stagger-${Math.min(index + 1, 6)} ${
              gridVisible ? "scroll-visible" : "scroll-hidden"
            }`}
          >
            {/* Large background number */}
            <div className="absolute top-4 right-8 font-editorial font-black text-[100px] sm:text-[120px] leading-none text-foreground/[0.04] select-none">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="text-[10px] tracking-[0.15em] uppercase text-primary font-medium mb-5">
              {service.tag}
            </div>
            <h3 className="font-editorial text-[22px] sm:text-[32px] font-bold tracking-tight mb-3 transition-colors duration-300 group-hover:text-primary leading-tight">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[360px] font-light">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
