import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Footer from "../Shared/Footer";
import Estate from "./Estate";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Groove Real Estate | Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <Estate></Estate>
            <Footer></Footer>
        </div>
    );
};

export default Home;