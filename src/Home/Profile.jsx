import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Profile = () => {
    return (
        <div>
            <Helmet>
                <title>Groove Real Estate | User_Profile</title>
            </Helmet>
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default Profile;