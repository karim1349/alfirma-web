export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://alfirma.com/#organization",
    "name": "Al Firma",
    "description": "Agence experte en développement d'applications mobiles et web. Solutions personnalisées, support technique et conseil stratégique.",
    "url": "https://alfirma.com/",
    "logo": { "@type": "ImageObject", "url": "https://alfirma.com/assets/logo.png" },
    "image": { "@type": "ImageObject", "url": "https://alfirma.com/assets/logo.png" },
    "contactPoint": [{
      "@type": "ContactPoint",
      "email": "contact@alfirma.com",
      "contactType": "customer service",
      "availableLanguage": ["fr","en", "ar"],
      "telephone": "+33-7-86-24-39-48" 
    }],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR"
    },
    "foundingDate": "2023",
    "knowsAbout": [
      "Développement d'applications mobiles",
      "Développement d'applications web",
      "React Native",
      "Django",
      "UX/UI Design",
      "Déploiement d'applications"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Développement d'applications mobiles",
        "description": "Développement et déploiement d'applications iOS/Android cross-platform",
        "price": "8900",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer", 
        "name": "Développement d'applications web",
        "description": "Création d'applications web full-stack avec React.js et Django",
        "price": "6900",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "APIs RESTful",
        "description": "Développement d'APIs RESTful pour applications web et mobiles",
        "price": "4900", 
        "priceCurrency": "EUR"
      }
    ],
    "sameAs": [
      "https://facebook.com/alfirmaagency",
      "https://instagram.com/alfirmaagency", 
      "https://linkedin.com/company/al-firma",
      "https://x.com/alfirmaagency"
    ]
  }
  
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}


export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://alfirma.com/#website",
    "name": "Al Firma",
    "url": "https://alfirma.com/",
    "description": "Agence de développement d'applications mobiles et web",
    "publisher": {
      "@type": "Organization",
      "@id": "https://alfirma.com/#organization"
    }
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}


export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://alfirma.com/duodoku/#app",
    "name": "Duodoku",
    "description": "Jeu de Sudoku multi-joueurs sur mobile. Affrontez-vous en temps réel sur des grilles de Sudoku.",
    "url": "https://alfirma.com/duodoku/",
    "image": "https://alfirma.com/assets/duodoku.png",
    "applicationCategory": "GameApplication",
    "operatingSystem": ["iOS","Android"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://alfirma.com/#organization"
    }
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quels sont vos délais de livraison ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nos délais de livraison varient selon le type de projet : Applications mobiles à partir de 20 jours, Applications web à partir de 15 jours, et APIs à partir de 10 jours."
        }
      },
      {
        "@type": "Question",
        "name": "Proposez-vous la maintenance après livraison ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, nous proposons des services de maintenance pour tous les produits que nous développons, avec 30 jours de garantie pour signaler un problème ou une modification."
        }
      },
      {
        "@type": "Question",
        "name": "Travaillez-vous avec des clients internationaux ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolument ! Nous travaillons avec des clients du monde entier. Notre équipe est spécialisée dans le développement d'applications multilingues et nous adaptons nos solutions à vos besoins locaux."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles technologies utilisez-vous ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous utilisons React Native pour les applications mobiles, React.js et Django pour les applications web, et Python/Django pour les APIs. Nous maîtrisons également les technologies de design UX/UI avec Figma."
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQPageSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  if (!faqs || faqs.length === 0) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://alfirma.com/#service",
    "name": "Développement d'applications mobiles et web",
    "description": "Services complets de développement d'applications mobiles et web, du design UX/UI au déploiement et à la maintenance.",
    "provider": {
      "@type": "Organization",
      "@id": "https://alfirma.com/#organization"
    },
    "serviceType": "Développement logiciel",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de développement",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Applications Mobiles",
            "description": "Développement d'applications iOS et Android avec React Native"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Applications Web",
            "description": "Développement d'applications web avec React.js et Django"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UX/UI Design",
            "description": "Design d'interface utilisateur et expérience utilisateur"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "APIs et Backend",
            "description": "Développement d'APIs RESTful et micro-services"
          }
        }
      ]
    }
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}


export function LocalBusinessSchema({
  name, 
  city, 
  country, 
  region, 
  coordinates 
}: { 
  name: string; 
  city: string; 
  country: string; 
  region: string; 
  coordinates: { lat: number; lng: number }; 
}) {
  const citySlug = city.toLowerCase();
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://alfirma.com/${citySlug}/#localbusiness`,
    "name": name,
    "description": `Al Firma - Agence de développement d'applications mobiles et web à ${city}, ${country}. Services React Native, Django, UX/UI Design.`,
    "url": `https://alfirma.com/${citySlug}/`,
    "telephone": "+33-7-86-24-39-48",
    "email": "contact@alfirma.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": region,
      "addressCountry": country === 'Maroc' ? 'MA' : 'FR'
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coordinates.lat,
      "longitude": coordinates.lng
    },
    "areaServed": {
      "@type": "City",
      "name": city,
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": coordinates.lat,
        "longitude": coordinates.lng
      },
      "geoRadius": 50000
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de développement",
      "itemListElement": [
        { "@type":"Offer", "itemOffered": { "@type":"Service", "name":"Applications Mobiles", "description": `Développement d'apps iOS/Android avec React Native à ${city}` } },
        { "@type":"Offer", "itemOffered": { "@type":"Service", "name":"Applications Web", "description": `Développement d'applications web avec React.js et Django à ${city}` } },
        { "@type":"Offer", "itemOffered": { "@type":"Service", "name":"UX/UI Design", "description": `Design d'interface et expérience utilisateur à ${city}` } }
      ]
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "€€€",
    "currenciesAccepted": country === "Maroc" ? "MAD, EUR" : "EUR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "foundingDate": "2023",
    "founder": { "@type": "Person", "name": "Karim Benchekroun" },
    "knowsAbout": ["Développement d'applications mobiles","Développement d'applications web","React Native","Django","UX/UI Design","Déploiement d'applications"],
    "sameAs": [
      "https://alfirma.com/",
      "https://facebook.com/alfirmaagency",
      "https://instagram.com/alfirmaagency",
      "https://linkedin.com/company/al-firma",
      "https://x.com/alfirmaagency"
    ]
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
