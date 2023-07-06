import { FaNode, FaReact } from "react-icons/fa";
import { MdNetworkWifi1Bar } from 'react-icons/md';
import { AiFillHtml5 } from 'react-icons/ai';
import { TbBrandJavascript } from 'react-icons/tb';
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";

const Service = () => {
    return (
        <div className="mt-20 md:px-20">
        <Helmet>
        <title>FolioMine | Service</title>
        </Helmet>
        <div className="relative">   
        <h1
         className=" text-6xl md:text-8xl opacity-10 text-center ">
         <Fade   delay={1e3} cascade damping={1e-1} className="text-orange-400">SERVICES</Fade>
         </h1>
         <h3 className="font-bold text-2xl md:text-4xl  text-center absolute left-1/2 top-1/2   bottom-1/2  text-white -translate-x-1/2 -translate-y-1/2">What I Do?</h3>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        
        <div className="flex gap-4 items-center" data-aos="fade-up">
          <div className="icon border border-[#373a3d] p-2 h-20 w-28 flex justify-center  items-center bg-[#373a3d]">
          <FaReact className="text-5xl text-orange-500"></FaReact>
          </div>
          <div className="">
          <h2 className="text-3xl text-white font-bold">ReactJs Developer</h2>
          <p className="mt-4">The React. js framework is an open-source JavaScript framework and library developed by Facebook.  </p>
          </div>
        </div>

        <div className="flex gap-4 items-center" data-aos="fade-down">
        <div className="icon border border-[#373a3d] p-2 h-20 w-28 flex justify-center  items-center bg-[#373a3d]">
        <MdNetworkWifi1Bar className="text-5xl text-orange-500"></MdNetworkWifi1Bar>
        </div>
        <div className="">
        <h2 className="text-3xl text-white font-bold">Advance Networking</h2>
        <p className="mt-4">A network is two or more devices connected through a link. A link is a communication pathway that transfers data from one device to another.  </p>
        </div>
      </div>


      <div className="flex gap-4 items-center" data-aos="fade-up">
      <div className="icon border border-[#373a3d] p-2 h-20 w-28 flex justify-center  items-center bg-[#373a3d]">
      <AiFillHtml5 className="text-5xl text-orange-500"></AiFillHtml5>
      </div>
      <div className="">
      <h2 className="text-3xl text-white font-bold">Html Developer</h2>
      <p className="mt-4">The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. </p>
      </div>
    </div>

    <div className="flex gap-4 items-center" data-aos="fade-down">
    <div className="icon border border-[#373a3d] p-2 h-20 w-28 flex justify-center  items-center bg-[#373a3d]">
    <TbBrandJavascript className="text-5xl text-orange-500"></TbBrandJavascript>
    </div>
    <div className="">
    <h2 className="text-3xl text-white font-bold">Javscript Developer</h2>
    <p className="mt-4"> JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more.</p>
    </div>
  </div>

  <div className="flex gap-4 items-center" data-aos="fade-up">
  <div className="icon border border-[#373a3d] p-2 h-20 w-28 flex justify-center  items-center bg-[#373a3d]">
  <FaReact className="text-5xl text-orange-500"></FaReact>
  </div>
  <div className="">
  <h2 className="text-3xl text-white font-bold">Mern Stack Developer</h2>
  <p className="mt-4">The React. js framework is an open-source JavaScript framework and library developed by Facebook.  </p>
  </div>
</div>

<div className="flex gap-4 items-center" data-aos="fade-down">
<div className="icon border border-[#373a3d] p-2 h-20 w-28 flex justify-center  items-center bg-[#373a3d]">
<FaNode className="text-5xl text-orange-500"></FaNode>
</div>
<div className="">
<h2 className="text-3xl text-white font-bold">NodeJs Developer</h2>
<p className="mt-4">Node. js comes with a variety of CLI options. These options expose built-in debugging, multiple ways to execute scripts, and other helpful runtime options  </p>
</div>
</div>


        </div>
        


        </div>
    );
};

export default Service; 