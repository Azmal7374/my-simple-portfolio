import { Outlet } from "react-router-dom";
import Footer from "../pages/share/Footer/Footer";
import Navbar from "../pages/share/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Main = () => {
    useEffect(() => {
        AOS.init(
            {
                offset: 200,
                duration: 600,
                easing: 'ease-in-sine',
                delay: 100, 
            }
        );
        AOS.refresh();
      }, []);
    return (
        <div>
        <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;