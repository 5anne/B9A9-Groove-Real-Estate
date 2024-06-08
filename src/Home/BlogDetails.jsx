import { MdInsertComment } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const BlogDetails = ({ blog }) => {
    const { image, title, publishedDate, author, comments, category, excerpt } = blog;
    return (
        <div className="">
            <img className="h-[250px] w-full" src={image} alt="" />
            <div className="bg-[#ba875980] p-8">
                <div className="flex justify-between items-center my-1">
                    <p className="text-gray-700">{publishedDate}</p>
                    <p className="text-gray-700">#{category}</p>
                </div>
                <h1 className="text-black text-lg md:text-xl font-semibold">{title}</h1>
                <p className="font-display">{excerpt}</p>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-gray-950 font-semibold">#{author}</p>
                    <p className="flex items-center gap-2"><MdInsertComment /><span>{comments}</span></p>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <button className="border-2 border-[#ba875980] px-3 py-2 flex items-center gap-2 rounded-lg hover:bg-orange-100 font-semibold">Learn more <BsArrowRight /></button>
                    <button className="border-2 border-[#ba875980] px-3 py-2 flex items-center gap-2 rounded-lg hover:bg-orange-100 font-semibold">Share Post <FaArrowUpRightFromSquare /></button>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;