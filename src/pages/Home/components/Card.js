import { useSwiper } from 'swiper/react';

const Card = ({image, title, text, review, links}) => {
    const swiper = useSwiper();
    return (
        <div className=" bg-white flex flex-1 self-center flex-col rounded-2xl shadow-md m-8 h-96 p-4">
            <div className='flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
                <img src={image} alt={title} className="h-16 object-contain z-10" />
                <h1 className='text-center text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400'>{title}</h1>
                {links?.length &&
                    <div className='flex flex-col sm:flex-row justify-center items-center my-2'>
                        {links.map((link, index) => (
                            <a href={link.url} target="_blank" rel="noreferrer" key={index}>
                                <img src={`/assets/button_${link.type}.png`} alt={link.name} className="w-32 m-2 hover:scale-110 transform transition" />  
                            </a>
                        ))}
                    </div>
                }
                <p className="text-xs font-light text-center text-ellipsis">{text}</p>
                {review && 
                    <p className="text-xs font-semibold italic my-2 text-center text-ellipsis">"{review}"</p>
                }
            </div>
            <div className='flex justify-self-end justify-between items-center'>
                <button className=' bg-gradient-to-r from-blue-200 to-rose-200 rounded-full w-8 h-8 flex items-center justify-center' onClick={() => swiper.slidePrev()}>
                    <img src="/assets/arrowRight.svg" alt="logo" className="object-contain z-10 rotate-180 transform" />
                </button>
                <button className=' bg-gradient-to-r from-blue-200 to-rose-200 rounded-full w-8 h-8 flex items-center justify-center' onClick={() => swiper.slideNext()}>
                    <img src="/assets/arrowRight.svg" alt="logo" className="object-contain z-10" />
                </button>
            </div>
        </div>
    )
}

export default Card