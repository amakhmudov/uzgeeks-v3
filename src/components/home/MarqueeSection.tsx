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

function MarqueeGroup({ ariaHidden }: { ariaHidden?: true }) {
  return (
    <ul className="marquee-list" aria-hidden={ariaHidden}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function MarqueeSection() {
  return (
    <div className="marquee-section">
      <MarqueeGroup />
      <MarqueeGroup ariaHidden />
    </div>
  );
}
