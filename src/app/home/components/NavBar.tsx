"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const sectionIds = ["SECTION_ACCUEIL", "SECTION_A_PROPOS", "SECTION_PROJETS", "SECTION_AVIS", "SECTION_CONTACT"];

const NavBar = () => {
    const [currentSection, setCurrentSection] = useState<string | null>(null)
    const [isBlurred, setIsBlurred] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const scrollTo = (id: string) => {
        if (pathname === '/') {
            document.getElementById(id)?.scrollIntoView({behavior: "smooth"})
            router.push(`/#${id}`, { scroll: false });
        } else {
            router.push(`/#${id}`);
        }
    }

    useEffect(() => {
        setIsMounted(true);
        
        if (typeof window !== 'undefined') {
            const timeoutId = window.setTimeout(() => {
                const targetId = decodeURIComponent(window.location.hash.slice(1)).toUpperCase()
                const element = document.getElementById(targetId)

                if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                    setCurrentSection(targetId.startsWith('PROJECT_') ? 'SECTION_PROJETS' : targetId)
                }
            }, 500)

            return () => window.clearTimeout(timeoutId)
        }
    }, [])

    useEffect(() => {
        if (!isMounted || typeof window === 'undefined') return;
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrentSection(entry.target.id)
                    }
                })
        }, { threshold: 0.7 });

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });
        return () => {
            sectionIds.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [isMounted])
    
    useEffect(() => {
        if (!isMounted || typeof window === 'undefined') return;
        
        let timeoutId: number | undefined;
    
        const handleScroll = () => {
            window.clearTimeout(timeoutId);
            setIsBlurred(false);
            timeoutId = window.setTimeout(() => {
                setIsBlurred(true);
            }, 2000);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.clearTimeout(timeoutId);
        };
    }, [isMounted]);
    
    if (!isMounted) {
        return (
            <div className="flex z-50 bg-gray-50 p-2.5 rounded-full w-11/12 max-w-lg fixed top-14 transition-all duration-500 ease-in-out">
                <button className="group flex-1 rounded-full py-2 flex justify-center cursor-pointer hover:bg-purple-350 items-center"><p className="text-xs md:text-md font-medium text-gray-600 group-hover:text-black">Accueil </p></button>
                <button className="group flex-1 rounded-full py-2 flex justify-center cursor-pointer hover:bg-purple-350 items-center"><p className="text-xs md:text-md font-medium text-gray-600 group-hover:text-black">Services</p></button>
                <button className="group flex-1 rounded-full py-2 flex justify-center cursor-pointer hover:bg-purple-350 items-center"><p className="text-xs md:text-md font-medium text-gray-600 group-hover:text-black">Projets</p></button>
                <button className="group flex-1 rounded-full py-2 flex justify-center cursor-pointer hover:bg-purple-350 items-center"><p className="text-xs md:text-md font-medium text-gray-600 group-hover:text-black">Avis</p></button>
                <button className="group flex-1 rounded-full py-2 flex justify-center cursor-pointer hover:bg-purple-350 items-center"><p className="text-xs md:text-md font-medium text-gray-600 group-hover:text-black">Contact </p></button>
                <Link href="/blog/" className="group flex-1 rounded-full py-2 flex justify-center cursor-pointer hover:bg-purple-350 items-center"><span className="text-xs md:text-md font-medium text-gray-600 group-hover:text-black">Blog</span></Link>
            </div>
        );
    }

    return (
        <>
        <div className={`flex z-50 bg-gray-50 p-2.5 rounded-full w-11/12 max-w-lg fixed top-14 transition-all duration-500 ease-in-out ${isBlurred ? 'bg-opacity-50' : ''}`}>
            <button
              type="button"
              onClick={() => scrollTo("SECTION_ACCUEIL")}
              aria-current={currentSection === "SECTION_ACCUEIL" ? "location" : undefined}
              className={`group flex-1 rounded-full py-2 flex justify-center cursor-pointer hover:bg-purple-350 items-center ${currentSection === 'SECTION_ACCUEIL'  ? ' bg-white ' : ' '}`}
            >
              <span className={`text-xs md:text-md font-medium ${currentSection === 'SECTION_ACCUEIL'  ? ' text-black ' : ' text-gray-600  '} group-hover:text-black`}>Accueil</span>
            </button>
            <button
              type="button"
              onClick={() => scrollTo("SECTION_A_PROPOS")}
              aria-current={currentSection === "SECTION_A_PROPOS" ? "location" : undefined}
              className={`group flex-1 rounded-full py-2 flex justify-center cursor-pointer hover:bg-purple-350 items-center ${currentSection === 'SECTION_A_PROPOS'  ? ' bg-white ' : ' '}`}
            >
              <span className={`text-xs md:text-md font-medium ${currentSection === 'SECTION_A_PROPOS'  ? ' text-black ' : 'text-gray-600  '} group-hover:text-black`}>Services</span>
            </button>
            <button
              type="button"
              onClick={() => scrollTo("SECTION_PROJETS")}
              aria-current={currentSection === "SECTION_PROJETS" ? "location" : undefined}
              className={`group flex-1 rounded-full py-2 flex justify-center cursor-pointer hover:bg-purple-350 items-center ${currentSection === 'SECTION_PROJETS' ? ' bg-white ' : ' '}`}
            >
              <span className={`text-xs md:text-md font-medium ${currentSection === 'SECTION_PROJETS' ? ' text-black ' : 'text-gray-600  '} group-hover:text-black`}>Projets</span>
            </button>
            <button
              type="button"
              onClick={() => scrollTo("SECTION_AVIS")}
              aria-current={currentSection === "SECTION_AVIS" ? "location" : undefined}
              className={`group flex-1 rounded-full py-2 flex justify-center cursor-pointer hover:bg-purple-350 items-center ${currentSection === 'SECTION_AVIS' ? ' bg-white ' : ' '}`}
            >
              <span className={`text-xs md:text-md font-medium ${currentSection === 'SECTION_AVIS' ? ' text-black ' : 'text-gray-600  '} group-hover:text-black`}>Avis</span>
            </button>
            <button
              type="button"
              onClick={() => scrollTo("SECTION_CONTACT")}
              aria-current={currentSection === "SECTION_CONTACT" ? "location" : undefined}
              className={`group flex-1 rounded-full py-2 flex justify-center cursor-pointer hover:bg-purple-350 items-center ${currentSection === 'SECTION_CONTACT'  ? ' bg-white ' : ' '}`}
            >
              <span className={`text-xs md:text-md font-medium ${currentSection === 'SECTION_CONTACT'  ? ' text-black ' : 'text-gray-600  '} group-hover:text-black`}>Contact</span>
            </button>
                <Link href="/blog/" className="group flex-1 rounded-full py-2 flex justify-center cursor-pointer hover:bg-purple-350 items-center"><span className="text-xs md:text-md font-medium text-gray-600 group-hover:text-black">Blog</span></Link>
        </div>
        </>
    )
}

export default NavBar
