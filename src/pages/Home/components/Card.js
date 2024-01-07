import { useSwiper } from 'swiper/react';

const Card = ({image, title, text, review}) => {
    const swiper = useSwiper();
    return (
        <div className=" bg-white flex flex-1 self-center flex-col rounded-2xl shadow-md m-8 h-96 p-4">
            <div className='flex flex-1 flex-col overflow-hidden '>
                <img src={image} alt="logo" className="h-16 object-contain z-10" />
                <h1 className='text-center mb-3 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400'>{title}</h1>
                <p className="text-xs font-light text-center">{text}</p>
                {review && 
                    <p className="text-xs font-semibold italic my-2 text-center">"{review}"</p>
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