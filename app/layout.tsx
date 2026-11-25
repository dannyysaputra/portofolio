import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import PageContainer from "@/components/layout/PageContainer";
import { profile } from "@/data/profile";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
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
    "sameAs": [
      profile.github,
      profile.linkedin
    ],
    "description": profile.positioning,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bandung",
      "addressRegion": "West Java",
      "addressCountry": "Indonesia"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <PageContainer>
            {children}
          </PageContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
