export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Al Firma",
    "description": "Agence experte en développement d'application mobile et web, vous accompagne de l'idée à la mise en marché de votre projet. Solutions personnalisées, support technique et conseil stratégique.",
    "url": "https://www.alfirma.com",
    "logo": "https://www.alfirma.com/assets/logo.png",
    "image": "https://www.alfirma.com/assets/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "alfirma.contact@gmail.com",
      "contactType": "customer service",
      "availableLanguage": "French"
    },
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
        "description": "Développement et déploiement d'applications mobile cross-platform (iOS et Android) avec technologies de pointe",
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
      // Add social media URLs when available
    ]
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Al Firma",
    "url": "https://www.alfirma.com",
    "description": "Agence de développement d'applications mobiles et web",
    "publisher": {
      "@type": "Organization",
      "name": "Al Firma",
      "url": "https://www.alfirma.com"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.alfirma.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Duodoku",
    "description": "Le premier jeu de Sudoku multi-joueurs disponible sur mobile. Affrontez-vous en temps réel sur des grilles de Sudoku.",
    "url": "https://www.alfirma.com/duodoku",
    "image": "https://www.alfirma.com/assets/duodoku.png",
    "applicationCategory": "GameApplication",
    "operatingSystem": ["iOS", "Android"],
    "offers": [
      {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "ratingCount": "100"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Al Firma",
      "url": "https://www.alfirma.com"
    }
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
