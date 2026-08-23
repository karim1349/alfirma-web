import type { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { MOBILE_STARTING_PRICE } from '@/lib/seo-data';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const dynamic = 'force-static';

const pageTitle = 'Agence Application Mobile iOS & Android | Al Firma';

export const metadata: Metadata = {
  title: pageTitle,
  description: "Développement d'applications mobiles sur mesure avec React Native. Création d'apps iOS et Android performantes. Devis gratuit sous 24h.",
  keywords: 'développement application mobile, agence react native, création app ios, création app android, agence de developpement mobile',
  openGraph: {
    title: pageTitle,
    description: "Développement d'applications mobiles iOS et Android sur mesure avec React Native.",
    images: [{ url: '/assets/og-logo.webp', width: 1200, height: 630, alt: 'Développement application mobile iOS et Android - Al Firma' }],
    type: 'website',
    url: 'https://alfirma.com/services/developpement-mobile/',
  },
  alternates: {
    canonical: 'https://alfirma.com/services/developpement-mobile/',
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

  const seoContent = (
    <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
      <h2 className="text-xl font-bold text-slate-900 mb-4">Votre application mobile clé en main</h2>
      <p className="text-slate-600 mb-6">
        Notre offre inclut le design UX/UI, le développement React Native iOS et Android, et le déploiement sur les stores.
        Découvrez nos tarifs transparents ou consultez nos autres services complémentaires.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link href="/tarifs/" className="inline-flex items-center gap-2 bg-white border border-indigo-200 text-indigo-700 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all">
          Voir les tarifs →
        </Link>
        <Link href="/services/developpement-web-django/" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
          Développement web →
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <link rel="canonical" href="https://alfirma.com/services/developpement-mobile/" />
      </Head>
      <ServicePageTemplate
        title="Développement d'Applications Mobiles iOS & Android"
        description="La création d'applications mobiles performantes est au cœur de notre expertise. Nous utilisons React Native pour vous garantir une solution iOS et Android, un investissement réduit, et des performances proches du natif. Découvrez nos solutions sur mesure."
        imageSrc="/assets/illustrations/appmobile.png"
        imageAlt="Agence développement d'applications mobiles iOS et Android"
        features={features}
        price={MOBILE_STARTING_PRICE.display}
        seoContent={seoContent}
      />
    </>
  );
}
