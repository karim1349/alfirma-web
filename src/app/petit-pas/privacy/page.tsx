import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Politique de confidentialité - Petit Pas',
    description: 'Découvrez comment Petit Pas protège vos données personnelles et respecte votre vie privée dans notre politique de confidentialité détaillée.',
    alternates: {
        canonical: 'https://alfirma.com/petit-pas/privacy/',
    },
    robots: {
        index: false,
        follow: true,
    },
};

const PrivacyPetitPas = () => {
    const breadcrumbItems = [
        { label: 'Accueil', href: '/' },
        { label: 'Projets', href: '/#SECTION_PROJETS' },
        { label: 'Petit Pas' },
        { label: 'Politique de confidentialité' }
    ];

    return (
        <main className="min-h-screen bg-white flex items-center justify-center p-4 pt-20">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>
                <div className="mb-8">
                    <img
                        src="/assets/petitpas.png"
                        alt="Petit Pas Logo"
                        className="w-32 h-32 mx-auto mb-6 rounded-2xl shadow-lg"
                    />
                    <h1 className="text-6xl font-bold text-gray-900 mb-4">PETIT PAS</h1>
                    <p className="text-xl text-gray-600 mb-2">Politique de confidentialité</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 mb-8 border border-gray-200 text-left">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Collecte des informations</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Nous collectons des informations vous concernant lorsque vous utilisez notre application mobile. Ces informations peuvent inclure :
                    </p>
                    <ul className="text-gray-700 space-y-2 mb-6">
                        <li>• Les données d&apos;utilisation de l&apos;application, telles que vos préférences et vos paramètres.</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Utilisation des informations</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Nous utilisons les informations que nous collectons pour :
                    </p>
                    <ul className="text-gray-700 space-y-2 mb-6">
                        <li>• Vous offrir une expérience personnalisée.</li>
                        <li>• Améliorer notre application mobile et nos services.</li>
                        <li>• Analyser les données pour comprendre comment les utilisateurs interagissent avec notre application mobile.</li>
                        <li>• Communiquer avec vous pour vous informer des nouvelles fonctionnalités et des mises à jour de notre application mobile.</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Partage des informations</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Nous ne vendons pas, ne louons pas et ne partageons pas vos informations personnelles avec des tiers, à l&apos;exception des sous-traitants strictement nécessaires au fonctionnement du service :
                    </p>
                    <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• <strong>Apple Inc.</strong> et <strong>Google LLC</strong> — traitement des paiements et de la facturation des abonnements Petit Pas Premium via l&apos;App Store et le Google Play Store. Aucune information concernant votre enfant ne leur est transmise.</li>
                        <li>• <strong>RevenueCat, Inc.</strong> — gestion technique des abonnements (validation des reçus, synchronisation entre appareils). Reçoit un identifiant interne, le statut d&apos;abonnement et la plateforme.</li>
                        <li>• <strong>PostHog</strong> et <strong>Sentry</strong> — analyse anonymisée de l&apos;usage de l&apos;application et collecte des erreurs techniques pour améliorer la stabilité du service.</li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Tous ces sous-traitants sont liés par des accords de traitement de données conformes au RGPD. Aucune donnée concernant votre enfant n&apos;est partagée à des fins commerciales ou publicitaires.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Sécurité des informations</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Nous prenons des mesures de sécurité pour protéger vos informations personnelles contre tout accès non autorisé, toute divulgation ou toute utilisation abusive. Nous utilisons des méthodes de cryptage pour protéger vos informations sensibles.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Conservation des données</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Nous conservons vos données utilisateur uniquement pendant la durée nécessaire aux finalités décrites dans cette politique de confidentialité :
                    </p>
                    <ul className="text-gray-700 space-y-2 mb-6">
                        <li>• Les données d&apos;utilisation et préférences sont conservées tant que l&apos;application est installée sur votre appareil et que votre compte est actif.</li>
                        <li>• En cas de désinstallation de l&apos;application, les données stockées localement sur votre appareil sont automatiquement supprimées.</li>
                        <li>• Les données associées à un compte inactif depuis plus de 24 mois sont automatiquement supprimées de nos serveurs.</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Suppression des données</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Vous avez le droit, à tout moment, de demander la suppression de vos données utilisateur. Pour ce faire, plusieurs options s&apos;offrent à vous :
                    </p>
                    <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• <strong>Depuis l&apos;application :</strong> rendez-vous dans les paramètres de l&apos;application puis sélectionnez l&apos;option « Supprimer mes données » pour effacer vos informations directement.</li>
                        <li>• <strong>Désinstallation :</strong> désinstaller l&apos;application supprime automatiquement toutes les données stockées localement sur votre appareil.</li>
                        <li>• <strong>Par e-mail :</strong> envoyez une demande de suppression à <a href="mailto:contact@alfirma.com" className="text-blue-600 hover:text-blue-700 underline">contact@alfirma.com</a> en précisant l&apos;identifiant lié à votre compte. Votre demande sera traitée dans un délai maximum de 30 jours.</li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Une fois la suppression effectuée, vos données seront définitivement effacées de nos systèmes, à l&apos;exception des informations que nous sommes légalement tenus de conserver.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Modifications de la politique de confidentialité</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Nous pouvons mettre à jour cette politique de confidentialité à tout moment en publiant une nouvelle version sur notre site Web ou dans notre application mobile. Nous vous recommandons de consulter régulièrement notre politique de confidentialité pour être informé des modifications.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Contactez-nous</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, ou pour toute demande relative à vos données personnelles, veuillez nous contacter à l&apos;adresse e-mail suivante : contact@alfirma.com
                    </p>
                </div>

                <div className="text-center">
                    <Link
                        href="/petit-pas/terms/"
                        className="text-blue-600 hover:text-blue-700 underline transition-colors duration-300"
                    >
                        Conditions générales
                    </Link>
                    <span className="text-gray-400 mx-4">•</span>
                    <Link
                        href="/"
                        className="text-blue-600 hover:text-blue-700 underline transition-colors duration-300"
                    >
                        Retour à l&apos;accueil
                    </Link>
                    <span className="text-gray-400 mx-4">•</span>
                    <a
                        href="mailto:contact@alfirma.com"
                        className="text-blue-600 hover:text-blue-700 underline transition-colors duration-300"
                    >
                        Nous contacter
                    </a>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm">
                        Développé par <span className="text-gray-900 font-semibold">Al Firma</span> - L&apos;innovation façonne vos applications
                    </p>
                </div>
            </div>
        </main>
    )
}

export default PrivacyPetitPas;
