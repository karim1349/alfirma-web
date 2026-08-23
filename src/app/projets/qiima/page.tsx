import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qiima - Application de Bons Plans au Maroc | Al Firma",
  description:
    "Découvrez Qiima, l'application communautaire de partage de bons plans au Maroc. Développée par Al Firma avec React Native et Django.",
  keywords:
    "qiima, bons plans maroc, application deals, react native, django, al firma projet, développement mobile maroc",
  openGraph: {
    title: "Qiima - Application de Bons Plans au Maroc",
    description:
      "Application communautaire de partage de bons plans au Maroc, développée par Al Firma.",
    images: [
      {
        url: "/assets/projects/qiima/app_mockup-og.webp",
        width: 1200,
        height: 630,
        alt: "Qiima - Application mobile",
      },
    ],
    type: "website",
    url: "https://alfirma.com/projets/qiima/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qiima - Application de Bons Plans au Maroc",
    description:
      "Application communautaire de partage de bons plans au Maroc.",
    images: ["/assets/projects/qiima/app_mockup-og.webp"],
  },
  alternates: {
    canonical: "https://alfirma.com/projets/qiima/",
  },
};

// JSON-LD Schema for the project
function QiimaSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Qiima",
          description:
            "Application communautaire de partage de bons plans au Maroc",
          applicationCategory: "ShoppingApplication",
          operatingSystem: "iOS, Android, Web",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "MAD",
          },
          author: {
            "@type": "Organization",
            name: "Al Firma",
            url: "https://alfirma.com",
          },
          downloadUrl: [
            "https://apps.apple.com/app/id6754856570",
            "https://play.google.com/store/apps/details?id=ma.qiima.app",
          ],
          url: "https://qiima.ma",
        }),
      }}
    />
  );
}

export default function QiimaProjectPage() {
  const techStack = [
    { name: "React Native", category: "Mobile" },
    { name: "Expo", category: "Mobile" },
    { name: "Next.js", category: "Web" },
    { name: "Django", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "TanStack Query", category: "State" },
    { name: "Zustand", category: "State" },
    { name: "Turborepo", category: "Tooling" },
  ];

  const features = [
    {
      icon: "🔍",
      title: "Découverte de deals",
      description:
        "Recherche et navigation par catégories pour trouver les meilleures offres",
    },
    {
      icon: "👥",
      title: "Communauté active",
      description:
        "Les utilisateurs partagent et votent pour garantir la qualité des deals",
    },
    {
      icon: "📍",
      title: "Ciblage local",
      description:
        "Offres personnalisées par ville : Casablanca, Rabat, Marrakech, Fès",
    },
    {
      icon: "🏪",
      title: "Grandes enseignes",
      description: "Marjane, BIM, Jumia, Electroplanet, ONCF et plus encore",
    },
    {
      icon: "🌙",
      title: "Mode sombre",
      description: "Interface adaptée pour un confort visuel optimal",
    },
    {
      icon: "📱",
      title: "Multi-plateforme",
      description: "Disponible sur iOS, Android et Web",
    },
  ];

  return (
    <>
      <QiimaSchema />
      <main className="min-h-screen bg-white">
        {/* Breadcrumb for SEO */}
        <div className="py-4 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-900">
                Accueil
              </Link>
              <span>/</span>
              <Link href="/#SECTION_PROJETS" className="hover:text-gray-900">
                Projets
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">Qiima</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section
          className="relative py-20 md:py-32 overflow-hidden"
          style={{ backgroundColor: "#5A6A3F" }}
        >
          {/* Back button */}
          <div className="absolute top-6 left-6 z-10">
            <Link
              href="/#SECTION_PROJETS"
              className="flex items-center text-white/80 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Retour aux projets
            </Link>
          </div>

          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            {/* Text content */}
            <div className="flex-1 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/assets/projects/qiima/logo.webp"
                  alt="Qiima Logo"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-xl"
                />
                <h1 className="text-5xl md:text-6xl font-bold">Qiima</h1>
              </div>
              <p className="text-xl md:text-2xl text-white/90 mb-4">
                Le pouvoir d'achat intelligent
              </p>
              <p className="text-lg text-white/80 mb-8 max-w-xl">
                Application communautaire de partage de bons plans au Maroc. Les
                utilisateurs découvrent, partagent et votent pour les meilleures
                offres.
              </p>

              {/* App Store buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://apps.apple.com/app/id6754856570"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform"
                >
                  <Image
                    src="/assets/button_appstore.png"
                    alt="Télécharger sur l'App Store"
                    width={150}
                    height={50}
                    className="h-12 w-auto"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=ma.qiima.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform"
                >
                  <Image
                    src="/assets/button_playstore.png"
                    alt="Disponible sur Google Play"
                    width={150}
                    height={50}
                    className="h-12 w-auto"
                  />
                </a>
                <a
                  href="https://qiima.ma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#5A6A3F] px-6 h-12 flex items-center justify-center rounded-lg font-semibold hover:scale-105 transition-transform"
                >
                  Visiter qiima.ma
                </a>
              </div>
            </div>

            {/* App mockup */}
            <div className="flex-1 flex justify-center">
              <Image
                src="/assets/projects/qiima/app_mockup.webp"
                alt="Qiima App Interface"
                width={400}
                height={800}
                className="w-auto h-[500px] md:h-[600px] object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Le Défi
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Au Maroc, les consommateurs passent beaucoup de temps à chercher
              les meilleures offres, dispersées sur différentes plateformes et
              réseaux sociaux. Il n'existait pas de solution centralisée et
              communautaire pour découvrir et valider les bons plans.
            </p>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Notre Solution
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Qiima centralise les bons plans et permet à la communauté de voter
              pour les meilleures offres, garantissant qualité et pertinence.
              Une plateforme moderne, rapide et intuitive.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Stack Technique
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Une architecture moderne et scalable pour supporter la croissance
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white px-5 py-3 rounded-full shadow-md border border-gray-200 flex items-center gap-2"
                >
                  <span className="font-medium text-gray-900">{tech.name}</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mascot Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <Image
                src="/assets/projects/qiima/mascot.png"
                alt="Qiima Mascot - Shopping Dinosaur"
                width={400}
                height={400}
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Une identité unique
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Le petit dinosaure de Qiima accompagne les utilisateurs dans
                leur chasse aux bons plans. Cette mascotte attachante renforce
                l'aspect communautaire et ludique de l'application.
              </p>
              <p className="text-lg text-gray-600">
                Une palette de couleurs olive élégante et une typographie
                moderne créent une expérience visuelle mémorable et distinctive.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-rose-400 to-blue-400">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Vous avez un projet similaire ?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Nous pouvons développer votre application communautaire,
              marketplace ou plateforme de deals. Discutons de votre projet !
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://calendly.com/karimbenchekroun/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Réserver un appel gratuit
              </a>
              <Link
                href="/blog/"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Lire notre blog
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
