import type { Metadata } from "next";
import { Montserrat, DM_Sans, Lora } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "UzGeeks — O'zbekiston IT hamjamiyati",
  description:
    "UzGeeks — O'zbekiston IT hamjamiyati. Tadbirlar, uchrashuv va networking.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "UzGeeks — O'zbekiston IT hamjamiyati",
    description:
      "UzGeeks — O'zbekiston IT hamjamiyati. Tadbirlar, uchrashuv va networking.",
    type: "website",
    locale: "uz_UZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "UzGeeks — O'zbekiston IT hamjamiyati",
    description:
      "UzGeeks — O'zbekiston IT hamjamiyati. Tadbirlar, uchrashuv va networking.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="uz"
      className={`${montserrat.variable} ${dmSans.variable} ${lora.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
