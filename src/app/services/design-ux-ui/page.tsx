import type { Metadata } from 'next';
import Head from 'next/head';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Agence Design UX/UI & Conception Maquettes Figma | Al Firma',
  description: "Agence de design UX/UI experte en création d'interfaces intuitives et attrayantes. Conception de wireframes, maquettes Figma et stratégie d'expérience utilisateur.",
  keywords: 'agence design ux ui, conception maquette figma, design application, expérience utilisateur, interface utilisateur, création charte graphique',
  openGraph: {
    title: 'Agence Design UX/UI & Conception Maquettes Figma | Al Firma',
    description: "Expertise en UX/UI pour concevoir les interfaces de vos applications web et mobiles.",
    images: [{ url: '/assets/logo.png', width: 1200, height: 630, alt: 'Design UX/UI et conception maquettes Figma - Al Firma' }],
    type: 'website',
    url: 'https://alfirma.com/services/design-ux-ui',
  },
  alternates: {
    canonical: 'https://alfirma.com/services/design-ux-ui',
  },
};

export default function UxUiDesignPage() {
  const features = [
    "Création complète de l'identité visuelle et Branding",
    "Conception du logo et de la charte graphique",
    "Ateliers de co-conception et wireframing",
    "Prototypage interactif sur Figma",
    "Design UI moderne, épuré et ultra-intuitif",
    "Expérience Utilisateur (UX) pensée pour la conversion",
    "Fichiers sources livrés à la fin de la mission",
    "Retours illimités jusqu'à satisfaction parfaite"
  ];

  return (
    <>
      <Head>
        <link rel="canonical" href="https://alfirma.com/services/design-ux-ui" />
      </Head>
      <h1 className="sr-only">
        Agence Design UX/UI & Conception Maquettes Figma
      </h1>
      
      <ServicePageTemplate 
        title="UX/UI Design et Branding pour Applications"
        description="La première impression de votre application est primordiale. Nos designers conçoivent des interfaces (UI) modernes et des parcours utilisateurs (UX) logiques qui convertissent. De la wireframe brute à la maquette Figma Haute Fidélité et au prototypage cliquable."
        imageSrc="/assets/illustrations/uiuxdesign.png"
        imageAlt="Agence Design UX/UI et conception de maquettes Figma"
        features={features}
        price="Sur Devis"
      />
    </>
  );
}
