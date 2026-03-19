import Image from "next/image";
import { Clock, Calendar, Users } from "lucide-react";
import imgAboutDots from "@/assets/images/dots-about.svg";
import imgConference from "@/assets/images/conference.jpg";
import { Button } from "@/components/ui/Button";

export function AboutSection() {
  return (
    <section id="haqida" className="pt-[--spacing-section]">
      {/* Heading + stats */}
      <div className="container text-center">
        <h2 className="h1 text-brand">UzGeeks nima?</h2>
        <div className="flex justify-center gap-20 mt-[--spacing-section-sm] text-body">
          <div className="flex flex-col gap-4 items-center">
            <Clock size={24} className="text-brand" aria-hidden="true" />
            <p className="h2">7+</p>
            <p className="text-lead">yildan buyon</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Calendar size={24} className="text-brand" aria-hidden="true" />
            <p className="h2">540+</p>
            <p className="text-lead">tadbirlar</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Users size={24} className="text-brand" aria-hidden="true" />
            <p className="h2">30.504+</p>
            <p className="text-lead">qatnashchilar</p>
          </div>
        </div>
      </div>

      {/* Full-width conference photo */}
      <div className="relative mt-24 h-[--size-photo-sm] md:h-[--size-photo-md]">
        <Image
          src={imgConference}
          alt="UzGeeks conference"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <Image
          src={imgAboutDots}
          alt=""
          className="absolute bottom-4 left-1/2 -translate-x-1/2 h-[--size-dots-md] w-auto"
        />
      </div>

      {/* Body text */}
      <div className="content-container mt-12 space-y-6 text-body">
        <p className="text-lead">
          UzGeeks Community — bu O&apos;zbekistoning turli burchaklarida axborot
          texnologiylari sohasida faoliyat yuritadigan yetuk muhandislarning ish
          jarayonida o&apos;z sohalarida orttirgan bilim va tajribalari bilan
          bo&apos;lishish imkonini beruvchi mutloq ochiq maydoncha.
        </p>
        <p className="text-[--font-size-base] leading-[--line-height-normal] tracking-[--tracking-wide]">
          UzGeeks meetuplari onlayn tarzda ijtimoiy tarmoqlarda efirga
          uzatiladi. Ushbu tadbirlarda qatnashish mutloq bepul bo&apos;lib,
          xohlagan ishtirokchi o&apos;z shaxsiy professional tajribasidan kelib
          chiqqan holda biror-bir mavzu bo&apos;yicha taqdimot o&apos;tkazib
          berishi, yoki oddiy eshituvchi-ishtirokchi sifatida qatnashishi
          mumkin.
        </p>
        <p className="text-[--font-size-base] leading-[--line-height-normal] tracking-[--tracking-wide]">
          UzGeeks doirasida 7 yildan beri har oyda bir marta ochiq muloqot,
          bilim va malakalar bilan bo&apos;lishish maqsadida meetup-tadbirlar
          tashkil etiladi.
        </p>
      </div>

      {/* CTA */}
      <div className="content-container mt-[--spacing-section-md] pb-[--spacing-section]">
        <Button variant="primary">Bizga qo&apos;shiling</Button>
      </div>
    </section>
  );
}
