import type { Metadata } from 'next';
import Head from 'next/head';
import { LocalBusinessSchema, FAQPageSchema, BreadcrumbSchema } from '../components/StructuredData';
import CityPageTemplate from './components/CityPageTemplate';
// Real projects and client experiences to showcase on local pages
const projectQiima = {
  title: 'QIIMA',
  description: 'Application communautaire de partage de bons plans au Maroc. Les utilisateurs découvrent et partagent les meilleures offres des grandes enseignes. Développée avec React Native + Expo et une API Django robuste.',
  technologies: ['Mobile App', 'API Django', 'UX/UI Design'],
  image: '/assets/projects/qiima/logo.png'
};

const projectDuodoku = {
  title: 'DUODOKU',
  description: 'Application de jeu de Sudoku innovante pour les joueurs solitaires ou en compétition multijoueur. Développée en React Native et s\'appuyant sur une API REST Django, disponible sous iOS et Android.',
  technologies: ['React Native', 'Mobile App', 'In-App Ads'],
  image: '/assets/duodoku.png'
};

const projectSayar = {
  title: 'SAYAR',
  description: 'Market-place digitale d\'auto-partage de véhicules entre particuliers au Maroc. Application compléte permettant la gestion des locations grâce à des process modernes intégrés.',
  technologies: ['Mobile App', 'Web App', 'Paiements in-app'],
  image: '/assets/sayar.png'
};

const clientCosante = {
  title: 'Co\'Santé - Application Jeunes Santé Prévention',
  description: 'La confédération des centres de Santé des Pays de la Loire a choisi Al Firma pour le design, développement et déploiement de son application de prévention. Interface intuitive adaptée aux jeunes utilisateurs.',
  technologies: ['Mobile App', 'UX/UI Design', 'Santé'],
  image: '/assets/cosante.png'
};

const clientLeexit = {
  title: 'Leexit - Application de rencontre amicale',
  description: 'Développement intégral et déploiement de cette application mobile de rencontre d\'amis, sur la base d\'un design existant. Création d\'une API REST Django sur-mesure pour les besoins spécifiques du projet.',
  technologies: ['Mobile App', 'API Django', 'Déploiement'],
  image: '/assets/leexit.png'
};

const clientNeuroptimisme = {
  title: 'Neuroptimisme - Plateforme Web',
  description: 'Développement intégral et déploiement d\'une application web performante pour le cabinet de neuropsychologie Neuroptimisme. Accompagnement technique complet pour la digitalisation de leur activité.',
  technologies: ['Web App', 'Déploiement', 'Accompagnement'],
  image: '/assets/neuroptimisme.png'
};

const clientToutakote = {
  title: 'Toutakoté - Écosystème digital complet',
  description: 'Refonte intégrale de l\'application mobile existante pour améliorer les performances, accompagnée de la réalisation technique et du déploiement d\'une nouvelle application web synchronisée.',
  technologies: ['Mobile App', 'Web App', 'Refonte'],
  image: '/assets/toutakote.png'
};

const clientMeor = {
  title: 'Meor - Extension Web',
  description: 'Intervention experte dans la réalisation de l\'extension web de Meor, avec un focus particulier sur la partie design, ergonomie et conception technique de l\'interface utilisateur.',
  technologies: ['Web Extension', 'UX/UI Design', 'Conception'],
  image: '/assets/meor.png'
};

const clientNexy = {
  title: 'Nexy - Réseau social Web3',
  description: 'Prestations poussées de résolution de bugs (bug fixing) et de maintenance évolutive pour le réseau social orienté NFT Nexy. Optimisation de la stabilité de la plateforme.',
  technologies: ['Bug Fixing', 'Maintenance', 'Web3'],
  image: '/assets/nexy.png'
};

const clientSporebio = {
  title: 'Spore.bio - Application Web Interne',
  description: 'Nous avons développé une application web interne full-stack (React et Django) conçue sur-mesure pour les équipes de Spore.bio.',
  technologies: ['Web App', 'React', 'Django'],
  image: '/assets/sporebio.png'
};

const clientDeloitte = {
  title: 'Deloitte - Plateforme Interne',
  description: 'Nous avons accompagné Deloitte dans la réalisation d\'une application web interne complète, développée en full-stack avec Angular et Django.',
  technologies: ['Web App', 'Angular', 'Django'],
  image: '/assets/deloitte.png'
};

const clientMoba = {
  title: 'Moba',
  description: 'Pour Moba, nous avons construit et déployé une application web full-stack associant la flexibilité de React en front-end à la puissance de Django en back-end.',
  technologies: ['Web App', 'React', 'Django'],
  image: '/assets/moba.png'
};

const clientBFlow = {
  title: 'B-flow',
  description: 'Nous avons réalisé pour B-flow des prestations de diagnostic, migrations et bug fixes sur son application mobile hybride, développée avec le framework Capacitor.',
  technologies: ['Mobile App', 'Capacitor', 'Hybride'],
  image: '/assets/b-flow.webp'
};

