const Partner = ({ partner }) => {
    return (
        <div className="flex flex-1 flex-col md:flex-row justify-center items-center h-full px-14 md:px-24">
            <img src={partner.image} alt={partner.name} className="w-32 md:w-64 self-center" />
            <div className="md:ml-8">
                <h1 className="text-white text-sm md:text-md text-justify mt-4 md:mt-0">{partner.description}</h1>
                {partner.review &&
                    <p className="text-gray-400 text-xs italic mt-4 text-justify">"{partner.review}"</p>
                }
            </div>
        </div>
    )
}

export default Partner