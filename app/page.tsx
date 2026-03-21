import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { EventsSection } from "@/components/home/EventsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { MarqueeSection } from "@/components/home/MarqueeSection";
import { speakers, eventTabs, upcomingEvent } from "@/data/events";

export default function Home() {
  return (
    <>
      <Header transparent />
      <HeroSection event={upcomingEvent} />
      <MarqueeSection />

      <EventsSection
        tabs={eventTabs}
        event={upcomingEvent}
        speakers={speakers}
      />
      <AboutSection />
      <PartnersSection />
      <Footer />
    </>
  );
}
