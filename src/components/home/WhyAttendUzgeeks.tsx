const items = [
  {
    number: "01",
    title: "Shaxsiy salohiyat",
    description:
      "Texnologiya sohasidagi yetakchi mutaxassislar va innovatsion g'oyalar egallari bilan yonma-yon o'tirish — bu sizning kasbiy va shaxsiy rivojlanishingizga bevosita ta'sir qiladi.",
  },
  {
    number: "02",
    title: "Ko'nikmalarni mustahkamlang",
    description:
      "Amaliy seminarlar, masterklasslar va real loyihalar asosida zamonaviy IT-ko'nikmalarni o'rganing. Bilimni nazariyadan amaliyotga o'tkazish uchun eng yaxshi muhit.",
  },
  {
    number: "03",
    title: "G'oyalarni hayotga tatbiq eting",
    description:
      "Startap g'oyangizni yoki texnologik echimingizni sanoat ekspertlari va investorlar oldida taqdim eting. Konferensiya — bu g'oyangiz uchun eng kuchli ishga tushirish maydoni.",
  },
];

export function WhyAttendUzgeeks() {
  return (
    <section className="section is-dark">
      <div className="container space-y-8">
        <div className="space-y-1">
          <p className="text-author text-brand">Nimaga qatnashish kerak</p>
          <h2 className="max-w-xl">
            <strong>Nima uchun UzGeeks meetupida qatnashish kerak?</strong>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-x-8">
          {items.map((item) => (
            <div
              key={item.number}
              className="p-8 space-y-8 rounded bg-white shadow-xl shadow-border/50 hover:translate-y-1 hover:shadow-none transition will-change-transform"
            >
              <p className="font-serif text-brand h3 italic">{item.number}</p>

              <div className="space-y-2">
                <p className="text-lead">
                  <strong>{item.title}</strong>
                </p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
