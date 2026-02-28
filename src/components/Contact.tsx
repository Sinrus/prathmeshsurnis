"use client";

import { Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="contact">
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
          Whether you&apos;re looking to adopt AI in your business, need a workshop facilitator, or just want to chat about innovation — I&apos;d love to hear from you.
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

        {/* Contact Form */}
        <div className="px-6 sm:px-12 py-12 sm:py-16">
          <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium mb-8">
            Send a message
          </div>
          <form
            action="https://formspree.io/f/placeholder"
            method="POST"
            className="space-y-8"
          >
            <div className="floating-label-group">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder=" "
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="floating-label-group">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder=" "
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="floating-label-group">
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder=" "
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="floating-label-group">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder=" "
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground focus:outline-none focus:border-primary transition-colors resize-none text-sm"
              />
              <label htmlFor="message">Message</label>
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2.5 text-xs tracking-[0.1em] uppercase font-medium text-foreground hover:text-primary transition-colors group"
            >
              Send Message
              <span className="w-8 h-px bg-current transition-all group-hover:w-12" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
