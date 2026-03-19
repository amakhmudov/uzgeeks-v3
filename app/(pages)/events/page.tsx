import { EventsSection } from '@/components/home/EventsSection'
import { speakers, eventTabs, upcomingEvent } from '@/data/events'

export default function Events() {
  return (
    <EventsSection tabs={eventTabs} event={upcomingEvent} speakers={speakers} />
  )
}
