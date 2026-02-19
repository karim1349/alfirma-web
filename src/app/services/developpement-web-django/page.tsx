import type { Metadata } from 'next';
import Head from 'next/head';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Agence Développement Application Web Django & React | Al Firma',
  description: "Agence de développement d'applications web sur mesure. Expertise pointue en Django et React.js pour des plateformes SaaS, e-commerce et outils métiers robustes.",
  keywords: 'développement application web, agence web, développement sur mesure, création saas, agence django, agence react',
  openGraph: {
    title: 'Agence Développement Application Web Django & React | Al Firma',
    description: "Expertise en développement web sur mesure avec Django & React. Plateformes SaaS, outils métiers.",
    images: ['/assets/logo.png'],
    type: 'website',
    url: 'https://alfirma.com/services/developpement-web-django',
  },
  alternates: {
    canonical: 'https://alfirma.com/services/developpement-web-django',
  },
};

export default function DeveloppementWebPage() {
  const features = [
    "Design de maquettes Figma sur mesure inclus",
    "Développement frontend performant (React.js, Next.js)",
    "Back-end robuste et sécurisé (Django, Python)",
    "Création de plateformes E-Commerce et SaaS",
    "Adaptation Responsive 100% Mobile First",
    "Traduction multi-langues",
    "30 jours de garantie pièces et main d'œuvre",
    "Une livraison record possible en 15 jours"
  ];

  return (
    <>
      <Head>
        <link rel="canonical" href="https://alfirma.com/services/developpement-web-django" />
      </Head>
      <h1 className="sr-only">
        Agence Développement Application Web Django & React
      </h1>
      
      <ServicePageTemplate 
        title="Développement d'Applications Web avec React.js et Django"
        description="La création d'applications web complexes est notre force. Grâce à l'association de React.js et de Django, nous développons des expériences utilisateurs fluides, des back-ends hautement sécurisés, et des architectures évolutives qui répondent aux exigences des PME, startups, et grands groupes."
        imageSrc="/assets/illustrations/appweb.png"
        imageAlt="Développement d'applications web avec React.js et Django"
        features={features}
        price="6900€"
      />
    </>
  );
}
