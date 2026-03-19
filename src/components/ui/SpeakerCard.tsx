import Image from "next/image";
import { Clock } from "lucide-react";
import type { StaticImageData } from "next/image";

type SpeakerCardProps = {
  time: string;
  talk: string;
  name: string;
  role: string;
  img: StaticImageData;
};

export function SpeakerCard({ time, talk, name, role, img }: SpeakerCardProps) {
  return (
    <div className="bg-white rounded-[--radius-sm] shadow-[--shadow-card] p-10">
      <div className="flex gap-6 items-center">
        {/* Avatar */}
        <div className="shrink-0 w-[--size-avatar-lg] h-[--size-avatar-lg] rounded-full overflow-hidden relative">
          <Image
            src={img}
            alt={name}
            fill
            sizes="126px"
            className="object-cover"
          />
        </div>
        {/* Info */}
        <div className="flex flex-col gap-6 flex-1 min-w-0">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Clock
                size={16}
                className="text-muted shrink-0"
                aria-hidden="true"
              />
              <p className="text-date text-muted leading-[--line-height-tight]">
                {time}
              </p>
            </div>
            <p className="h3 text-black">{talk}</p>
          </div>
          <p className="h6 leading-[--line-height-tight]">
            <span className="text-brand">{name}</span>
            <span className="text-muted">{` "${role}"`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
