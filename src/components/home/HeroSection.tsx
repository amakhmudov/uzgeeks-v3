import Image from "next/image";
import imgBg from "@/assets/images/bg-hero.webp";
import { Button } from "@/components/ui/Button";
import type { Event } from "@/types/events";

type HeroSectionProps = {
  event: Event;
};

export function HeroSection({ event }: HeroSectionProps) {
  return (
    <section className="hero-section">
      <Image
        src={imgBg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="container">
        <h1 className="text-brand">NO Code?</h1>

        <h2 className="text-white">
          Qanday qilib dasturlash tilisiz dasturiy ta&apos;minot ishlab chiqish
          mumkin?
        </h2>

        <div className="divider is-light" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="space-y-8">
          <div className="space-y-2 text-lead">
            <p>{event.date}, 2025 yil.</p>
            <p>{event.location}</p>
          </div>

          <div className="media-info gap-x-4 justify-center">
            <Button variant="outline" className="text-white border-white">
              Batafsil ma&apos;lumot
            </Button>
            <Button variant="primary">Qatnashaman</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
