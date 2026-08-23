import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Conditions générales d'utilisation et de vente — Petit Pas",
    description: "Conditions générales d'utilisation et de vente de l'application Petit Pas, coach pour parents d'enfants TDAH : abonnement, paiement, droits et obligations.",
    alternates: {
        canonical: 'https://alfirma.com/petit-pas/terms/',
    },
    robots: {
        index: false,
        follow: true,
    },
};

const TermsPetitPas = () => {
    const breadcrumbItems = [
        { label: 'Accueil', href: '/' },
        { label: 'Projets', href: '/#SECTION_PROJETS' },
        { label: 'Petit Pas' },
        { label: "Conditions générales" }
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
                    <p className="text-xl text-gray-600 mb-2">Conditions générales d&apos;utilisation et de vente</p>
                    <p className="text-sm text-gray-500">Dernière mise à jour : mai 2026</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 mb-8 border border-gray-200 text-left">

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Éditeur de l&apos;application</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        L&apos;application Petit Pas (« l&apos;Application ») est éditée par Al Firma, joignable à l&apos;adresse e-mail{' '}
                        <a href="mailto:contact@alfirma.com" className="text-blue-600 hover:text-blue-700 underline">contact@alfirma.com</a>.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Acceptation des conditions</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        L&apos;utilisation de l&apos;Application implique l&apos;acceptation pleine et entière des présentes conditions générales d&apos;utilisation et de vente (« CGU/CGV »). Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser l&apos;Application.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Description du service</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Petit Pas est un outil d&apos;accompagnement destiné aux parents d&apos;enfants présentant un trouble du déficit de l&apos;attention avec ou sans hyperactivité (TDAH). L&apos;Application propose :
                    </p>
                    <ul className="text-gray-700 space-y-2 mb-6">
                        <li>• Un parcours d&apos;onboarding et un questionnaire d&apos;orientation.</li>
                        <li>• Des modules de coaching parental inspirés de la méthode Barkley (Moment spécial, Attention calme, Ordres efficaces, Gestion de la colère, Time-out, Gestion du temps, Récompenses, Devoirs scolaires).</li>
                        <li>• Des outils quotidiens (respiration guidée, minuterie, thermomètre des émotions).</li>
                        <li>• Un suivi quotidien et un graphique des 7 derniers jours.</li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        <strong>Petit Pas est un outil de soutien et d&apos;éducation parentale et ne constitue en aucun cas un avis médical, un diagnostic ou un traitement.</strong> En cas de doute ou de difficulté, nous vous recommandons de consulter un professionnel de santé qualifié.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Abonnement et paiement</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        L&apos;accès à l&apos;essentiel du programme est gratuit. Les modules avancés ainsi que certaines fonctionnalités complémentaires sont accessibles via un abonnement payant intitulé <strong>Petit Pas Premium</strong>.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">4.1 Formules disponibles</h3>
                    <ul className="text-gray-700 space-y-2 mb-6">
                        <li>• <strong>Petit Pas Premium Mensuel</strong> — 9,99 € par mois.</li>
                        <li>• <strong>Petit Pas Premium Annuel</strong> — 69 € par an, soit environ 5,75 € par mois.</li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Les prix indiqués sont en euros et incluent toutes taxes applicables. Les utilisateurs situés dans d&apos;autres zones tarifaires peuvent voir des prix équivalents en monnaie locale, déterminés par les boutiques d&apos;application.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">4.2 Renouvellement automatique</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Petit Pas Premium est un abonnement à <strong>renouvellement automatique</strong>. Le paiement est prélevé via votre compte Apple (App Store) ou Google (Google Play) lors de la confirmation de l&apos;achat. L&apos;abonnement se renouvelle automatiquement au même prix à la fin de chaque période, sauf annulation au moins <strong>24 heures avant la fin de la période en cours</strong>. Le prix du renouvellement vous sera prélevé dans les 24 heures précédant la fin de la période en cours.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">4.3 Gestion et annulation</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Vous pouvez gérer ou annuler votre abonnement à tout moment depuis les réglages de votre compte App Store ou Google Play :
                    </p>
                    <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• <strong>iOS :</strong> Réglages &gt; Identifiant Apple &gt; Abonnements &gt; Petit Pas Premium.</li>
                        <li>• <strong>Android :</strong> Google Play Store &gt; Compte &gt; Paiements et abonnements &gt; Abonnements &gt; Petit Pas Premium.</li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        L&apos;annulation prend effet à la fin de la période en cours. Vous conservez l&apos;accès aux fonctionnalités premium jusqu&apos;à cette date. Aucun remboursement n&apos;est accordé pour la portion non utilisée d&apos;une période déjà payée, sauf disposition légale contraire.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">4.4 Restauration des achats</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        En cas de réinstallation de l&apos;Application ou de changement d&apos;appareil, vous pouvez restaurer un abonnement actif lié à votre identifiant Apple ou Google via la fonction « Restaurer mes achats » présente sur l&apos;écran d&apos;abonnement.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">4.5 Droit de rétractation</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Conformément à l&apos;article L221-28 du Code de la consommation, vous renoncez expressément à votre droit de rétractation dès lors que l&apos;exécution du service a commencé avec votre accord. La fourniture du contenu numérique commence dès la confirmation de l&apos;achat et l&apos;activation de votre abonnement.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Compte utilisateur</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        L&apos;Application permet une utilisation anonyme via un compte invité. La création d&apos;un compte avec adresse e-mail est requise pour souscrire à un abonnement et synchroniser vos données entre appareils. Vous êtes responsable de la confidentialité de vos identifiants et de toute activité réalisée depuis votre compte.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Limitations et responsabilité</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Petit Pas est un outil d&apos;accompagnement éducatif. Il <strong>ne remplace pas</strong> une consultation, un diagnostic ou un traitement par un professionnel de santé qualifié (pédiatre, neuropsychologue, psychologue, orthophoniste, psychomotricien, ergothérapeute).
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        L&apos;éditeur ne saurait être tenu responsable des conséquences directes ou indirectes liées à l&apos;utilisation des contenus proposés. En cas de signaux d&apos;alerte ou de situation préoccupante, consultez un professionnel sans délai.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Propriété intellectuelle</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        L&apos;ensemble des contenus de l&apos;Application (textes, illustrations, logos, modules, vidéos, code) sont la propriété exclusive d&apos;Al Firma ou de ses partenaires et sont protégés par le droit de la propriété intellectuelle. Toute reproduction, représentation, modification ou exploitation sans autorisation préalable et écrite est interdite.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Données personnelles</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Le traitement de vos données personnelles, y compris celles concernant votre enfant, est décrit dans notre{' '}
                        <Link href="/petit-pas/privacy/" className="text-blue-600 hover:text-blue-700 underline">politique de confidentialité</Link>. Les données de paiement sont gérées exclusivement par Apple (App Store) et Google (Google Play) ; nous n&apos;y avons pas accès.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Modification des CGU/CGV</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Les présentes conditions peuvent être mises à jour à tout moment pour refléter une évolution du service ou de la réglementation. La version en vigueur est celle publiée à la date de votre utilisation. Les modifications substantielles vous seront notifiées dans l&apos;Application.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Droit applicable et juridiction</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Les présentes conditions sont régies par le droit français. Tout litige relatif à leur interprétation ou à leur exécution sera soumis aux tribunaux compétents, sauf disposition légale impérative contraire au profit du consommateur.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Contact</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Pour toute question relative aux présentes conditions ou à votre abonnement, contactez-nous à l&apos;adresse :{' '}
                        <a href="mailto:contact@alfirma.com" className="text-blue-600 hover:text-blue-700 underline">contact@alfirma.com</a>.
                    </p>
                </div>

                <div className="text-center">
                    <Link
                        href="/petit-pas/privacy/"
                        className="text-blue-600 hover:text-blue-700 underline transition-colors duration-300"
                    >
                        Politique de confidentialité
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
                        Développé par <span className="text-gray-900 font-semibold">Al Firma</span> — L&apos;innovation façonne vos applications
                    </p>
                </div>
            </div>
        </main>
    );
};

export default TermsPetitPas;
