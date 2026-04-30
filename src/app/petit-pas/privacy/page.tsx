import React from 'react';
import Link from 'next/link';
import Breadcrumbs, { BreadcrumbSchema } from '../../components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Politique de confidentialité - Petit Pas',
    description: 'Découvrez comment Petit Pas protège vos données personnelles et respecte votre vie privée dans notre politique de confidentialité détaillée.',
};

const PrivacyPetitPas = () => {
    const breadcrumbItems = [
        { label: 'Accueil', href: '/home' },
        { label: 'Projets', href: '/home#SECTION_PROJETS' },
        { label: 'Petit Pas' },
        { label: 'Politique de confidentialité' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 pt-20">
            <BreadcrumbSchema items={breadcrumbItems} />
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>
                <div className="mb-8">
                    <img
                        src="/assets/petitpas.png"
                        alt="Petit Pas Logo"
                        className="w-32 h-32 mx-auto mb-6 rounded-2xl shadow-2xl"
                    />
                    <h1 className="text-6xl font-bold text-white mb-4">PETIT PAS</h1>
                    <p className="text-xl text-blue-200 mb-2">Politique de confidentialité</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10 text-left">
                    <h2 className="text-3xl font-bold text-white mb-6">1. Collecte des informations</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        Nous collectons des informations vous concernant lorsque vous utilisez notre application mobile. Ces informations peuvent inclure :
                    </p>
                    <ul className="text-gray-300 space-y-2 mb-6">
                        <li>• Les données d&apos;utilisation de l&apos;application, telles que vos préférences et vos paramètres.</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mb-6">2. Utilisation des informations</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        Nous utilisons les informations que nous collectons pour :
                    </p>
                    <ul className="text-gray-300 space-y-2 mb-6">
                        <li>• Vous offrir une expérience personnalisée.</li>
                        <li>• Améliorer notre application mobile et nos services.</li>
                        <li>• Analyser les données pour comprendre comment les utilisateurs interagissent avec notre application mobile.</li>
                        <li>• Communiquer avec vous pour vous informer des nouvelles fonctionnalités et des mises à jour de notre application mobile.</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mb-6">3. Partage des informations</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        Nous ne vendons pas, ne louons pas et ne partageons pas vos informations personnelles avec des tiers.
                    </p>

                    <h2 className="text-3xl font-bold text-white mb-6">4. Sécurité des informations</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        Nous prenons des mesures de sécurité pour protéger vos informations personnelles contre tout accès non autorisé, toute divulgation ou toute utilisation abusive. Nous utilisons des méthodes de cryptage pour protéger vos informations sensibles.
                    </p>

                    <h2 className="text-3xl font-bold text-white mb-6">5. Modifications de la politique de confidentialité</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        Nous pouvons mettre à jour cette politique de confidentialité à tout moment en publiant une nouvelle version sur notre site Web ou dans notre application mobile. Nous vous recommandons de consulter régulièrement notre politique de confidentialité pour être informé des modifications.
                    </p>

                    <h2 className="text-3xl font-bold text-white mb-6">6. Contactez-nous</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, veuillez nous contacter à l&apos;adresse e-mail suivante : contact@alfirma.com
                    </p>
                </div>

                <div className="text-center">
                    <Link
                        href="/home"
                        className="text-blue-300 hover:text-blue-200 underline transition-colors duration-300"
                    >
                        Retour à l&apos;accueil
                    </Link>
                    <span className="text-gray-400 mx-4">•</span>
                    <a
                        href="mailto:contact@alfirma.com"
                        className="text-blue-300 hover:text-blue-200 underline transition-colors duration-300"
                    >
                        Nous contacter
                    </a>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-400 text-sm">
                        Développé par <span className="text-white font-semibold">Al Firma</span> - L&apos;innovation façonne vos applications
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPetitPas;
