import { Fade } from "react-awesome-reveal";
import { FaDribbble, FaFacebook, FaFacebookMessenger, FaGit, FaGitAlt, FaGoogle, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="mt-20 md:px-20">
        <div className="relative">
        <h1 className=" text-6xl md:text-8xl opacity-10 text-center ">
   
       <Fade   delay={1e3} cascade damping={1e-1} className="">CONTACT</Fade>
    
        </h1>
        <h3 className="font-bold text-2xl md:text-4xl  text-center absolute left-1/2 top-1/2   -bottom-1/2  text-white -translate-x-1/2 -translate-y-1/2">
        Get in Touch
        </h3>


        <div className="mt-20 md:flex gap-20">
        <div className="w-3/5 mx-auto md:mx-0 md:w-auto">
        <h1 className="text-2xl font-bold text-white">ADDRESS</h1>
        <p className="mt-4">4th Floor, Plot No.22, <br />
        145 Murphy Canyon Rd. <br />
        San Diego CA 2028</p>
        <p className="flex gap-2 mt-8"><FaPhone className="text-orange-500"></FaPhone> +8801 795 900 273</p>
        <p className="flex gap-2 mt-3"> <FaPhone className="text-orange-500"> </FaPhone>(060) 555 545 555</p>
        
        <p className="flex gap-2 mt-3"> <FaMailBulk className="text-orange-500"></FaMailBulk> (060) 555 545 555</p>

        <h3 className="text-2xl font-bold text-white mt-7">FOLLOW ME</h3>
        <div className="mt-6 flex gap-6" data-aos="fade-up">
        <a href="">
        <FaDribbble title="Dribble" className="hover:text-blue-500"></FaDribbble>
        </a>
       <a href="https://www.facebook.com/profile.php?id=100015683137075">
       <FaFacebook title="Facebook"  className="hover:text-blue-500"></FaFacebook>
       </a>
        <a href="https://twitter.com/azmal995902">
        <FaTwitter title="Twitter" className="hover:text-blue-500"> </FaTwitter>
        </a>
       <a href="https://www.google.com/">
       <FaGoogle title="Google" className="hover:text-blue-500"></FaGoogle>
       </a>
        <a href="https://github.com/">
        <FaGitAlt title="GitHub" className="hover:text-blue-500"></FaGitAlt> 
        </a>
        </div>
        </div>

        <div className=" mt-8 md:mt-0 w-full" data-aos="fade-up">
        <div className="md:flex gap-5">
        <input type="text"    placeholder="Name" className="p-4 w-full" />
        <input type="email"    placeholder="Email" className="p-4 w-full mt-4 md:mt-0" />
        </div>
         <textarea className="mt-4 w-full p-3"   cols="20" rows="7" placeholder="Tell use more about your needs....."></textarea>

      <div className="text-center">
      <button className=" mt-6 text-white rounded-full border px-4 md:px-8 p-3 border-gray-700   hover:bg-[#373a3d]"> Send Message</button>
      </div>
         
      
        </div>
        </div>
      </div>

        </div>
    );
};

export default Contact;