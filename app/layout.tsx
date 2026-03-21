import type { Metadata } from "next";
import { Montserrat, Nunito_Sans, Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
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
      className={`${montserrat.variable} ${nunitoSans.variable} ${inter.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
