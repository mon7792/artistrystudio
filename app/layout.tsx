import type { Metadata } from "next";
import { Cormorant_Garamond, Hanken_Grotesk, Tangerine } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
});

const hanken = Hanken_Grotesk({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});

const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aartistrystudio.com'),
  title: "Aartistry Studio — Preserving Your Moments in Resin",
  description:
    "Resin art, flower preservation & digital art by Akshada. Commission personalised keepsakes, ocean wall art, and custom pieces.",
  openGraph: {
    title: "Aartistry Studio",
    description: "Preserving your moments in resin.",
    type: "website",
    images: [{ url: '/logo.png', width: 120, height: 40, alt: 'Aartistry Studio' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${hanken.variable} ${tangerine.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
