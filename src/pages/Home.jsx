import { imgBg, imgHeroDots, imgAboutDots, imgConference, imgPartners } from '@/assets'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { SpeakerCard } from '@/components/ui/SpeakerCard'
import { speakers, eventTabs, upcomingEvent } from '@/data/events'

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative h-[980px]">
        {/* Background image + dark overlay */}
        <div className="absolute inset-0">
          <img src={imgBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 h-full flex flex-col container">
          <Header transparent />

          {/* Hero content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center pb-20">
            <h1 className="h1 text-brand">NO Code?</h1>
            <p className="h2 text-white mt-6 max-w-[692px]">
              Qanday qilib dasturlash tilisiz dasturiy ta&apos;minot ishlab chiqish mumkin?
            </p>
            <img src={imgHeroDots} alt="" className="mt-4 h-2 w-auto" />
            <div className="text-white text-[18px] leading-[1.5] mt-11 space-y-[12px]">
              <p>{upcomingEvent.date}, 2025 yil.</p>
              <p>{upcomingEvent.location}</p>
            </div>
            <div className="flex gap-4 mt-10">
              <Button variant="outline" className="w-[214px]">Batafsil ma&apos;lumot</Button>
              <Button variant="primary">Qatnashaman</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ EVENTS ═══════════════ */}
      <section id="tadbirlar" className="py-[112px]">
        <div className="content-container">
          <h2 className="h1 text-brand text-center">Tadbirlar jadvali</h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 mt-6">
            {eventTabs.map((tab) => (
              <button
                key={tab.label}
                type="button"
                aria-pressed={tab.active}
                className={`px-4 py-[10px] rounded-[4px] text-[14px] font-semibold uppercase tracking-[0.28px] whitespace-nowrap transition-colors ${
                  tab.active ? 'bg-brand text-white' : 'text-body hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Current event date & location */}
          <div className="mt-12 flex flex-col gap-4 text-body">
            <p className="h2">{upcomingEvent.date}</p>
            <p className="text-lead">{upcomingEvent.location}</p>
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

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section id="haqida" className="pt-[112px]">
        {/* Heading + stats */}
        <div className="container text-center">
          <h2 className="h1 text-brand">UzGeeks nima?</h2>
          <div className="flex justify-center gap-20 mt-[83px] text-body">
            <div className="flex flex-col gap-4">
              <p className="h2">7+</p>
              <p className="text-lead">yildan buyon</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="h2">540+</p>
              <p className="text-lead">tadbirlar</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="h2">30.504+</p>
              <p className="text-lead">qatnashchilar</p>
            </div>
          </div>
        </div>

        {/* Full-width conference photo */}
        <div className="relative mt-24 h-[800px]">
          <img src={imgConference} alt="UzGeeks conference" className="w-full h-full object-cover" />
          <img src={imgAboutDots} alt="" className="absolute bottom-4 left-1/2 -translate-x-1/2 h-[10px] w-auto" />
        </div>

        {/* Body text */}
        <div className="content-container mt-12 space-y-6 text-body">
          <p className="text-lead">
            UzGeeks Community — bu O&apos;zbekistoning turli burchaklarida axborot texnologiylari sohasida faoliyat yuritadigan yetuk muhandislarning ish jarayonida o&apos;z sohalarida orttirgan bilim va tajribalari bilan bo&apos;lishish imkonini beruvchi mutloq ochiq maydoncha.
          </p>
          <p className="text-[18px] leading-[1.5] tracking-[0.36px]">
            UzGeeks meetuplari onlayn tarzda ijtimoiy tarmoqlarda efirga uzatiladi. Ushbu tadbirlarda qatnashish mutloq bepul bo&apos;lib, xohlagan ishtirokchi o&apos;z shaxsiy professional tajribasidan kelib chiqqan holda biror-bir mavzu bo&apos;yicha taqdimot o&apos;tkazib berishi, yoki oddiy eshituvchi-ishtirokchi sifatida qatnashishi mumkin.
          </p>
          <p className="text-[18px] leading-[1.5] tracking-[0.36px]">
            UzGeeks doirasida 7 yildan beri har oyda bir marta ochiq muloqot, bilim va malakalar bilan bo&apos;lishish maqsadida meetup-tadbirlar tashkil etiladi.
          </p>
        </div>

        {/* CTA */}
        <div className="content-container mt-[88px] pb-[112px]">
          <Button variant="primary">Bizga qo&apos;shiling</Button>
        </div>
      </section>

      {/* ═══════════════ PARTNERS ═══════════════ */}
      <section id="hamkorlar" className="py-[112px]">
        <div className="container">
          <div className="text-center">
            <h2 className="h1 text-brand">Hamkorlarimiz</h2>
            <p className="text-lead text-body mt-6">
              UzGeeks Community tarkibidagi mutahassislar quyidagi companiyalarda{" "}
              o&apos;z ish faoliyatlarini yuritadilar
            </p>
          </div>
          <div className="mt-[180px] flex justify-center">
            <img src={imgPartners} alt="Hamkorlar" className="max-w-full h-auto" />
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}
