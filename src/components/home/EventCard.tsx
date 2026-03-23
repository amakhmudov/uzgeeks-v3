import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { EventItem } from "@/types/events";
import { Calendar, MapPin, Play, Users } from "lucide-react";

type EventCardProps = {
  event: EventItem;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="rounded flex flex-col h-full bg-white shadow-xl shadow-border/50 hover:translate-y-1 hover:shadow-none transition will-change-transform overflow-hidden">
      <div className="relative aspect-video max-h-66">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="event-body flex flex-col p-4 space-y-3 grow">
        <h4>{event.title}</h4>

        <ul className="space-y-1 pb-3">
          <li className="media-info text-muted">
            <Calendar
              size={14}
              className="text-brand shrink-0"
              aria-hidden="true"
            />
            {event.datetime}
          </li>
          <li className="media-info text-muted">
            <MapPin
              size={14}
              className="text-brand shrink-0"
              aria-hidden="true"
            />
            {event.location}
          </li>
          <li className="media-info text-muted">
            <Users
              size={14}
              className="text-brand shrink-0"
              aria-hidden="true"
            />
            {event.attendees}
          </li>
        </ul>

        <Button
          variant="primary"
          className="w-full mt-auto media-info justify-center"
        >
          <Play size={16} />
          Tomosha qilish
        </Button>
      </div>
    </div>
  );
}
