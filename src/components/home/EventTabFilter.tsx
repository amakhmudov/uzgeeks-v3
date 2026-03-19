"use client";

import { useState } from "react";

type Props = {
  tabs: string[];
};

export function EventTabFilter({ tabs }: Props) {
  const [active, setActive] = useState(tabs[1]);

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          aria-pressed={active === tab}
          onClick={() => setActive(tab)}
          className={`px-4 py-[--spacing-btn-y-sm] rounded-[--radius-sm] text-[--font-size-xs] font-semibold uppercase tracking-[--tracking-tight] whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
            active === tab
              ? "bg-brand text-white"
              : "text-body hover:bg-gray-100"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
