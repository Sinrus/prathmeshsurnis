"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const toolsAndPlatforms = [
  "Azure AI Studio",
  "ChatGPT & Prompt Engineering",
  "LLMs & APIs",
  "Cloud Architectures",
  "Power BI",
  "SQL",
  "KPI Dashboards",
  "Market Analysis",
  "Itonics OS",
  "Hype Innovation",
  "PitchBook",
  "Crunchbase",
  "CB Insights",
  "Tracxn",
  "Jira",
  "Confluence",
  "Notion",
  "MS Project",
  "SAP S/4HANA",
  "Miro",
];

const certificationsAndStrengths = [
  "Professional Scrum Product Owner (PSPO-I)",
  "Agile Project Management (Google)",
  "AI Use Case Identification",
  "Business Process Automation",
  "Innovation Strategy",
  "Stakeholder Management",
  "Cross-functional Collaboration",
  "Agile Project Management",
  "Change Management",
  "Executive Communication",
  "English (C2 — Business Fluent)",
  "German (B1)",
];

export default function Skills() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="skills">
      {/* Section Header — editorial 2-col */}
      <div
        ref={headerRef}
        className={`grid grid-cols-1 md:grid-cols-2 px-6 sm:px-12 py-16 sm:py-20 border-b border-border ${
          headerVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-[56px] font-black tracking-tight leading-tight">
          Toolkit
        </h2>
        <p className="font-editorial text-xl sm:text-2xl font-normal leading-[1.4] tracking-tight pt-4 md:pt-4">
          The tools, platforms, and strengths I bring to every project.
        </p>
      </div>

      {/* Pill cloud groups */}
      <div
        ref={contentRef}
        className={`px-6 sm:px-12 py-12 sm:py-16 border-b border-border space-y-12 ${
          contentVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        {/* Tools & Platforms */}
        <div>
          <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium mb-4">
            Tools & Platforms
          </div>
          <div className="flex flex-wrap gap-3">
            {toolsAndPlatforms.map((item, i) => (
              <span
                key={i}
                className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground border border-border rounded-full px-4 py-2 hover:text-primary hover:border-primary/30 transition-colors duration-300 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications & Strengths */}
        <div>
          <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium mb-4">
            Certifications & Strengths
          </div>
          <div className="flex flex-wrap gap-3">
            {certificationsAndStrengths.map((item, i) => (
              <span
                key={i}
                className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground border border-border rounded-full px-4 py-2 hover:text-primary hover:border-primary/30 transition-colors duration-300 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
