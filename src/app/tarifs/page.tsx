import type { Metadata } from "next";
import TarifsPageClient from "./TarifsPageClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tarifs - Al Firma | Développement Applications Mobiles & Web",
  description:
    "Découvrez nos tarifs transparents pour le développement d'applications mobiles et web. À partir de 8 900€ pour une app mobile. Devis gratuit sous 24h.",
  keywords:
    "prix application mobile, tarif développement application, coût création app, devis application mobile, prix agence développement",
  openGraph: {
    title: "Tarifs - Al Firma | Développement Applications Mobiles & Web",
    description:
      "Tarifs transparents pour le développement d'applications. Mobile à partir de 8 900€, Web à partir de 6 900€.",
    images: ["/assets/logo.png"],
    type: "website",
    url: "https://alfirma.com/tarifs/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs - Al Firma | Développement Applications Mobiles & Web",
    description:
      "Tarifs transparents pour le développement d'applications. Mobile à partir de 8 900€.",
    images: ["/assets/logo.png"],
  },
  alternates: {
    canonical: "https://alfirma.com/tarifs/",
  },
};

export default function TarifsPage() {
  return <TarifsPageClient />;
}
