import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Groove Real Estate | Contact</title>
            </Helmet>
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default Contact;