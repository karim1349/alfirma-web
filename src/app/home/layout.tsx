import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Al Firma - Agence de développement d\'applications mobiles et web',
  description: 'Al Firma vous accompagne dans le développement de vos applications mobiles et web. Solutions personnalisées, design UX/UI, et déploiement.',
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
    url: 'https://www.alfirma.com/home',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al Firma - Développement d\'applications mobiles et web',
    description: 'Votre partenaire de confiance pour le développement d\'applications mobiles et web sur mesure.',
    images: ['/assets/logo.png'],
  },
  alternates: {
    canonical: 'https://www.alfirma.com/home'
  }
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
