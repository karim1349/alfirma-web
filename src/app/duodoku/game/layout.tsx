import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const gameId = resolvedParams.id;
    
    return {
        title: `Rejoignez la partie #${gameId} - Duodoku`,
        description: `Vous avez été invité à rejoindre une partie de Sudoku multi-joueurs sur Duodoku ! Téléchargez l'application et affrontez d'autres joueurs en temps réel.`,
        openGraph: {
            title: `Rejoignez la partie #${gameId} - Duodoku`,
            description: `Vous avez été invité à rejoindre une partie de Sudoku multi-joueurs sur Duodoku ! Téléchargez l'application et affrontez d'autres joueurs en temps réel.`,
            images: [
                {
                    url: '/assets/duodoku.png',
                    width: 1200,
                    height: 630,
                    alt: `Duodoku - Partie #${gameId}`,
                }
            ],
            type: 'website',
            url: `https://www.alfirma.com/duodoku/game/${gameId}`,
        },
        twitter: {
            card: 'summary_large_image',
            title: `Rejoignez la partie #${gameId} - Duodoku`,
            description: `Vous avez été invité à rejoindre une partie de Sudoku multi-joueurs sur Duodoku ! Téléchargez l'application et affrontez d'autres joueurs en temps réel.`,
            images: ['/assets/duodoku.png'],
        },
        other: {
            'og:image:width': '1200',
            'og:image:height': '630',
        },
        alternates: {
            canonical: `https://www.alfirma.com/duodoku/game/${gameId}`
        }
    };
}

export default function GameLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
