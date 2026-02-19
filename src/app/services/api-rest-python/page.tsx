import type { Metadata } from 'next';
import Head from 'next/head';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Agence Développement API RESTful en Python | Al Firma',
  description: "Développement d'APIs RESTful performantes et sécurisées en Python avec le framework Django. Architecture micro-services et intégration sur mesure.",
  keywords: 'développement api, api rest, développement api python, architecture micro-services, création back-end, développeur api django',
  openGraph: {
    title: 'Agence Développement API RESTful en Python | Al Firma',
    description: "Développement certifié d'APIs tierces et back-ends évolutifs en Python/Django.",
    images: ['/assets/logo.png'],
    type: 'website',
    url: 'https://alfirma.com/services/api-rest-python',
  },
  alternates: {
    canonical: 'https://alfirma.com/services/api-rest-python',
  },
};

export default function ApiRestPage() {
  const features = [
    "Développement d'un back-end RESTful en Python + Django",
    "Micro-services : authentification, paiements, notifications",
    "Architecture hautement sécurisée (OAuth2, JWT)",
    "Versioning dev / staging / production",
    "Déploiement et hébergement CI/CD automatisé",
    "Documentation technique Swagger/OpenAPI incluse",
    "30 jours de garantie pièces et main d'œuvre",
    "Livraison à partir de 10 jours seulement"
  ];

  return (
    <>
      <Head>
        <link rel="canonical" href="https://alfirma.com/services/api-rest-python" />
      </Head>
      <h1 className="sr-only">
        Agence Développement API RESTful en Python
      </h1>
      
      <ServicePageTemplate 
        title="Développement d'APIs RESTful avec Django & Python"
        description="La fondation de tout projet ambitieux repose sur son infrastructure. Al Firma développe des APIs RESTful en Python robustes et sécurisées, prêtes à encaisser le trafic. De l'authentification aux paiements, nous construisons votre moteur numérique."
        imageSrc="/assets/illustrations/api.png"
        imageAlt="Développement d'APIs RESTful et micro-services Python"
        features={features}
        price="4900€"
      />
    </>
  );
}
