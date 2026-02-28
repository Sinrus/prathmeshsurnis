"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillGroups = [
  {
    label: "AI & Technology",
    skills: "Azure AI Studio · ChatGPT & Prompt Engineering · LLMs & APIs · Cloud Architectures",
  },
  {
    label: "Data & Analytics",
    skills: "Power BI · SQL · KPI Dashboards · Market Analysis",
  },
  {
    label: "Innovation Tools",
    skills: "Itonics OS · Hype Innovation · PitchBook · Crunchbase · CB Insights · Tracxn",
  },
  {
    label: "Project & Collaboration",
    skills: "Jira · Confluence · Notion · MS Project · SAP S/4HANA · Miro",
  },
  {
    label: "Languages",
    skills: "English (C2 — Fluent) · German (B2 — Advanced)",
  },
];

const certifications = [
  { title: "Professional Scrum Product Owner (PSPO-I)", issuer: "Scrum.org" },
  { title: "Agile Project Management", issuer: "Google" },
];

const competencies = [
  "AI Use Case Identification",
  "Business Process Automation",
  "Innovation Strategy",
  "Stakeholder Management",
  "Cross-functional Collaboration",
  "Agile Project Management",
  "Change Management",
  "Executive Communication",
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
          A blend of technical knowledge, strategic thinking, and the tools to bring AI projects from concept to reality.
        </p>
      </div>

      <div ref={contentRef}>
        {/* Skills — editorial rows */}
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-[1fr_2fr] px-6 sm:px-12 py-6 sm:py-8 border-b border-border stagger-${Math.min(index + 1, 6)} ${
              contentVisible ? "scroll-visible" : "scroll-hidden"
            }`}
          >
            <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium mb-2 md:mb-0 md:pt-0.5">
              {group.label}
            </div>
            <p className="text-sm text-foreground font-light leading-relaxed">
              {group.skills}
            </p>
          </div>
        ))}

        {/* Certifications */}
        <div className={`grid grid-cols-1 md:grid-cols-[1fr_2fr] px-6 sm:px-12 py-6 sm:py-8 border-b border-border ${contentVisible ? "scroll-visible" : "scroll-hidden"}`} style={{ transitionDelay: "0.4s" }}>
          <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium mb-2 md:mb-0 md:pt-0.5">
            Certifications
          </div>
          <div className="space-y-2">
            {certifications.map((cert, i) => (
              <p key={i} className="text-sm font-light">
                <span className="text-foreground">{cert.title}</span>
                <span className="text-muted-foreground"> — {cert.issuer}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div className={`grid grid-cols-1 md:grid-cols-[1fr_2fr] px-6 sm:px-12 py-6 sm:py-8 border-b border-border ${contentVisible ? "scroll-visible" : "scroll-hidden"}`} style={{ transitionDelay: "0.5s" }}>
          <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium mb-2 md:mb-0 md:pt-0.5">
            Core Competencies
          </div>
          <p className="text-sm text-foreground font-light leading-relaxed">
            {competencies.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}
