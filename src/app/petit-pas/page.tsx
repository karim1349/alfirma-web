import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs, { BreadcrumbSchema } from '../components/Breadcrumbs';
import { PetitPasAppSchema } from '../components/StructuredData';
import type { Metadata } from 'next';

// Draft copy for Karim's product review. Never add prices, endorsements,
// efficacy promises or ratings here (spec: growth/journal/drafts/t_e48a7fce).
const TITLE = 'Petit Pas : coach TDAH pour parents (méthode inspirée de Barkley)';
const DESCRIPTION = 'Petit Pas accompagne les parents d’enfants TDAH : 60 secondes par soir, 3 objectifs choisis par vous, des outils pour les moments difficiles. iPhone et Android.';

// Campaign tags let Growth count store visits that come from this page.
const APP_STORE_URL = 'https://apps.apple.com/fr/app/petit-pas-coach-tdah-parents/id6761680319?ct=alfirma-landing';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=ma.petitpas.app&referrer=utm_source%3Dalfirma%26utm_medium%3Dlanding%26utm_campaign%3Dpetit-pas';

const CREAM = '#FAF6F1';
const INK = '#2B2320';
const TERRACOTTA = '#C46848';
const SAGE = '#5B8C6A';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        images: [
            {
                url: '/assets/petitpas.png',
                width: 1488,
                height: 1488,
                alt: 'Petit Pas - coach TDAH pour parents',
            }
        ],
        type: 'website',
        url: 'https://alfirma.com/petit-pas/',
    },
    twitter: {
        card: 'summary',
        title: TITLE,
        description: DESCRIPTION,
        images: [{ url: '/assets/petitpas.png', width: 1488, height: 1488, alt: 'Petit Pas - coach TDAH pour parents' }],
    },
    alternates: {
        canonical: 'https://alfirma.com/petit-pas/'
    },
    robots: {
        index: true,
        follow: true,
    },
    other: {
        'apple-itunes-app': 'app-id=6761680319'
    },
};

const STEPS = [
    {
        title: 'Démarrez en 2 minutes.',
        body: "Quelques questions pour adapter le plan à votre enfant (4 à 18 ans), puis 3 objectifs concrets choisis par vous.",
    },
    {
        title: '60 secondes chaque soir.',
        body: "Le check-in du soir : l'humeur du jour, vos 3 routines (validées ou pas, sans jugement), une note si vous voulez. Un graphique sur 7 jours relie humeur et routines.",
    },
    {
        title: 'Avancez à votre rythme.',
        body: "Des modules inspirés de Barkley qui se débloquent dans l'ordre : Moment spécial (10 à 20 minutes de jeu dirigé par l'enfant), Ordres efficaces, gestion de la colère, time-out, récompenses, devoirs, gestion du temps.",
    },
];

const TOOLS = ['Respiration guidée', 'Minuteur plein écran (2 à 5 minutes)', "Thermomètre d'émotions", 'Coin calme'];

const SCREENSHOTS = [
    { src: '/assets/petit-pas/01-accompagnez.webp', alt: "Écran d'accueil de Petit Pas : prochaine étape « Commencez votre premier Moment spécial » et les 3 routines du jour" },
    { src: '/assets/petit-pas/02-suivez.webp', alt: 'Suivi des 3 routines du jour avec des interrupteurs « Fait » et la progression sur 7 jours' },
    { src: '/assets/petit-pas/03-progressez.webp', alt: 'Module Moment spécial : sessions réalisées, explication et liste « À faire » et « À éviter »' },
    { src: '/assets/petit-pas/04-respirez.webp', alt: 'Exercice de respiration guidée en plein écran avec un minuteur' },
    { src: '/assets/petit-pas/05-demarrez.webp', alt: "Choix de jusqu'à 3 comportements à améliorer pendant l'accueil dans l'application" },
];

function StoreButtons() {
    return (
        <div className="flex flex-row gap-4 justify-center md:justify-start items-center">
            <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform duration-300"
            >
                <Image
                    src="/assets/button_appstore.png"
                    alt="Télécharger Petit Pas sur l'App Store"
                    width={128}
                    height={64}
                    className="w-32 h-auto"
                />
            </a>
            <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform duration-300"
            >
                <Image
                    src="/assets/button_playstore.png"
                    alt="Télécharger Petit Pas sur Google Play"
                    width={128}
                    height={64}
                    className="w-32 h-auto"
                />
            </a>
        </div>
    );
}

