"use client";

import NavBar from "../home/components/NavBar";

const pricingTiers = [
  {
    name: "Starter",
    subtitle: "Application Simple",
    price: "9 900",
    recommended: false,
    description: "Idéal pour les MVP et applications vitrine",
    features: [
      "Jusqu'à 10 écrans",
      "Design sur mesure (1 révision)",
      "API basique incluse",
      "Déploiement iOS & Android",
      "30 jours de garantie",
      "Support par email",
    ],
    notIncluded: [
      "Système de paiement",
      "Chat temps réel",
      "Dashboard admin",
    ],
    cta: "Démarrer mon projet",
    deliveryTime: "À partir de 20 jours",
  },
  {
    name: "Pro",
    subtitle: "Application Complète",
    price: "18 900",
    recommended: true,
    description: "Notre formule la plus populaire pour les projets ambitieux",
    features: [
      "Jusqu'à 25 écrans",
      "Design premium (révisions illimitées)",
      "API avancée + Dashboard admin",
      "Paiements, notifications push",
      "Authentification sécurisée",
      "60 jours de garantie",
      "Support prioritaire",
      "Démos hebdomadaires",
    ],
    notIncluded: [
      "Intégrations tierces illimitées",
    ],
    cta: "Choisir Pro",
    deliveryTime: "À partir de 30 jours",
  },
  {
    name: "Enterprise",
    subtitle: "Sur Mesure",
    price: "Sur devis",
    recommended: false,
    description: "Pour les projets complexes avec besoins spécifiques",
    features: [
      "Écrans illimités",
      "Architecture scalable",
      "Intégrations tierces illimitées",
      "Chat temps réel, géolocalisation",
      "API micro-services",
      "90 jours de garantie",
      "Account manager dédié",
      "Contrat de maintenance",
      "SLA garanti",
    ],
    notIncluded: [],
    cta: "Nous contacter",
    deliveryTime: "Selon complexité",
  },
];

const addOns = [
  { name: "Application Web (React.js)", price: "6 900", unit: "€" },
  { name: "API RESTful (Django)", price: "4 900", unit: "€" },
  { name: "Design UX/UI seul", price: "2 900", unit: "€" },
  { name: "Maintenance mensuelle", price: "490", unit: "€/mois" },
  { name: "Formation équipe", price: "990", unit: "€/jour" },
];

export default function TarifsPageClient() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white pt-24">
        {/* Hero */}
        <section
          className="py-20 text-white"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 15% 15%, rgba(67, 56, 202, 1) 0%, rgba(79, 70, 229, 0.8) 35%, rgba(99, 102, 241, 0.5) 55%, transparent 75%),
              linear-gradient(135deg, rgba(219, 39, 119, 0.95) 0%, rgba(236, 72, 153, 0.8) 15%, rgba(251, 113, 133, 0.6) 30%, rgba(168, 85, 247, 0.4) 45%, transparent 70%),
              radial-gradient(ellipse 120% 70% at 85% 40%, rgba(96, 165, 250, 0.95) 0%, rgba(147, 197, 253, 0.75) 30%, rgba(191, 219, 254, 0.5) 50%, transparent 85%)
            `,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nos Tarifs
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-4">
              Des prix transparents, sans surprise.
              <br />
              Choisissez la formule adaptée à votre projet.
            </p>
            <p className="text-white/70">
              ✓ Devis gratuit sous 24h &nbsp;&nbsp; ✓ Retours illimités &nbsp;&nbsp; ✓ 30 à 90 jours de garantie
            </p>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative bg-white rounded-3xl p-8 shadow-lg border-2 transition-all hover:shadow-xl ${
                    tier.recommended
                      ? "border-blue-500 scale-105"
                      : "border-gray-100"
                  }`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-400 to-blue-400 text-white text-sm font-semibold px-4 py-1 rounded-full">
                      Recommandé
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {tier.name}
                    </h3>
                    <p className="text-gray-500">{tier.subtitle}</p>
                    <div className="mt-4">
                      {tier.price === "Sur devis" ? (
                        <span className="text-3xl font-bold text-gray-900">
                          Sur devis
                        </span>
                      ) : (
                        <>
                          <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400">
                            {tier.price}€
                          </span>
                          <span className="text-gray-500 ml-2">HT</span>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      {tier.deliveryTime}
                    </p>
                  </div>

                  <p className="text-gray-600 text-center mb-6 text-sm">
                    {tier.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                    {tier.notIncluded.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 opacity-50"
                      >
                        <svg
                          className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        <span className="text-gray-500 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() =>
                      window.open(
                        "https://calendly.com/karimbenchekroun/30min",
                        "_blank"
                      )
                    }
                    className={`w-full py-4 rounded-full font-semibold transition-all ${
                      tier.recommended
                        ? "bg-gradient-to-r from-rose-400 to-blue-400 text-white hover:scale-105"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400">
              Services Complémentaires
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Combinez nos services pour un projet complet
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addOns.map((addon) => (
                <div
                  key={addon.name}
                  className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-900">{addon.name}</span>
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400">
                    {addon.price} {addon.unit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400">
              Questions sur les Tarifs
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Que comprend le prix affiché ?
                </h3>
                <p className="text-gray-600 text-sm">
                  Chaque formule inclut le design (maquettes Figma), le développement complet, 
                  les tests, le déploiement sur les stores (App Store, Google Play), et la période 
                  de garantie. Les frais Apple (99$/an) et Google Play (25$ une fois) sont à votre charge.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Peut-on payer en plusieurs fois ?
                </h3>
                <p className="text-gray-600 text-sm">
                  Oui ! Nous proposons un paiement en 3 fois sans frais : 40% au démarrage, 
                  30% à mi-projet, et 30% à la livraison.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Les prix sont-ils négociables ?
                </h3>
                <p className="text-gray-600 text-sm">
                  Nos tarifs sont fixes pour garantir la qualité. Cependant, si vous avez plusieurs 
                  projets ou si vous recommandez nos services, nous proposons des réductions.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Que se passe-t-il si le projet dépasse le scope initial ?
                </h3>
                <p className="text-gray-600 text-sm">
                  Nous définissons ensemble le périmètre exact avant de commencer. Si des fonctionnalités 
                  supplémentaires sont demandées, nous établissons un avenant avec un tarif transparent 
                  avant toute modification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-rose-400 to-blue-400">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à lancer votre application ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Réservez un appel gratuit de 30 minutes pour discuter de votre projet
              et recevoir un devis personnalisé sous 24h.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/karimbenchekroun/30min",
                  "_blank"
                )
              }
              className="bg-white text-gray-900 font-semibold px-8 py-4 rounded-full hover:scale-105 transition-all shadow-lg"
            >
              Réserver mon appel découverte
            </button>
            <p className="text-white/70 text-sm mt-4">
              30 minutes • 100% gratuit • Sans engagement
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
