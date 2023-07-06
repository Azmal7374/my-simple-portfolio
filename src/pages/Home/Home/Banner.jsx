import { Fade } from 'react-awesome-reveal';
import banner from '../../../assets/12011132-removebg-preview.png'
import {AiOutlineDownload} from 'react-icons/ai';

const Banner = () => {
    return (
        <div className="flex  flex-col-reverse md:flex-row  justify-center items-center bg-[url('https://e0.pxfuel.com/wallpapers/153/636/desktop-wallpaper-grey-background-and-colorful-circle-laptop-abstract-and-background-gray-laptop.jpg')] w-full     
       py-5 md:py-0">
       
        <div className="w-1/2 mx-auto md:mx-0">
        <h1 className="text-2xl md:text-3xl text-white   mt-5 md:mt-0" >Hello! I’m <br />
        <Fade className="text-3xl md:text-4xl"  delay={1e3} cascade damping={1e-1}>Azmal Gazi</Fade></h1>

        <p className='mt-10 text-3xl text-orange-500 font-bold ' data-aos="fade-down">Junior Full Stack Developer</p>

        <a href="https://drive.google.com/file/d/1id4scpRRr5Qw-AYWelLBCj3zmF09v111/view?usp=sharing" target="blank">
        <button className=" mt-10 text-white rounded-full border px-4 md:px-8 p-3 md:p-4 border-gray-700 flex items-center justify-center  bg-orange-500 hover:bg-orange-600 font-bold ">Get Resume
        <AiOutlineDownload className='ml-4 '></AiOutlineDownload>
        </button>
        </a>
        </div>


        <div className=''>
        <img data-aos="fade-up" className="w-2/5 md:w-1/2 mx-auto" src={banner} alt="" />
        </div>
            
        </div>
    );
};

export default Banner;