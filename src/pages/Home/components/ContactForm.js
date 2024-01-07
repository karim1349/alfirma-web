import { useEffect, useState } from "react"
import axios from 'axios'
import Lottie from "lottie-react";
const images = [
  '/assets/illustrations/mockup_insta.png',
  '/assets/illustrations/mockup_facebook.png',
  '/assets/illustrations/mockup_linkedin.png',
];
const ContactForm = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSent, setIsSent] = useState(false)
    const sendEmail = (event) => {
        event.preventDefault()
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

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((currentImage) => (currentImage + 1) % images.length);
        }, 2000);
    
        return () => clearInterval(intervalId);
        }, []);
    return (
        <div className="flex md:flex-row flex-col-reverse justify-center items-end flex-1">
            <div className="relative w-full md:w-1/3 h-96">
                {images.map((image, index) => (
                <img key={image} src={image} alt="logo" className={`absolute w-full object-cover z-10 transition-opacity duration-700 ${currentImage === index ? 'opacity-100' : 'opacity-0'}`} />
                ))} 
            </div>
            <div className='flex flex-col flex-1 w-full p-4 md:p-16 md:max-w-[50%] backdrop-blur-xl bg-opacity-30 bg-white my-8 rounded-3xl overflow-hidden border-2 border-purple-350'>
                <h1 className='text-center mb-6 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400'>CONTACT</h1>
                <form className='flex flex-col' onSubmit={sendEmail}>
                    <div className='py-2'>
                        <label className='text-purple-750 font-bold text-sm tracking-widest'>E-mail</label>
                        <input type="email" className=' bg-transparent w-full py-2 px-4 my-2 rounded-md outline-none text-purple-750 focus:bg-purple-350 border border-purple-350' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='py-2'>
                        <label className='text-purple-750 font-bold text-sm tracking-widest'>Nom</label>
                        <input type="text" className=' bg-transparent w-full py-2 px-4 my-2 rounded-md outline-none text-purple-750 focus:bg-purple-350 border border-purple-350' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='py-2'>
                        <label className='text-purple-750 font-bold text-sm tracking-widest'>Message</label>
                        <textarea type="text" className=' bg-transparent w-full py-2 px-4 my-2 rounded-md outline-none text-purple-750 focus:bg-purple-350 h-36 border border-purple-350' onChange={(e) => setMessage(e.target.value)}  />
                    </div>
                    <button type="submit" className={`bg-transparent w-3/4 py-4 cursor-pointer rounded-md self-center my-4 disabled:opacity-50 border-purple-750 border hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 group hover:border-opacity-0 ${isSent ? 'bg-gradient-to-r from-purple-400 to-blue-500 border-opacity-0' : ''}`} disabled={name === '' || email === '' || message === ''}>
                        {
                            isSent ? 
                            <Lottie animationData={require('../../../content/space_mail.json')} className='h-10' onAnimationEnd={() => setIsSent(false)} loop={false} /> :
                            <span className='text-purple-750 font-semibold text-md group-hover:text-white'>Envoyer</span>
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm