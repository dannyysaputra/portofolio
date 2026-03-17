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

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.headline.split(" ")[0]} Engineer`,
  description: profile.subheadline,
  openGraph: {
    title: profile.name,
    description: profile.subheadline,
    type: "website",
    images: ["/IMG_9498.jpg"], // Added static OG image
  }
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
    "jobTitle": "Software Engineer",
    "url": "https://portofolio-danny.vercel.app",
    "sameAs": [
      profile.github,
      profile.linkedin
    ],
    "description": profile.subheadline,
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
