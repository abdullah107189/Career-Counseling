import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import Slider from "../../components/Slider/Slider";
import WorkShops from "../../components/WorkShops/WorkShops";
import FQ from "../../components/FQ/FQ";
const Home = () => {
    return (
        <div className="p-4">

            <Helmet>
                <title>Home || Career Counseling</title>
            </Helmet>

            <Banner></Banner>
            <Slider></Slider>
            <Services></Services>
            <WorkShops></WorkShops>
            <FQ></FQ>
        </div>
    );
};

export default Home;