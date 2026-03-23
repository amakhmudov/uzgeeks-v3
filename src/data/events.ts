import speakerAziz from "@/assets/images/speaker-aziz.jpg";
import speakerMohinur from "@/assets/images/speaker-mohinur.jpg";
import speakerAdham from "@/assets/images/speaker-adham.jpg";
import speakerZarifjon from "@/assets/images/speaker-zarifjon.jpg";
import speakerMuhamadali from "@/assets/images/speaker-muhamadali.jpg";
import conference from "@/assets/images/conference.jpg";
import type { Speaker, Event, EventItem } from "@/types/events";

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

export const EVENTS: EventItem[] = [
  {
    id: "1",
    day: "27",
    month: "YAN",
    category: "meetup",
    image: conference,
    title: "NO Code? — Tilsiz dasturiy ta'minot yaratish",
    datetime: "27-yanvar 2026, 14:00",
    location: "Toshkent, Muminov ko'chasi 4A",
    attendees: "240 / 300 o'rin band",
    avatars: [
      { initial: "A", colorToken: "avatar-1" },
      { initial: "M", colorToken: "avatar-2" },
      { initial: "D", colorToken: "avatar-3" },
    ],
    speakerLabel: "5 ma'ruzachi",
  },
  {
    id: "2",
    day: "15",
    month: "FEB",
    category: "workshop",
    image: conference,
    title: "React & Next.js — Zamonaviy Frontend Workshop",
    datetime: "15-fevral 2026, 10:00",
    location: "Toshkent IT Park, Amir Temur 108",
    attendees: "80 / 100 o'rin band",
    avatars: [
      { initial: "I", colorToken: "avatar-3" },
      { initial: "B", colorToken: "avatar-4" },
    ],
    speakerLabel: "2 mentor",
  },
  {
    id: "3",
    day: "05",
    month: "MAR",
    category: "konferensiya",
    image: conference,
    title: "UzGeeks Conference 2026 — IT kelajagi",
    datetime: "5-mart 2026, 09:00",
    location: "Hyatt Regency Tashkent",
    attendees: "500+ ishtirokchi kutilmoqda",
    avatars: [
      { initial: "A", colorToken: "avatar-1" },
      { initial: "Z", colorToken: "avatar-6" },
      { initial: "F", colorToken: "avatar-4" },
    ],
    speakerLabel: "12 spiker",
  },
  {
    id: "4",
    day: "22",
    month: "MAR",
    category: "hackathon",
    image: conference,
    title: "UzHack 2026 — 48 soatlik kodlash maratoni",
    datetime: "22–24 mart 2026",
    location: "INHA University, Toshkent",
    attendees: "Sovrin: $5,000",
    avatars: [
      { initial: "T", colorToken: "avatar-3" },
      { initial: "S", colorToken: "avatar-6" },
    ],
    speakerLabel: "Jamoalar uchun",
  },
];

export const SELECTED_EVENTS: EventItem[] = [
  {
    id: "s1",
    day: "18",
    month: "OKT",
    category: "konferensiya",
    image: conference,
    title: "UzGeeks Conf 2025 — Raqamli O'zbekiston",
    datetime: "18-oktabr 2025, 09:00",
    location: "IT Park Toshkent, Amir Temur 108",
    attendees: "420 ishtirokchi",
    avatars: [
      { initial: "A", colorToken: "avatar-1" },
      { initial: "Z", colorToken: "avatar-2" },
      { initial: "M", colorToken: "avatar-5" },
    ],
    speakerLabel: "10 spiker",
  },
  {
    id: "s2",
    day: "12",
    month: "APR",
    category: "meetup",
    image: conference,
    title: "AI & Startup — G'oyadan Mahsulotgacha",
    datetime: "12-aprel 2025, 14:00",
    location: "Toshkent, Chilonzor Texnopark",
    attendees: "180 ishtirokchi",
    avatars: [
      { initial: "F", colorToken: "avatar-4" },
      { initial: "D", colorToken: "avatar-6" },
    ],
    speakerLabel: "4 ma'ruzachi",
  },
  {
    id: "s3",
    day: "07",
    month: "IYN",
    category: "workshop",
    image: conference,
    title: "Python for Data — Amaliy Ma'lumotlar Tahlili",
    datetime: "7-iyun 2025, 10:00",
    location: "Najot Ta'lim, Toshkent",
    attendees: "60 / 60 o'rin band",
    avatars: [
      { initial: "N", colorToken: "avatar-3" },
      { initial: "S", colorToken: "avatar-1" },
    ],
    speakerLabel: "2 mentor",
  },
  {
    id: "s4",
    day: "14",
    month: "SEP",
    category: "hackathon",
    image: conference,
    title: "HackUz 2025 — Sog'liqni Saqlash va AI",
    datetime: "14–15 sentabr 2025",
    location: "INHA University, Toshkent",
    attendees: "Sovrin: $3,000",
    avatars: [
      { initial: "K", colorToken: "avatar-6" },
      { initial: "J", colorToken: "avatar-2" },
      { initial: "R", colorToken: "avatar-5" },
    ],
    speakerLabel: "Jamoalar uchun",
  },
];
