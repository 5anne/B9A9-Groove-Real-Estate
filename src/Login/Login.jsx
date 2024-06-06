import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Helmet } from "react-helmet-async";


const Login = () => {
    return (
        <div>
            <Helmet>
                <title>Groove Real Estate | Login</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className=" shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                    <form className="card-body bg-base-200">
                        <h2 className="border-b-2 py-2 border-[#ba8759] text-lg text-center">LOG IN</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input rounded-none input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="******" name="password" className="input rounded-none input-bordered" required />
                            <div className="flex justify-between items-center gap-2 my-4">
                                <button className="bg-[#ba8759] w-1/2 px-6 py-3 text-white font-semibold text-lg">Login</button>
                                <a href="#" className="label-text-alt link link-hover text-center text-base font-semibold w-1/2">Forgot password?</a>
                            </div>
                        </div>
                        <div>
                            <button className="bg-[#ba160c] w-full py-2 text-white text-xs">LOG IN WITH GOOGLE</button>
                            <button className="bg-[#00416a] w-full py-2 text-white text-xs mt-4">LOG IN WITH FACEBOOK</button>
                        </div>
                        <p className="text-xs text-center">Do Not Have an Account? Please <Link className="text-blue-800 hover:underline" to="/register">Register</Link></p>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;