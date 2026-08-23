import type { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const dynamic = 'force-static';

const pageTitle = 'Agence Django & React : développement web | Al Firma';
const pageDescription = 'Agence Django et React pour vos SaaS, plateformes métier et applications web sur mesure. Architecture robuste, sécurisée et évolutive. Devis sous 24 h.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: 'développement web django, agence django python, création saas, développement react, plateforme web sur mesure, développement application web, agence développement web, django rest framework',
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    images: [{ url: '/assets/og-logo.webp', width: 1200, height: 630, alt: 'Développement web Django et React - Al Firma' }],
    type: 'website',
    url: 'https://alfirma.com/services/developpement-web-django/',
  },
  alternates: {
    canonical: 'https://alfirma.com/services/developpement-web-django/',
  },
};

export default function DeveloppementWebPage() {
  const features = [
    "Architecture Django REST Framework + React/Next.js éprouvée",
    "Design de maquettes Figma sur mesure inclus dès la conception",
    "Développement frontend performant avec React.js et Next.js (SSR/SSG)",
    "Back-end Python Django sécurisé avec authentification JWT et gestion des rôles",
    "Création de plateformes SaaS multi-tenant et outils métiers complexes",
    "Développement e-commerce avec paniers, paiements Stripe et gestion des stocks",
    "Adaptation Responsive 100% Mobile First, optimisée Core Web Vitals",
    "Déploiement sur AWS, OVH ou infrastructure de votre choix",
    "Tests automatisés (unit + integration) et CI/CD inclus",
    "30 jours de garantie complète pièces et main d'œuvre post-livraison",
    "Livraison record possible en 15 jours ouvrés"
  ];

  const seoContent = (
    <div className="space-y-16">
      {/* Why Django section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Pourquoi choisir Django pour votre application web ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Django est le framework Python de référence pour construire des applications web robustes, sécurisées et évolutives.
            Sa philosophie &ldquo;batteries included&rdquo; inclut nativement l&apos;authentification, la gestion des permissions, l&apos;administration,
            l&apos;ORM et la protection contre les vulnérabilités OWASP les plus courantes (CSRF, XSS, injection SQL).
          </p>
          <p className="text-slate-600 leading-relaxed">
            Associé à React ou Next.js en front-end, Django REST Framework offre une architecture découplée idéale pour les SaaS,
            les plateformes B2B et les outils métiers. Des acteurs comme Instagram, Pinterest et Disqus ont bâti leur infrastructure sur Django.
          </p>
        </div>
        <div className="bg-slate-900 rounded-[2rem] p-10 border border-slate-800 shadow-sm">
          <h2 className="text-2xl font-bold text-white mb-4">Notre stack technique web</h2>
          <ul className="space-y-3">
            {[
              { label: "Backend", value: "Django 5.x + Django REST Framework" },
              { label: "Frontend", value: "React 19 + Next.js 15 (App Router)" },
              { label: "Base de données", value: "PostgreSQL + Redis (cache)" },
              { label: "Authentification", value: "JWT + OAuth2 (Google, GitHub)" },
              { label: "Paiements", value: "Stripe + PayPal intégrés" },
              { label: "Déploiement", value: "AWS / OVH / VPS avec CI/CD" },
              { label: "Tests", value: "pytest + Jest, coverage > 80%" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-indigo-400 font-bold text-sm w-32 flex-shrink-0">{item.label}</span>
                <span className="text-slate-300 text-sm">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Use cases */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Ce que nous développons avec Django & React</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Plateformes SaaS",
              description: "Applications multi-tenant avec gestion des abonnements, facturation récurrente et dashboards analytiques. Architectures conçues pour scaler de 100 à 100 000 utilisateurs."
            },
            {
              title: "Outils Métiers",
              description: "Applications internes de gestion, CRM sur mesure, outils de reporting et d'automatisation. Intégration avec vos systèmes existants (ERP, APIs tierces)."
            },
            {
              title: "E-Commerce & Marketplace",
              description: "Boutiques en ligne personnalisées, marketplaces multi-vendeurs, gestion des stocks et des commandes. Paiements Stripe, PayPal ou CMI intégrés nativement."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Internal links */}
      <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Besoin d&apos;une application mobile en complément ?</h2>
        <p className="text-slate-600 mb-6">
          Beaucoup de nos clients combinent une plateforme web Django/React avec une application mobile React Native.
          Nous gérons les deux : même équipe, même process, même niveau d&apos;exigence.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/services/developpement-mobile/" className="inline-flex items-center gap-2 bg-white border border-indigo-200 text-indigo-700 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all">
            Développement mobile →
          </Link>
          <Link href="/tarifs/" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
            Voir les tarifs →
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <link rel="canonical" href="https://alfirma.com/services/developpement-web-django/" />
      </Head>
      <ServicePageTemplate
        title="Développement d'Applications Web avec React.js et Django"
        description="La création d'applications web complexes est notre force. Grâce à l'association de React.js et de Django, nous développons des expériences utilisateurs fluides, des back-ends hautement sécurisés, et des architectures évolutives qui répondent aux exigences des PME, startups, et grands groupes."
        imageSrc="/assets/illustrations/appweb.png"
        imageAlt="Développement d'applications web avec React.js et Django"
        features={features}
        price="6900€"
        seoContent={seoContent}
      />
    </>
  );
}
