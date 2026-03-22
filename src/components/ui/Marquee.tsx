import React, { type ReactNode } from "react";

type MarqueeProps = {
  items: ReactNode[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
};

export function Marquee({
  items,
  direction = "left",
  speed = 60,
  className,
}: MarqueeProps) {
  const sectionStyle = { "--marquee-duration": `${speed}s` } as React.CSSProperties;
  const trackClass =
    direction === "right" ? "marquee-list is-reverse" : "marquee-list";

  return (
    <div className={`marquee-section ${className ?? ""}`} style={sectionStyle}>
      <ul className={trackClass}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul className={trackClass} aria-hidden="true">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
