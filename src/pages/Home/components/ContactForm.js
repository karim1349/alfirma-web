import { useState } from "react"
import axios from 'axios'
const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSent, setIsSent] = useState(false)
    const sendEmail = () => {
        axios.post('/api/message/', {
            name:name,
            email:email,
            message:message
        })
        setIsSent(true)
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <div className="flex flex-col md:flex-row justify-center">
            <img src='/assets/illustrations/contact.png' className='object-contain self-start w-full md:w-1/2 md:max-w-md' />
            <div className='my-12 flex flex-col flex-1 w-full px-4 md:max-w-[50%]'>
                <h2 id="SECTION_CONTACT" className='text-white font-extrabold text-2xl text-center tracking-widest px-8'>NOUS CONTACTER</h2>
                <p className='text-gray-300 my-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <form className='flex flex-col' onSubmit={sendEmail}>
                    <div className='py-2'>
                        <label className='text-white font-bold text-sm tracking-widest'>Nom</label>
                        <input type="text" className='bg-purple-550 w-full py-2 px-4 my-2 rounded-md outline-none text-purple-750 focus:bg-purple-350' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='py-2'>
                        <label className='text-white font-bold text-sm tracking-widest'>E-mail</label>
                        <input type="email" className='bg-purple-550 w-full py-2 px-4 my-2 rounded-md outline-none text-purple-750 focus:bg-purple-350' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='py-2'>
                        <label className='text-white font-bold text-sm tracking-widest'>Message</label>
                        <textarea type="text" className='bg-purple-550 w-full py-2 px-4 my-2 rounded-md outline-none text-purple-750 focus:bg-purple-350 h-56' onChange={(e) => setMessage(e.target.value)}  />
                    </div>
                    {
                        isSent &&
                        <div className="border-white border rounded-lg my-4">
                            <p className="text-white text-center p-2">Message bien reçu ! Nous reviendrons vers vous dans les plus brefs délais. </p>
                        </div>
                    }
                    <button type="submit" className='bg-purple-850 px-24 py-4 rounded-md self-center my-4 disabled:opacity-50' disabled={name === '' || email === '' || message === ''}>
                        <span className='text-white font-semibold text-md'>Envoyer</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm