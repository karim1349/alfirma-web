import CursorEffect from "@/app/components/CursorEffect";

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Footer from "./components/Footer";
import { OrganizationSchema, WebSiteSchema } from "./components/StructuredData";
import "./globals.css";

const clashDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap", // Prevents font from blocking render
  preload: true,   // Preloads font for faster loading
});

export const metadata: Metadata = {
  metadataBase: new URL('https://alfirma.com/'),
  title: "Al Firma - Agence Développement Applications Mobiles & Web",
  description:
    "Al Firma, agence experte en développement d'applications mobiles et web. React Native, Django, UX/UI Design. Applications iOS, Android sur mesure.",
  keywords: "développement mobile, application web, agence développement mobile, React Native, Django, UX/UI design, agence digitale, développement sur mesure, applications iOS, applications Android, API REST, maintenance applicative, création application mobile, développement web, agence web mobile",
  openGraph: {
    type: "website",
    url: "https://alfirma.com/",
    title: "Al Firma - Agence Développement Applications Mobiles & Web",
    description:
      "Al Firma, agence experte en développement d'applications mobiles et web. React Native, Django, UX/UI Design. Applications iOS, Android sur mesure.",
    images: [{ url: "/assets/logo.png", width: 1200, height: 630, alt: "Al Firma - Agence développement d'applications mobiles et web" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://alfirma.com/",
    title: "Al Firma - Agence Développement Applications Mobiles & Web",
    description:
      "Al Firma, agence experte en développement d'applications mobiles et web. React Native, Django, UX/UI Design. Applications iOS, Android sur mesure.",
    images: [{ url: "/assets/logo.png", width: 1200, height: 630, alt: "Al Firma - Agence développement d'applications mobiles et web" }],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/logo.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://alfirma.com/",
    types: {
      "application/rss+xml": "https://alfirma.com/feed.xml",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="google-site-verification"
          content="IOj81QGQJuPWZ9jeC_pOHCHOhWy3Jjb8qTdLqHOPV14"
        />
        {/* Preload critical fonts to reduce network dependency chain */}
        <link
          rel="preload"
          href="/fonts/ClashDisplay.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/ClashDisplay-Semibold.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />

        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body
        className={`${clashDisplay.variable} antialiased`}
      >
        <main id="main-content">
          {children}
        </main>
        {/* Cursor effect now lives in a client component */}
        <CursorEffect />
        <Footer />
      </body>
    </html>
  );
}
