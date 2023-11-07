import React from 'react';
import NavBar from './components/NavBar';
import ContactForm from './components/ContactForm';

function Home() {
    return (
        <div className='flex items-center bg-purple-950 justify-center'>
            <div className='flex-1 flex flex-col items-center py-6 max-w-6xl justify-center self-center overflow-hidden'>
                <h1 className='text-white' id="SECTION_ACCUEIL"><span className=' font-bold'>Al</span>Firma</h1>
                <NavBar />
                <div className='flex justify-center items-center my-28 flex-col-reverse md:flex-row'>
                    <div className='px-12 md:mx-12 md:px-0 '>
                        <h1 className='text-4xl md:text-7xl text-white text-center md:text-left self-center'>Un lieu unique pour votre entreprise</h1>
                    </div>
                    <img src='/assets/illustrations/fusee.png' alt='illustration' className='h-48 md:w-[470px] md:h-[470px]' />
                </div>
                <div className='py-24'>
                    <h2 className='text-white font-extrabold text-2xl text-center tracking-widest px-8'>ILS NOUS ONT FAIT CONFIANCE</h2>
                    <div className='flex overflow-x-auto'>
                        <img className=' w-28 h-24 object-contain mx-12' src="/assets/c3si.png" alt="c3si" />
                        <img className=' w-28 h-24 object-contain mx-12' src="/assets/toutakote.png" alt="toutakote"/>
                        <img className=' w-28 h-24 object-contain mx-12' src="/assets/leexit.png" alt="leexit"/>
                        <img className=' w-28 h-24 object-contain mx-12' src="/assets/meta.png" alt="metaconnect"/>
                        <img className=' w-28 h-24 object-contain mx-12' src="/assets/meor.png" alt="meor"/>
                    </div>
                </div>
                <div className='flex flex-1 justify-between md:px-24 w-full flex-col md:flex-row py-12 px-4' id="SECTION_A_PROPOS">
                    <img src="/assets/illustrations/partenaire.png" alt="partenaire" className='object-contain self-center w-1/2 max-w-md' />
                    <div className='flex-1 flex flex-col self-center max-w-md'>
                        <h3 className=' text-sm font-normal text-gray-400'>NOS SERVICES</h3>
                        <h1 className='text-white text-2xl'>Votre partenaire de confiance</h1>
                        <p className='text-gray-400 my-4 text-xl'>
                            En tant que partenaire de confiance, nous sommes là à chaque étapes de votre projet. Que vous soyez au point de départ ou en pleine évolution, notre équipe dévouée vous guide pour concrétiser vos idées.
                        </p>
                    </div>
                </div>
                <div className='flex flex-1 justify-between md:px-24 w-full flex-col-reverse md:flex-row py-12 px-4'>
                    <div className='flex-1 flex flex-col self-center max-w-md'>
                        <h3 className=' text-sm font-normal text-gray-400'>NOS SERVICES</h3>
                        <h1 className='text-white text-2xl'>De la conception à la réalisation</h1>
                        <p className='text-gray-400 my-4 text-xl'>
                        Nous couvrons l’ensemble du processus, de la conception à la réalisation. Notre équipe de designer et de développeur travaille de concert pour donner vie à votre vision. De l’idée initiale au lancement, nous sommes là à chaque étape.
                        </p>
                    </div>
                    <img src="/assets/illustrations/conception.png" alt="partenaire" className='object-contain self-center w-1/2 max-w-md' />
                    
                </div>
                <div className='flex flex-1 justify-between md:px-24 w-full flex-col md:flex-row py-12 px-4'>
                    <img src="/assets/illustrations/solution.png" alt="conception" className='object-contain self-center w-1/2 max-w-md' />
                    <div className='flex-1 flex flex-col self-center max-w-md'>
                        <h3 className=' text-sm font-normal text-gray-400'>NOS SERVICES</h3>
                        <h1 className='text-white text-2xl'>Solutions sur-mesure</h1>
                        <p className='text-gray-400 my-4 text-xl'>
                        Que vous dirigiez une petite start-up ou une grande entreprise, nos solutions sont adaptées à vos objectifs. Notre approche personnalisée implique une collaboration étroite pour saisir vos besoins uniques. Nous adaptions nos services pour vous aider à exceller dans un environnement en constante évolution.
                        </p>
                    </div>
                </div>
                <div id="SECTION_PROJETS" className='flex flex-col items-center'>
                    <h2 className='text-white font-extrabold tracking-widest text-2xl px-8'>NOS PROJETS</h2>
                    <p className='text-gray-300 my-4 text-center'>Explorez une sélection de nos projets qui illustrent notre passion pour l’innovation</p>
                    <div className='flex flex-1 justify-around flex-col md:flex-row mx-4'>
                        <div className=' bg-blue-950 flex flex-col md:max-w-[30%] rounded-lg overflow-hidden my-4'>
                            <img src="/assets/duodoku.png" alt="sayar" className='object-cover self-center' />
                            <h1 className='text-white font-bold tracking-widest text-xl px-4 pt-4'>Sayar</h1>
                            <p className='px-4 text-xs text-gray-400'>UX/UI Design & Développement</p>
                            <p className=' text-justify p-4 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  elit, sed do eiusmod tempor incididunt ut labore  elit, sed do eiusmod tempor incididunt ut labore  elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <button className=' self-end p-4 flex justify-center items-center'>
                                <span className='text-white text-sm'>Découvrir</span>
                                <img src="/assets/arrowRight.svg" alt="arrow" className='w-4 h-4 ml-2' />
                            </button>
                        </div>
                        <div className=' bg-blue-950 md:max-w-[30%] flex flex-col rounded-lg overflow-hidden my-4'>
                            <img src="/assets/duodoku.png" alt="sayar" className='object-cover self-center' />
                            <h1 className='text-white font-bold tracking-widest text-xl px-4 pt-4'>Duodoku</h1>
                            <p className='px-4 text-xs text-gray-400'>UX/UI Design & Développement</p>
                            <p className=' text-justify p-4 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  elit, sed do eiusmod tempor incididunt ut labore  elit, sed do eiusmod tempor incididunt ut labore  elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <button className=' self-end p-4 flex justify-center items-center'>
                                <span className='text-white text-sm'>Découvrir</span>
                                <img src="/assets/arrowRight.svg" alt="arrow" className='w-4 h-4 ml-2' />
                            </button>
                        </div>
                        <div className=' bg-blue-950 md:max-w-[30%] flex flex-col rounded-lg overflow-hidden my-4'>
                            <img src="/assets/duodoku.png" alt="sayar" className='object-cover self-center' />
                            <h1 className='text-white font-bold tracking-widest text-xl px-4 pt-4'>Sayar</h1>
                            <p className='px-4 text-xs text-gray-400'>UX/UI Design & Développement</p>
                            <p className=' text-justify p-4 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  elit, sed do eiusmod tempor incididunt ut labore  elit, sed do eiusmod tempor incididunt ut labore  elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <button className=' self-end p-4 flex justify-center items-center'>
                                <span className='text-white text-sm'>Découvrir</span>
                                <img src="/assets/arrowRight.svg" alt="arrow" className='w-4 h-4 ml-2' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='my-12'>
                    <h2 className='text-white font-extrabold text-2xl text-center tracking-widest px-8'>NOTRE KIT TECHNOLOGIQUE</h2>
                    <p className='text-gray-300 my-4 text-center'>Explorez une sélection de nos projets qui illustrent notre passion pour l’innovation</p>
                    <div className='flex flex-1 justify-between w-full flex-col-reverse md:flex-row'>
                        <div className='flex-1 flex flex-col self-center max-w-md'>
                            <p className='text-white my-4 text-xl text-justify px-4'>
                            Dans notre boîte à outils vous trouverez Figma pour la conception, vue.js et React.js pour le développement front-end, Django Rest Framework pour les applications web et React Native pour les applications mobiles. Ces outils de pointe sont le carburant de notre créativité, nous permettant de façonner vos projets. 
                            </p>
                        </div>
                        <img src="/assets/illustrations/conception.png" alt="partenaire" className='object-contain self-center w-1/2 max-w-md' />
                        
                    </div>
                </div>
                <ContactForm />
            </div>
            <div className='fixed top-14 right-0 bg-white rounded-full' style={{boxShadow: '0 0 200px 100px white', opacity: 0.4}}></div>
        </div>
    );
}

export default Home;
