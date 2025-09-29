import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorEffect from "@/app/components/CursorEffect";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Firma - Développement d'application mobile et web",
  description:
    "Al Firma, votre agence experte en développement d'application mobile et web, vous accompagne de l'idée à la mise en marché de votre projet. Solutions personnalisées, support technique et conseil stratégique.",
  themeColor: "#000000",
  openGraph: {
    type: "website",
    url: "https://www.alfirma.com/",
    title: "Al Firma - Développement d'application mobile et web",
    description:
      "Al Firma vous accompagne tout au long du processus de développement de votre application mobile & web.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.alfirma.com/",
    title: "Al Firma - Développement d'application mobile et web",
    description:
      "Al Firma vous accompagne tout au long du processus de développement de votre application mobile & web.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="IOj81QGQJuPWZ9jeC_pOHCHOhWy3Jjb8qTdLqHOPV14"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* Cursor effect now lives in a client component */}
        <CursorEffect />
        <Footer />
      </body>
    </html>
  );
}
