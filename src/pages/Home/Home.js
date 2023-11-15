import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import ContactForm from './components/ContactForm';
import { Fade, Slide } from "react-awesome-reveal";
import { Carousel } from 'flowbite-react';
import Projet from './components/Projet';
import projets from '../../content/projets.json'
import partners from '../../content/partners.json'
import Partner from './components/Partner';


function Home() {
    return (
        <div className='flex items-center bg-purple-950 justify-center'>
            <div className='flex-1 flex flex-col items-center py-6 max-w-6xl justify-center self-center overflow-hidden'>
                <NavBar />
                <div className='flex justify-center items-center mb-28 md:my-28 flex-col-reverse md:flex-row'>
                    <div className='px-4 md:mx-12 md:px-0 '>
                        <h1 className='text-4xl md:text-6xl text-white text-justify self-center'>De l'idée jusqu'au Store : Al Firma vous accompagne</h1>
                            <p className='text-gray-400 my-4 text-xl text-justify'>
                                Al Firma prend en charge la conception, le design, le développement, le déploiement et la maintenance de vos applications web & mobile, iOS et Android sur mesure. Rien que ça !
                            </p>
                    </div>
                    <Fade className='flex w-full' triggerOnce direction='up'>
                        <img src='/assets/illustrations/fusee.png' alt='illustration' className='w-full object-contain md:w-[470px] md:h-[470px]' />
                    </Fade>
                </div>
                    <h2 className='text-white font-extrabold text-2xl text-center tracking-widest px-8'>ILS NOUS ONT FAIT CONFIANCE</h2>
                    <div className=" w-full h-full">
                    <Carousel pauseOnHover indicators={false} slideInterval={10000}>
                        {
                            partners.map((partner, index) => {
                                return (
                                    <Partner partner={partner} />
                                )
                            })
                        }
                    </Carousel>
                    </div>
                    <div className='flex flex-1 justify-between md:px-24 w-full flex-col md:flex-row py-12 px-4'>
                        <img src="/assets/illustrations/partenaire.png" alt="partenaire" className='object-contain self-center w-1/2 max-w-md' />
                        <div className='flex-1 flex flex-col self-center max-w-md'>
                            <h3 className=' text-sm font-normal text-gray-400' id="SECTION_A_PROPOS">NOS SERVICES</h3>
                            <h1 className='text-white text-2xl'>Votre partenaire de confiance</h1>
                            <p className='text-gray-400 my-4 text-xl text-justify'>
                                En tant que partenaire de confiance, nous sommes là à chaque étapes de votre projet. Que vous soyez au point de départ ou en pleine évolution, notre équipe dévouée vous guide pour concrétiser vos idées.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-1 justify-between md:px-24 w-full flex-col-reverse md:flex-row py-12 px-4'>
                        <div className='flex-1 flex flex-col self-center max-w-md'>
                            <h3 className=' text-sm font-normal text-gray-400'>NOS SERVICES</h3>
                            <h1 className='text-white text-2xl'>De la conception à la réalisation</h1>
                            <p className='text-gray-400 my-4 text-xl text-justify'>
                            Nous couvrons l’ensemble du processus, de la conception au déploiement. Notre équipe de designer et de développeur travaille de concert pour donner vie à votre vision. De l’idée initiale au lancement, nous sommes là à chaque étape.
                            </p>
                        </div>
                        <img src="/assets/illustrations/conception.png" alt="partenaire" className='object-contain self-center w-1/2 max-w-md' />
                        
                    </div>
                    <div className='flex flex-1 justify-between md:px-24 w-full flex-col md:flex-row py-12 px-4'>
                        <img src="/assets/illustrations/solution.png" alt="conception" className='object-contain self-center w-1/2 max-w-md' />
                        <div className='flex-1 flex flex-col self-center max-w-md'>
                            <h3 className=' text-sm font-normal text-gray-400'>NOS SERVICES</h3>
                            <h1 className='text-white text-2xl'>Solutions sur-mesure</h1>
                            <p className='text-gray-400 my-4 text-xl text-justify'>
                            Que vous dirigiez une petite start-up ou une grande entreprise, nos solutions sont adaptées à vos objectifs. Notre approche personnalisée implique une collaboration étroite pour saisir vos besoins uniques. Nous adaptions nos services pour vous aider à exceller dans un environnement en constante évolution.
                            </p>
                        </div>
                    </div>
                <div className='flex flex-col items-center'>
                    <h2 id="SECTION_PROJETS" className='text-white font-extrabold tracking-widest text-2xl px-8'>NOTRE FERME À PROJETS</h2>
                    <p className='text-gray-300 my-4 text-center'>En plus de nos prestations de services, nous développons également des projets internes innovants. </p>
                    <div className='flex flex-1 justify-around flex-col md:flex-row mx-4'>
                        {
                            projets.map((projet, index) => {
                                return (
                                        <Projet projet={projet} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex flex-col my-12 px-4'>
                    <h2 className='text-white font-extrabold text-2xl text-center tracking-widest'>LA RECETTE</h2>
                    <p className='text-gray-300 my-4 text-center'>Découvrez le kit technologique que nous utiliserons pour vous aider. </p>
                    <div className='flex items-center justify-center my-16 ml-[20px] md:ml-[50px] w-full '>
                        <div className=' bg-purple-350 flex justify-center items-center rounded-full ml-[-20px] md:ml-[-50px] border-purple-900 border-4 overflow-hidden w-14 h-14 md:w-32 md:h-32'><img src="/assets/figma.png"        alt="figma"        className='object-contain self-center w-24' /></div>
                        <div className=' bg-purple-350 flex justify-center items-center rounded-full ml-[-20px] md:ml-[-50px] border-purple-900 border-4 overflow-hidden w-14 h-14 md:w-32 md:h-32'><img src="/assets/react.png"        alt="react"        className='object-contain self-center w-24' /></div>
                        <div className=' bg-purple-350 flex justify-center items-center rounded-full ml-[-20px] md:ml-[-50px] border-purple-900 border-4 overflow-hidden w-14 h-14 md:w-32 md:h-32'><img src="/assets/vuejs.png"        alt="vuejs"        className='object-contain self-center w-24' /></div>
                        <div className=' bg-purple-350 flex justify-center items-center rounded-full ml-[-20px] md:ml-[-50px] border-purple-900 border-4 overflow-hidden w-14 h-14 md:w-32 md:h-32'><img src="/assets/tailwind.png"     alt="tailwind"     className='object-contain self-center w-24' /></div>
                        <div className=' bg-purple-350 flex justify-center items-center rounded-full ml-[-20px] md:ml-[-50px] border-purple-900 border-4 overflow-hidden w-14 h-14 md:w-32 md:h-32'><img src="/assets/react-native.png" alt="react-native" className='object-contain self-center w-24' /></div>
                        <div className=' bg-purple-350 flex justify-center items-center rounded-full ml-[-20px] md:ml-[-50px] border-purple-900 border-4 overflow-hidden w-14 h-14 md:w-32 md:h-32'><img src="/assets/heroku.png"       alt="heroku"       className='object-contain self-center w-24' /></div>
                        <div className=' bg-purple-350 flex justify-center items-center rounded-full ml-[-20px] md:ml-[-50px] border-purple-900 border-4 overflow-hidden w-14 h-14 md:w-32 md:h-32'><img src="/assets/python.png"       alt="python"       className='object-contain self-center w-24' /></div>
                        <div className=' bg-purple-350 flex justify-center items-center rounded-full ml-[-20px] md:ml-[-50px] border-purple-900 border-4 overflow-hidden w-14 h-14 md:w-32 md:h-32'><img src="/assets/django.png"       alt="django"       className='object-contain self-center w-24' /></div>
                    </div>
                    <div className='flex flex-1 justify-between w-full flex-col-reverse md:flex-row'>
                        <div className='flex-1 flex flex-col self-center'>
                            <p className='text-white my-4 text-md text-justify'>
                            Dans notre boîte à outils se trouve toutes les technologies de pointe nécessaires à la réalisation des meilleures applications possibles. 
                            De Figma pour la conception et le design, à React.js, Vue.js et TailwindCSS pour le développement web, 
                            en passant par React Native pour le développement mobile, 
                            et enfin Python, Django et Heroku pour le développement back-end, nous avons tout ce qu’il faut pour vous aider à concrétiser vos idées.
                            </p>
                        </div>
                    </div>
                </div>
                <Fade triggerOnce direction='up' delay={50} className='flex justify-center w-full'>
                    <ContactForm />
                </Fade>
            </div>
        </div>
    );
}

export default Home;
