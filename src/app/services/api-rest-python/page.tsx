import type { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Agence Développement API RESTful en Python | Al Firma',
  description: "Développement d'APIs RESTful performantes et sécurisées en Python avec le framework Django. Architecture micro-services et intégration sur mesure.",
  keywords: 'développement api, api rest, développement api python, architecture micro-services, création back-end, développeur api django',
  openGraph: {
    title: 'Agence Développement API RESTful en Python | Al Firma',
    description: "Développement certifié d'APIs tierces et back-ends évolutifs en Python/Django.",
    images: [{ url: '/assets/logo.png', width: 1200, height: 630, alt: 'Développement API RESTful Python Django - Al Firma' }],
    type: 'website',
    url: 'https://alfirma.com/services/api-rest-python/',
  },
  alternates: {
    canonical: 'https://alfirma.com/services/api-rest-python/',
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

  const seoContent = (
    <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
      <h2 className="text-xl font-bold text-slate-900 mb-4">Une API solide est la fondation de tout produit ambitieux</h2>
      <p className="text-slate-600 mb-4">
        Que vous lanciez une application mobile en React Native, une plateforme web Django ou un produit SaaS multi-tenants, votre back-end doit encaisser les volumes, sécuriser les données et permettre l&apos;évolution rapide du produit. Nous concevons des APIs Python/Django avec authentification OAuth2/JWT, documentation OpenAPI auto-générée, monitoring (Sentry, Prometheus) et déploiement CI/CD reproductible.
      </p>
      <p className="text-slate-600 mb-6">
        Nos APIs alimentent aussi bien des applications mobiles iOS/Android que des plateformes web. Pour un projet complet, combinez ce service avec notre développement mobile React Native ou notre développement web Django — une équipe unique, une stack cohérente, des intégrations natives.
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
        <link rel="canonical" href="https://alfirma.com/services/api-rest-python/" />
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
        seoContent={seoContent}
      />
    </>
  );
}
