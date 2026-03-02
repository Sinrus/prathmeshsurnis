"use client";

import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="grid grid-cols-1 lg:grid-cols-2 min-h-[88vh] border-b border-border">
      {/* Left: Text */}
      <div className="px-6 sm:px-12 py-16 lg:py-20 flex flex-col justify-center relative">
        <div className="animate-fade-up hero-stagger-1 flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-primary" />
          <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
            Portfolio — AI & Innovation / 2026
          </span>
        </div>
        <h1 className="animate-fade-up hero-stagger-2 font-editorial font-black text-[clamp(40px,10vw,96px)] leading-[0.92] tracking-tight w-full">
          Where AI meets<br />
          <em className="font-normal italic text-primary">innovation.</em>
        </h1>
        <p className="animate-fade-up hero-stagger-3 text-[17px] text-muted-foreground mt-7 leading-relaxed max-w-full lg:max-w-[400px] font-light">
          AI and Innovation professional bridging artificial intelligence, innovation management, and new business development.
        </p>
        <div className="animate-fade-up hero-stagger-4 flex items-center gap-4 mt-8">
          <a
            href="https://www.linkedin.com/in/prathmesh-pradip-surnis/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase bg-primary text-primary-foreground rounded-full px-6 py-2.5 hover:bg-primary/85 transition-colors duration-300"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
          <a
            href="mailto:ppsurnis@gmail.com"
            className="flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase bg-primary text-primary-foreground rounded-full px-6 py-2.5 hover:bg-primary/85 transition-colors duration-300"
          >
            <Mail size={14} />
            Say Hello
          </a>
        </div>

        <div className="animate-fade-up hero-stagger-5 absolute bottom-12 left-6 sm:left-12 hidden lg:flex items-center gap-2.5 text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
          <span className="w-10 h-px bg-muted-foreground animate-pulse-line" />
          Scroll to explore
        </div>
      </div>

      {/* Right: Headshot */}
      <div className="relative animate-fade-in hero-stagger-3 hidden lg:flex items-center justify-center p-12">
        <div className="hero-headshot aspect-square w-full max-h-full rounded-full overflow-hidden relative ring-1 ring-border ring-offset-[6px] ring-offset-background">
          <Image
            src="/headshot2.jpg"
            alt="Prathmesh Surnis"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

      {/* Mobile headshot */}
      <div className="lg:hidden flex justify-center px-12 py-10">
        <div className="hero-headshot aspect-square w-full max-w-[320px] rounded-full overflow-hidden relative ring-1 ring-border ring-offset-4 ring-offset-background">
          <Image
            src="/headshot2.jpg"
            alt="Prathmesh Surnis"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
}
