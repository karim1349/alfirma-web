const Loading = () => {
    return (
        <div className='flex justify-center items-center flex-col-reverse w-full' style={{backgroundImage: "url('/assets/illustrations/background.png')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>        
        <img src="/assets/logoText.png" alt="logo" className="w-1/2 md:w-1/4" />
        LOADING
        </div>
    )
}

export default Loading