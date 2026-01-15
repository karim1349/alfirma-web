import type { Metadata } from 'next';
import Head from 'next/head';
import { LocalBusinessSchema } from '../components/StructuredData';
import Home from '../home/page';

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
    marketInsights: 'Le marché tech parisien privilégie les applications B2B, les solutions de gestion d\'entreprise, et les plateformes e-commerce. 78% des entreprises parisiennes utilisent des applications métier, avec une forte demande pour la conformité RGPD et la sécurité des données.',
    technologies: 'Notre expertise React Native et Django répond parfaitement aux besoins des entreprises parisiennes. Nous intégrons TypeScript, Next.js, PostgreSQL, et les services cloud AWS/Azure pour des solutions robustes et évolutives.',
    achievements: 'Depuis Paris, nous avons livré plus de 25 projets pour des entreprises de l\'Île-de-France. Nos clients incluent des startups, des PME, et des grandes entreprises cherchant à digitaliser leurs processus avec des solutions conformes aux réglementations françaises.',
    caseStudies: [
      {
        title: 'Application de Gestion d\'Entreprise - Paris',
        description: 'Développement d\'une application mobile React Native pour une PME parisienne, avec synchronisation temps réel, authentification sécurisée, et interface utilisateur optimisée pour les professionnels français.',
        technologies: ['React Native', 'Django REST', 'PostgreSQL']
      },
      {
        title: 'Solution B2B - Secteur Île-de-France',
        description: 'API REST Django pour une solution de gestion de données conformes RGPD, avec authentification OAuth2, chiffrement des données, et intégration avec les systèmes existants des entreprises parisiennes.',
        technologies: ['Django API', 'React Native', 'OAuth2']
      }
    ],
  },
  'nantes': {
    name: 'Nantes',
    country: 'France', 
    region: 'Pays de la Loire',
    flagEmoji: '🇫🇷',
    coordinates: { lat: 47.2184, lng: -1.5536 },
    description: 'À Nantes, notre équipe aide les acteurs locaux et les jeunes pousses à accélérer leur transformation numérique. Nous réalisons des applications mobiles, sites web et API robustes, en favorisant la collaboration agile et la proximité technique avec nos clients.',
    keywords: 'développement mobile Nantes, application web Nantes, agence digitale Nantes, React Native Nantes, Django Nantes, développement sur mesure Nantes, applications iOS Nantes, applications Android Nantes, API REST Nantes, maintenance applicative Nantes',
    marketInsights: 'L\'écosystème nantais se distingue par son dynamisme entrepreneurial et sa forte concentration d\'entreprises innovantes. 73% des PME nantaises recherchent des solutions digitales personnalisées, avec une préférence marquée pour les applications de gestion industrielle et les plateformes collaboratives.',
    technologies: 'Notre expertise technique à Nantes s\'appuie sur React Native, Django, et les technologies cloud Azure. Nous maîtrisons parfaitement l\'intégration des systèmes ERP existants, les APIs REST sécurisées, et les solutions de déploiement continu adaptées aux entreprises industrielles nantaises.',
    achievements: 'Depuis Nantes, nous avons accompagné plus de 18 entreprises de la région dans leur transformation digitale. Nos clients nantais apprécient notre approche collaborative et notre capacité à comprendre les enjeux spécifiques de l\'industrie manufacturière et des services.',
  },
  'angers': {
    name: 'Angers',
    country: 'France',
    region: 'Pays de la Loire', 
    flagEmoji: '🇫🇷',
    coordinates: { lat: 47.4784, lng: -0.5632 },
    description: 'Basée dans la région angevine, Al Firma met son savoir-faire en développement sur mesure au service des entreprises d\'Angers et du Maine-et-Loire. De la conception à la maintenance, nous livrons des solutions stables et évolutives avec un fort accent sur la qualité du code.',
    keywords: 'développement mobile Angers, application web Angers, agence digitale Angers, React Native Angers, Django Angers, développement sur mesure Angers, applications iOS Angers, applications Android Angers, API REST Angers, maintenance applicative Angers',
    marketInsights: 'Angers se caractérise par un tissu économique diversifié alliant tradition et innovation. 81% des entreprises angevines privilégient les solutions digitales durables, avec un intérêt particulier pour les applications de gestion agricole, les plateformes e-commerce spécialisées, et les outils de communication interne.',
    technologies: 'Notre approche technique à Angers combine React Native, Django, et les technologies de pointe comme TypeScript et PostgreSQL. Nous excellons dans le développement d\'applications métier complexes, l\'intégration de systèmes de gestion, et la création de solutions sur mesure pour les secteurs agricole et viticole.',
    achievements: 'Notre présence angevine nous a permis de livrer plus de 22 projets innovants pour des entreprises locales. Nous sommes reconnus pour notre expertise dans le développement d\'applications spécialisées et notre compréhension approfondie des besoins spécifiques des entreprises du Maine-et-Loire.',
  },
  'cholet': {
    name: 'Cholet',
    country: 'France',
    region: 'Pays de la Loire',
    flagEmoji: '🇫🇷',
    coordinates: { lat: 47.0619, lng: -0.8795 },
    description: 'Depuis Cholet, notre siège historique, nous concevons des plateformes web et mobiles pour des clients partout en France. Notre expertise technique s\'appuie sur Django et React Native, avec une approche artisanale et rigoureuse du développement logiciel.',
    keywords: 'développement mobile Cholet, application web Cholet, agence digitale Cholet, React Native Cholet, Django Cholet, développement sur mesure Cholet, applications iOS Cholet, applications Android Cholet, API REST Cholet, maintenance applicative Cholet',
    marketInsights: 'Cholet, berceau de notre expertise, représente un marché en pleine expansion numérique. 76% des entreprises choletaises recherchent des solutions digitales fiables et évolutives, avec une forte demande pour les applications de gestion commerciale, les plateformes de vente en ligne, et les outils de relation client.',
    technologies: 'Depuis notre siège choletais, nous développons avec React Native et Django en privilégiant la robustesse et la maintenabilité. Notre maîtrise des technologies modernes inclut Next.js, Tailwind CSS, et les solutions de déploiement automatisé, garantissant des applications performantes et évolutives.',
    achievements: 'Notre implantation choletaise nous a permis de réaliser plus de 35 projets d\'envergure nationale. Nous sommes fiers de notre approche artisanale du développement et de notre capacité à créer des solutions durables qui répondent aux besoins complexes de nos clients français.',
  },
  // Morocco
  'casablanca': {
    name: 'Casablanca',
    country: 'Maroc',
    region: 'Grand Casablanca',
    flagEmoji: '🇲🇦',
    coordinates: { lat: 33.5731, lng: -7.5898 },
    description: 'Al Firma est présente à Casablanca, cœur économique du Maroc. Nous accompagnons les entreprises marocaines et internationales dans leurs projets web et mobiles : applications métiers, plateformes e-commerce, API performantes et intégrations sur mesure.',
    keywords: 'développement mobile Casablanca, application web Casablanca, agence digitale Casablanca, React Native Casablanca, Django Casablanca, développement sur mesure Casablanca, applications iOS Casablanca, applications Android Casablanca, API REST Casablanca, maintenance applicative Casablanca',
    marketInsights: 'Le marché casablancais connaît une croissance exponentielle du mobile-first, avec 92% des startups adoptant cette approche. Les secteurs porteurs incluent la fintech, l\'e-commerce, et les services digitaux, avec une forte demande pour les solutions multilingues français-arabe.',
    technologies: 'Nous utilisons React Native pour les applications mobiles et Django pour les backends robustes. Notre stack technique inclut Python, JavaScript ES6+, MongoDB, PostgreSQL, et l\'intégration des solutions de paiement locales marocaines.',
    achievements: 'Notre équipe casablancaise a développé des solutions innovantes pour plus de 30 entreprises locales et internationales. Nous sommes fiers de contribuer à la transformation digitale du Maroc avec des applications performantes et adaptées au marché local.',
  },
  'rabat': {
    name: 'Rabat',
    country: 'Maroc',
    region: 'Rabat-Salé-Kénitra',
    flagEmoji: '🇲🇦',
    coordinates: { lat: 34.0209, lng: -6.8416 },
    description: 'À Rabat, notre équipe met en œuvre des solutions digitales modernes pour les entreprises et institutions. De la stratégie produit au développement technique, nous unissons nos expertises Django et React Native pour créer des applications fiables et élégantes.',
    keywords: 'développement mobile Rabat, application web Rabat, agence digitale Rabat, React Native Rabat, Django Rabat, développement sur mesure Rabat, applications iOS Rabat, applications Android Rabat, API REST Rabat, maintenance applicative Rabat',
    marketInsights: 'Rabat, capitale administrative du Maroc, concentre une forte demande pour les solutions digitales institutionnelles et gouvernementales. 89% des organisations rabataises privilégient les applications sécurisées et conformes, avec un intérêt marqué pour les plateformes de gestion administrative, les systèmes de téléservices, et les outils de communication institutionnelle.',
    technologies: 'Notre expertise rabataise s\'appuie sur React Native, Django, et les technologies de sécurité avancées. Nous maîtrisons l\'intégration des systèmes gouvernementaux, les protocoles de sécurité stricts, et les solutions multilingues français-arabe adaptées aux besoins institutionnels et administratifs.',
    achievements: 'Depuis Rabat, nous avons développé plus de 28 solutions digitales pour des institutions et entreprises locales. Notre expertise dans le domaine public et notre compréhension des enjeux administratifs marocains nous permettent de créer des applications parfaitement adaptées aux besoins institutionnels.',
  },
  'tanger': {
    name: 'Tanger',
    country: 'Maroc',
    region: 'Tanger-Tétouan-Al Hoceïma',
    flagEmoji: '🇲🇦',
    coordinates: { lat: 35.7595, lng: -5.8340 },
    description: 'Nos services sont aussi disponibles à Tanger, ville dynamique tournée vers l\'innovation. Nous développons des applications web et mobiles robustes pour des startups et PME souhaitant moderniser leurs outils numériques et améliorer leur efficacité opérationnelle.',
    keywords: 'développement mobile Tanger, application web Tanger, agence digitale Tanger, React Native Tanger, Django Tanger, développement sur mesure Tanger, applications iOS Tanger, applications Android Tanger, API REST Tanger, maintenance applicative Tanger',
    marketInsights: 'Tanger, porte d\'entrée de l\'Afrique, présente un écosystème unique axé sur l\'innovation et l\'export. 94% des entreprises tangéroises recherchent des solutions digitales performantes pour conquérir les marchés internationaux, avec une forte demande pour les applications de logistique, les plateformes de commerce international, et les outils de gestion portuaire.',
    technologies: 'Notre approche technique à Tanger privilégie React Native, Django, et les technologies de pointe pour l\'international. Nous excellons dans le développement d\'applications multilingues, l\'intégration des systèmes de douane, et la création de solutions adaptées aux flux commerciaux transfrontaliers et aux opérations logistiques complexes.',
    achievements: 'Notre présence tangéroise nous a permis de réaliser plus de 26 projets innovants pour des entreprises locales et internationales. Nous sommes reconnus pour notre expertise dans le développement d\'applications export et notre compréhension des enjeux du commerce international et de la logistique portuaire.',
  },
  'marrakech': {
    name: 'Marrakech',
    country: 'Maroc',
    region: 'Marrakech-Safi',
    flagEmoji: '🇲🇦',
    coordinates: { lat: 31.6295, lng: -7.9811 },
    description: 'Présente à Marrakech, Al Firma conçoit des expériences digitales sur mesure pour des entreprises locales et internationales. Nos projets allient design intuitif, performance technique et accompagnement personnalisé tout au long du cycle de développement.',
    keywords: 'développement mobile Marrakech, application web Marrakech, agence digitale Marrakech, React Native Marrakech, Django Marrakech, développement sur mesure Marrakech, applications iOS Marrakech, applications Android Marrakech, API REST Marrakech, maintenance applicative Marrakech',
    marketInsights: 'Marrakech, destination touristique majeure, génère une forte demande pour les solutions digitales du secteur hôtelier et touristique. 87% des entreprises marrakchies recherchent des applications innovantes pour améliorer l\'expérience client, avec un intérêt particulier pour les plateformes de réservation, les applications de géolocalisation touristique, et les outils de gestion hôtelière.',
    technologies: 'Notre expertise marrakchia combine React Native, Django, et les technologies de géolocalisation avancées. Nous maîtrisons le développement d\'applications touristiques, l\'intégration des systèmes de réservation, et la création d\'interfaces multilingues adaptées aux visiteurs internationaux et aux professionnels du tourisme.',
    achievements: 'Depuis Marrakech, nous avons développé plus de 24 solutions digitales pour des entreprises du secteur touristique et hôtelier. Notre expertise dans le domaine du tourisme et notre compréhension des enjeux de l\'hospitalité nous permettent de créer des applications qui enrichissent l\'expérience des visiteurs et optimisent la gestion des établissements.',
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
      <Home location={location} />
    </>
  );
}
