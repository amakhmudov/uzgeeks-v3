/* ─── Figma asset URLs (valid for 7 days) ─── */
const imgBg = "https://www.figma.com/api/mcp/asset/b44af8a6-3e5d-4b46-9d1c-af889800a982";
const imgLogo = "https://www.figma.com/api/mcp/asset/a36ec16b-16a2-45d9-a7a6-a638f25393f3";
const imgHeroDots = "https://www.figma.com/api/mcp/asset/e5f7a430-9e81-413b-8c3e-259e95f3dcbd";
const imgAboutDots = "https://www.figma.com/api/mcp/asset/e52d8fb4-d7a9-492c-b616-145ff6b3c9ec";
const imgConference = "https://www.figma.com/api/mcp/asset/6debbe86-07ca-4088-a739-b703343d501b";
const imgPartners = "https://www.figma.com/api/mcp/asset/8078f82b-23fa-47c6-87e5-0fb77bb3d16b";

const speakers = [
  {
    time: "14:00 - 14:30",
    talk: "Data Preparation",
    name: "AZIZ ABDUMALIKOV",
    role: 'Data Scientist, AISHA UIC Group',
    img: "https://www.figma.com/api/mcp/asset/82f6ff31-a256-48bb-a684-74132fc59b3d",
  },
  {
    time: "15:00 - 15:30",
    talk: "Tavsiya qilish tizimlari ijtimoiy tarmoqlarda qanday ishlaydi?",
    name: "MOHINUR ABDURAKHIMOVA",
    role: "Machine Learning Engineer, Mohirdev",
    img: "https://www.figma.com/api/mcp/asset/dba23278-bf74-4ff2-887f-d30b8acf695d",
  },
  {
    time: "16:00 - 16:30",
    talk: "AI Plus You",
    name: "ADHAM ZOHIROV",
    role: "AI Team lead at Mohirdev & Google Developer Expert",
    img: "https://www.figma.com/api/mcp/asset/5058795c-3c9c-4664-9242-fe3dd2b367ea",
  },
  {
    time: "17:00 - 17:30",
    talk: "Thinking Machines: Understanding the Rise of AI",
    name: "ZARIFJON NAHALOV",
    role: "CTO, Wolfvision AI",
    img: "https://www.figma.com/api/mcp/asset/7c1ebf58-3ade-4319-a887-c09352ecd354",
  },
  {
    time: "18:00 - 18:30",
    talk: "Biznesda Sun'iy Intellekt",
    name: "MUHAMADALI SALOHIDDINOV",
    role: "Al/ML Engineer, Mohirdev, Dialix AI, CEO & Co-founder",
    img: "https://www.figma.com/api/mcp/asset/db23e20d-f689-4236-a9fd-4da55331d54f",
  },
];

