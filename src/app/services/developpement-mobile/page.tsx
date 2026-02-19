import type { Metadata } from 'next';
import Head from 'next/head';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Agence Développement Application Mobile (iOS & Android) | Al Firma',
  description: "Développement d'applications mobiles sur mesure avec React Native. Création d'apps iOS et Android performantes. Devis gratuit sous 24h.",
  keywords: 'développement application mobile, agence react native, création app ios, création app android, agence de developpement mobile',
  openGraph: {
    title: 'Agence Développement Application Mobile | Al Firma',
    description: "Développement d'applications mobiles iOS et Android sur mesure avec React Native.",
    images: ['/assets/logo.png'],
    type: 'website',
    url: 'https://alfirma.com/services/developpement-mobile',
  },
  alternates: {
    canonical: 'https://alfirma.com/services/developpement-mobile',
  },
};

export default function DeveloppementMobilePage() {
  const features = [
    "Design de maquettes Figma sur mesure inclus",
    "Application cross-platform (iOS & Android) en React Native",
    "Performances proches du natif 60 fps",
    "Notifications, authentification tierce et base de données",
    "Déploiement sur App Store & Google Play garanti",
    "Publication, tests et retours illimités",
    "30 jours de garantie pièces et main d'œuvre",
    "Une livraison record possible en 20 jours"
  ];

  return (
    <>
      <Head>
        <link rel="canonical" href="https://alfirma.com/services/developpement-mobile" />
      </Head>
      <h1 className="sr-only">
        Agence Développement Application Mobile (iOS & Android)
      </h1>
      
      <ServicePageTemplate 
        title="Développement d'Applications Mobiles iOS & Android"
        description="La création d'applications mobiles performantes est au cœur de notre expertise. Nous utilisons React Native pour vous garantir une solution iOS et Android, un investissement réduit, et des performances proches du natif. Découvrez nos solutions sur mesure."
        imageSrc="/assets/illustrations/appmobile.png"
        imageAlt="Agence développement d'applications mobiles iOS et Android"
        features={features}
        price="8900€"
      />
    </>
  );
}
