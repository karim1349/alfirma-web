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
    description: 'Présente à Paris, Al Firma accompagne startups et entreprises établies dans la conception d\'applications mobiles et web performantes. Nous combinons expertise technique (Django, React Native, TypeScript) et design UX/UI pour créer des produits digitaux sur mesure, adaptés aux besoins du marché parisien.',
    keywords: 'développement mobile Paris, application web Paris, agence digitale Paris, React Native Paris, Django Paris, développement sur mesure Paris, applications iOS Paris, applications Android Paris, API REST Paris, maintenance applicative Paris',
    marketInsights: 'Le marché tech parisien privilégie les applications B2B, les solutions de gestion d\'entreprise, et les plateformes e-commerce. L\'adoption des applications métier avec une forte exigence de sécurité des données est au cœur de la demande.',
    technologies: 'Notre expertise React Native et Django répond parfaitement aux besoins des entreprises de la capitale. Nous intégrons TypeScript, Next.js, PostgreSQL, et les services cloud AWS/Azure pour des solutions robustes.',
    achievements: 'Découvrez nos réalisations phares, conçues avec la même exigence de qualité que nous apportons à nos clients franciliens.',
    caseStudies: [clientLeexit, clientMeor, projectDuodoku],
  },
  'nantes': {
    name: 'Nantes',
    country: 'France', 
    region: 'Pays de la Loire',
    flagEmoji: '🇫🇷',
    coordinates: { lat: 47.2184, lng: -1.5536 },
    description: 'À Nantes, notre équipe aide les acteurs locaux et les jeunes pousses à accélérer leur transformation numérique. Nous réalisons des applications mobiles, sites web et API robustes, en favorisant la collaboration agile.',
    keywords: 'développement mobile Nantes, application web Nantes, agence digitale Nantes, React Native Nantes, Django Nantes, développement sur mesure Nantes, applications iOS Nantes, API REST Nantes',
    marketInsights: 'L\'écosystème nantais se distingue par son dynamisme entrepreneurial. De nombreuses PME nantaises recherchent des solutions digitales personnalisées pour booster leur productivité et leur relation client.',
    technologies: 'Notre expertise technique à Nantes s\'appuie sur la stack Django + React Native. Nous maîtrisons l\'intégration de systèmes back-end complexes et le déploiement continu d\'applications de haute performance.',
    achievements: 'Découvrez nos récents projets digitaux, illustrant le niveau d\'exigence que nous offrons aux entreprises de la région nantaise.',
    caseStudies: [clientCosante, clientNexy],
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
    description: 'Au cœur de Casablanca, hub économique du Maroc, Al Firma accompagne les entreprises dans leur transformation digitale avec des solutions web et mobiles sur mesure, innovantes et performantes.',
    keywords: 'développement mobile Casablanca, application web Casablanca, agence digitale Maroc, React Native Casablanca, Django Casablanca, développement sur mesure Casablanca, applications iOS Casablanca, applications Android Casablanca, API REST Casablanca, transformation digitale Maroc',
    marketInsights: 'Le marché digital casablancais est en pleine effervescence avec une forte demande pour les applications mobiles grand public, les plateformes B2B innovantes et les services de type marketplace.',
    technologies: 'Nous maîtrisons les stacks modernes (React Native, Django) pour relever les défis techniques des startups et grands comptes marocains, incluant l\'intégration des solutions de paiement locales.',
    achievements: 'Découvrez nos projets à succès, conçus pour offrir des expériences digitales de premier plan à l\'échelle nationale et internationale.',
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
    description: 'Al Firma associe design d\'excellence et prouesses techniques pour doter les professionnels du tourisme et les startups de Marrakech d\'applications web et mobiles de qualité supérieure.',
    keywords: 'développement mobile Marrakech, application web Marrakech, agence digitale Marrakech, React Native Marrakech, Django Marrakech, développement sur mesure Marrakech, applications iOS Marrakech, applications Android Marrakech, API REST Marrakech, e-tourisme',
    marketInsights: 'Ville très dynamique, Marrakech exprime un fort besoin en applications mobiles orientées B2C, plateformes de services, e-commerce et solutions SaaS pour les professionnels.',
    technologies: 'En tirant parti des frameworks modernes comme React Native et Django REST, nous garantissons des applications ultra-réactives et des API puissantes pour tout type d\'audience.',
    achievements: 'Découvrez notre portfolio composé d\'applications plébiscitées par leurs utilisateurs, démontrant notre passion pour la qualité.',
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
