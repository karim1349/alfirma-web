const ContactForm = () => {
    return (
        <>
        <div id="SECTION_CONTACT" className='my-12 flex flex-col flex-1 w-full px-4 md:max-w-[50%]'>
            <h2 className='text-white font-extrabold text-2xl text-center tracking-widest px-8'>NOUS CONTACTER</h2>
            <p className='text-gray-300 my-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className='py-2'>
                <label className='text-white font-bold text-sm tracking-widest'>Nom</label>
                <input className='bg-purple-550 w-full py-2 px-4 my-2 rounded-md outline-none text-purple-750 focus:bg-purple-350' />
            </div>
            <div className='py-2'>
                <label className='text-white font-bold text-sm tracking-widest'>E-mail</label>
                <input className='bg-purple-550 w-full py-2 px-4 my-2 rounded-md outline-none text-purple-750 focus:bg-purple-350' />
            </div>
            <div className='py-2'>
                <label className='text-white font-bold text-sm tracking-widest'>Message</label>
                <textarea className='bg-purple-550 w-full py-2 px-4 my-2 rounded-md outline-none text-purple-750 focus:bg-purple-350 h-56' />
            </div>
            <button className='bg-purple-850 px-24 py-4 rounded-md self-center my-4 disabled:opacity-50' disabled={true}>
                <span className='text-white font-semibold text-md'>Envoyer</span>
            </button>
        </div>
        </>
    )
}

export default ContactForm