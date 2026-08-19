import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";
import "./sections.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--f-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--f-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--f-mono",
  display: "swap",
});

const title = "Umidjon Majidov — Bizneslar uchun sotuvchi saytlar";
const description =
  "Umidjon Majidov — sotuvchi saytlar bo'yicha mutaxassis. 50+ ishga tushirilgan loyiha, 3+ yil tajriba. Tahlil, sotuvchi matn, premium dizayn va CRM — 7–10 kunda.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s · Umidjon Majidov",
  },
  description,
  keywords: [
    "sotuvchi sayt",
    "landing page",
    "Tilda",
    "veb dizayner",
    "sayt yaratish Toshkent",
    "Umidjon Majidov",
    "web development Uzbekistan",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: site.url,
    siteName: site.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#08090A",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Web designer & developer",
  description,
  url: site.url,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toshkent",
    addressCountry: "UZ",
  },
  sameAs: [site.instagram, site.telegram],
  knowsAbout: ["Landing page", "Tilda", "Figma", "UI/UX", "Konversiya optimizatsiyasi"],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Toshkent Axborot Texnologiyalari Universiteti",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#main">
          Asosiy kontentga o&apos;tish
        </a>
        <div className="grain" aria-hidden="true" />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
