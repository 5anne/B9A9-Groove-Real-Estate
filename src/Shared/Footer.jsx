import { FaClock, FaFacebookF, FaInstagramSquare, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#242124] py-4 md:py-8 px-4 md:px-14">
            <div className="flex justify-between items-center border-b-2 border-gray-600 py-12">
                <h1 className="font-bold font-display text-2xl lg:text-6xl text-gray-200"><i>Discover your dream home</i></h1>
                <button className="text-white font-medium bg-[#ba8759] py-3 px-8">Search</button>
            </div>
            <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start text-white text-center md:text-start py-12">
                <div className="leading-loose my-4 md:my-0">
                    <h1 className="text-gray-300 font-semibold">GROOVE REAL ESTATE INC.</h1>
                    <p className="text-gray-400 text-sm">Copyright © 2024 - All right reserved</p>
                </div>
                <nav className="my-4 md:my-0">
                    <h6 className="text-gray-300 font-bold text-lg">Contact Us</h6>
                    <a className="link link-hover flex justify-center md:justify-start items-center gap-2 my-2 text-sm text-gray-400"><FaPhoneAlt /><span>+1 213-718-9077</span></a>
                    <a className="link link-hover flex justify-center md:justify-start items-center gap-2 my-2 text-sm text-gray-400"><FaMapMarkerAlt /><span>Gulshan, Dhaka</span></a>
                    <a className="link link-hover flex justify-center md:justify-start items-center gap-2 my-2 text-sm text-gray-400"><FaClock /><span>10 AM - 9 PM</span></a>
                </nav>
                <nav className="my-4 md:my-0">
                    <h6 className="text-gray-300 font-bold text-lg">Services</h6>
                    <a className="link link-hover flex justify-center md:justify-start items-center gap-2 my-2 text-sm text-gray-400">Custom Interior Design</a>
                    <a className="link link-hover flex justify-center md:justify-start items-center gap-2 my-2 text-sm text-gray-400">Remodeling</a>
                    <a className="link link-hover flex justify-center md:justify-start items-center gap-2 my-2 text-sm text-gray-400">Renovations</a>
                    <a className="link link-hover flex justify-center md:justify-start items-center gap-2 my-2 text-sm text-gray-400">Home Construction</a>
                </nav>
                <nav className="flex justify-center md:justify-start text-gray-300 gap-4 my-4 md:my-0">
                    <a><FaFacebookF /></a>
                    <a><FaInstagramSquare /></a>
                    <a><FaTwitter /></a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;