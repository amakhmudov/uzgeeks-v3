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
