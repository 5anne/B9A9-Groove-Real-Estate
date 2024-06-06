

const EstateCard = ({ eData }) => {
    const { id, image, estate_title, segment_name, description, price, status, area, location, facilities } = eData;
    return (
        <div className="h-max">
            <img className="h-[200px] w-full" src={image} alt="" />
            <div className="bg-[#ba875980] leading-loose p-8">
                <h1 className="text-black text-xl font-semibold">{estate_title}</h1>
                <p className="text-gray-600">{location}</p>
                <div className="flex justify-between items-center text-lg font-semibold">
                    <p>Status: {status}</p>
                    <p>Area: {area}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <p className="font-extrabold text-3xl text-[#ba8759] font-display">{price} BDT</p>
                    <button className="text-gray-300 font-medium text-base bg-[#43302e] py-3 px-4 hover:bg-[#43302e80]">View Property</button>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;