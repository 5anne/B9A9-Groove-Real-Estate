import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { ImAddressBook } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";


const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Groove Real Estate | Contact</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="bg-blue-50 p-8 flex justify-center">
                <div className="bg-white m-14 p-10 md:w-2/3 lg:w-1/2">
                    <h1 className="text-3xl lg:text-4xl font-medium text-center font-display pb-8">Contact Us</h1>
                    <div className="flex justify-center"><p className="border w-40 border-[#ba8759]"></p></div>
                    <div className="flex flex-col lg:flex-row gap-8 mt-8">
                        <div className="bg-cyan-950 p-4 lg:w-1/2">
                            <h1 className="font-semibold text-slate-400 font-display text-2xl">Contact Info</h1>
                            <div className="bg-white rounded-lg p-4 mt-4">
                                <h2 className="flex gap-2 items-center font-semibold"><ImAddressBook /> Address:</h2>
                                <p className="text-sm text-gray-600">House # 9/A, Road # 70, Gulshan-01, Dhaka-1212</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 mt-4">
                                <h2 className="flex gap-2 items-center font-semibold"><BsFillTelephoneFill /> Telephone:</h2>
                                <p className="text-sm text-gray-600">+1 213-718-9077</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 mt-4">
                                <h2 className="flex gap-2 items-center font-semibold"><MdMarkEmailUnread /> Email Us:</h2>
                                <p className="text-sm text-gray-600">groove_real_estate@gmail.com</p>
                            </div>
                        </div>
                        <div className="h-full">
                            <h1 className="text-blue-950 font-display text-2xl">Send us a Message</h1>
                            <form>
                                <input className="border-2 border-gray-500 rounded-lg p-2 my-2 w-full" type="text" placeholder="Your Name" />
                                <input className="border-2 border-gray-500 rounded-lg p-2 my-2 w-full" type="email" placeholder="Your Email" />
                                <input className="border-2 border-gray-500 rounded-lg p-2 my-2 w-full" type="number" placeholder="Your Phone Number" />
                                <input className="border-2 border-gray-500 rounded-lg p-2 pb-28 my-2 w-full" type="text" placeholder="Write Message"/>
                            </form>
                            <button className="bg-cyan-950 px-4 py-2 text-white rounded-md w-full">Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;