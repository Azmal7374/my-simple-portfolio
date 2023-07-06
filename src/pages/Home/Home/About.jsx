import { Fade } from "react-awesome-reveal";
import CountUp from 'react-countup';

const About = () => {
    return (
        <div className="mt-20  ">
            <div className="relative">   
            <h1
             className=" text-6xl md:text-8xl opacity-10 text-center ">
             <Fade   delay={1e3} cascade damping={1e-1} className="text-orange-400">ABOUT ME</Fade>
             </h1>
             <h3 className="font-bold text-2xl md:text-4xl  text-center absolute left-1/2 top-1/2   bottom-1/2  text-white -translate-x-1/2 -translate-y-1/2">Know Me More</h3>
             
            </div>
            <div className="md:flex justify-center gap-10  mt-20 md:px-20">
            <div className="md:w-3/5 mx-auto md:mx-0">
            <h2 className="text-xl md:text-3xl text-white font-bold">I'm <Fade   delay={1e3} cascade damping={1e-1}  className="text-orange-400">Azmal Gazi</Fade>, a Web Developer</h2>
            <p className="mt-4">
            I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            <p className="mt-4"> Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
            </p>
            </div>
            <div className="md:w-2/5 mx-auto mt-10 md:mt-0">
            <p ><span className="font-bold">Name:</span> <span className="px-4">Azmal Gazi</span></p>
            <hr className="mt-4 border border-gray-700" />
            <p className="mt-4" ><span className="font-bold ">Eamil:</span> <span className="px-4">azmalgazi8@gmail.com</span></p>
            <hr className="mt-4 border border-gray-700" />

            <p className="mt-4"  ><span className="font-bold">Age:</span> <span className="px-7">22</span></p>
            <hr className="mt-4 border border-gray-700" />

            <p className="mt-4" ><span className="font-bold">From:</span> <span className="px-4">Barisal, Bangladesh</span></p>
            <button className="bg-orange-500 rounded-full w-32 md:w-40 p-2 md:p-4 mt-6 text-white font-bold">Download CV</button>
            </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4" data-aos="fade-up">
            <div className="md:px-20 mt-20 border-r  border-gray-700">
            <CountUp end={2} duration={5}className="text-4xl md:text-5xl text-white"/>
            <h2 className="mt-3">Years Experience</h2>
            </div>
            <div className="md:px-20 mt-20 md:border-r border-gray-700">
            <CountUp end={40} duration={5}className=" text-4xl md:text-5xl text-white"/>
            <h2 className="mt-3">Happy Clients</h2>
            </div>

            <div className="md:px-20 mt-20 border-r border-gray-700">
            <CountUp end={20} duration={5}className="text-4xl md:text-5xl text-white"/>
            <h2 className="mt-3">Projects Done</h2>
            </div>

            <div className="md:px-20 mt-20 ">
            <CountUp end={5} duration={5}className="text-4xl md:text-5xl text-white"/>
            <h2 className="mt-3">Get Awards</h2>
            </div>
            
            </div>
            
        </div>
    );
};

export default About;