import type { Metadata } from "next";
import { Montserrat, Nunito_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-montserrat-next",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito-next",
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
    <html lang="uz" className={`${montserrat.variable} ${nunitoSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
