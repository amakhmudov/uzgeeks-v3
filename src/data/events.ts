import speakerAziz from "@/assets/images/speaker-aziz.jpg";
import speakerMohinur from "@/assets/images/speaker-mohinur.jpg";
import speakerAdham from "@/assets/images/speaker-adham.jpg";
import speakerZarifjon from "@/assets/images/speaker-zarifjon.jpg";
import speakerMuhamadali from "@/assets/images/speaker-muhamadali.jpg";
import type { Speaker, Event } from "@/types/events";

export const speakers: Speaker[] = [
  {
    time: "14:00 - 14:30",
    talk: "Data Preparation",
    name: "AZIZ ABDUMALIKOV",
    role: "Data Scientist, AISHA UIC Group",
    img: speakerAziz,
  },
  {
    time: "15:00 - 15:30",
    talk: "Tavsiya qilish tizimlari ijtimoiy tarmoqlarda qanday ishlaydi?",
    name: "MOHINUR ABDURAKHIMOVA",
    role: "Machine Learning Engineer, Mohirdev",
    img: speakerMohinur,
  },
  {
    time: "16:00 - 16:30",
    talk: "AI Plus You",
    name: "ADHAM ZOHIROV",
    role: "AI Team lead at Mohirdev & Google Developer Expert",
    img: speakerAdham,
  },
  {
    time: "17:00 - 17:30",
    talk: "Thinking Machines: Understanding the Rise of AI",
    name: "ZARIFJON NAHALOV",
    role: "CTO, Wolfvision AI",
    img: speakerZarifjon,
  },
  {
    time: "18:00 - 18:30",
    talk: "Biznesda Sun'iy Intellekt",
    name: "MUHAMADALI SALOHIDDINOV",
    role: "Al/ML Engineer, Mohirdev, Dialix AI, CEO & Co-founder",
    img: speakerMuhamadali,
  },
];

export const eventTabs: string[] = [
  "Barcha tadbirlar",
  "Navbatdagi tadbir",
  "Tanlangan tadbirlar",
  "Tadbirda qatnashish",
];

export const upcomingEvent: Event = {
  date: "27-yanvar, 14:00",
  location: "Toshkent shahar, Mirzo Ulug'bek tumani, Muminov ko'chasi 4A.",
};
