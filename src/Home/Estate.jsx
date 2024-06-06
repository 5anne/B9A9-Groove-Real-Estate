import { useLoaderData } from "react-router-dom";
import EstateCard from "./EstateCard";


const Estate = () => {
    const estate = useLoaderData();
    console.log(estate);
    return (
        <div className="my-20 bg-blue-50 px-8">
            <h1 className="text-4xl font-medium text-center font-display pt-16 border-b-2 border-blue-200 border-dashed pb-8">Uncover Featured Listings</h1>
            <div className="grid md:grid-cols-3 gap-8 py-12">
                {
                    estate.map(eData => <EstateCard key={eData.id} eData={eData}></EstateCard>)
                }
            </div>
        </div>
    );
};

export default Estate;