import { Marquee } from "@/components/ui/Marquee";

const items = [
  "O'zbekiston",
  "✦",
  "IT Hamjamiyat",
  "✦",
  "Tadbirlar",
  "✦",
  "Meetups",
  "✦",
  "Workshops",
  "✦",
  "Konferenciyalar",
  "✦",
  "Hackatonlar",
  "✦",
  "Networking",
  "✦",
  "Startaplar",
  "✦",
  "Innovatsiya",
  "✦",
  "Texnologiya",
  "✦",
  "Dasturlash",
  "✦",
  "Dizayn",
  "✦",
  "Biznes",
  "✦",
  "Mentorlik",
  "✦",
];

export function MarqueeSection() {
  return (
    <Marquee
      items={items}
      direction="left"
      speed={60}
      className="bg-brand py-4"
    />
  );
}
