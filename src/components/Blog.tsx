"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const upcomingTopics = [
  "AI Strategy",
  "Digital Transformation",
  "Innovation Management",
  "SME & AI",
  "Case Studies",
];

export default function Blog() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="blog">
      {/* Section Header */}
      <div
        ref={headerRef}
        className={`grid grid-cols-1 md:grid-cols-2 px-6 sm:px-12 py-16 sm:py-20 border-b border-border ${
          headerVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-[56px] font-black tracking-tight leading-tight">
          Blog
        </h2>
        <p className="font-editorial text-xl sm:text-2xl font-normal leading-[1.4] tracking-tight pt-4 md:pt-4">
          Practical insights on AI adoption, innovation management, and digital transformation — no buzzwords, just real talk.
        </p>
      </div>

      {/* Coming Soon — creative editorial layout */}
      <div
        ref={contentRef}
        className={`border-b border-border ${
          contentVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <div className="px-6 sm:px-12 py-20 sm:py-32 flex flex-col items-center text-center">
          {/* Large decorative text */}
          <div className="font-editorial text-[80px] sm:text-[120px] md:text-[160px] font-black tracking-tight leading-none text-border/60 select-none">
            Soon
          </div>

          {/* Overlapping tagline */}
          <div className="-mt-6 sm:-mt-10">
            <span className="text-[10px] tracking-[0.2em] uppercase text-primary font-medium">
              Currently brewing
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight mt-3">
              Words are being written.
            </h3>
            <p className="text-sm text-muted-foreground font-light mt-3 max-w-md leading-relaxed">
              I&apos;m putting together thoughts on AI adoption, strategy, and
              lessons from the field. Real stories, no fluff.
            </p>
          </div>

          {/* Topic pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {upcomingTopics.map((topic, i) => (
              <span
                key={i}
                className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground border border-border rounded-full px-4 py-2 hover:text-primary hover:border-primary/30 transition-colors duration-300 cursor-default"
              >
                {topic}
              </span>
            ))}
          </div>

          {/* Pulsing dot + status */}
          <div className="flex items-center gap-2.5 mt-12">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs text-muted-foreground tracking-[0.08em] uppercase">
              First post dropping soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
