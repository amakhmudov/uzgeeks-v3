import {
  speakerAziz,
  speakerMohinur,
  speakerAdham,
  speakerZarifjon,
  speakerMuhamadali,
} from '@/assets'

export const speakers = [
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
]

export const eventTabs = [
  { label: "Barcha tadbirlar", active: false },
  { label: "navbatdagi tadbir", active: true },
  { label: "Tanlangan tadbirlar", active: false },
  { label: "Tadbirda qatnashish", active: false },
]

export const upcomingEvent = {
  date: "27-yanvar, 14:00",
  location: "Toshkent shahar, Mirzo Ulug'bek tumani, Muminov ko'chasi 4A.",
}
