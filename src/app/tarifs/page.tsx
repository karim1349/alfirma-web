import type { Metadata } from "next";
import { MOBILE_STARTING_PRICE } from "@/lib/seo-data";
import TarifsPageClient from "./TarifsPageClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tarifs - Al Firma | Développement Applications Mobiles & Web",
  description:
    `Découvrez nos tarifs transparents pour le développement d'applications mobiles et web. À partir de ${MOBILE_STARTING_PRICE.display} pour une app mobile. Devis gratuit sous 24h.`,
  keywords:
    "prix application mobile, tarif développement application, coût création app, devis application mobile, prix agence développement",
  openGraph: {
    title: "Tarifs - Al Firma | Développement Applications Mobiles & Web",
    description:
      `Tarifs transparents pour le développement d'applications. Mobile à partir de ${MOBILE_STARTING_PRICE.display}, Web à partir de 6 900€.`,
    images: [{ url: "/assets/og-logo.webp", width: 1200, height: 630, alt: "Tarifs Al Firma - Développement application mobile et web" }],
    type: "website",
    url: "https://alfirma.com/tarifs/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs - Al Firma | Développement Applications Mobiles & Web",
    description:
      `Tarifs transparents pour le développement d'applications. Mobile à partir de ${MOBILE_STARTING_PRICE.display}.`,
    images: [{ url: "/assets/og-logo.webp", width: 1200, height: 630, alt: "Tarifs Al Firma - Développement application mobile et web" }],
  },
  alternates: {
    canonical: "https://alfirma.com/tarifs/",
  },
};

export default function TarifsPage() {
  return <TarifsPageClient />;
}
