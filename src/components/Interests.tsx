"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const cookingImages = [
  "/cooking/cooking-1.jpg",
  "/cooking/cooking-2.jpg",
  "/cooking/cooking-3.jpg",
  "/cooking/cooking-4.jpg",
];

const interests = [
  {
    title: "Gym & Fitness",
    description: "Consistent strength training and functional fitness — discipline in the gym translates to discipline everywhere else.",
    images: [
      "/gym/gym-1.jpg",
      "/gym/gym-2.jpg",
      "/gym/gym-3.jpg",
      "/gym/gym-4.jpg",
    ],
  },
  {
    title: "Sports & Trekking",
    description: "From cricket and football to mountain trails — team sports for the competitive spirit, trekking for the clarity.",
    images: [
      "/sports/sports-1.jpg",
      "/sports/sports-4.jpg",
      "/sports/sports-5.jpg",
      "/sports/sports-6.jpg",
    ],
  },
  {
    title: "Cooking",
    description: "Experimenting with new recipes and flavors — cooking is creativity you can taste.",
    images: cookingImages,
  },
  {
    title: "Travel",
    description: "Discovering new cultures, perspectives, and places — every trip is a reminder of how big the world really is.",
    images: [
      "/travel/travel-1.jpg",
      "/travel/travel-2.jpg",
      "/travel/travel-3.jpg",
      "/travel/travel-4.jpg",
    ],
  },
];

export default function Interests() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="interests">
      {/* Section Header — editorial 2-col */}
      <div
        ref={headerRef}
        className={`grid grid-cols-1 md:grid-cols-[1fr_2fr] md:gap-12 px-6 sm:px-12 py-16 sm:py-20 border-b border-border ${
          headerVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-[56px] font-black tracking-tight leading-tight">
          Beyond<br />Work
        </h2>
        <p className="font-editorial text-xl sm:text-2xl font-normal leading-[1.4] tracking-tight pt-4 md:pt-4">
          When I&apos;m not helping businesses adopt AI, you&apos;ll find me staying active and exploring the outdoors.
        </p>
      </div>

      {/* Interests rows */}
      <div ref={gridRef}>
        {interests.map((interest, index) => (
          <div
            key={index}
            className={`border-b border-border px-6 sm:px-12 py-10 sm:py-12 group cursor-default transition-colors duration-400 hover:bg-primary/[0.03] stagger-${Math.min(index + 1, 6)} ${
              gridVisible ? "scroll-visible" : "scroll-hidden"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]">
              <div className="flex items-start gap-4 mb-3 md:mb-0">
                <span className="text-[10px] tracking-[0.15em] uppercase text-primary font-medium">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary">
                  {interest.title}
                </h3>
              </div>
              <p className="text-base text-foreground/60 leading-relaxed font-normal max-w-lg">
                {interest.description}
              </p>
            </div>

            {/* Photo gallery for cooking */}
            {interest.images && (
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-8">
                {interest.images.map((src, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={src}
                      alt={`Cooking ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
