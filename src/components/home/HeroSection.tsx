import Image from "next/image";
import imgBg from "@/assets/images/bg-hero.webp";
import imgHeroDots from "@/assets/images/dots-hero.svg";
import { Button } from "@/components/ui/Button";
import type { Event } from "@/types/events";

type HeroSectionProps = {
  event: Event;
};

export function HeroSection({ event }: HeroSectionProps) {
  return (
    <section className="relative min-h-[--size-hero-min] md:h-[--size-hero-md]">
      {/* Background image + dark overlay */}
      <div className="absolute inset-0">
        <Image
          src={imgBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center container pb-20">
        <h1 className="h1 text-brand">NO Code?</h1>
        <p className="h2 text-white mt-6 max-w-[--size-hero-text-max]">
          Qanday qilib dasturlash tilisiz dasturiy ta&apos;minot ishlab chiqish
          mumkin?
        </p>
        <Image
          src={imgHeroDots}
          alt=""
          className="mt-4 h-[--size-dots-sm] w-auto"
        />
        <div className="text-white text-[--font-size-base] leading-[--line-height-normal] mt-11 space-y-3">
          <p>{event.date}, 2025 yil.</p>
          <p>{event.location}</p>
        </div>
        <div className="flex gap-4 mt-10">
          <Button variant="outline" className="w-[--size-button-md]">
            Batafsil ma&apos;lumot
          </Button>
          <Button variant="primary">Qatnashaman</Button>
        </div>
      </div>
    </section>
  );
}
