import React, { useEffect, useRef } from 'react';

const Loading = ({ setLoading }) => {
    const loadingBarRef = useRef(null);
    const [showLogo, setShowLogo] = React.useState(false);
    const [destroy, setDestroy] = React.useState(false)
    useEffect(() => {
        // Listen for the end of the animation on the loading bar
        const handleAnimationEnd = () => {
            setShowLogo(true);
            setTimeout(() => {
                setLoading(false);
                setTimeout(() => {
                    setDestroy(true)  
                }, 1000)
            }, 1000);
        };

        const loadingBar = loadingBarRef.current;
        loadingBar.addEventListener('animationend', handleAnimationEnd);

        return () => {
            if (loadingBar) {
                loadingBar.removeEventListener('animationend', handleAnimationEnd);
            }
        };
    }, [setLoading]);

    return (
        !destroy &&
        <div className='flex flex-col justify-center items-center w-full fixed top-0 left-0 right-0 bottom-0 z-50'
             style={{backgroundImage: "url('/assets/illustrations/background.png')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
            <img src="/assets/logoWithoutBackground.png" alt="logo" className={` w-20 mb-8 object-contain transform transition-all duration-200 ${showLogo ? 'opacity-100' : 'opacity-0'}`} />
             
            <div className="w-80 px-4">
                <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                    <div ref={loadingBarRef} className=" bg-white h-full rounded-full animate-loading-bar"></div>
                </div>
            </div>
        </div>
    );
}

export default Loading;