// Location data - centralized and easy to maintain
const locations = {
  // France
  'paris': {
    name: 'Paris',
    country: 'France',
    region: 'Île-de-France',
    flagEmoji: '🇫🇷',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    description: 'Depuis notre présence à Paris, Al Firma travaille avec des startups en hypercroissance, des ETI et des grands comptes pour concevoir des applications mobiles et des plateformes web qui font la différence sur le marché. Capital de la French Tech, Paris exige des standards d\'exécution élevés : interfaces soignées, architectures scalables, sécurité des données irréprochable. Nous répondons à ces exigences avec une équipe pluridisciplinaire couvrant le développement React Native, Django, Next.js, l\'UX/UI Design et le déploiement cloud.',
    keywords: 'développement mobile Paris, application web Paris, agence digitale Paris, React Native Paris, Django Paris, développement sur mesure Paris, applications iOS Paris, applications Android Paris, API REST Paris, maintenance applicative Paris',
    marketInsights: 'L\'écosystème tech parisien est l\'un des plus compétitifs d\'Europe, animé par Station F, La French Tech Paris, et des centaines de startups en quête de partenaires techniques fiables. Les besoins dominants portent sur les applications B2B de gestion et de productivité, les marketplaces, les outils SaaS et les applications mobiles grand public à forte scalabilité. Les entreprises parisiennes sont sensibles au time-to-market et choisissent généralement leurs prestataires sur la capacité à livrer vite et bien — ce qui est au cœur de notre ADN.',
    technologies: 'Notre expertise React Native et Django répond aux exigences techniques des entreprises de la capitale. Nous maîtrisons TypeScript, Next.js, GraphQL, PostgreSQL, Redis et les services cloud AWS et Azure. Pour les applications nécessitant des niveaux élevés de sécurité (fintech, legaltech, santé), nous appliquons les meilleures pratiques de chiffrement et de conformité RGPD. Notre process de développement agile garantit une visibilité totale à chaque sprint, avec des livrables concrets toutes les deux semaines.',
    achievements: 'Nos références parisiennes illustrent notre capacité à gérer des projets techniquement exigeants : Leexit, application de rencontre amicale déployée sur iOS et Android, Meor, extension web avec une conception UX/UI poussée, et Duodoku, jeu mobile multijoueur disponible internationalement. Chaque projet incarne notre engagement : livrer un produit dont vous serez fier, dans les temps et le budget convenus.',
    caseStudies: [clientLeexit, clientMeor, projectDuodoku],
    faqs: [
      {
        question: "Quelle est la différence entre une agence de développement à Paris et Al Firma ?",
        answer: "Les agences parisiennes traditionnelles facturent souvent des frais de structure élevés qui se répercutent sur vos devis. Al Firma offre un niveau d'expertise équivalent — React Native, Django, UX/UI Design — avec une équipe senior directement impliquée sur votre projet, pour un budget maîtrisé et des délais de livraison records (20 jours pour une application mobile)."
      },
      {
        question: "Développez-vous des applications pour les startups parisiennes ?",
        answer: "Oui, les startups représentent une part importante de notre clientèle. Nous comprenons leurs contraintes : budget optimisé, time-to-market serré, besoin de scalabilité rapide. Nous proposons des MVPs fonctionnels rapidement déployables, avec une architecture conçue dès le départ pour évoluer avec votre croissance. Plusieurs de nos clients parisiens ont lancé leur produit en moins d'un mois."
      },
      {
        question: "Combien coûte le développement d'une application mobile à Paris ?",
        answer: "Nos tarifs sont les mêmes quelle que soit la localisation du client : à partir de 8 900€ pour une application mobile React Native (iOS + Android). Ce positionnement vous permet d'accéder à une expertise de niveau parisien sans payer la prime géographique. Un devis détaillé est fourni sous 24h après un premier échange de 30 minutes."
      },
      {
        question: "Gérez-vous le déploiement et la maintenance après la livraison ?",
        answer: "Chaque application livrée bénéficie de 30 jours de garantie incluse couvrant les corrections de bugs et ajustements post-lancement. Au-delà, nous proposons des contrats de maintenance évolutive adaptés à vos besoins : mises à jour de compatibilité, nouvelles fonctionnalités, monitoring des performances. Vous n'êtes jamais laissé seul après la livraison."
      }
    ],
  },
  'nantes': {
    name: 'Nantes',
    country: 'France',
    region: 'Pays de la Loire',
    flagEmoji: '🇫🇷',
    coordinates: { lat: 47.2184, lng: -1.5536 },
    description: 'Al Firma accompagne les startups, PME et scaleups de la métropole nantaise dans la création d\'applications mobiles et web sur mesure. Réputée pour son dynamisme entrepreneurial et son écosystème French Tech, Nantes concentre une demande croissante en solutions digitales à forte valeur ajoutée. Notre équipe conçoit des produits mobiles iOS et Android avec React Native, des plateformes web React/Django robustes, et des API REST performantes — livrés en un temps record, avec un accompagnement humain à chaque étape.',
    keywords: 'développement mobile Nantes, application web Nantes, agence digitale Nantes, React Native Nantes, Django Nantes, développement sur mesure Nantes, applications iOS Nantes, API REST Nantes',
    marketInsights: 'Nantes s\'est imposée comme l\'une des métropoles tech les plus actives de France, portée par le label French Tech Nantes Saint-Nazaire et un tissu de PME innovantes concentré sur l\'Île de Nantes. Les secteurs de la santé numérique, de la logistique et du retail sont particulièrement demandeurs d\'applications mobiles sur mesure. Les entreprises nantaises recherchent des partenaires capables de livrer vite, sans sacrifier la qualité — c\'est exactement notre positionnement. La mobilité, l\'accessibilité et l\'expérience utilisateur y sont des critères décisifs dans le choix d\'une application.',
    technologies: 'Pour les entreprises de la région nantaise, nous déployons une stack éprouvée : React Native pour les applications iOS et Android cross-platform, Django (Python) pour des back-ends solides et sécurisés, Next.js pour des interfaces web ultra-performantes, et PostgreSQL pour des bases de données fiables. Nous intégrons également les outils métiers les plus courants (CRM, ERP, outils de paiement) et assurons le déploiement via AWS, OVH ou les infrastructures de votre choix. Chaque projet bénéficie d\'un design UX/UI pensé pour maximiser l\'adoption utilisateur.',
    achievements: 'Parmi nos réalisations les plus représentatives de l\'exigence nantaise : Co\'Santé, une application mobile de prévention santé pour les jeunes développée pour la confédération des centres de santé des Pays de la Loire, et Nexy, un réseau social Web3 nécessitant une architecture back-end complexe et des performances temps réel. Des projets livrés dans les délais, avec une satisfaction client que nos références témoignent.',
    caseStudies: [clientCosante, clientNexy],
    faqs: [
      {
        question: "Quel est le coût de développement d'une application mobile à Nantes ?",
        answer: "Le développement d'une application mobile sur mesure à Nantes débute généralement à partir de 8 900€ pour une application React Native iOS et Android. Le tarif varie selon la complexité des fonctionnalités, le niveau de design et les intégrations requises. Al Firma propose des devis détaillés et transparents sous 24h — sans engagement."
      },
      {
        question: "Combien de temps faut-il pour développer une application mobile ?",
        answer: "Chez Al Firma, nous livrons une application mobile en 20 jours ouvrés pour un projet standard. Ce délai record est rendu possible grâce à notre process agile éprouvé et notre équipe pluridisciplinaire. Pour des projets complexes nécessitant des intégrations spécifiques ou un design très élaboré, le délai est ajusté en conséquence et communiqué dès le cadrage."
      },
      {
        question: "Travaillez-vous avec des entreprises basées à Nantes à distance ?",
        answer: "Oui, nous collaborons efficacement à distance avec nos clients nantais grâce à des outils de gestion de projet modernes (Notion, Figma, Slack) et des points de suivi réguliers. Nous pouvons également nous déplacer pour des ateliers de cadrage ou des présentations. Notre fonctionnement hybride garantit réactivité et proximité quel que soit votre localisation en Pays de la Loire."
      },
      {
        question: "Quelles technologies utilisez-vous pour le développement mobile à Nantes ?",
        answer: "Nous développons principalement avec React Native pour les applications iOS et Android cross-platform, ce qui réduit le coût de développement tout en garantissant des performances proches du natif. Côté back-end, nous utilisons Django (Python) pour sa robustesse et sa sécurité. Pour les applications web, nous combinons React/Next.js et Django REST Framework."
      }
    ],
  },
  'angers': {
    name: 'Angers',
    country: 'France',
    region: 'Pays de la Loire',
    flagEmoji: '🇫🇷',
    coordinates: { lat: 47.4784, lng: -0.5632 },
    description: 'Al Firma accompagne les startups, PME et institutions angevines dans la création d\'applications mobiles iOS et Android, de plateformes web et d\'outils métier sur mesure. Reconnue comme l\'une des villes les plus dynamiques de l\'ouest grâce à son label French Tech, à son écosystème végétal et numérique (Végépolys Valley), et à ses pôles universitaires de premier plan, Angers concentre des acteurs ambitieux qui cherchent à digitaliser leurs activités sans compromis sur la qualité. Nous y livrons des produits sur mesure conçus avec React Native et Django, déployés rapidement et maintenus dans la durée.',
    keywords: 'développement mobile Angers, application web Angers, agence digitale Angers, React Native Angers, Django Angers, agence application mobile Angers, applications iOS Angers, applications Android Angers, API REST Angers, développement sur mesure Angers',
    marketInsights: 'Angers conjugue un tissu industriel solide (santé, agroalimentaire, viticulture, électronique) et une scène tech en forte croissance, portée par la French Tech Angers et des incubateurs comme WeForge. Les besoins dominants concernent les outils métier B2B, les applications de gestion logistique et de traçabilité, ainsi que les plateformes de services aux particuliers. Les entreprises angevines apprécient les partenaires capables d\'allier proximité, exigence technique et sens du concret — exactement ce que propose notre équipe basée dans la région.',
    technologies: 'Pour les entreprises de la région angevine, nous déployons React Native pour les applications mobiles cross-platform iOS et Android, Django (Python) pour des back-ends robustes et sécurisés, et Next.js pour des interfaces web performantes. Nous intégrons les outils métiers (ERP, CRM, solutions de paiement, plateformes e-commerce) et garantissons des architectures évolutives sur AWS, OVH ou tout autre cloud de votre choix. Chaque projet bénéficie d\'un design UX/UI conçu pour maximiser l\'engagement utilisateur dès la première interaction.',
    achievements: 'Nos réalisations en Pays de la Loire reflètent notre exigence : Neuroptimisme, plateforme web pour un cabinet de neuropsychologie, et Toutakoté, refonte complète d\'un écosystème mobile et web pour un acteur local. Des projets livrés dans les délais, avec un accompagnement humain à chaque étape.',
    caseStudies: [clientNeuroptimisme, clientToutakote, clientCosante],
    faqs: [
      {
        question: "Combien coûte le développement d'une application mobile à Angers ?",
        answer: "Une application mobile sur mesure développée par Al Firma à Angers démarre à 8 900€ pour une application React Native (iOS + Android). Le tarif s\'adapte selon les fonctionnalités, le niveau de design et les intégrations métier (paiements, notifications, API tierces). Devis détaillé sous 24h après un premier échange."
      },
      {
        question: "Quel est le délai pour livrer une application mobile à Angers ?",
        answer: "Nous livrons une application mobile en 20 jours ouvrés pour un projet standard, grâce à notre process agile et notre équipe pluridisciplinaire. Pour des projets plus complexes (intégrations métier, multi-rôles, paiements), le délai est ajusté dès le cadrage initial et communiqué clairement avant signature."
      },
      {
        question: "Travaillez-vous avec des entreprises basées à Angers en mode hybride ?",
        answer: "Oui, nous combinons rendez-vous présentiels (ateliers de cadrage, présentations) et collaboration à distance via Notion, Figma et Slack. Notre proximité géographique avec Angers nous permet d\'organiser facilement des points en présentiel quand cela apporte de la valeur — sans imposer la contrainte d\'un déplacement systématique."
      },
      {
        question: "Quelles entreprises angevines ont déjà fait appel à Al Firma ?",
        answer: "Nous avons accompagné des acteurs représentatifs du tissu local : Neuroptimisme (cabinet de neuropsychologie, plateforme web), Toutakoté (refonte mobile + web), et Co\'Santé pour la confédération des centres de santé des Pays de la Loire. Chaque référence illustre notre capacité à adapter notre approche au secteur d\'activité et au stade de maturité du client."
      }
    ],
  },
  'cholet': {
    name: 'Cholet',
    country: 'France',
    region: 'Pays de la Loire',
    flagEmoji: '🇫🇷',
    coordinates: { lat: 47.0619, lng: -0.8795 },
    description: 'Depuis Cholet, notre siège historique, nous concevons des plateformes web et mobiles avec une approche artisanale et rigoureuse du développement logiciel.',
    keywords: 'développement mobile Cholet, application web Cholet, agence digitale Cholet, React Native Cholet, Django Cholet, développement sur mesure Cholet',
    marketInsights: 'Cholet représente un cœur industriel dynamique où les besoins en digitalisation et en automatisation des processus via des applications métier sont en très forte croissance.',
    technologies: 'Depuis notre siège, nous développons des architectures modernes (Next.js, Django, React Native) garantissant des applications performantes, sécurisées et facilement maintenables au quotidien.',
    achievements: 'Fiers de nos racines choletaises, découvrez les projets majeurs que nous avons réalisés avec notre exigence artisanale.',
    caseStudies: [clientCosante, clientLeexit, projectQiima],
    faqs: [
      {
        question: "Combien coûte une application mobile sur mesure depuis Cholet ?",
        answer: "Le tarif d'entrée pour une application mobile React Native (iOS + Android) débute à 8 900€. Le coût final dépend des fonctionnalités, du niveau d'intégration métier et du design souhaité. Étant basés à Cholet, nous bénéficions d'une structure optimisée qui nous permet de proposer un excellent rapport qualité/prix par rapport aux grandes métropoles."
      },
      {
        question: "Pourquoi choisir une agence basée à Cholet plutôt qu'à Paris ou Nantes ?",
        answer: "Notre ancrage choletais nous permet une réactivité, une proximité humaine et une rigueur industrielle qui font notre différence. Nous appliquons les mêmes standards techniques que les grandes agences parisiennes (React Native, Django, OWASP, RGPD) sans la prime géographique des grandes métropoles. Vous gagnez sur le coût, la disponibilité et la simplicité d'échange."
      },
      {
        question: "Quels secteurs accompagnez-vous dans le bassin choletais ?",
        answer: "Le tissu industriel local — textile, agroalimentaire, mécanique — exprime des besoins concrets en outils métier : suivi de production, gestion d'inventaire, traçabilité, applications de force de vente, plateformes B2B. Nous accompagnons aussi les acteurs des services et du tourisme régional (santé, hôtellerie, culture)."
      },
      {
        question: "Travaillez-vous uniquement avec des clients choletais ?",
        answer: "Non, Cholet est notre siège mais nous travaillons avec des clients dans toute la France et au Maroc. Notre méthode hybride — points présentiels quand cela ajoute de la valeur, collaboration à distance via Notion/Figma/Slack le reste du temps — fonctionne aussi bien à Cholet qu'à Paris, Nantes, Casablanca ou Marrakech."
      }
    ],
  },
  // Morocco
  'casablanca': {
    name: 'Casablanca',
    country: 'Maroc',
    region: 'Casablanca-Settat',
    flagEmoji: '🇲🇦',
    coordinates: { lat: 33.5731, lng: -7.5898 },
    description: 'Hub économique et financier du Maroc, Casablanca concentre les ambitions digitales des plus grandes entreprises du pays. Al Firma accompagne startups, PME et grands groupes casablancais dans la création d\'applications mobiles iOS et Android, de plateformes web et d\'API robustes. Notre double ancrage franco-marocain nous permet de comprendre les enjeux locaux tout en apportant les standards d\'excellence du marché européen. Nous maîtrisons l\'intégration des solutions de paiement locales (CMI, PayZone, CashPlus) pour des expériences transactionnelles sans friction.',
    keywords: 'développement mobile Casablanca, application web Casablanca, agence digitale Maroc, React Native Casablanca, Django Casablanca, développement sur mesure Casablanca, applications iOS Casablanca, applications Android Casablanca, API REST Casablanca, transformation digitale Maroc',
    marketInsights: 'Casablanca est le moteur économique du Maroc, avec un écosystème tech en plein essor porté par des initiatives comme Casablanca Finance City et la croissance de startups dans les secteurs fintech, e-commerce et logistique. La demande en applications mobiles grand public, marketplaces et outils B2B y est en forte croissance. Les entreprises locales cherchent des partenaires capables d\'allier rigueur technique, sens du design et connaissance du marché marocain — un profil qui correspond exactement à notre positionnement.',
    technologies: 'Pour les entreprises casablancaises, nous développons des applications React Native cross-platform iOS et Android, des back-ends Django Python sécurisés, et des interfaces web React/Next.js performantes. Nous intégrons les solutions de paiement locales (CMI, PayZone) et internationales (Stripe), configurons des infrastructures cloud résilientes (AWS, OVH), et garantissons la conformité aux réglementations marocaines en vigueur. Chaque produit est conçu pour fonctionner de manière optimale sur les réseaux et appareils utilisés au Maroc.',
    achievements: 'Parmi nos projets emblématiques au Maroc : Qiima, application communautaire de bons plans devenue une référence locale, Sayar, marketplace d\'autopartage de véhicules avec paiement intégré, et Spore.bio, application web interne full-stack. Des réalisations qui attestent de notre capacité à comprendre le marché marocain et à y livrer des produits de classe internationale.',
    caseStudies: [projectQiima, clientSporebio, projectSayar],
    faqs: [
      {
        question: "Combien coûte le développement d'une application mobile à Casablanca ?",
        answer: "Une application mobile sur mesure développée par Al Firma démarre à 8 900€ pour une application React Native iOS et Android. Pour les entreprises casablancaises, nous adaptons les modes de facturation (EUR/MAD, paiement échelonné) et tenons compte des spécificités locales : intégration CMI/PayZone, optimisation pour les réseaux marocains, conformité loi 09-08."
      },
      {
        question: "Intégrez-vous les solutions de paiement marocaines (CMI, PayZone, CashPlus) ?",
        answer: "Oui, l\'intégration des solutions de paiement locales fait partie de notre savoir-faire. Nous maîtrisons les API CMI (paiements par carte bancaire marocaine), PayZone, CashPlus et les solutions internationales (Stripe, PayPal). Nous gérons l\'authentification 3D Secure, les retours utilisateurs et la conformité PCI-DSS."
      },
      {
        question: "Quels secteurs d'activité accompagnez-vous à Casablanca ?",
        answer: "Nous travaillons avec un large éventail de secteurs : fintech (applications bancaires, wallets), e-commerce et marketplaces, logistique et livraison, santé (téléconsultation, gestion de cabinets), retail et CRM, ainsi qu\'avec des startups SaaS B2B. Notre expertise transverse nous permet d\'apporter à chaque secteur les bonnes pratiques techniques et UX."
      },
      {
        question: "Travaillez-vous en français, en arabe et en anglais ?",
        answer: "Oui, notre équipe est trilingue (français, arabe darija et standard, anglais). Nous gérons les projets en français par défaut, mais pouvons mener les ateliers, livrer la documentation et coder les applications dans les trois langues. Nos applications supportent le multilingue et le RTL (droite-à-gauche) pour l\'arabe nativement."
      }
    ],
  },
  'rabat': {
    name: 'Rabat',
    country: 'Maroc',
    region: 'Rabat-Salé-Kénitra',
    flagEmoji: '🇲🇦',
    coordinates: { lat: 34.0209, lng: -6.8416 },
    description: 'Capitale administrative et politique du Maroc, Rabat concentre les ministères, agences publiques, sièges institutionnels et organismes internationaux. Al Firma accompagne les administrations, ETI et startups rabatîs dans la conception d\'applications mobiles, plateformes web et systèmes back-end conformes aux exigences les plus strictes en matière de sécurité, de souveraineté des données et de conformité réglementaire. Notre double ancrage franco-marocain nous permet de comprendre les enjeux locaux tout en apportant les meilleures pratiques internationales.',
    keywords: 'développement mobile Rabat, application web Rabat, agence digitale Rabat, React Native Rabat, Django Rabat, développement sur mesure Rabat, applications iOS Rabat, applications Android Rabat, API REST Rabat, e-gov Maroc, transformation digitale Rabat',
    marketInsights: 'Rabat est le centre névralgique de la transformation digitale institutionnelle au Maroc, avec des projets ambitieux portés par l\'Agence de Développement du Digital (ADD), la Stratégie Maroc Digital 2025, et la digitalisation des services publics. Au-delà de l\'institutionnel, la ville accueille un écosystème tech en forte croissance autour du Technopark Rabat et des startups portées par UM6P/UIR. Les besoins dominants : plateformes sécurisées, systèmes d\'information métier, applications de gestion documentaire, et outils B2B à haute valeur ajoutée.',
    technologies: 'Pour les organisations rabatîs, nous déployons Django (Python) — choisi par la NASA, l\'Instagram et la majorité des administrations européennes — pour sa robustesse, sa sécurité native et sa capacité à gérer des architectures complexes. Côté front-end, React Native couvre les besoins mobiles iOS et Android, tandis que Next.js et React équipent les plateformes web. Nous appliquons les standards OWASP, le chiffrement AES-256, l\'authentification OAuth2/JWT et la conformité RGPD/loi 09-08, avec des déploiements résilients sur AWS, OVH ou infrastructures souveraines selon les besoins.',
    achievements: 'Nos références illustrent notre capacité à livrer pour des organisations exigeantes : Deloitte (plateforme web interne full-stack Angular + Django), Duodoku (jeu mobile multijoueur déployé internationalement), et Neuroptimisme (plateforme web sécurisée pour cabinet de neuropsychologie). Des projets livrés dans les délais, avec une qualité d\'exécution qui parle d\'elle-même.',
    caseStudies: [projectDuodoku, clientDeloitte, clientNeuroptimisme],
    faqs: [
      {
        question: "Quel est le coût de développement d'une application mobile à Rabat ?",
        answer: "Le développement d\'une application mobile sur mesure à Rabat démarre à partir de 8 900€ pour une application React Native iOS et Android. Le tarif évolue selon la complexité fonctionnelle, le niveau de sécurité requis (chiffrement, authentification renforcée) et les intégrations avec vos systèmes existants. Nous fournissons un devis détaillé et transparent sous 24h."
      },
      {
        question: "Pouvez-vous développer pour des administrations ou organismes publics à Rabat ?",
        answer: "Oui, notre stack technique (Django, PostgreSQL, infrastructures sécurisées) répond aux exigences des projets institutionnels. Nous appliquons les standards de sécurité (OWASP, chiffrement, authentification OAuth2), la conformité RGPD et loi 09-08, et pouvons déployer sur des infrastructures souveraines. Notre expérience avec des grands comptes comme Deloitte atteste de notre capacité à respecter les contraintes de gouvernance et d\'audit."
      },
      {
        question: "Comment gérez-vous la souveraineté des données pour les projets rabatîs ?",
        answer: "Selon vos exigences, nous pouvons héberger les données au Maroc (data centers locaux), en Europe (conformité RGPD), ou dans des cloud privés sur des infrastructures souveraines. Le choix d\'hébergement est défini dès le cadrage en fonction de la nature des données, des contraintes réglementaires et de votre politique IT. Nous documentons l\'ensemble des flux pour faciliter les audits."
      },
      {
        question: "Quels délais pour un projet à Rabat ?",
        answer: "Une application mobile standard est livrée en 20 jours ouvrés, une application web en 15 jours, une API en 10 jours. Pour les projets institutionnels avec contraintes de sécurité renforcée, le cadrage initial dure quelques jours supplémentaires pour valider l\'architecture avant le lancement du sprint de développement."
      }
    ],
  },
  'tanger': {
    name: 'Tanger',
    country: 'Maroc',
    region: 'Tanger-Tétouan-Al Hoceïma',
    flagEmoji: '🇲🇦',
    coordinates: { lat: 35.7595, lng: -5.8340 },
    description: 'Porte de l\'Afrique sur l\'Europe, Tanger s\'est imposée comme l\'un des hubs économiques et logistiques les plus dynamiques du continent grâce à Tanger Med — premier port d\'Afrique — et à des zones franches industrielles attirant les leaders mondiaux de l\'automobile, de l\'aéronautique et du textile. Al Firma accompagne les industriels, exportateurs, opérateurs logistiques et startups tangéroises dans la création d\'applications mobiles, plateformes web et systèmes de gestion sur mesure. Nos solutions en React Native et Django sont conçues pour encaisser les volumes de transactions, suivre les flux logistiques en temps réel et garantir une traçabilité irréprochable.',
    keywords: 'développement mobile Tanger, application web Tanger, agence digitale Tanger, React Native Tanger, Django Tanger, développement sur mesure Tanger, applications iOS Tanger, applications Android Tanger, API REST Tanger, logistique digitale Tanger, supply chain Maroc',
    marketInsights: 'Le bassin économique de Tanger est dominé par la logistique portuaire (Tanger Med), l\'industrie automobile (Renault, Stellantis), l\'aéronautique, et un secteur textile en pleine modernisation. Les besoins digitaux sont concrets et exigeants : applications de suivi de flotte, plateformes de gestion documentaire export/import, outils B2B pour la coordination logistique, marketplaces sectorielles, et systèmes ERP/WMS sur mesure. La Tanger Tech City et les startups locales ajoutent une dimension B2C en forte croissance, notamment autour du tourisme, des services et du e-commerce.',
    technologies: 'Pour répondre aux exigences opérationnelles de Tanger, nous combinons Django (Python) pour des back-ends à haute disponibilité, PostgreSQL pour la fiabilité transactionnelle, et React Native pour des applications mobiles fluides utilisables sur le terrain. Nous intégrons les API logistiques (suivi GPS, EDI, douanes), les solutions de paiement locales (CMI, PayZone) et internationales (Stripe), et concevons des architectures cloud résilientes (AWS, OVH) capables de gérer des pics d\'activité saisonniers. Chaque solution est pensée pour fonctionner même en conditions réseau dégradées.',
    achievements: 'Nos réalisations parlent d\'elles-mêmes : Sayar, marketplace d\'autopartage avec gestion de flotte et paiements intégrés ; Moba, application web full-stack React + Django pour un opérateur exigeant ; et B-flow, application mobile hybride Capacitor pour laquelle nous avons mené diagnostics et migrations. Des projets livrés dans les délais, avec une rigueur qui correspond aux standards industriels de Tanger.',
    caseStudies: [projectSayar, clientMoba, clientBFlow],
    faqs: [
      {
        question: "Combien coûte une application mobile pour une entreprise de Tanger ?",
        answer: "Une application mobile sur mesure développée par Al Firma démarre à 8 900€ pour une application React Native (iOS + Android). Le tarif évolue selon la complexité fonctionnelle (suivi GPS, scan de codes-barres, authentification renforcée, multi-rôles, intégrations EDI/ERP). Devis détaillé sous 24h après un premier échange de cadrage."
      },
      {
        question: "Développez-vous des applications de gestion logistique et supply chain pour Tanger ?",
        answer: "Oui, c\'est l\'un de nos domaines d\'expertise. Nous concevons des outils de suivi de flotte, de gestion d\'entrepôt (WMS), de tracking d\'expéditions, de gestion documentaire douane/export, et de coordination multi-acteurs. Nos applications fonctionnent en mode connecté ou hors-ligne (synchronisation différée), critique pour les opérations terrain au port ou en zone industrielle."
      },
      {
        question: "Pouvez-vous intégrer nos systèmes existants (ERP, WMS, douanes) ?",
        answer: "Oui, nous concevons des connecteurs sur mesure pour vos systèmes existants : SAP, Sage, Oracle, JD Edwards, ainsi que les API douanes (BADR, PortNet). Nous gérons les flux EDI standards (EDIFACT, XML, JSON), l\'authentification sécurisée et la résilience face aux pannes réseau. L\'intégration est cadrée dès la phase de cadrage initial."
      },
      {
        question: "Quelle est la différence entre une agence à Tanger et Al Firma ?",
        answer: "Al Firma combine ancrage marocain et standards d\'exécution internationaux. Nos équipes maîtrisent le contexte local (paiements CMI/PayZone, douanes marocaines, écosystème Tanger Med) tout en appliquant les meilleures pratiques techniques mondiales (Django, React Native, OWASP, conformité RGPD/loi 09-08). Vous bénéficiez d\'une équipe qui parle votre langue — au sens propre comme au figuré — sans compromis sur la qualité."
      }
    ],
  },
  'marrakech': {
    name: 'Marrakech',
    country: 'Maroc',
    region: 'Marrakech-Safi',
    flagEmoji: '🇲🇦',
    coordinates: { lat: 31.6295, lng: -7.9811 },
    description: 'Marrakech conjugue rayonnement international et dynamisme économique local, portée par un secteur touristique de premier plan et une scène entrepreneuriale en pleine mutation. Al Firma accompagne les professionnels du tourisme, les startups marrakchies et les PME locales dans la création d\'applications mobiles, plateformes web et solutions digitales sur mesure. De la réservation en ligne aux applications de gestion hôtelière, en passant par les outils e-commerce, nous transformons vos idées en produits qui conquièrent leurs utilisateurs.',
    keywords: 'développement mobile Marrakech, application web Marrakech, agence digitale Marrakech, React Native Marrakech, Django Marrakech, développement sur mesure Marrakech, applications iOS Marrakech, applications Android Marrakech, API REST Marrakech, e-tourisme',
    marketInsights: 'L\'économie digitale de Marrakech est tirée par le tourisme, l\'hôtellerie et les services B2C, avec une demande croissante pour des applications de réservation, de fidélisation client, et de gestion des opérations. Les entrepreneurs marrakchis cherchent à digitaliser leurs processus pour gagner en compétitivité, réduire leurs coûts et offrir une expérience client différenciante. Les applications mobiles B2C et les plateformes SaaS d\'entreprise constituent les segments les plus demandeurs.',
    technologies: 'Nous développons pour les entreprises marrakchies des applications React Native disponibles sur l\'App Store et Google Play, des plateformes web React/Django optimisées pour les fortes audiences, et des API REST scalables. Nous intégrons les outils de réservation (calendriers, paiements, notifications push), les solutions d\'analyse (analytics, CRM) et veillons à l\'optimisation des performances pour une expérience utilisateur irréprochable même sur connexions limitées.',
    achievements: 'Notre expertise au service du marché marrakchi : Toutakoté, refonte complète d\'une application mobile et développement d\'une nouvelle application web synchronisée, Qiima, application de bons plans à succès couvrant tout le territoire marocain, et notre collaboration avec Deloitte pour une plateforme web interne à haute exigence. Des références qui parlent d\'elles-mêmes.',
    caseStudies: [clientToutakote, projectQiima, clientDeloitte],
    faqs: [
      {
        question: "Quel est le coût de développement d'une application mobile à Marrakech ?",
        answer: "Une application mobile sur mesure démarre à partir de 8 900€ pour une application React Native iOS et Android, identique à nos tarifs Casablanca ou Paris. Le coût varie selon les fonctionnalités spécifiques au secteur visé (réservation, paiement multilingue, gestion d\'inventaire hôtelier, fidélisation client, etc.). Devis détaillé sous 24h."
      },
      {
        question: "Développez-vous des applications pour le secteur touristique et hôtelier ?",
        answer: "Oui, c\'est l\'un de nos domaines de prédilection à Marrakech. Nous concevons des applications de réservation en ligne, des outils de gestion hôtelière (PMS sur mesure), des plateformes de fidélisation client, des marketplaces d\'expériences touristiques, et des applications de conciergerie digitale. Nous intégrons les systèmes de paiement (CMI, Stripe), les gateways de réservation (Booking, Channel Manager) et le multilingue natif (FR/AR/EN)."
      },
      {
        question: "Vos applications fonctionnent-elles bien sur les connexions limitées ?",
        answer: "Oui, c\'est une contrainte que nous prenons en compte dès la conception, particulièrement importante au Maroc. Nous optimisons le poids des bundles JavaScript, mettons en place des stratégies de cache offline (mode hors-ligne avec synchronisation différée), compressons les images via WebP/AVIF, et minimisons les appels API. Le résultat : une application fluide même en 3G ou réseau saturé."
      },
      {
        question: "Pouvez-vous adapter une application existante au marché marrakchi ?",
        answer: "Absolument. Nous menons des refontes complètes ou partielles d\'applications existantes pour les adapter aux spécificités locales : ajout du multilingue arabe avec support RTL, intégration des paiements marocains, optimisation pour les usages locaux (préférences culturelles, comportements de réservation), conformité loi 09-08. Le projet Toutakoté que nous avons refondu en est un parfait exemple."
      }
    ],
  }
};

