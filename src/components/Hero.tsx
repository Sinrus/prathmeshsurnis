"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="grid grid-cols-1 lg:grid-cols-2 min-h-[88vh] border-b border-border">
      {/* Left: Text */}
      <div className="px-6 sm:px-12 py-16 lg:py-20 flex flex-col justify-center relative">
        <div className="animate-fade-up hero-stagger-1 text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-8">
          Portfolio — AI Success Manager / 2026
        </div>
        <h1 className="animate-fade-up hero-stagger-2 font-editorial font-black text-[clamp(48px,7vw,96px)] leading-[0.92] tracking-tight">
          Making AI<br />
          work for <em className="font-normal italic text-primary">business.</em>
        </h1>
        <p className="animate-fade-up hero-stagger-3 text-[17px] text-muted-foreground mt-7 leading-relaxed max-w-[400px] font-light">
          AI Success Manager helping companies adopt AI that actually delivers results — from strategy to implementation.
        </p>
        <div className="animate-fade-up hero-stagger-5 absolute bottom-12 left-6 sm:left-12 flex items-center gap-2.5 text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
          <span className="w-10 h-px bg-muted-foreground animate-pulse-line" />
          Scroll to explore
        </div>
      </div>

      {/* Right: Headshot */}
      <div className="relative animate-fade-in hero-stagger-3 hidden lg:flex items-center justify-center p-12">
        <div className="aspect-square w-full max-h-full rounded-full overflow-hidden relative">
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
        <div className="aspect-square w-full max-w-[320px] rounded-full overflow-hidden relative">
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
