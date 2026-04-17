import type { Metadata } from 'next';
import Head from 'next/head';
import { LocalBusinessSchema } from '../components/StructuredData';
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
    description: 'Basée dans la région angevine, Al Firma met son savoir-faire en développement sur mesure au service des entreprises d\'Angers. De la conception à la maintenance, nous livrons des solutions stables.',
    keywords: 'développement mobile Angers, application web Angers, agence digitale Angers, React Native Angers, Django Angers, applications Android Angers',
    marketInsights: 'Angers se caractérise par un tissu économique alliant tradition et French Tech. Les entreprises angevines privilégient de plus en plus la digitalisation sur mesure de leurs activités.',
    technologies: 'Nous combinons l\'agilité de React Native et la solidité de Django pour créer des applications métier complexes, évolutives et parfaitement intégrées à vos environnements existants.',
    achievements: 'Découvrez ci-dessous l\'impact de nos réalisations, reflets du savoir-faire technique déployé pour tous nos clients.',
    caseStudies: [clientNeuroptimisme, clientToutakote],
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
  },
  'rabat': {
    name: 'Rabat',
    country: 'Maroc',
    region: 'Rabat-Salé-Kénitra',
    flagEmoji: '🇲🇦',
    coordinates: { lat: 34.0209, lng: -6.8416 },
    description: 'Implantée au Maroc, Al Firma répond aux exigences des institutions et entreprises de Rabat en créant des applications web et mobiles robustes, sécurisées et adaptées aux enjeux de la capitale.',
    keywords: 'développement mobile Rabat, application web Rabat, agence digitale Rabat, React Native Rabat, Django Rabat, développement sur mesure Rabat, applications iOS Rabat, applications Android Rabat, API REST Rabat, e-gov Maroc',
    marketInsights: 'La capitale du Maroc concentre d\'importants besoins en matière de plateformes sécurisées, d\'outils institutionnels et de systèmes de gestion dématérialisés hautement performants.',
    technologies: 'Notre pôle d\'ingénierie s\'appuie sur la puissance de Django et PostgreSQL pour les architectures back-end complexes, et sur React/React Native pour des interfaces utilisateurs fluides.',
    achievements: 'Voici un aperçu de l\'expertise Al Firma à travers nos dernières applications et plateformes de grande envergure.',
    caseStudies: [projectDuodoku, clientDeloitte, clientNeuroptimisme],
  },
  'tanger': {
    name: 'Tanger',
    country: 'Maroc',
    region: 'Tanger-Tétouan-Al Hoceïma',
    flagEmoji: '🇲🇦',
    coordinates: { lat: 35.7595, lng: -5.8340 },
    description: 'Tournée vers l\'avenir, Al Firma soutient le développement économique de Tanger en proposant des services de développement d\'applications web et mobiles à la pointe de la technologie.',
    keywords: 'développement mobile Tanger, application web Tanger, agence digitale Tanger, React Native Tanger, Django Tanger, développement sur mesure Tanger, applications iOS Tanger, applications Android Tanger, API REST Tanger, logistique digitale',
    marketInsights: 'Pôle industriel et logistique d\'excellence, Tanger voit naître de nombreux besoins en création de plateformes logicielles, d\'applications de suivi et de marketplaces d\'envergure.',
    technologies: 'Nous déployons des solutions scalables et robustes basées sur Django, Next.js et React Native, parfaites pour répondre aux fortes exigences opérationnelles.',
    achievements: 'Explorez nos "success stories" reflétant notre capacité à livrer des produits numériques premium et fiables.',
    caseStudies: [projectSayar, clientMoba, clientBFlow],
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
      {/* City-specific H1 for SEO - visually hidden but accessible */}
      <h1 className="sr-only">
        Agence Développement Application Mobile {location.name}
      </h1>
      <CityPageTemplate location={location} />
    </>
  );
}
