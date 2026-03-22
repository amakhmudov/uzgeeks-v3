import { Marquee } from "@/components/ui/Marquee";

type Company = { name: string; logo?: string };

const ROW_ONE: Company[] = [
  { name: "Uzum Market", logo: "/logos/uzum.svg" },
  { name: "Payme", logo: "/logos/payme.svg" },
  { name: "Click", logo: "/logos/click.svg" },
  { name: "Beeline", logo: "/logos/beeline.svg" },
  { name: "Humans", logo: "/logos/humans.svg" },
  { name: "MyTaxi", logo: "/logos/mytaxi.svg" },
  { name: "Artel", logo: "/logos/artel.svg" },
  { name: "Ucell", logo: "/logos/ucell.svg" },
  { name: "Zood", logo: "/logos/zood.svg" },
  { name: "Evos", logo: "/logos/evos.svg" },
  { name: "Korzinka", logo: "/logos/korzinka.svg" },
  { name: "Uzum Market", logo: "/logos/uzum.svg" },
  { name: "Payme", logo: "/logos/payme.svg" },
  { name: "Click", logo: "/logos/click.svg" },
  { name: "Beeline", logo: "/logos/beeline.svg" },
  { name: "Humans", logo: "/logos/humans.svg" },
  { name: "MyTaxi", logo: "/logos/mytaxi.svg" },
  { name: "Artel", logo: "/logos/artel.svg" },
  { name: "Ucell", logo: "/logos/ucell.svg" },
  { name: "Zood", logo: "/logos/zood.svg" },
  { name: "Evos", logo: "/logos/evos.svg" },
  { name: "Korzinka", logo: "/logos/korzinka.svg" },
  { name: "Uzum Market", logo: "/logos/uzum.svg" },
  { name: "Payme", logo: "/logos/payme.svg" },
  { name: "Click", logo: "/logos/click.svg" },
  { name: "Beeline", logo: "/logos/beeline.svg" },
  { name: "Humans", logo: "/logos/humans.svg" },
  { name: "MyTaxi", logo: "/logos/mytaxi.svg" },
  { name: "Artel", logo: "/logos/artel.svg" },
  { name: "Ucell", logo: "/logos/ucell.svg" },
  { name: "Zood", logo: "/logos/zood.svg" },
  { name: "Evos", logo: "/logos/evos.svg" },
  { name: "Korzinka", logo: "/logos/korzinka.svg" },
];

const ROW_TWO: Company[] = [
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Samsung", logo: "/logos/samsung.svg" },
  { name: "Huawei", logo: "/logos/huawei.svg" },
  { name: "Yandex", logo: "/logos/yandex.svg" },
  { name: "EPAM", logo: "/logos/epam.svg" },
  { name: "Innowise", logo: "/logos/innowise.svg" },
  { name: "Akfa", logo: "/logos/akfa.svg" },
  { name: "UzAuto", logo: "/logos/uzauto.svg" },
  { name: "Orient Finance", logo: "/logos/orient.svg" },
  { name: "Nestlé", logo: "/logos/nestle.svg" },
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Samsung", logo: "/logos/samsung.svg" },
  { name: "Huawei", logo: "/logos/huawei.svg" },
  { name: "Yandex", logo: "/logos/yandex.svg" },
  { name: "EPAM", logo: "/logos/epam.svg" },
  { name: "Innowise", logo: "/logos/innowise.svg" },
  { name: "Akfa", logo: "/logos/akfa.svg" },
  { name: "UzAuto", logo: "/logos/uzauto.svg" },
  { name: "Orient Finance", logo: "/logos/orient.svg" },
  { name: "Nestlé", logo: "/logos/nestle.svg" },
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Samsung", logo: "/logos/samsung.svg" },
  { name: "Huawei", logo: "/logos/huawei.svg" },
  { name: "Yandex", logo: "/logos/yandex.svg" },
  { name: "EPAM", logo: "/logos/epam.svg" },
  { name: "Innowise", logo: "/logos/innowise.svg" },
  { name: "Akfa", logo: "/logos/akfa.svg" },
  { name: "UzAuto", logo: "/logos/uzauto.svg" },
  { name: "Orient Finance", logo: "/logos/orient.svg" },
  { name: "Nestlé", logo: "/logos/nestle.svg" },
];

function LogoItem({ company }: { company: Company }) {
  return <span className="attendees-logo">{company.name}</span>;
}

export function AttendeesWorkAt() {
  const rowOneItems = ROW_ONE.map((c) => <LogoItem key={c.name} company={c} />);
  const rowTwoItems = ROW_TWO.map((c) => <LogoItem key={c.name} company={c} />);

  return (
    <section className="section space-y-8">
      <div className="container">
        <div className="space-y-1 text-center max-w-xl mx-auto">
          <p className="text-author text-brand">Ishtirokchilar</p>
          <h2>
            <strong>
              UzGeeks ishtirokchilari qaysi kompaniyalarda ishlashadi?
            </strong>
          </h2>
        </div>
      </div>

      <div className="space-y-4">
        <Marquee items={rowOneItems} direction="left" speed={180} />
        <Marquee items={rowTwoItems} direction="right" speed={180} />
      </div>
    </section>
  );
}
