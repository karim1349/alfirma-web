import type { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Agence Design UX/UI & Conception Maquettes Figma | Al Firma',
  description: "Design UX/UI d’applications web et mobiles : parcours utilisateurs, wireframes, prototypes et maquettes Figma prêts pour le développement.",
  keywords: 'agence design ux ui, conception maquette figma, design application, expérience utilisateur, interface utilisateur, création charte graphique',
  openGraph: {
    title: 'Agence Design UX/UI & Conception Maquettes Figma | Al Firma',
    description: "Expertise en UX/UI pour concevoir les interfaces de vos applications web et mobiles.",
    images: [{ url: '/assets/og-logo.webp', width: 1200, height: 630, alt: 'Design UX/UI et conception maquettes Figma - Al Firma' }],
    type: 'website',
    url: 'https://alfirma.com/services/design-ux-ui/',
  },
  alternates: {
    canonical: 'https://alfirma.com/services/design-ux-ui/',
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

  const seoContent = (
    <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
      <h2 className="text-xl font-bold text-slate-900 mb-4">Du wireframe Figma à l&apos;application livrée</h2>
      <p className="text-slate-600 mb-4">
        Un design UX/UI réussi ne s&apos;arrête pas à la maquette : il se confronte à la réalité du développement mobile et web. C&apos;est pourquoi nos designers travaillent main dans la main avec nos développeurs React Native et Django dès la phase de wireframing — pour anticiper les contraintes techniques, optimiser les parcours utilisateurs et livrer des interfaces qui se construisent sans friction.
      </p>
      <p className="text-slate-600 mb-6">
        Vous démarrez un nouveau projet ? Notre offre couvre l&apos;ensemble : design UX/UI, développement mobile, développement web et APIs. Une équipe unique, des livrables cohérents, et un budget maîtrisé.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link href="/services/developpement-mobile/" className="inline-flex items-center gap-2 bg-white border border-indigo-200 text-indigo-700 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all">
          Développement mobile →
        </Link>
        <Link href="/services/developpement-web-django/" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
          Développement web Django →
        </Link>
        <Link href="/tarifs/" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
          Voir les tarifs →
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <link rel="canonical" href="https://alfirma.com/services/design-ux-ui/" />
      </Head>
      <ServicePageTemplate
        title="UX/UI Design et Branding pour Applications"
        description="La première impression de votre application est primordiale. Nos designers conçoivent des interfaces (UI) modernes et des parcours utilisateurs (UX) logiques qui convertissent. De la wireframe brute à la maquette Figma Haute Fidélité et au prototypage cliquable."
        imageSrc="/assets/illustrations/uiuxdesign.png"
        imageAlt="Agence Design UX/UI et conception de maquettes Figma"
        features={features}
        price="Sur Devis"
        seoContent={seoContent}
      />
    </>
  );
}
