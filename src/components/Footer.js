const Footer = () => {
    return (
        <>
        <div className="bg-white flex items-center justify-center flex-col pb-12">
            <img src="/assets/logoWithoutBackground.png" alt="logo" className="w-16 h-16 object-contain z-10 filter invert" />
            <div className="flex flex-row my-4">
                <a target="_blank" href="https://facebook.com/alfirmaagency"><img src="/assets/facebook.svg"  className="w-6 h-6 mx-2" /></a>
                <a target="_blank" href="https://instagram.com/alfirma.agency"><img src="/assets/instagram.svg" className="w-6 h-6 mx-2" /></a>
                <a target="_blank" href="https://linkedin.com/company/al-firma"><img src="/assets/linkedin.svg"  className="w-6 h-6 mx-2" /></a>
            </div>

            <hr className="w-1/2 border-purple-550 my-4" />

            <p className="text-xs">Tous droits réservés - Al Firma {new Date().getFullYear()}

            </p>
        </div>
        </>
    )
}

export default Footer