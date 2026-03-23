import type { StaticImageData } from "next/image";

export type Speaker = {
  time: string;
  talk: string;
  name: string;
  role: string;
  img: StaticImageData;
};

export type Event = {
  date: string;
  location: string;
};

export type EventCategory = "meetup" | "workshop" | "konferensiya" | "hackathon";

export type EventAvatar = {
  initial: string;
  colorToken: string;
};

export type EventItem = {
  id: string;
  day: string;
  month: string;
  category: EventCategory;
  image: StaticImageData;
  title: string;
  datetime: string;
  location: string;
  attendees: string;
  avatars: EventAvatar[];
  speakerLabel: string;
};
