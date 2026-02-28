"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    title: "AI Strategy & Consulting",
    description:
      "Helping organizations define their AI roadmap — from identifying high-value use cases to building a scalable adoption strategy.",
    tag: "Strategy",
  },
  {
    title: "Business Process Optimization",
    description:
      "Analyzing existing workflows and designing AI-powered solutions that automate, accelerate, and improve decision-making.",
    tag: "Optimization",
  },
  {
    title: "AI Use Case Identification",
    description:
      "Collaborating with business units to discover, evaluate, and prioritize AI opportunities that deliver measurable ROI.",
    tag: "Discovery",
  },
  {
    title: "Innovation Workshops & Training",
    description:
      "Designing and facilitating interactive workshops that empower teams to understand, adopt, and leverage AI tools effectively.",
    tag: "Enablement",
  },
  {
    title: "AI Implementation Support",
    description:
      "Translating strategy into action — guiding teams from pilot projects to production-ready AI workflows and assistants.",
    tag: "Implementation",
  },
  {
    title: "Stakeholder Management",
    description:
      "Bridging the gap between technical and business teams, translating user feedback into clear product requirements.",
    tag: "Communication",
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
        className={`grid grid-cols-1 md:grid-cols-2 px-6 sm:px-12 py-16 sm:py-20 border-b border-border ${
          headerVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-[56px] font-black tracking-tight leading-tight">
          What I<br />Do
        </h2>
        <p className="font-editorial text-xl sm:text-2xl font-normal leading-[1.4] tracking-tight pt-4 md:pt-4">
          I don&apos;t just talk about AI — I help businesses implement it. From strategy consulting to hands-on workshops, here&apos;s how I create impact.
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
            <div className="text-[10px] tracking-[0.15em] uppercase text-primary font-medium mb-3.5">
              {service.tag}
            </div>
            <h3 className="font-editorial text-2xl sm:text-[32px] font-bold tracking-tight mb-3 transition-colors duration-300 group-hover:text-primary leading-tight">
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
