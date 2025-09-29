import React from 'react';
import Home from '../home/page';
import { LocalBusinessSchema } from '../components/StructuredData';
import type { Metadata } from 'next';

// Location data - centralized and easy to maintain
const locations = {
  // France
  'paris': {
    name: 'Paris',
    country: 'France',
    region: 'Île-de-France',
    flagEmoji: '🇫🇷',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    keywords: 'développement mobile Paris, application web Paris, agence digitale Paris, React Native Paris, Django Paris, développement sur mesure Paris, applications iOS Paris, applications Android Paris, API REST Paris, maintenance applicative Paris'
  },
  'nantes': {
    name: 'Nantes',
    country: 'France', 
    region: 'Pays de la Loire',
    flagEmoji: '🇫🇷',
    coordinates: { lat: 47.2184, lng: -1.5536 },
    keywords: 'développement mobile Nantes, application web Nantes, agence digitale Nantes, React Native Nantes, Django Nantes, développement sur mesure Nantes, applications iOS Nantes, applications Android Nantes, API REST Nantes, maintenance applicative Nantes'
  },
  'angers': {
    name: 'Angers',
    country: 'France',
    region: 'Pays de la Loire', 
    flagEmoji: '🇫🇷',
    coordinates: { lat: 47.4784, lng: -0.5632 },
    keywords: 'développement mobile Angers, application web Angers, agence digitale Angers, React Native Angers, Django Angers, développement sur mesure Angers, applications iOS Angers, applications Android Angers, API REST Angers, maintenance applicative Angers'
  },
  'cholet': {
    name: 'Cholet',
    country: 'France',
    region: 'Pays de la Loire',
    flagEmoji: '🇫🇷',
    coordinates: { lat: 47.0619, lng: -0.8795 },
    keywords: 'développement mobile Cholet, application web Cholet, agence digitale Cholet, React Native Cholet, Django Cholet, développement sur mesure Cholet, applications iOS Cholet, applications Android Cholet, API REST Cholet, maintenance applicative Cholet'
  },
  // Morocco
  'casablanca': {
    name: 'Casablanca',
    country: 'Maroc',
    region: 'Grand Casablanca',
    flagEmoji: '🇲🇦',
    coordinates: { lat: 33.5731, lng: -7.5898 },
    keywords: 'développement mobile Casablanca, application web Casablanca, agence digitale Casablanca, React Native Casablanca, Django Casablanca, développement sur mesure Casablanca, applications iOS Casablanca, applications Android Casablanca, API REST Casablanca, maintenance applicative Casablanca'
  },
  'rabat': {
    name: 'Rabat',
    country: 'Maroc',
    region: 'Rabat-Salé-Kénitra',
    flagEmoji: '🇲🇦',
    coordinates: { lat: 34.0209, lng: -6.8416 },
    keywords: 'développement mobile Rabat, application web Rabat, agence digitale Rabat, React Native Rabat, Django Rabat, développement sur mesure Rabat, applications iOS Rabat, applications Android Rabat, API REST Rabat, maintenance applicative Rabat'
  },
  'tanger': {
    name: 'Tanger',
    country: 'Maroc',
    region: 'Tanger-Tétouan-Al Hoceïma',
    flagEmoji: '🇲🇦',
    coordinates: { lat: 35.7595, lng: -5.8340 },
    keywords: 'développement mobile Tanger, application web Tanger, agence digitale Tanger, React Native Tanger, Django Tanger, développement sur mesure Tanger, applications iOS Tanger, applications Android Tanger, API REST Tanger, maintenance applicative Tanger'
  },
  'marrakech': {
    name: 'Marrakech',
    country: 'Maroc',
    region: 'Marrakech-Safi',
    flagEmoji: '🇲🇦',
    coordinates: { lat: 31.6295, lng: -7.9811 },
    keywords: 'développement mobile Marrakech, application web Marrakech, agence digitale Marrakech, React Native Marrakech, Django Marrakech, développement sur mesure Marrakech, applications iOS Marrakech, applications Android Marrakech, API REST Marrakech, maintenance applicative Marrakech'
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
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const city = resolvedParams.city;
  const location = locations[city as keyof typeof locations];

  if (!location) {
    return {
      title: 'Page non trouvée',
      description: 'La page demandée n\'existe pas.',
    };
  }

  return {
    title: `Al Firma - Applications Mobiles & Web à ${location.name}`,
    description: `Al Firma, agence experte en développement d'applications mobiles et web à ${location.name}. React Native, Django, UX/UI Design. Applications iOS, Android sur mesure.`,
    keywords: location.keywords,
    openGraph: {
      title: `Al Firma - Applications Mobiles & Web à ${location.name}`,
      description: `Al Firma, agence experte en développement d'applications mobiles et web à ${location.name}. React Native, Django, UX/UI Design. Applications iOS, Android sur mesure.`,
      images: [
        {
          url: '/assets/logo.png',
          width: 1200,
          height: 630,
          alt: `Al Firma - Agence de développement mobile et web à ${location.name}`,
        }
      ],
      type: 'website',
      url: `https://www.alfirma.com/${city}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `Al Firma - Applications Mobiles & Web à ${location.name}`,
      description: `Al Firma, agence experte en développement d'applications mobiles et web à ${location.name}. React Native, Django, UX/UI Design. Applications iOS, Android sur mesure.`,
      images: ['/assets/logo.png'],
    },
    alternates: {
      canonical: `https://www.alfirma.com/${city}`
    }
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = await params;
  const city = resolvedParams.city;
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
      <LocalBusinessSchema 
        name={`Al Firma - ${location.name}`}
        city={location.name}
        country={location.country}
        region={location.region}
        coordinates={location.coordinates}
      />
      <Home location={location} />
    </>
  );
}
