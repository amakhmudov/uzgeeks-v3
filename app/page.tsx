import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/home/HeroSection'
import { EventsSection } from '@/components/home/EventsSection'
import { AboutSection } from '@/components/home/AboutSection'
import { PartnersSection } from '@/components/home/PartnersSection'
import { speakers, eventTabs, upcomingEvent } from '@/data/events'

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-20 container pt-3">
          <Header transparent />
        </div>
        <HeroSection event={upcomingEvent} />
      </div>
      <EventsSection tabs={eventTabs} event={upcomingEvent} speakers={speakers} />
      <AboutSection />
      <PartnersSection />
      <Footer />
    </div>
  )
}
