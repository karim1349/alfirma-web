"use client"

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ProjectNav from '@/app/components/ProjectNav';

function GameInvitationContent() {
    const [isRedirecting, setIsRedirecting] = useState(true);
    const [appInstalled, setAppInstalled] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const gameId = searchParams.get('id') || '1';
        
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (!isMobile) {
            router.push('/duodoku');
            return;
        }

        const attemptDeepLink = () => {
            const deepLink = `duodoku:///game/${gameId}`;
            window.location.href = deepLink;
            
            
            setTimeout(() => {
                setAppInstalled(false);
                setIsRedirecting(false);
            }, 2000);
        };

        attemptDeepLink();
    }, [searchParams, router]);


    if (isRedirecting) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center pt-20">
                <ProjectNav />
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-white text-lg">Ouverture de Duodoku...</p>
                </div>
            </div>
        );
    }

    if (appInstalled) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center pt-20">
                <ProjectNav />
                <div className="text-center">
                    <div className="text-green-400 text-6xl mb-4">✓</div>
                    <p className="text-white text-lg">Duodoku s'ouvre...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 pt-20">
            <ProjectNav />
            <div className="max-w-md mx-auto text-center">
                <img 
                    src="/assets/duodoku.png" 
                    alt="Duodoku Logo" 
                    className="w-24 h-24 mx-auto mb-6 rounded-xl"
                />
                <h1 className="text-3xl font-bold text-white mb-4">Duodoku</h1>
                <p className="text-blue-200 mb-6">
                    Vous avez été invité à rejoindre une partie !
                </p>
                <p className="text-gray-300 mb-8">
                    Téléchargez l'application pour rejoindre la partie #{searchParams.get('id') || '1'}
                </p>
                
                <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://apps.apple.com/ie/app/duodoku-sudoku-multi-joueurs/id6448099658"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                        >
                            App Store
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.duodoku.app&hl=fr_CH"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                        >
                            Google Play
                        </a>
                    </div>
                    
                    <button
                        onClick={() => router.push('/duodoku')}
                        className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-full transition-all duration-300"
                    >
                        En savoir plus sur Duodoku
                    </button>
                </div>
            </div>
        </div>
    );
}

function GameInvitationPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center pt-20">
                <ProjectNav />
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-white text-lg">Chargement...</p>
                </div>
            </div>
        }>
            <GameInvitationContent />
        </Suspense>
    );
}

export default GameInvitationPage;