const eventTabs = [
  { label: "Barcha tadbirlar", active: false },
  { label: "navbatdagi tadbir", active: true },
  { label: "Tanlangan tadbirlar", active: false },
  { label: "Tadbirda qatnashish", active: false },
];

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative h-[980px]">
        {/* Background image + dark overlay */}
        <div className="absolute inset-0">
          <img src={imgBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 h-full flex flex-col max-w-[1400px] mx-auto px-4">
          {/* ── Header ── */}
          <header className="flex items-center justify-between h-16 shrink-0 pt-3">
            <div className="flex items-center gap-16">
              <img src={imgLogo} alt="UzGeeks" className="h-16 w-auto" />
              <nav className="flex gap-[108px] text-white text-[18px] leading-normal tracking-[0.36px]">
                <a href="#tadbirlar" className="capitalize hover:text-brand transition-colors">Tadbirlar</a>
                <a href="#haqida" className="hover:text-brand transition-colors">UzGeeks haqida</a>
                <a href="#yordam" className="hover:text-brand transition-colors">Yordam.uz</a>
              </nav>
            </div>
            <div className="flex items-center gap-5 text-white text-[18px] leading-normal tracking-[0.36px]">
              <a href="#kirish" className="capitalize hover:text-brand transition-colors">Kirish</a>
              <span className="opacity-50">/</span>
              <button className="bg-brand text-white px-8 py-4 rounded-[4px] hover:opacity-90 transition-opacity">
                Ro'yhattan o'tish
              </button>
            </div>
          </header>

          {/* ── Hero content ── */}
          <div className="flex-1 flex flex-col items-center justify-center text-center pb-20">
            <h1 className="h1 text-brand">NO Code?</h1>
            <p className="h2 text-white mt-6 max-w-[692px]">
              Qanday qilib dasturlash tilisiz dasturiy ta'minot ishlab chiqish mumkin?
            </p>
            <img src={imgHeroDots} alt="" className="mt-4 h-2 w-auto" />
            <div className="text-white text-[18px] leading-[1.5] mt-11 space-y-[12px]">
              <p>27 - yanvar, 14:00, 2025 yil.</p>
              <p>Toshkent shahar, Mirzo Ulug'bek tumani, Muminov ko'chasi 4A.</p>
            </div>
            <div className="flex gap-4 mt-10">
              <button className="border border-white text-white px-8 py-[15px] rounded-[4px] text-[18px] w-[214px] hover:bg-white/10 transition-colors">
                Batafsil ma'lumot
              </button>
              <button className="bg-brand text-white px-8 py-4 rounded-[4px] text-[18px] hover:opacity-90 transition-opacity">
                Qatnashaman
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ EVENTS ═══════════════ */}
      <section id="tadbirlar" className="py-[112px]">
        <div className="max-w-[928px] mx-auto px-4">
          <h2 className="h1 text-brand text-center">Tadbirlar jadvali</h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 mt-6">
            {eventTabs.map((tab) => (
              <button
                key={tab.label}
                className={`px-4 py-[10px] rounded-[4px] text-[14px] font-semibold uppercase tracking-[0.28px] whitespace-nowrap transition-colors ${
                  tab.active
                    ? "bg-brand text-white"
                    : "text-body hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Current event date & location */}
          <div className="mt-12 flex flex-col gap-4 text-body">
            <p className="h2">27-yanvar, 14:00</p>
            <p className="text-lead">Toshkent shahar, Mirzo Ulug'bek tumani, Muminov ko'chasi 4A.</p>
          </div>

          {/* Speaker cards */}
          <div className="flex flex-col gap-9 mt-16">
            {speakers.map((speaker) => (
              <div
                key={speaker.name}
                className="bg-white rounded-[4px] shadow-[0px_1px_30px_0px_rgba(0,0,0,0.1)] p-10"
              >
                <div className="flex gap-6 items-center">
                  {/* Avatar */}
                  <div className="shrink-0 w-[126px] h-[126px] rounded-full overflow-hidden">
                    <img
                      src={speaker.img}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Info */}
                  <div className="flex flex-col gap-6 flex-1 min-w-0">
                    <div className="flex flex-col gap-3">
                      <p className="text-date text-muted leading-[1.2]">{speaker.time}</p>
                      <p className="h3 text-black">{speaker.talk}</p>
                    </div>
                    <p className="h6 leading-[1.2]">
                      <span className="text-brand">{speaker.name}</span>
                      <span className="text-muted">{` "${speaker.role}"`}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-9">
            <button className="bg-brand text-white px-8 py-4 rounded-[4px] text-[18px] hover:opacity-90 transition-opacity">
              Tadbirda qatnashishni istayman
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section id="haqida" className="pt-[112px]">
        {/* Heading + stats */}
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <h2 className="h1 text-brand">UzGeeks nima?</h2>
          <div className="flex justify-center gap-20 mt-[83px] text-body">
            <div className="flex flex-col gap-4">
              <p className="h2">7+</p>
              <p className="text-lead">yildan buyon</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="h2">540+</p>
              <p className="text-lead">tadbirlar</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="h2">30.504+</p>
              <p className="text-lead">qatnashchilar</p>
            </div>
          </div>
        </div>

        {/* Full-width conference photo */}
        <div className="relative mt-24 h-[800px]">
          <img
            src={imgConference}
            alt="UzGeeks conference"
            className="w-full h-full object-cover"
          />
          <img
            src={imgAboutDots}
            alt=""
            className="absolute bottom-4 left-1/2 -translate-x-1/2 h-[10px] w-auto"
          />
        </div>

        {/* Body text */}
        <div className="max-w-[929px] mx-auto px-4 mt-12 space-y-6 text-body">
          <p className="text-lead">
            UzGeeks Community — bu O'zbekistoning turli burchaklarida axborot texnologiylari sohasida faoliyat yuritadigan yetuk muhandislarning ish jarayonida o'z sohalarida orttirgan bilim va tajribalari bilan bo'lishish imkonini beruvchi mutloq ochiq maydoncha.
          </p>
          <p className="text-[18px] leading-[1.5] tracking-[0.36px]">
            UzGeeks meetuplari onlayn tarzda ijtimoiy tarmoqlarda efirga uzatiladi. Ushbu tadbirlarda qatnashish mutloq bepul bo'lib, xohlagan ishtirokchi o'z shaxsiy professional tajribasidan kelib chiqqan holda biror-bir mavzu bo'yicha taqdimot o'tkazib berishi, yoki oddiy eshituvchi-ishtirokchi sifatida qatnashishi mumkin.
          </p>
          <p className="text-[18px] leading-[1.5] tracking-[0.36px]">
            UzGeeks doirasida 7 yildan beri har oyda bir marta ochiq muloqot, bilim va malakalar bilan bo'lishish maqsadida meetup-tadbirlar tashkil etiladi.
          </p>
        </div>

        {/* CTA */}
        <div className="max-w-[929px] mx-auto px-4 mt-[88px] pb-[112px]">
          <button className="bg-brand text-white px-8 py-4 rounded-[4px] text-[18px] hover:opacity-90 transition-opacity">
            Bizga qo'shiling
          </button>
        </div>
      </section>

      {/* ═══════════════ PARTNERS ═══════════════ */}
      <section id="hamkorlar" className="py-[112px]">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center">
            <h2 className="h1 text-brand">Hamkorlarimiz</h2>
            <p className="text-lead text-body mt-6">
              UzGeeks Community tarkibidagi mutahassislar quyidagi companiyalarda{" "}
              o'z ish faoliyatlarini yuritadilar
            </p>
          </div>
          <div className="mt-[180px] flex justify-center">
            <img src={imgPartners} alt="Hamkorlar" className="max-w-full h-auto" />
          </div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer>
        <div className="bg-divider h-px" />
        <div className="max-w-[1400px] mx-auto px-4 py-[112px] flex items-start justify-between text-[16px] leading-[1.5] tracking-[0.32px]">
          <p className="text-body">© Copyright, All Rights Reserved by UzGeeks.</p>
          <div className="flex gap-8">
            <a href="#" className="text-brand underline">Terms</a>
            <a href="#" className="text-brand underline">Privacy policy</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
