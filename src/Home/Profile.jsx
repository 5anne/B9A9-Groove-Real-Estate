import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";


const Profile = () => {
    const { user } = useContext(AuthContext);
    const { displayName, photoURL, email } = user;
    console.log(displayName, photoURL, email);
    const [active, setActive] = useState(false);
    const [update, setUpdate] = useState(false);
    const [name, setName] = useState('');
    const inputRef = useRef(null);


    const handleEdit = e => {
        e.preventDefault();
        setActive(true);
    }

    const handleUpdate = e => {
        e.preventDefault();
        const upname = inputRef.current.value;
        console.log(upname);
        setUpdate(true);
        setName(upname);
    }

    const handleChanges = e => {
        e.preventDefault();
        console.log(name);
        updateProfile(user, {
            displayName: name
        })
            .then(() => {
                console.log('profile updated')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <Helmet>
                <title>Groove Real Estate | User_Profile</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="bg-blue-50 md:p-8 flex justify-center">
                <div className="bg-white my-4 md:m-14 p-8 md:w-1/2">
                    <h1 className="text-4xl font-medium text-center font-display pb-8">User Login Info</h1>
                    <div className="flex justify-center"><p className="border w-40 border-[#ba8759]"></p></div>
                    <div className="flex justify-center my-8">
                        <img src={photoURL} alt="" />
                    </div>
                    <div className="flex justify-center my-8">
                        <form action="">
                            <div>
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    onChange={handleUpdate}
                                    ref={inputRef}
                                    className={active ? "bg-gray-200 border-[1px] border-green-800 px-4 py-2" : "bg-gray-200 px-4 py-2"}
                                    type="text"
                                    name="name"
                                    placeholder={displayName}
                                    disabled={!active} />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Email ID</span>
                                </label>
                                <input className="bg-gray-200 px-4 py-2" type="email" placeholder={email} disabled />
                            </div>
                            <div className="flex justify-between items-center my-8">
                                <button onClick={handleEdit} className="btn bg-gray-300">Edit</button>
                                <button onSubmit={handleChanges} className={update ? "btn bg-gray-500" : "hidden"} > Save the Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
            <Footer></Footer>
        </div >
    );
};

export default Profile;