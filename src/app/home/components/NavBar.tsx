"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const NavBar = () => {
    const [currentSection, setCurrentSection] = useState<string | null>(null)
    const [isBlurred, setIsBlurred] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const sectionIds = ["SECTION_ACCUEIL", "SECTION_A_PROPOS", "SECTION_PROJETS", "SECTION_AVIS", "SECTION_CONTACT"];
    const router = useRouter();
    const pathname = usePathname();

    const scrollTo = (id: string) => {
        if (pathname === '/home' || pathname === '/') {
            document.getElementById(id)?.scrollIntoView({behavior: "smooth"})
            router.push(`?section=${id.toLowerCase()}`, { scroll: false });
        } else {
            router.push(`/home?section=${id.toLowerCase()}`);
        }
    }

    useEffect(() => {
        setIsMounted(true);
        
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                const hash = window.location.hash
                const queryString = hash.split('?')[1]
                
                if (queryString) {
                    const urlParams = new URLSearchParams(queryString)
                    const sectionParam = urlParams.get('section')
                    const projectParam = urlParams.get('project')
                    
                    if (sectionParam) {
                        const sectionId = sectionParam
                            .split('_')
                            .map(word => word.toUpperCase())
                            .join('_')
                        
                        if (sectionIds.includes(sectionId)) {
                            const element = document.getElementById(sectionId)
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" })
                                setCurrentSection(sectionId)
                            }
                        }
                    }
                    
                    if (projectParam) {
                        const projectId = projectParam.toUpperCase()
                        const element = document.getElementById(`PROJECT_${projectId}`)
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth" })
                            setCurrentSection('SECTION_PROJETS')
                        }
                    }
                }
            }, 500)
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
    }, [sectionIds, isMounted])
    
    useEffect(() => {
        if (!isMounted || typeof window === 'undefined') return;
        
        let timeoutId: NodeJS.Timeout | null = null;
    
        const handleScroll = () => {
            clearTimeout(timeoutId as any);
            setIsBlurred(false);
            timeoutId = setTimeout(() => {
                setIsBlurred(true);
            }, 2000);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId as any);
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
            <button className={`group flex-1 rounded-full py-2 flex justify-center cursor-pointer hover:bg-purple-350 items-center ${currentSection === 'SECTION_ACCUEIL'  ? ' bg-white ' : ' '}`}><p className={`text-xs md:text-md font-medium ${currentSection === 'SECTION_ACCUEIL'  ? ' text-black ' : ' text-gray-600  '} group-hover:text-black`} onClick={() => scrollTo("SECTION_ACCUEIL")}>Accueil </p></button>
            <button className={`group flex-1 rounded-full py-2 flex justify-center cursor-pointer hover:bg-purple-350 items-center ${currentSection === 'SECTION_A_PROPOS'  ? ' bg-white ' : ' '}`}><p className={`text-xs md:text-md font-medium ${currentSection === 'SECTION_A_PROPOS'  ? ' text-black ' : 'text-gray-600  '} group-hover:text-black`} onClick={() => scrollTo("SECTION_A_PROPOS")}>Services</p></button>
            <button className={`group flex-1 rounded-full py-2 flex justify-center cursor-pointer hover:bg-purple-350 items-center ${currentSection === 'SECTION_PROJETS' ? ' bg-white ' : ' '}`}><p className={`text-xs md:text-md  font-medium ${currentSection === 'SECTION_PROJETS' ? ' text-black ' : 'text-gray-600  '} group-hover:text-black`} onClick={() => scrollTo("SECTION_PROJETS")}>Projets</p></button>
                <button className={`group flex-1 rounded-full py-2 flex justify-center cursor-pointer hover:bg-purple-350 items-center ${currentSection === 'SECTION_AVIS' ? ' bg-white ' : ' '}`}><p className={`text-xs md:text-md  font-medium ${currentSection === 'SECTION_AVIS' ? ' text-black ' : 'text-gray-600  '} group-hover:text-black`} onClick={() => scrollTo("SECTION_AVIS")}>Avis</p></button>
                <button className={`group flex-1 rounded-full py-2 flex justify-center cursor-pointer hover:bg-purple-350 items-center ${currentSection === 'SECTION_CONTACT'  ? ' bg-white ' : ' '}`}><p className={`text-xs md:text-md  font-medium ${currentSection === 'SECTION_CONTACT'  ? ' text-black ' : 'text-gray-600  '} group-hover:text-black`} onClick={() => scrollTo("SECTION_CONTACT")}>Contact </p></button>
                <Link href="/blog/" className="group flex-1 rounded-full py-2 flex justify-center cursor-pointer hover:bg-purple-350 items-center"><span className="text-xs md:text-md font-medium text-gray-600 group-hover:text-black">Blog</span></Link>
        </div>
        </>
    )
}

export default NavBar
