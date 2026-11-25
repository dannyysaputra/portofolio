import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import PageContainer from "@/components/layout/PageContainer";
import { profile } from "@/data/profile";

const serif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteTitle = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${profile.name}`,
  },
  description: profile.positioning,
  openGraph: {
    title: siteTitle,
    description: profile.positioning,
    url: "/",
    siteName: profile.name,
    type: "website",
    locale: "en_US",
    images: ["/IMG_9498.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: profile.positioning,
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0d0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": profile.name,
    "jobTitle": profile.role,
    "url": profile.siteUrl,
    "sameAs": [profile.github, profile.linkedin],
    "description": profile.positioning,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bandung",
      "addressRegion": "West Java",
      "addressCountry": "Indonesia",
    },
  };

  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PageContainer>{children}</PageContainer>
      </body>
    </html>
  );
}
