import EstateCard from "./EstateCard";
import 'animate.css';
import { useEffect, useState } from "react";


const Estate = () => {
    
    const [estate, setEstate] = useState([]);
    useEffect(() => {
        fetch('/estate.json')
            .then(res => res.json())
            .then(data => setEstate(data))
    }, [])
    return (
        <div className="my-20 bg-blue-50 px-8">
            <h1 className="text-4xl font-medium text-center font-display pt-16 pb-8 animate__animated animate__bounce">Uncover Featured Listings</h1>
            <div className="flex justify-center"><p className="border w-1/2 border-[#ba8759]"></p></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
                {
                    estate?.map(eData => <EstateCard key={eData.id} eData={eData}></EstateCard>)
                }
            </div>
        </div>
    );
};

export default Estate;