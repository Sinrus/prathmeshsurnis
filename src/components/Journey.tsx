"use client";

import { Fragment } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface TimelineEntry {
  year: string;
  title: string;
  place: string;
  link?: string;
  logo?: string;
  logos?: string[];
  imgClassName?: string;
  current?: boolean;
}

const education: TimelineEntry[] = [
  {
    year: "2023–2025",
    title: "M.Sc. Global Foresight & Technology Management",
    place: "TH Ingolstadt, Germany",
    link: "https://www.thi.de/en/engineering-and-management/degree-programmes/global-foresight-and-technology-management-msc/",
    logo: "/thi-logo.png",
  },
  {
    year: "2018–2022",
    title: "B.E. Mechanical Engineering",
    place: "Savitribai Phule Pune University, India",
    link: "https://beta.unipune.ac.in",
    logo: "/sppu-logo.png",
  },
];

const experience: TimelineEntry[] = [
  {
    year: "2026–Present",
    title: "AI Success Manager",
    place: "SelectCode GmbH, Germany",
    current: true,
    link: "https://www.selectcode.de",
    logos: ["/selectcode-logo.png", "/meingpt-logo.svg"],
    imgClassName: "",
  },
  {
    year: "2023–2026",
    title: "Innovation Strategy",
    place: "Schaeffler Technologies, Germany",
    link: "https://www.schaeffler.de/de/",
    logo: "/schaeffler-logo.png",
  },
];

function EntryCard({ item }: { item: TimelineEntry }) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 ${
      item.current ? "bg-primary/5 border border-primary/20 rounded-lg p-5 -mx-5" : ""
    }`}>
      <div>
        <div className="text-xs text-muted-foreground tracking-[0.05em] uppercase mb-2 flex items-center gap-2.5">
          {item.year}
          {item.current && (
            <>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-primary font-medium">Current</span>
            </>
          )}
        </div>
        <h4 className="font-editorial text-xl sm:text-2xl font-bold tracking-tight mb-1">
          {item.link ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </h4>
        <p className="text-sm text-muted-foreground font-light">{item.place}</p>
      </div>
      {item.logo && !item.logos && (
        <Image
          src={item.logo}
          alt={item.title}
          width={160}
          height={40}
          className="shrink-0"
        />
      )}
      {item.logos && (
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          {item.logos.map((logo: string, i: number) => (
            <Image
              key={i}
              src={logo}
              alt={item.title}
              width={160}
              height={40}
              className={`max-w-[100px] sm:max-w-none h-auto ${item.imgClassName || ""}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Journey() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="journey" className="bg-muted">
      {/* Journey — editorial 2-col header */}
      <div
        ref={headerRef}
        className={`grid grid-cols-1 md:grid-cols-2 px-6 sm:px-12 py-16 sm:py-20 border-b border-border ${
          headerVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-[56px] font-black tracking-tight leading-tight">
          Journey
        </h2>
        <p className="font-editorial text-xl sm:text-2xl font-normal leading-[1.4] tracking-tight pt-4 md:pt-4">
          From mechanical engineering to AI strategy — a path shaped by curiosity, cross-cultural experience, and a drive to bridge technology with real-world impact.
        </p>
      </div>

      {/* Education & Experience — mobile: stacked sections, desktop: paired grid */}
      <div
        ref={contentRef}
        className={`border-b border-border ${
          contentVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        {/* Mobile layout — stacked sections */}
        <div className="lg:hidden">
          {/* Experience section */}
          <div className="px-6 sm:px-12 pt-12 pb-8">
            <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium mb-8">
              Experience
            </div>
            <div className="space-y-8">
              {experience.map((exp, i) => (
                <div key={i} className={i < experience.length - 1 ? "border-b border-border pb-8" : ""}>
                  <EntryCard item={exp} />
                </div>
              ))}
            </div>
          </div>

          {/* Education section */}
          <div className="px-6 sm:px-12 pt-8 pb-12 border-t border-border">
            <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium mb-8">
              Education
            </div>
            <div className="space-y-8">
              {education.map((edu, i) => (
                <div key={i} className={i < education.length - 1 ? "border-b border-border pb-8" : ""}>
                  <EntryCard item={edu} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop layout — paired grid */}
        <div className="hidden lg:grid lg:grid-cols-2">
          {/* Labels */}
          <div className="px-6 sm:px-12 pt-12 sm:pt-16 pb-8 lg:border-r border-border">
            <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium">
              Experience
            </div>
          </div>
          <div className="px-6 sm:px-12 pt-12 sm:pt-16 pb-8">
            <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium">
              Education
            </div>
          </div>

          {/* Paired entries — each row aligns across columns */}
          {experience.map((exp, i) => {
            const edu = education[i];
            const isLast = i === experience.length - 1;
            return (
              <Fragment key={i}>
                <div className={`px-6 sm:px-12 ${isLast ? "pb-12 sm:pb-16" : "pb-8"} lg:border-r border-border`}>
                  <div className={`${!isLast ? "border-b border-border pb-8" : ""}`}>
                    <EntryCard item={exp} />
                  </div>
                </div>
                <div className={`px-6 sm:px-12 ${isLast ? "pb-12 sm:pb-16" : "pb-8"}`}>
                  <div className={`${!isLast ? "border-b border-border pb-8" : ""}`}>
                    <EntryCard item={edu} />
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