function PetitPasPage() {

    const breadcrumbItems = [
        { label: 'Accueil', href: '/' },
        { label: 'Projets', href: '/#SECTION_PROJETS' },
        { label: 'Petit Pas' }
    ];

    return (
        <main className="min-h-screen px-4 pt-20 pb-16" style={{ backgroundColor: CREAM, color: INK }}>
            <PetitPasAppSchema />
            <BreadcrumbSchema items={breadcrumbItems} />
            <div className="max-w-4xl mx-auto">
                <div className="mb-6 [&_ol]:!text-[#6B5E57] [&_a:hover]:!text-[#C46848] [&_span]:!text-[#2B2320]">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
                    <div className="flex-1 text-center md:text-left">
                        <Image
                            src="/assets/petitpas.png"
                            alt="Icône de l'application Petit Pas"
                            width={96}
                            height={96}
                            className="w-24 h-24 mx-auto md:mx-0 mb-6 rounded-2xl shadow-lg"
                            priority
                        />
                        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                            Petit Pas, le coach TDAH des parents
                        </h1>
                        <p className="text-lg leading-relaxed mb-8 opacity-90">
                            Un petit pas à la fois. Une méthode inspirée du programme de Russell Barkley,
                            traduite en gestes simples pour le brossage des dents, le coucher et les devoirs.
                        </p>
                        <StoreButtons />
                    </div>
                    <div className="w-56 md:w-64 shrink-0">
                        <Image
                            src={SCREENSHOTS[0].src}
                            alt={SCREENSHOTS[0].alt}
                            width={540}
                            height={1168}
                            className="w-full h-auto rounded-3xl shadow-xl"
                            priority
                        />
                    </div>
                </section>

                <section className="mb-14">
                    <h2 className="text-3xl font-semibold mb-4">Vous répétez 15 fois avant le brossage ?</h2>
                    <p className="text-lg leading-relaxed opacity-90">
                        Les devoirs se terminent en larmes, le coucher dure 90 minutes. Vous n&apos;êtes pas un mauvais
                        parent : il manque souvent juste une méthode et un peu de temps pour la mettre en place.
                        Petit Pas vous guide, sans jugement.
                    </p>
                </section>

                <section className="mb-14">
                    <h2 className="text-3xl font-semibold mb-6">Comment ça marche</h2>
                    <ol className="space-y-4">
                        {STEPS.map((step, index) => (
                            <li key={step.title} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                                <span
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-semibold text-white"
                                    style={{ backgroundColor: TERRACOTTA }}
                                    aria-hidden="true"
                                >
                                    {index + 1}
                                </span>
                                <p className="leading-relaxed">
                                    <strong>{step.title}</strong> {step.body}
                                </p>
                            </li>
                        ))}
                    </ol>
                </section>

                <section className="mb-14" aria-label="Aperçu de l'application">
                    <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
                        {SCREENSHOTS.slice(1).map((shot) => (
                            <Image
                                key={shot.src}
                                src={shot.src}
                                alt={shot.alt}
                                width={540}
                                height={1168}
                                className="w-48 md:w-52 h-auto shrink-0 snap-start rounded-2xl shadow-md"
                                loading="lazy"
                            />
                        ))}
                    </div>
                </section>

                <section className="mb-14">
                    <h2 className="text-3xl font-semibold mb-6">Des outils pour les moments difficiles</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {TOOLS.map((tool) => (
                            <li key={tool} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: SAGE }} aria-hidden="true" />
                                {tool}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mb-14">
                    <h2 className="text-3xl font-semibold mb-4">Pour qui ?</h2>
                    <p className="text-lg leading-relaxed opacity-90">
                        Pour les parents d&apos;enfants de 4 à 18 ans, que le diagnostic de TDAH soit posé, en cours
                        ou seulement suspecté. Le questionnaire de repérage donne une zone verte, orange ou rouge
                        et une liste « Qui consulter ? » (pédiatre, neuropsychologue, orthophoniste,
                        psychomotricien, ergothérapeute, orthoptiste).
                    </p>
                </section>

                <section className="mb-14 rounded-2xl p-6 border-l-4" style={{ borderColor: SAGE, backgroundColor: '#EFF4EF' }}>
                    <h2 className="text-3xl font-semibold mb-4">Ce que Petit Pas n&apos;est pas</h2>
                    <p className="text-lg leading-relaxed">
                        Ce n&apos;est pas un outil de diagnostic ni un remplacement du suivi par un professionnel
                        de santé. <strong>Cet outil ne remplace pas un avis médical.</strong> En cas de danger
                        immédiat, contactez les secours.
                    </p>
                </section>

                <section className="mb-14 text-center">
                    <h2 className="text-2xl font-semibold mb-6">Téléchargez Petit Pas</h2>
                    <div className="flex justify-center">
                        <StoreButtons />
                    </div>
                </section>

                <p className="text-center text-sm opacity-80">
                    Petit Pas est édité par Al Firma
                    <span className="mx-2">·</span>
                    <Link href="/petit-pas/privacy/" className="underline hover:opacity-70">
                        Politique de confidentialité
                    </Link>
                    <span className="mx-2">·</span>
                    <Link href="/petit-pas/terms/" className="underline hover:opacity-70">
                        Conditions d&apos;utilisation
                    </Link>
                    <span className="mx-2">·</span>
                    <a href="mailto:contact@alfirma.com" className="underline hover:opacity-70">
                        contact@alfirma.com
                    </a>
                </p>
            </div>
        </main>
    );
}

export default PetitPasPage;
