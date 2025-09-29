import React from 'react';
import Link from 'next/link';
import ProjectNav from '../components/ProjectNav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Duodoku - Le premier Sudoku multi-joueurs',
    description: 'Duodoku révolutionne l\'expérience du Sudoku en proposant le premier jeu multi-joueurs disponible sur mobile. Affrontez-vous en temps réel sur des grilles de Sudoku.',
    openGraph: {
        title: 'Duodoku - Le premier Sudoku multi-joueurs',
        description: 'Duodoku révolutionne l\'expérience du Sudoku en proposant le premier jeu multi-joueurs disponible sur mobile. Affrontez-vous en temps réel sur des grilles de Sudoku.',
        images: [
            {
                url: '/assets/duodoku.png',
                width: 1200,
                height: 630,
                alt: 'Duodoku - Le premier Sudoku multi-joueurs',
            }
        ],
        type: 'website',
        url: 'https://www.alfirma.com/duodoku',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Duodoku - Le premier Sudoku multi-joueurs',
        description: 'Duodoku révolutionne l\'expérience du Sudoku en proposant le premier jeu multi-joueurs disponible sur mobile. Affrontez-vous en temps réel sur des grilles de Sudoku.',
        images: ['/assets/duodoku.png'],
    },
};

function DuodokuPage() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 pt-20">
            <ProjectNav />
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8">
                    <img 
                        src="/assets/duodoku.png" 
                        alt="Duodoku Logo" 
                        className="w-32 h-32 mx-auto mb-6 rounded-2xl shadow-2xl"
                    />
                    <h1 className="text-6xl font-bold text-white mb-4">DUODOKU</h1>
                    <p className="text-xl text-blue-200 mb-2">Le premier Sudoku multi-joueurs</p>
                    <p className="text-lg text-gray-300">Affrontez-vous en temps réel sur des grilles de Sudoku</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
                    <h2 className="text-3xl font-bold text-white mb-6">À propos de Duodoku</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        Duodoku révolutionne l'expérience du Sudoku en proposant le premier jeu multi-joueurs 
                        disponible sur mobile. Développée en React Native avec une API REST Django, 
                        l'application permet aux joueurs de s'affronter en temps réel sur des grilles de Sudoku.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        <div className="bg-white/5 rounded-xl p-4">
                            <h3 className="text-xl font-semibold text-white mb-3">🎯 Mode Solo</h3>
                            <p className="text-gray-300">
                                Jouez en solo et améliorez vos compétences sur des grilles de difficulté variable.
                            </p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4">
                            <h3 className="text-xl font-semibold text-white mb-3">🏆 Mode Multi-joueurs</h3>
                            <p className="text-gray-300">
                                Affrontez d'autres joueurs en temps réel et grimpez dans le classement.
                            </p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4">
                            <h3 className="text-xl font-semibold text-white mb-3">📱 Cross-Platform</h3>
                            <p className="text-gray-300">
                                Disponible sur iOS et Android avec une expérience utilisateur optimisée.
                            </p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4">
                            <h3 className="text-xl font-semibold text-white mb-3">🌍 International</h3>
                            <p className="text-gray-300">
                                Interface multilingue et communauté mondiale de joueurs.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Téléchargez l'application</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="https://apps.apple.com/ie/app/duodoku-sudoku-multi-joueurs/id6448099658"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-105 transition-transform duration-300"
                        >
                            <img 
                                src="/assets/button_appstore.png" 
                                alt="Télécharger sur l'App Store" 
                                className="h-16 w-auto"
                            />
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.duodoku.app&hl=fr_CH"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-105 transition-transform duration-300"
                        >
                            <img 
                                src="/assets/button_playstore.png" 
                                alt="Disponible sur Google Play" 
                                className="h-16 w-auto"
                            />
                        </a>
                    </div>
                </div>

                <div className="text-center">
                    <Link 
                        href="/duodoku/privacy"
                        className="text-blue-300 hover:text-blue-200 underline transition-colors duration-300"
                    >
                        Politique de confidentialité
                    </Link>
                    <span className="text-gray-400 mx-4">•</span>
                    <a 
                        href="mailto:alfirma.contact@gmail.com"
                        className="text-blue-300 hover:text-blue-200 underline transition-colors duration-300"
                    >
                        Nous contacter
                    </a>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-400 text-sm">
                        Développé par <span className="text-white font-semibold">Al Firma</span> - L'innovation façonne vos applications
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DuodokuPage;
