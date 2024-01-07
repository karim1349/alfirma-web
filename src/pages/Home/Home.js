import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import ContactForm from './components/ContactForm';
import { Fade, Slide } from "react-awesome-reveal";
import { Carousel } from 'flowbite-react';
import Projet from './components/Projet';
import projets from '../../content/projets.json'
import partners from '../../content/partners.json'
import Partner from './components/Partner';
import Loading from './components/Loading';
import Lottie from 'lottie-react';
import earth from '../../content/earth.json'

function Home() {
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }
    , [])
    return (
    //loading ? <Loading /> : 
        <div className='flex items-center bg-white justify-center'>
            <div className='flex-1 flex flex-col items-center justify-center self-center overflow-hidden'>
                <NavBar />
                <div className='flex justify-center items-center flex-col-reverse md:flex-row w-full' id="SECTION_ACCUEIL" style={{backgroundImage: "url('/assets/illustrations/background.png')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
                    <div className='px-4 md:mx-12 md:px-0 flex flex-col items-center '>
                        <img src="/assets/logoWithoutBackground.png" alt="logo" className="w-1/2 md:w-1/5 hover:transform hover:rotate-[57deg] transition-all duration-200 my-20 " />
                        <h1 className='text-4xl md:text-8xl text-white text-justify self-center'>AL FIRMA</h1>
                        <p className='text-white my-4 text-6xl text-justify'>
                            L'innovation façonne vos applications
                        </p>
                        <button className='group w-64 py-4 border border-white rounded-full hover:bg-white cursor-pointer transition'>
                            <span className='block group-hover:hidden'>On discute ?</span>
                            <span className='hidden group-hover:block text-blue-500'>Réserver un appel</span>
                        </button>
                        
                    </div>
                </div>
                <div className='max-w-7xl flex flex-col items-center justify-center self-center overflow-hidden'>
                    <div className='flex items-center justify-center self-center overflow-hidden'>
                        <div className='flex pr-20 py-12 border-r '>
                            <div className='w-4 h-4 rounded-full bg-blue-50 mr-7 mt-2'/>
                            <div className='flex-1 flex flex-col'>
                                <h1 className='text-2xl font-medium'>Discussion du projet</h1>
                                <p className='font-thin mt-4'>Partagez vos idées et objectifs. Nous créons une feuille de route pour le développement de votre application.</p>

                                <h1 className='text-7xl self-end text-gray-200 font-semibold -mr-16'>01.</h1>
                            </div>
                        </div>
                        <div className='flex px-20 py-12 border-r '>
                            <div className='w-4 h-4 rounded-full bg-blue-50 mr-7 mt-2'/>
                            <div className='flex-1 flex flex-col'>
                                <h1 className='text-2xl font-medium'>Création sur Mesure</h1>
                                <p className='font-thin mt-4'>On transforme vos idées en réalité avec un design intuitif et des fonctionnalités innovantes, en vous impliquant à chaque étape.</p>

                                <h1 className='text-7xl self-end text-gray-200 font-semibold -mr-16'>02.</h1>
                            </div>
                        </div>
                        <div className='flex pl-20 py-12 '>
                            <div className='w-4 h-4 rounded-full bg-blue-50 mr-7 mt-2'/>
                            <div className='flex-1 flex flex-col'>
                                <h1 className='text-2xl font-medium'>Déploiement</h1>
                                <p className='font-thin mt-4'>Après approbation, votre application prend son envol en ligne. Nous restons à vos côtés pour assurer son succès continu.</p>

                                <h1 className='text-7xl self-end text-gray-200 font-semibold'>03.</h1>
                            </div>
                        </div>
                    </div>
                    <h1 className='text-center mb-6 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400'>L'ART DE LA SPÉCIALITÉ</h1>
                    <p>Nous allions créativité et expertise technique pour concrétiser vos idées.</p>
                    <div className='flex w-full my-28'>
                        <div className='shadow-[0px_2.421px_30.264px_0px_rgba(189,227,251,0.26)] flex flex-col items-center flex-1 bg-white mx-4 rounded-3xl p-9'>
                            <img src="/assets/illustrations/appmobile.png" alt="logo" className=" h-36" />
                            <h1 className='font-semibold'>Apps Mobile</h1>
                            <p className='text-xs text-center mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum mauris non pellentesque accumsan. Nec pellentesque eget.</p>
                        </div>
                        <div className='shadow-[0px_2.421px_30.264px_0px_rgba(189,227,251,0.26)] flex flex-col items-center flex-1 bg-white mx-4 rounded-3xl p-9'>
                            <img src="/assets/illustrations/appweb.png" alt="logo" className=" h-36" />
                            <h1 className='font-semibold'>Apps Web</h1>
                            <p className='text-xs text-center mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum mauris non pellentesque accumsan. Nec pellentesque eget.</p>
                        </div>
                        <div className='shadow-[0px_2.421px_30.264px_0px_rgba(189,227,251,0.26)] flex flex-col items-center flex-1 bg-white mx-4 rounded-3xl p-9'>
                            <img src="/assets/illustrations/uiuxdesign.png" alt="logo" className=" h-36" />
                            <h1 className='font-semibold'>UX/UI Design</h1>
                            <p className='text-xs text-center mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum mauris non pellentesque accumsan. Nec pellentesque eget.</p>
                        </div>
                        <div className='shadow-[0px_2.421px_30.264px_0px_rgba(189,227,251,0.26)] flex flex-col items-center flex-1 bg-white mx-4 rounded-3xl p-9'>
                            <img src="/assets/illustrations/maintenance.png" alt="logo" className=" h-36" />
                            <h1 className='font-semibold'>Maintenance</h1>
                            <p className='text-xs text-center mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum mauris non pellentesque accumsan. Nec pellentesque eget.</p>
                        </div>
                    </div>
                </div>
                <div className=' bg-gradient-to-tr from-rose-200 to-blue-300 py-36 flex justify-center items-center w-screen px-8'>
                    <div className='max-w-7xl flex items-center justify-center self-center overflow-hidden'>
                        <div className='relative w-96 h-96 flex items-center justify-center'>
                            <img src="/assets/logoWithoutBackground.png" alt="logo" className="w-full h-full absolute object-contain filter invert opacity-30" />
                            <Lottie animationData={earth} className='w-5/6' loop />
                        </div>
                        <div className='flex-1 ml-16'>
                            <h1 className='text-center mb-6 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400'>MONDIALEMENT VÔTRE !</h1>
                            <p>Découvrez nos services où que vous soyez dans le monde. Notre équipe travaille sans frontières pour apporter des solutions innovantes à votre porte, où que cette porte puisse se trouver. Que vous soyez une petite start-up à la recherche de l'élément différenciateur ou une grande entreprise prête à révolutionner son secteur, nous sommes là pour collaborer avec vous. Votre vision devient notre mission, peu importe le lieu. Chez Al Firma, nous croyons que chaque projet, grand ou petit, mérite une approche personnalisée et un engagement total. Faites équipe avec nous et donnez vie à vos idées, où que vous soyez dans le monde.</p>
                        </div>
                    </div>
                </div>
                <div className='max-w-7xl flex flex-col items-center justify-center self-center overflow-hidden'>
                    <h1 className='text-center mb-6 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400'>ILS NOUS ONT FAIT CONFIANCE</h1>
                    <p>Découvrez nos services où que vous soyez dans le monde. Notre équipe travaille sans frontières pour apporter des solutions innovantes à votre porte, où que cette porte puisse se trouver. Que vous soyez une petite start-up à la recherche de l'élément différenciateur ou une grande entreprise prête à révolutionner son secteur, nous sommes là pour collaborer avec vous. Votre vision devient notre mission, peu importe le lieu. Chez Al Firma, nous croyons que chaque projet, grand ou petit, mérite une approche personnalisée et un engagement total. Faites équipe avec nous et donnez vie à vos idées, où que vous soyez dans le monde.</p>

                    <h1 className='text-center mb-6 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400'>BESOIN D'UN RENSEIGNEMENT ?</h1>
                    <p>Découvrez nos services où que vous soyez dans le monde. Notre équipe travaille sans frontières pour apporter des solutions innovantes à votre porte, où que cette porte puisse se trouver. Que vous soyez une petite start-up à la recherche de l'élément différenciateur ou une grande entreprise prête à révolutionner son secteur, nous sommes là pour collaborer avec vous. Votre vision devient notre mission, peu importe le lieu. Chez Al Firma, nous croyons que chaque projet, grand ou petit, mérite une approche personnalisée et un engagement total. Faites équipe avec nous et donnez vie à vos idées, où que vous soyez dans le monde.</p>
                </div>                    
                <div className='relative w-full'>
                    <div className='absolute left-[-1500px] rotate-[6.856deg] shrink-0 rounded-full p-[400px] bg-gradient-to-r from-rose-200 to-blue-300'>
                        <div className='p-[1000px] rounded-full bg-white'/>
                    </div>

                    <div className='max-w-7xl flex items-center justify-center self-center overflow-hidden z-10'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
