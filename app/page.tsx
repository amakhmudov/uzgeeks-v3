import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";

import { MarqueeSection } from "@/components/home/MarqueeSection";

import { StatsSection } from "@/components/home/StatsSection";
import { WhyAttendUzgeeks } from "@/components/home/WhyAttendUzgeeks";
import { AttendeesWorkAt } from "@/components/home/AttendeesWorkAt";
import { EventsSection } from "@/components/home/EventsSection";
import { speakers, eventTabs, upcomingEvent } from "@/data/events";

export default function Home() {
  return (
    <>
      <Header transparent />
      <HeroSection event={upcomingEvent} />
      <MarqueeSection />
      <StatsSection />
      <WhyAttendUzgeeks />
      <AttendeesWorkAt />
      <EventsSection
        tabs={eventTabs}
        event={upcomingEvent}
        speakers={speakers}
      />

      <Footer />
    </>
  );
}
