import { Helmet } from "react-helmet-async";
import About from "./Home/About";
import Banner from "./Home/Banner";
import Blog from "./Home/Blog";
import Contact from "./Home/Contact";
import MyWork from "./Home/MyWork";
import Services from "./Home/Services";
import Summary from "./Home/Summary";
import Testimonial from "./Home/Testimonial";
import TopCompaines from "./Home/TopCompaines";

const Home = () => {
    return (
        <div className="mb-20">
        <Helmet>
        <title>FolioMine | Home</title>
        </Helmet>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Summary></Summary>
            <MyWork></MyWork>
            <Testimonial></Testimonial>
            <TopCompaines></TopCompaines>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;