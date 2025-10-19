import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Al Firma - Agence développement d\'applications mobiles / web',
  description: 'Al Firma vous accompagne dans le développement de vos applications mobiles et web. Solutions personnalisées, design UX/UI, et déploiement. Applications mobiles iOS / Android sur mesure.',
  keywords: 'développement mobile, application web, React Native, Django, UX/UI design, agence développement, développement sur mesure, applications iOS, applications Android',
  openGraph: {
    title: 'Al Firma - Développement d\'applications mobiles et web',
    description: 'Votre partenaire de confiance pour le développement d\'applications mobiles et web sur mesure. De l\'idée à la mise en marché.',
    images: [
      {
        url: '/assets/logo.png',
        width: 1200,
        height: 630,
        alt: 'Al Firma - Agence de développement mobile et web',
      }
    ],
    type: 'website',
    url: 'https://alfirma.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al Firma - Développement d\'applications mobiles et web',
    description: 'Votre partenaire de confiance pour le développement d\'applications mobiles et web sur mesure.',
    images: ['/assets/logo.png'],
  },
  alternates: {
    canonical: 'https://alfirma.com'
  }
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
