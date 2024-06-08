import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useLoaderData } from "react-router-dom";
import BlogDetails from "./BlogDetails";


const Blog = () => {
    const blogData = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Groove Real Estate | Blog</title>
            </Helmet>
            <Navbar></Navbar>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/26nqskrP/Post-Image.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="p-4 md:w-2/3 lg:w-1/2">
                            <h1 className="mb-5 text-xl md:text-3xl font-bold font-display">Décorate, Design, Maintain: Create Your Dream Home</h1>
                            <p className="mb-5 text-sm">Unleash your inner home decorator and builder! This page provides all the inspiration and information you need to create your dream home. Dive into a world of stunning décor ideas, practical building design tips, and essential maintenance guides. Transform your living space into a masterpiece, one step at a time.</p>
                            <button className="bg-[#2f4f4f] text-white px-8 py-4 text-lg">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-14 bg-[#ffefd5] p-4 md:py-12 md:px-8">
                <h1 className="text-4xl font-medium text-center font-display pb-8">All Posts</h1>
                <div className="flex justify-center"><p className="border w-40 border-[#ba8759]"></p></div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
                    {
                        blogData.map(blog => <BlogDetails key={blog.id} blog={blog}></BlogDetails>)
                    }
                </div>
                <div className="flex justify-center">
                    <button className="btn bg-[#49796b] text-white border-2 border-[#004b49]">Show More...</button>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Blog;