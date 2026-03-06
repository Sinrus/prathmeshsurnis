"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const aiTickerItems = [
  "LLMs", "MCP Servers", "AI Assistants", "AI Workflows", "n8n", "Make",
  "Prompt Engineering", "Vibe Coding", "Azure AI Studio", "ChatGPT",
  "Agentic AI", "RAG Pipelines", "Claude", "AI Agents", "API Orchestration",
  "Vector Databases", "Cursor", "AI Copilots", "Function Calling",
];

const bizTickerItems = [
  "Strategic Foresight", "Innovation Scouting", "Market Analysis",
  "New Business Dev", "Competitive Intelligence", "Digital Transformation",
  "PitchBook", "Crunchbase", "CB Insights", "Tracxn", "Itonics OS",
  "Hype Innovation", "Trend Radar", "Stakeholder Management",
  "Change Management",
];

const aiSpotlights = [
  {
    num: "01",
    title: "LLMs & Prompt Engineering",
    desc: "Every prompt is a conversation with possibility.",
  },
  {
    num: "02",
    title: "AI Automation & Workflows",
    desc: "n8n, Make, and whatever ships next. Always building.",
  },
  {
    num: "03",
    title: "Vibe Coding & MCP Servers",
    desc: "The future of development is conversational. I\u2019m already there.",
  },
  {
    num: "04",
    title: "Data Vaults",
    desc: "Structured, scalable knowledge stores that give AI real context.",
  },
  {
    num: "05",
    title: "RAG Indexing",
    desc: "Connecting LLMs to live data — accurate answers, not hallucinations.",
  },
];

const bizSpotlights = [
  {
    num: "01",
    title: "Strategic Foresight",
    desc: "Reading the market three years ahead. Then acting on it.",
  },
  {
    num: "02",
    title: "Innovation Scouting",
    desc: "Finding the signal in the noise of emerging tech.",
  },
  {
    num: "03",
    title: "New Business Development",
    desc: "From opportunity identification to first revenue.",
  },
];

export default function Skills() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: zone1Ref, isVisible: zone1Visible } = useScrollReveal({ threshold: 0.05 });
  const { ref: zone2Ref, isVisible: zone2Visible } = useScrollReveal({ threshold: 0.05 });

  const aiDoubled = [...aiTickerItems, ...aiTickerItems];
  const bizDoubled = [...bizTickerItems, ...bizTickerItems];

  return (
    <section id="skills">
      {/* Section Header */}
      <div
        ref={headerRef}
        className={`grid grid-cols-1 md:grid-cols-[1fr_2fr] md:gap-12 px-6 sm:px-12 py-16 sm:py-20 border-b border-border ${
          headerVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-[56px] font-black tracking-tight leading-tight">
          What Drives Me
        </h2>
        <p className="font-editorial text-xl sm:text-2xl font-normal leading-[1.4] tracking-tight pt-4 md:pt-4 italic text-muted-foreground">
          Not just what I know &mdash; what I can&apos;t stop thinking about.
        </p>
      </div>

      {/* Zone 1 — AI Passion */}
      <div
        ref={zone1Ref}
        className={`border-b border-border ${zone1Visible ? "scroll-visible" : "scroll-hidden"}`}
      >
        <div className="px-6 sm:px-12 pt-12 sm:pt-16 pb-8">
          <span className="inline-block text-[10px] tracking-[0.15em] uppercase font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-6">
            AI & Emerging Technology
          </span>
          <p className="font-editorial text-2xl sm:text-3xl md:text-[44px] font-bold tracking-tight leading-tight max-w-3xl">
            Obsessed with what&apos;s possible when AI meets{" "}
            <em className="text-primary italic">real problems</em>.
          </p>
        </div>


        {/* AI Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 px-6 sm:px-12 py-10 sm:py-12 gap-6">
          {aiSpotlights.map((card, i) => (
            <div
              key={card.num}
              className={`group relative overflow-hidden rounded-lg border border-border p-6 sm:p-8 hover:bg-primary/[0.03] transition-colors duration-300 ${
                zone1Visible ? "scroll-visible" : "scroll-hidden"
              } stagger-${i + 1}`}
            >
              <span className="absolute top-3 right-4 font-editorial text-[72px] font-black text-foreground/[0.04] leading-none select-none">
                {card.num}
              </span>
              <h3 className="font-editorial text-lg font-bold tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Zone 2 — Innovation & Business Dev */}
      <div
        ref={zone2Ref}
        className={`border-b border-border ${zone2Visible ? "scroll-visible" : "scroll-hidden"}`}
      >
        <div className="px-6 sm:px-12 pt-12 sm:pt-16 pb-8">
          <span className="inline-block text-[10px] tracking-[0.15em] uppercase font-medium bg-foreground/5 text-foreground/70 px-3 py-1 rounded-full mb-6">
            Innovation & Business Development
          </span>
          <p className="font-editorial text-2xl sm:text-3xl md:text-[44px] font-bold tracking-tight leading-tight max-w-3xl">
            I see business opportunities where others see{" "}
            <em className="text-primary italic">buzzwords</em>.
          </p>
        </div>


        {/* Biz Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 px-6 sm:px-12 py-10 sm:py-12 gap-6">
          {bizSpotlights.map((card, i) => (
            <div
              key={card.num}
              className={`group relative overflow-hidden rounded-lg border border-border p-6 sm:p-8 hover:bg-primary/[0.03] transition-colors duration-300 ${
                zone2Visible ? "scroll-visible" : "scroll-hidden"
              } stagger-${i + 1}`}
            >
              <span className="absolute top-3 right-4 font-editorial text-[72px] font-black text-foreground/[0.04] leading-none select-none">
                {card.num}
              </span>
              <h3 className="font-editorial text-lg font-bold tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
