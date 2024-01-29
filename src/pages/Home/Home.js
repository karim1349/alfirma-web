import React from 'react';
import NavBar from './components/NavBar';
import ContactForm from './components/ContactForm';
import partners from '../../content/partners.json'
import Loading from './components/Loading';
import Lottie from 'lottie-react';
import earth from '../../content/earth.json'
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import Card from './components/Card';
function Home() {
    const [loading, setLoading] = React.useState(true);
    return (
        <>
        <div className={`transition ease-linear duration-700 ${loading ? 'opacity-100' : 'opacity-0'}`}>
            <Loading loading={loading} setLoading={setLoading} />
        </div> 
        <div className={`transition ease-linear duration-700 z-50 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <div className='flex items-center bg-white justify-center mb-20'>
            <div className='flex-1 flex flex-col items-center justify-center self-center overflow-hidden'>
                <NavBar />
                <div className='flex justify-center items-center flex-col-reverse md:flex-row w-full' id="SECTION_ACCUEIL" style={{backgroundImage: "url('/assets/illustrations/background.png')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
                    <div className='px-4 md:mx-12 md:px-0 flex flex-col items-center '>
                        <img src="/assets/logoWithoutBackground.png" alt="logo" className="w-1/2 md:w-1/5 hover:transform hover:rotate-[57deg] transition-all duration-200 my-20 " />
                        <h1 className='text-4xl md:text-8xl text-white text-justify self-center font-bold'>AL FIRMA</h1>
                        <h2 className='text-white my-4 text-[4vw] text-justify'>
                            L'innovation façonne vos applications
                        </h2>
                        <button className='group w-64 py-4 border border-white rounded-full hover:bg-white cursor-pointer transition' 
                            onClick={() => window.open('https://calendly.com/alfirma/30min', '_blank')}>
                            <span className='block group-hover:hidden'>On discute ?</span>
                            <span className='hidden group-hover:block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400'>Réserver un appel</span>
                        </button>
                        
                    </div>
                </div>
                <div className='max-w-7xl flex flex-col items-center justify-center self-center overflow-hidden'>
                    <div className='grid grid-cols-1 md:grid-cols-3 md:h-80'>
                        <div className='flex flex-1 px-2 py-12 md:border-r group hover:bg-[url(/assets/illustrations/backgroundDiscussion.png)] bg-cover bg-center hover:text-white'>
                            <div className='w-4 h-4 rounded-full bg-blue-50 mr-7 mt-2'/>
                            <div className='flex-1 flex flex-col justify-between'>
                                <h1 className='text-2xl font-medium'>Discussion du projet</h1>
                                <p className='font-thin mt-4 mr-8'>Partagez vos idées et objectifs. Nous créons une feuille de route pour le développement de votre application.</p>

                                <h1 className='text-7xl self-end text-gray-200 font-semibold'>01.</h1>
                            </div>
                        </div>
                        <div className='flex px-2 py-12 md:border-r group hover:bg-[url(/assets/illustrations/backgroundCreation.png)] bg-cover bg-center hover:text-white'>
                            <div className='w-4 h-4 rounded-full bg-blue-50 mr-7 mt-2'/>
                            <div className='flex-1 flex flex-col justify-between'>
                                <h1 className='text-2xl font-medium'>Création sur Mesure</h1>
                                <p className='font-thin mt-4 mr-8'>On transforme vos idées en réalité avec un design intuitif et des fonctionnalités innovantes, en vous impliquant à chaque étape.</p>

                                <h1 className='text-7xl self-end text-gray-200 font-semibold '>02.</h1>
                            </div>
                        </div>
                        <div className='flex px-2 py-12 group hover:bg-[url(/assets/illustrations/backgroundDeploy.png)] bg-cover bg-center hover:text-white'>
                            <div className='w-4 h-4 rounded-full bg-blue-50 mr-7 mt-2'/>
                            <div className='flex-1 flex flex-col justify-between'>
                                <h1 className='text-2xl font-medium'>Déploiement</h1>
                                <p className='font-thin mt-4 mr-8'>Après approbation, votre application prend son envol en ligne. Nous restons à vos côtés pour assurer son succès continu.</p>

                                <h1 className=' text-7xl self-end text-gray-200 font-semibold'>03.</h1>
                            </div>
                        </div>
                    </div>
                    <div className='px-2'>
                        <h1 id="SECTION_A_PROPOS" className='text-center mb-6 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400 mt-24'>L'ART DE LA SPÉCIALITÉ</h1>
                        <p className='text-center'>Nous allions créativité et expertise technique pour concrétiser vos idées.</p>
                        <div className='flex w-full flex-col md:flex-row my-28'>
                            <div className='group shadow-[0px_2.421px_30.264px_0px_rgba(189,227,251,0.26)] flex flex-col items-center flex-1 bg-white mx-4 rounded-3xl p-9'>
                                <img src="/assets/illustrations/appmobile.png" alt="logo" className=" h-36 group-hover:h-48 object-contain transform transition-all" />
                                <h1 className='font-semibold'>Apps Mobile</h1>
                                <p className='text-xs text-center mt-4'>Nous développons et déployons des applications mobile cross-platform (iOS et Android) d'un haut niveau de qualité à l'aide de technologies de pointe. </p>
                            </div>
                            <div className='group shadow-[0px_2.421px_30.264px_0px_rgba(189,227,251,0.26)] flex flex-col items-center flex-1 bg-white mx-4 rounded-3xl p-9'>
                                <img src="/assets/illustrations/appweb.png" alt="logo"  className=" h-36 group-hover:h-48 object-contain transform transition-all" />
                                <h1 className='font-semibold'>Apps Web</h1>
                                <p className='text-xs text-center mt-4'>Un besoin concernant une application web ? Spécialisés en React.js et Django, nous disposons de toutes les compétences nécessaires à la création de votre application full-stack.</p>
                            </div>
                            <div className='group shadow-[0px_2.421px_30.264px_0px_rgba(189,227,251,0.26)] flex flex-col items-center flex-1 bg-white mx-4 rounded-3xl p-9'>
                                <img src="/assets/illustrations/uiuxdesign.png" alt="logo"  className=" h-36 group-hover:h-48 object-contain transform transition-all" />
                                <h1 className='font-semibold'>UX/UI Design</h1>
                                <p className='text-xs text-center mt-4'>Nos équipes de designers n'attendent que vous pour concevoir les maquettes de l'application de vos rêves, basée sur les meilleures normes d'ergonomie et d'optimisation.</p>
                            </div>
                            <div className='group shadow-[0px_2.421px_30.264px_0px_rgba(189,227,251,0.26)] flex flex-col items-center flex-1 bg-white mx-4 rounded-3xl p-9'>
                                <img src="/assets/illustrations/maintenance.png" alt="logo"  className=" h-36 group-hover:h-48 object-contain transform transition-all" />
                                <h1 className='font-semibold'>Maintenance</h1>
                                <p className='text-xs text-center mt-4'>Besoin d'apporter des modifications sur votre application ? Nous pouvons prendre en charge la maintenance des produits que nous développons. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' bg-gradient-to-tr from-rose-200 to-blue-300 py-8 md:py-24 flex justify-center items-center w-screen'>
                    <div className='px-4 md:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-center self-center overflow-hidden'>
                        <div className='relative w-96 h-96 flex items-center justify-center'>
                            <img src="/assets/logoWithoutBackground.png" alt="logo" className="w-full h-full absolute object-contain filter invert opacity-30" />
                            <Lottie animationData={earth} className='w-5/6' loop />
                        </div>
                        <div className='flex-1 md:ml-16'>
                            <h1 className='text-center mb-6 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400'>MONDIALEMENT VÔTRE !</h1>
                            <p>Découvrez nos services où que vous soyez dans le monde. Notre équipe travaille sans frontières pour apporter des solutions innovantes à votre porte, où que cette porte puisse se trouver. Que vous soyez une petite start-up à la recherche de l'élément différenciateur ou une grande entreprise prête à révolutionner son secteur, nous sommes là pour collaborer avec vous. Votre vision devient notre mission, peu importe le lieu. Chez Al Firma, nous croyons que chaque projet, grand ou petit, mérite une approche personnalisée et un engagement total. Faites équipe avec nous et donnez vie à vos idées, où que vous soyez dans le monde.</p>
                        </div>
                    </div>
                </div>
                <div className='px-4 md:px-8 max-w-7xl flex flex-col items-center justify-center self-center overflow-hidden mt-28'>
                    <h1 id="SECTION_PROJETS" className='text-center mb-6 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400'>ILS NOUS ONT FAIT CONFIANCE</h1>
                    <p className='text-center'>Un coup de projecteur sur nos partenaires formidables ! Leur confiance en notre expertise renforce notre détermination à offrir des solutions innovantes et personnalisées pour répondre à leurs besoins uniques.</p>
                        <div className='w-[80vw] md:max-w-2xl transform -rotate-6 my-24'>
                        <Swiper
                        modules={[EffectCards]}
                        loop={true}
                        navigation
                        cardsEffect={{
                            perSlideOffset: 10,
                            slideShadows: false,
                            perSlideRotate: 10,
                        }}
                        effect='cards'
                        >
                            {
                                partners.map((partner, index) => (
                                    <SwiperSlide><Card title={partner.name} image={partner.image} text={partner.description} review={partner.review}/></SwiperSlide>
                                ))
                            }
                        </Swiper>
                        </div>
                    <h1 className='text-center mb-6 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400'>BESOIN D'UN RENSEIGNEMENT ?</h1>
                    <p>Des questions ? On a toutes les réponses ! Remplissez le formulaire ci-dessous et suivez-nous sur nos réseaux sociaux pour rester connectés ! Notre équipe est là pour vous répondre avec enthousiasme et nos réseaux regorgent de contenus passionnants.</p>
                </div>                    
                <div id="SECTION_CONTACT" className='relative w-full justify-center flex overflow-hidden'>
                    <div className=' max-h-72 overflow-hidden'>
                        <div className='absolute left-[-1500px] rotate-[6.856deg] shrink-0 rounded-full p-[400px] bg-gradient-to-r from-rose-200 to-blue-300'>
                            <div className='p-[1000px] rounded-full bg-white'/>
                        </div>
                    </div>
                    <div className='px-8 max-w-7xl flex w-full items-center justify-center self-center overflow-hidden z-10'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Home;