export const dynamic = 'force-static'

// Generate static params for all cities
export async function generateStaticParams() {
  return Object.keys(locations).map((city) => ({
    city: city,
  }));
}

// Generate metadata for each city
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = params.city
  const location = locations[city as keyof typeof locations];

  if (!location) {
    return {
      title: 'Page non trouvée',
      description: 'La page demandée n\'existe pas.',
    };
  }

  // SEO-optimized title with exact keyword match
  const title = `Agence Développement Application Mobile ${location.name} | Al Firma`;
  
  // SEO-optimized description with target keyword and CTA
  const description = `Al Firma, votre agence de développement d'applications mobiles à ${location.name}. React Native, Django, iOS, Android. Devis gratuit ✓ Équipe experte - ${location.country}.`;

  return {
    title,
    description,
    keywords: location.keywords,
    openGraph: {
      title: `Développement Application Mobile ${location.name} | Al Firma`,
      description: `Agence de développement d'applications mobiles et web à ${location.name}. React Native, Django, UX/UI Design. Devis gratuit.`,
      images: [
        {
          url: '/assets/logo.png',
          width: 1200,
          height: 630,
          alt: `Al Firma - Agence développement application mobile ${location.name}`,
        }
      ],
      type: 'website',
      url: `https://alfirma.com/${city}/`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `Développement Application Mobile ${location.name} | Al Firma`,
      description: `Agence de développement d'applications mobiles à ${location.name}. React Native, Django. Devis gratuit.`,
      images: ['/assets/logo.png'],
    },
    alternates: {
      canonical: `https://alfirma.com/${city}/`
    }
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = params.city
  const location = locations[city as keyof typeof locations];

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page non trouvée</h1>
          <p className="text-gray-600 mb-8">La page demandée n'existe pas.</p>
          <a href="/home" className="text-blue-600 hover:text-blue-800 underline">
            Retour à l'accueil
          </a>
        </div>
      </div>
    );
  }


  return (
    <>
      <Head>
        <link rel="canonical" href={`https://alfirma.com/${city}/`} />
      </Head>
      <LocalBusinessSchema
        name={`Al Firma - ${location.name}`}
        city={location.name}
        country={location.country}
        region={location.region}
        coordinates={location.coordinates}
      />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "https://alfirma.com/" },
        { name: location.name, url: `https://alfirma.com/${city}/` },
      ]} />
      {location.faqs && location.faqs.length > 0 && (
        <FAQPageSchema faqs={location.faqs} />
      )}
      {/* City-specific H1 for SEO - visually hidden but accessible */}
      <h1 className="sr-only">
        Agence Développement Application Mobile {location.name}
      </h1>
      <CityPageTemplate
        location={location}
        currentSlug={city}
        otherCities={Object.entries(locations)
          .filter(([slug]) => slug !== city)
          .map(([slug, l]) => ({ slug, name: l.name, flagEmoji: l.flagEmoji }))}
      />
    </>
  );
}
