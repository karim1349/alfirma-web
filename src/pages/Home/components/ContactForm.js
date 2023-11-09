import { useState } from "react"

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail = () => {
        console.log(name, email, message)
    }

    return (
        <div className="flex flex-col md:flex-row justify-center">
            <img src='/assets/illustrations/contact.png' className='object-contain self-start w-full md:w-1/2 md:max-w-md' />
            <div className='my-12 flex flex-col flex-1 w-full px-4 md:max-w-[50%]'>
                <h2 id="SECTION_CONTACT" className='text-white font-extrabold text-2xl text-center tracking-widest px-8'>NOUS CONTACTER</h2>
                <p className='text-gray-300 my-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <div className='py-2'>
                    <label className='text-white font-bold text-sm tracking-widest'>Nom</label>
                    <input className='bg-purple-550 w-full py-2 px-4 my-2 rounded-md outline-none text-purple-750 focus:bg-purple-350' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='py-2'>
                    <label className='text-white font-bold text-sm tracking-widest'>E-mail</label>
                    <input className='bg-purple-550 w-full py-2 px-4 my-2 rounded-md outline-none text-purple-750 focus:bg-purple-350' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='py-2'>
                    <label className='text-white font-bold text-sm tracking-widest'>Message</label>
                    <textarea className='bg-purple-550 w-full py-2 px-4 my-2 rounded-md outline-none text-purple-750 focus:bg-purple-350 h-56' onChange={(e) => setMessage(e.target.value)}  />
                </div>
                <button className='bg-purple-850 px-24 py-4 rounded-md self-center my-4 disabled:opacity-50' disabled={name === '' || email === '' || message === ''} onClick={sendEmail}>
                    <span className='text-white font-semibold text-md'>Envoyer</span>
                </button>
            </div>
        </div>
    )
}

export default ContactForm