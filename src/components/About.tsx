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
        <div className="grid grid-cols-1 md:grid-cols-2 mb-12">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 pt-10 border-t border-border">
          <div>
            <div className="font-editorial font-black text-4xl sm:text-5xl tracking-tight">5+</div>
            <div className="text-xs text-muted-foreground mt-1.5 tracking-[0.05em] uppercase">Innovation Projects Led</div>
          </div>
          <div>
            <div className="font-editorial font-black text-4xl sm:text-5xl tracking-tight">5+</div>
            <div className="text-xs text-muted-foreground mt-1.5 tracking-[0.05em] uppercase">Markets Analyzed</div>
          </div>
          <div>
            <div className="font-editorial font-black text-4xl sm:text-5xl tracking-tight">TBD</div>
            <div className="text-xs text-muted-foreground mt-1.5 tracking-[0.05em] uppercase">TBD</div>
          </div>
        </div>
      </div>
    </section>
  );
}
