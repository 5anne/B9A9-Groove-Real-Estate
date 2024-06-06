import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
        <NavLink className={({ isActive }) => (isActive && 'text-lime-500 hover:underline')} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive && 'text-lime-500 hover:underline')} to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </>
    return (
        <div className="bg-[#100c08] py-6">
            <div className="flex justify-around items-center pb-3">
                <h1 className="font-display text-4xl font-bold text-white">Groove</h1>
                <div className="hidden md:flex items-center gap-6 text-lg text-gray-400">
                    {links}
                </div>
                <Link to="/login"><button className="font-semibold text-xl bg-lime-500 px-8 py-3">Login</button></Link>
            </div>
            <div className="flex justify-center items-center gap-6 text-lg text-gray-400 md:hidden">
                {links}
            </div>
        </div>
    );
};

export default Navbar;