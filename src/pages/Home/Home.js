import React from 'react';

function Home() {
    return (
        <>
            <div className=' bg-purple-950 flex-1 h-screen flex flex-col items-center py-6'>
                <h1 className='text-white'><span className=' font-bold'>Al</span>Firma</h1>

                <div className='flex justify-center items-center px-14 my-28'>
                    <div>
                    <h1 className=' text-5xl text-white text-left self-center'>Un lieu unique pour votre entreprise</h1>
                    <h2>Lorem ipsum</h2>
                    </div>
                    <img src='/assets/fusee.png' alt='illustration' className='w-96 h-96' />
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
        </>
    );
}

export default Home;
