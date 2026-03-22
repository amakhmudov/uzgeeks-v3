"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { Speaker, Event } from "@/types/events";
import { Check, CircleCheckBig, Plus } from "lucide-react";

type EventsSectionProps = {
  tabs: string[];
  event: Event;
  speakers: Speaker[];
};

export function EventsSection({ tabs, event, speakers }: EventsSectionProps) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="section is-dark">
      <div className="container space-y-8">
        <div className="space-y-1">
          <p className="text-author text-brand">Tadbirlarimiz</p>
          <h2 className="max-w-xl">
            <strong>Tadbirlarimiz ro'yhati bilan tanishing</strong>
          </h2>
        </div>

        <ul className="media-info">
          {tabs.map((tab, i) => (
            <li key={tab}>
              <Button
                onClick={() => setActiveTab(i)}
                variant={activeTab === i ? "primary" : "outline"}
                className={`${activeTab === i ? "" : "bg-white hover:!bg-brand hover:text-white hover:border-brand"}`}
              >
                {tab}
              </Button>
            </li>
          ))}
        </ul>

        {activeTab === 1 ? (
          <section className="space-y-8">
            <div className="space-y-1">
              <h2>{event.date}</h2>
              <p>{event.location}</p>
            </div>

            <ul className="speaker-list">
              {speakers.map((speaker) => (
                <li key={speaker.name} className="speaker-card">
                  <Image
                    src={speaker.img}
                    alt={speaker.name}
                    width={128}
                    height={128}
                    className="shrink-0 object-cover rounded-full border-4 border-white shadow-xl shadow-border"
                  />

                  <div className="speaker-info">
                    <div>
                      <p className="text-date">{speaker.time}</p>
                      <h3>{speaker.talk}</h3>
                    </div>

                    <div className="media-info">
                      <p className="text-author text-brand">{speaker.name}</p>
                      <p className="text-muted">"{speaker.role}"</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex justify-center">
              <Button variant="primary" className="media-info">
                <CircleCheckBig size={16} />
                Tadbirda qatnashishni istayman
              </Button>
            </div>
          </section>
        ) : (
          <div className="hv-center py-24">
            <p className="text-muted">Tez kunda...</p>
          </div>
        )}
      </div>
    </section>
  );
}
