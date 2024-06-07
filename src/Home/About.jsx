import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { AiOutlineHome } from "react-icons/ai";


const About = () => {
    return (
        <div>
            <Helmet>
                <title>Groove Real Estate | About</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="my-14 bg-slate-500 py-10 px-4 flex gap-8">
                <img className="w-1/2" src={`https://i.postimg.cc/7LzsWWQf/real-estate.jpg`} alt="" />
                <div className="w-1/2 h-full bg-zinc-900 p-6">
                    <p className="flex gap-2 items-center text-lime-500 font-semibold text-lg"><AiOutlineHome /> About Us</p>
                    <h1 className="font-bold text-2xl text-slate-200">Welcome to <span className="font-display">Groove Real Estate Inc.</span>, where we guide you through every step of finding your perfect place.</h1>
                    <p className="my-2 text-slate-400"><i>Whether you are a first-time buyer, seasoned investor, or looking to upsize or downsize, we understand the importance of finding a home that reflects your unique lifestyle. Our dedicated team of real estate professionals is passionate about helping you navigate the local market, discover hidden gems, and achieve your real estate goals.</i></p>
                    <h2 className="font-bold text-xl text-slate-200">Our Missions:</h2>
                    <ol>
                        <li className="my-2 text-slate-900 bg-lime-100 p-2 rounded-lg">To guide our clients through every step of their real estate journey, from understanding local markets to securing their ideal property, by leveraging our local expertise and unwavering dedication.</li>
                        <li className="my-2 text-slate-900 bg-lime-100 p-2 rounded-lg">To elevate the real estate experience by offering exceptional customer service, unparalleled negotiation skills, and a commitment to finding the perfect fit for each clients unique needs and aspirations.</li>
                        <li className="my-2 text-slate-900 bg-lime-100 p-2 rounded-lg">To build lasting relationships with our clients by becoming their trusted real estate partner throughout their dream home journey and beyond.</li>
                    </ol>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;