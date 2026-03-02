"use client";

import { Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="contact" className="bg-muted">
      {/* Section Header — editorial 2-col */}
      <div
        ref={headerRef}
        className={`grid grid-cols-1 md:grid-cols-2 px-6 sm:px-12 py-16 sm:py-20 border-b border-border ${
          headerVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-[56px] font-black tracking-tight leading-tight">
          Get in<br />Touch
        </h2>
        <p className="font-editorial text-xl sm:text-2xl font-normal leading-[1.4] tracking-tight pt-4 md:pt-4">
          Whether you want to talk AI, innovation, career opportunities, or just grab a virtual coffee — I&apos;m always open to connecting.
        </p>
      </div>

      {/* Contact content — 2-col */}
      <div
        ref={contentRef}
        className={`grid grid-cols-1 lg:grid-cols-2 border-b border-border ${
          contentVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        {/* Contact Info */}
        <div className="px-6 sm:px-12 py-12 sm:py-16 lg:border-r border-border">
          <div className="space-y-8">
            <div className="border-b border-border pb-8">
              <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium mb-2">
                Email
              </div>
              <a href="mailto:ppsurnis@gmail.com" className="font-editorial text-xl sm:text-2xl font-bold tracking-tight hover:text-primary transition-colors">
                ppsurnis@gmail.com
              </a>
            </div>
            <div className="border-b border-border pb-8">
              <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium mb-2">
                LinkedIn
              </div>
              <a
                href="https://www.linkedin.com/in/prathmesh-pradip-surnis/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-editorial text-xl sm:text-2xl font-bold tracking-tight hover:text-primary transition-colors"
              >
                Prathmesh Surnis
              </a>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium mb-2">
                Location
              </div>
              <p className="font-editorial text-xl sm:text-2xl font-bold tracking-tight">
                Munich, Germany
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form CTA */}
        <div className="bg-primary px-6 sm:px-12 py-12 sm:py-16 flex flex-col justify-center">
          <div className="text-[10px] tracking-[0.15em] uppercase text-white/60 font-medium mb-8">
            Send a message
          </div>
          <p className="font-editorial text-lg sm:text-xl leading-relaxed tracking-tight mb-10 text-white">
            Have an idea, an opportunity, or just want to connect? Drop me a message and I&apos;ll get back to you.
          </p>
          <a
            href="https://forms.fillout.com/t/jkYdTBFByLus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-primary rounded-full px-6 py-3 text-xs tracking-[0.1em] uppercase font-medium hover:bg-white/90 transition-colors group w-fit"
          >
            Fill Out the Form
            <Send size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
