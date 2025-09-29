const Projet = ({ projet }) => {
    return (
        <>
            <div className=' bg-blue-950 flex flex-col md:max-w-[30%] rounded-lg overflow-hidden my-4'>
                <img src={projet.image} alt="sayar" className='object-cover self-center' />
                <h1 className='text-white font-bold tracking-widest text-xl px-4 pt-4'>{projet.name}</h1>
                <div className="flex justify-between items-center my-2">
                    <div className="flex items-center mx-4">
                        <img src={projet.tasks.conception ? "/assets/tick.svg" : "/assets/clock.svg"} alt="clock" className='w-4 h-4 mr-2' />
                        <p className='text-gray-400 text-xs'>Conception</p>
                    </div>
                    <div className="flex items-center mx-4">
                        <img src={projet.tasks.developement ? "/assets/tick.svg" : "/assets/clock.svg"} alt="clock" className='w-4 h-4 mr-2' />
                        <p className='text-gray-400 text-xs'>Développement</p>
                    </div>
                </div>
                <div className="flex justify-between items-center my-2">
                    <div className="flex items-center mx-4">
                        <img src={projet.tasks.design ? "/assets/tick.svg" : "/assets/clock.svg"} alt="clock" className='w-4 h-4 mr-2' />
                        <p className='text-gray-400 text-xs'>Design</p>
                    </div>
                    <div className="flex items-center mx-4">
                        <img src={projet.tasks.deployment ? "/assets/tick.svg" : "/assets/clock.svg"} alt="clock" className='w-4 h-4 mr-2' />
                        <p className='text-gray-400 text-xs'>Déploiement</p>
                    </div>
                </div>
                <p className=' text-justify p-4 text-white flex-1'>
                    {projet.description}
                </p>
                    {
                        projet.link ? 
                            <button className=' self-end p-4 flex justify-center items-center' onClick={() => window.location.href = projet.link}>
                                <span className='text-white text-sm'>Découvrir</span>
                                <img src="/assets/arrowRight.svg" alt="arrow" className='w-4 h-4 ml-2' />
                            </button>
                        :
                            <button className=' self-end p-4 flex justify-center items-center'>
                                    <span className='text-white text-sm'>Bientôt disponible ...</span>
                            </button>
                    }
            </div>
        </>
    )
}

export default Projet