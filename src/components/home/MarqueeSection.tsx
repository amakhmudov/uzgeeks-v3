const items = [
  "O'zbekiston",
  "IT Hamjamiyat",
  "Tadbirlar",
  "Meetups",
  "Workshops",
  "Konferenciyalar",
  "Hackatonlar",
  "Networking",
  "Startaplar",
  "Innovatsiya",
  "Texnologiya",
  "Dasturlash",
  "Dizayn",
  "Biznes",
  "Mentorlik",
];

function MarqueeGroup() {
  return (
    <ul className="marquee-list">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function MarqueeSection() {
  return (
    <div className="marquee-section" aria-hidden="true">
      <MarqueeGroup />
      <MarqueeGroup />
    </div>
  );
}
