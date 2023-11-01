import React from 'react';

function Home() {
    return (
        <div className='flex items-center bg-purple-950 justify-center'>
            <div className='flex-1 flex flex-col items-center py-6 max-w-6xl justify-center self-center'>
                <h1 className='text-white'><span className=' font-bold'>Al</span>Firma</h1>

                <div className='flex justify-center items-center my-28'>
                    <div className=' mx-12'>
                        <h1 className=' text-7xl text-white text-left self-center'>Un lieu unique pour votre entreprise</h1>
                        <h2>Lorem ipsum</h2>
                    </div>
                    <img src='/assets/illustrations/fusee.png' alt='illustration' className='w-[470px] h-[470px]' />
                </div>
                <div>
                    <h2 className='text-white font-semibold text-2xl text-center'>ILS NOUS ONT FAIT CONFIANCE</h2>
                    <div className='flex overflow-x-auto'>
                        <img className=' w-28 h-24 object-contain mx-12' src="/assets/c3si.png" alt="c3si" />
                        <img className=' w-28 h-24 object-contain mx-12' src="/assets/toutakote.png" alt="toutakote"/>
                        <img className=' w-28 h-24 object-contain mx-12' src="/assets/leexit.png" alt="leexit"/>
                        <img className=' w-28 h-24 object-contain mx-12' src="/assets/meta.png" alt="metaconnect"/>
                        <img className=' w-28 h-24 object-contain mx-12' src="/assets/meor.png" alt="meor"/>
                    </div>
                </div>
                <div className='flex flex-1 justify-between px-24 w-full'>
                    <img src="/assets/illustrations/partenaire.png" alt="partenaire" className='object-contain w-1/2 max-w-md' />
                    <div className='flex-1 flex flex-col self-center max-w-md'>
                        <h3 className=' text-sm font-normal text-gray-400'>NOS SERVICES</h3>
                        <h1 className='text-white text-2xl'>Votre partenaire de confiance</h1>
                        <p className='text-gray-400 my-4 text-xl'>
                            En tant que partenaire de confiance, nous sommes là à chaque étapes de votre projet. Que vous soyez au point de départ ou en pleine évolution, notre équipe dévouée vous guide pour concrétiser vos idées.
                        </p>
                    </div>
                </div>
                <div className='flex flex-1 justify-between px-24 w-full'>
                    <div className='flex-1 flex flex-col self-center max-w-md'>
                        <h3 className=' text-sm font-normal text-gray-400'>NOS SERVICES</h3>
                        <h1 className='text-white text-2xl'>De la conception à la réalisation</h1>
                        <p className='text-gray-400 my-4 text-xl'>
                        Nous couvrons l’ensemble du processus, de la conception à la réalisation. Notre équipe de designer et de développeur travaille de concert pour donner vie à votre vision. De l’idée initiale au lancement, nous sommes là à chaque étape.
                        </p>
                    </div>
                    <img src="/assets/illustrations/conception.png" alt="conception" className='object-contain w-1/2 max-w-md' />
                </div>
                <div className='flex flex-1 justify-between px-24 w-full'>
                    <img src="/assets/illustrations/solution.png" alt="solution" className='object-contain w-1/2 max-w-md' />
                    <div className='flex-1 flex flex-col self-center max-w-md'>
                        <h3 className=' text-sm font-normal text-gray-400'>NOS SERVICES</h3>
                        <h1 className='text-white text-2xl'>Solutions sur-mesure</h1>
                        <p className='text-gray-400 my-4 text-xl'>
                            Que vous dirigiez une petite start-up ou une grande entreprise, nos solutions sont adaptées à vos objectifs. Notre approche personnalisée implique une collaboration étroite pour saisir vos besoins uniques. Nous adaptions nos services pour vous aider à exceller dans un environnement en constante évolution.
                        </p>
                    </div>
                </div>
            </div>
            <div className=' w-96 h-96 fixed top-0 right-0'>
                <svg xmlns="http://www.w3.org/2000/svg" width="472" height="510" viewBox="0 0 472 510" fill="none">
                    <g filter="url(#filter0_f_1_45)">
                    <path d="M582 96.5C582 189.56 506.56 265 413.5 265C320.44 265 245 189.56 245 96.5C245 3.44002 320.44 -72 413.5 -72C506.56 -72 582 3.44002 582 96.5Z" fill="white" fill-opacity="0.38"/>
                    </g>
                    <defs>
                    <filter id="filter0_f_1_45" x="0.797104" y="-316.203" width="825.406" height="825.406" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="122.101" result="effect1_foregroundBlur_1_45"/>
                    </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
}

export default Home;
