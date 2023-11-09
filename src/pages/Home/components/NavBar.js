import { useEffect, useState } from "react"

const NavBar = () => {
    const [currentSection, setCurrentSection] = useState(null)
    const sectionIds = ["SECTION_ACCUEIL", "SECTION_A_PROPOS", "SECTION_PROJETS", "SECTION_CONTACT"];
    const [isBlurred, setIsBlurred] = useState(false)
    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({behavior: "smooth"})
    }

    useEffect(() => {
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
    }, [sectionIds])
    
    useEffect(() => {
        let timeoutId = null;
    
        const handleScroll = () => {
            // Clear any timeouts already set
            clearTimeout(timeoutId);
            
            // Immediately set blurred to false on scroll
            setIsBlurred(false);
    
            // Wait for 2 seconds of inactivity before setting blurred to true
            timeoutId = setTimeout(() => {
                setIsBlurred(true);
            }, 2000);
        };
    
        // Attach the event listener
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
    
            // Clear the timeout when the component unmounts
            clearTimeout(timeoutId);
        };
    }, []);
    
    return (
        <>
        <div className={`flex z-50 bg-purple-750 p-2.5 rounded-full w-4/5 max-w-sm fixed top-14 transition-opacity duration-500 ease-in-out ${isBlurred ? 'opacity-25' : ''}`}>
            <button className={`flex-1 rounded-full py-2 flex justify-center ${currentSection === 'SECTION_ACCUEIL'  ? ' bg-white ' : ' '}`}><p className={`text-xs md:text-md text-gray-300 font-medium ${currentSection === 'SECTION_ACCUEIL'  ? ' text-purple-950 ' : ' '}`} onClick={() => scrollTo("SECTION_ACCUEIL")}>Accueil </p></button>
            <button className={`flex-1 rounded-full py-2 flex justify-center ${currentSection === 'SECTION_A_PROPOS'  ? ' bg-white ' : ' '}`}><p className={`text-xs md:text-md text-gray-300 font-medium ${currentSection === 'SECTION_A_PROPOS'  ? ' text-purple-950 ' : ' '}`} onClick={() => scrollTo("SECTION_A_PROPOS")}>À propos</p></button>
            <button className={`flex-1 rounded-full py-2 flex justify-center ${currentSection === 'SECTION_PROJETS' ? ' bg-white ' : ' '}`}><p className={`text-xs md:text-md text-gray-300 font-medium ${currentSection === 'SECTION_PROJETS' ? ' text-purple-950 ' : ' '}`} onClick={() => scrollTo("SECTION_PROJETS")}>Projets </p></button>
            <button className={`flex-1 rounded-full py-2 flex justify-center ${currentSection === 'SECTION_CONTACT'  ? ' bg-white ' : ' '}`}><p className={`text-xs md:text-md text-gray-300 font-medium ${currentSection === 'SECTION_CONTACT'  ? ' text-purple-950 ' : ' '}`} onClick={() => scrollTo("SECTION_CONTACT")}>Contact </p></button>
        </div>
        </>
    )
}

export default NavBar