import type { Metadata } from 'next';

const description = `Vous avez été invité à rejoindre une partie de Sudoku multi-joueurs sur Duodoku ! Téléchargez l'application et affrontez d'autres joueurs en temps réel.`;

export const metadata: Metadata = {
    title: 'Rejoignez la partie - Duodoku',
    description,
    openGraph: {
        title: 'Rejoignez la partie - Duodoku',
        description,
        images: [
            {
                url: '/assets/duodoku.png',
                width: 1200,
                height: 630,
                alt: 'Duodoku - Partie Duo',
            }
        ],
        type: 'website',
        url: 'https://alfirma.com/duodoku/game/',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rejoignez la partie - Duodoku',
        description,
        images: ['/assets/duodoku.png'],
    },
    other: {
        'og:image:width': '1200',
        'og:image:height': '630',
        'apple-itunes-app': 'app-id=6448099658'
    },
    alternates: {
        canonical: 'https://alfirma.com/duodoku/game/'
    },
    robots: {
        index: false,
        follow: true,
    }
};

export default function GameLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
