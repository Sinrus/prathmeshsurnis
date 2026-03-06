"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about">
      {/* About — editorial 2-col header */}
      <div
        ref={aboutRef}
        className={`border-b border-border px-6 sm:px-12 py-16 sm:py-20 ${
          aboutVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] md:gap-12 mb-12">
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-[56px] font-black tracking-tight leading-tight">
            About
          </h2>
          <p className="font-editorial text-xl sm:text-2xl font-normal leading-[1.4] tracking-tight pt-4 md:pt-4">
            I work at the intersection of{" "}
            <em className="text-primary">AI</em>,{" "}
            <em className="text-primary">innovation management</em>, and{" "}
            <em className="text-primary">business development</em>{" "}
            — turning emerging technology into real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
}
