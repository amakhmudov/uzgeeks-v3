import Image from "next/image";
import imgConference from "@/assets/images/conference.jpg";

const stats = [
  { value: "13", label: "asosiy tashkilotchilar" },
  { value: "50", label: "dan ortiq uchrashuvlar" },
  { value: "3000", label: "umumiy guruh a'zolari" },
];

export function StatsSection() {
  return (
    <section className="section">
      <div className="container grid grid-cols-3 gap-x-16 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2>
              <strong>UzGeeks meetup nima degani?</strong>
            </h2>

            <p className="text-muted">
              UzGeeks meetuplari bu: IT Hamjamiyati tajribali mutahassislar
              tomonidan yosh IT mutahassislari bilan tajriba almashish, mustaqil
              orttirilgan bilimlarni bo'lishish, ko'mak, tavsiya, maslahatlarni
              berish.
            </p>
          </div>

          <blockquote>
            <p>
              UzGeeks meetup orqali kuchli IT mutahassislar, hamfikr, yahshi
              insonlar bilan tanishdim, ko'p loyihada birga ishladik, haligacha
              do'stmiz.
            </p>

            <footer className="text-author text-brand">
              &mdash;&nbsp;Alisher Makhmudov
            </footer>
          </blockquote>
        </div>

        <div className="relative aspect-3/4 rounded overflow-hidden">
          <Image
            src={imgConference}
            alt="Business annual conference"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="divide-y divide-border">
          {stats.map((stat) => (
            <div key={stat.label} className="py-8">
              <p className="h1 font-bold">
                {stat.value}
                <sup>+</sup>
              </p>
              <strong className="text-author text-muted">{stat.label}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
