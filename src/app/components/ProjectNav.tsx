"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ProjectNav = () => {
    const router = useRouter();

    return (
        <div className="fixed top-4 left-4 z-50">
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => router.back()}
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Retour</span>
                </button>
                
                <Link
                    href="/"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2"
                >
                    <img src="/assets/logoWithoutBackground.webp" alt="Al Firma" className="w-6 h-6 object-contain" />
                    <span>Al Firma</span>
                </Link>
            </div>
        </div>
    );
};

export default ProjectNav;
