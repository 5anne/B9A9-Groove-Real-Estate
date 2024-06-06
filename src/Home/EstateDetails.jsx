import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Helmet } from "react-helmet-async";

const EstateDetails = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    console.log(details);
    console.log(id);

    const [eData, setEData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const eDetail = details.find(data => data.id === idInt);
        console.log(eDetail);
        if (eDetail) {
            setLoading(false);
            setEData(eDetail);
        }

    }, [details])

    const { estate_title, image, description, location, facilities, status, area, price } = eData;
    console.log(facilities);

    console.log(eData);
    return (
        <div>
            <Helmet>
                <title>Groove Real Estate | Details/{id}</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="flex justify-center my-12 py-12 px-4 mx-8 bg-slate-100">
                <div className="w-1/2">
                    <h1 className="font-bold font-display text-2xl mb-4">{estate_title}</h1>
                    <img src={image} alt="" />
                    <div className="bg-white p-4 leading-relaxed">

                        <span className="text-base font-display font-semibold uppercase text-blue-900">Description:</span>
                        <p className="text-gray-500">{description}</p>
                        <p className="mt-2"><span className="text-gray-600">Location:</span> <span className="text-gray-500">{location}</span></p>
                        <p className="text-base font-display font-semibold uppercase text-blue-900 mt-4">Features:</p>
                        <div>
                            {!loading &&
                                facilities.map((facility, idx) => <li key={idx}>{facility}</li>)
                            }
                        </div>
                        <div className="flex gap-8 items-center font-display text-2xl font-semibold my-4">
                            <p>Status: {status}</p>
                            <p>Area: {area}</p>
                        </div>
                        <p className="text-[#ba8759] text-2xl font-bold">Price: {price} BDT</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default EstateDetails;