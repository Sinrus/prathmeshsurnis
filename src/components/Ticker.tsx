"use client";

const items = [
  "AI Strategy",
  "Business Process Optimization",
  "Innovation Workshops",
  "Use Case Identification",
  "Stakeholder Management",
  "Digital Transformation",
];

export default function Ticker() {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="border-b border-border py-5 overflow-hidden">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-editorial italic text-sm text-muted-foreground whitespace-nowrap flex items-center gap-[60px]"
          >
            <span className="text-primary text-[8px] not-italic">&#9670;</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
