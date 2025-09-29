import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CursorEffect from "@/app/components/CursorEffect";
import Footer from "./components/Footer";
import { OrganizationSchema, WebSiteSchema } from "./components/StructuredData";
import "@/lib/axios"; // Initialize axios configuration

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
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alfirma.com'),
  title: "Al Firma - Développement d'application mobile et web",
  description:
    "Al Firma, votre agence experte en développement d'application mobile et web, vous accompagne de l'idée à la mise en marché de votre projet. Solutions personnalisées, support technique et conseil stratégique.",
  keywords: "développement mobile, application web, React Native, Django, UX/UI design, agence digitale, développement sur mesure, applications iOS, applications Android, API REST, maintenance applicative",
  openGraph: {
    type: "website",
    url: "https://www.alfirma.com/",
    title: "Al Firma - Développement d'application mobile et web",
    description:
      "Al Firma vous accompagne tout au long du processus de développement de votre application mobile & web.",
    images: ["/assets/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.alfirma.com/",
    title: "Al Firma - Développement d'application mobile et web",
    description:
      "Al Firma vous accompagne tout au long du processus de développement de votre application mobile & web.",
    images: ["/assets/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/logo.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://www.alfirma.com"
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
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body
        className={`${clashDisplay.variable} antialiased`}
      >
        {children}
        {/* Cursor effect now lives in a client component */}
        <CursorEffect />
        <Footer />
      </body>
    </html>
  );
}
