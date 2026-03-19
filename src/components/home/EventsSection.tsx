import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SpeakerCard } from "@/components/ui/SpeakerCard";
import { EventTabFilter } from "@/components/home/EventTabFilter";
import type { Event, Speaker } from "@/types/events";

type EventsSectionProps = {
  tabs: string[];
  event: Event;
  speakers: Speaker[];
};

export function EventsSection({ tabs, event, speakers }: EventsSectionProps) {
  return (
    <section id="tadbirlar" className="py-[--spacing-section]">
      <div className="content-container">
        <h2 className="h1 text-brand text-center">Tadbirlar jadvali</h2>

        <EventTabFilter tabs={tabs} />

        {/* Current event date & location */}
        <div className="mt-12 flex flex-col gap-4 text-body">
          <div className="flex items-center gap-3">
            <Calendar
              size={20}
              className="text-brand shrink-0"
              aria-hidden="true"
            />
            <p className="h2">{event.date}</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin
              size={20}
              className="text-brand shrink-0"
              aria-hidden="true"
            />
            <p className="text-lead">{event.location}</p>
          </div>
        </div>

        {/* Speaker cards */}
        <div className="flex flex-col gap-9 mt-16">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name} {...speaker} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-9">
          <Button variant="primary">Tadbirda qatnashishni istayman</Button>
        </div>
      </div>
    </section>
  );
}
