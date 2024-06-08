import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const Login = () => {
    const { signIn, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
    const [regError, setRegError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        // console.log(form);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email);
        console.log(password);

        setRegError('');

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                setRegError('Invalid Email-ID or Password!');
            })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGithub = () => {
        signInWithGitHub()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <Helmet>
                <title>Groove Real Estate | Login</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className=" shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body bg-base-200">
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
                            <div className="flex justify-between items-center gap-2 mt-4 mb-2">
                                <button className="bg-[#ba8759] w-1/2 px-6 py-3 text-white font-semibold text-lg">Login</button>
                                <a href="#" className="label-text-alt link link-hover text-center text-base font-semibold w-1/2">Forgot password?</a>
                            </div>
                        </div>
                        {
                            regError && <p className="text-red-700 text-center">{regError}</p>
                        }
                        <div>
                            <button onClick={handleGoogleSignIn} className="bg-[#d3d3d3] w-full py-2 text-black font-semibold text-xs flex justify-center gap-2 items-center"><span className="text-xl"><FcGoogle /></span>LOG IN WITH GOOGLE</button>
                            <button onClick={handleGithub} className="bg-[#555555] w-full py-2 text-white font-semibold text-xs flex justify-center gap-2 items-center mt-4"><span className="text-xl"><FaGithub /></span>LOG IN WITH GITHUB</button>
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