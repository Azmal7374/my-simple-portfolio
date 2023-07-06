// import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import Marquee from "react-fast-marquee";
import { Fade } from "react-awesome-reveal";
const Testimonial = () => {
  return (
    <div className="mt-20 md:px-20">
      <div className="relative">
        <h1 className=" text-6xl md:text-8xl opacity-10 text-center ">
        
           <Fade   delay={1e3} cascade damping={1e-1} className="">  Testimonial</Fade>
        
        </h1>
        <h3 className="font-bold text-2xl md:text-4xl  text-center absolute left-1/2 top-1/2   bottom-1/2  text-white -translate-x-1/2 -translate-y-1/2">
          Client Speak
        </h3>
        
      </div>
      <Marquee>
        <div className="mt-10 flex gap-10">
          <div className="p-8 bg-[#373a3d] card w-96   shadow-xl">
            <div className="flex  gap-5 items-center ">
              <div>
                <img
                  className="w-14 h-14 border rounded-full "
                  src="https://harnishdesign.net/demo/react/simone/demo/images/testimonial/client-sm-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <h2 className="font-bold text-white">Chirs Tom</h2>
                <p className="font-bold">User from UK</p>
              </div>
            </div>

            <p className="mt-5 font-bold mb-3">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eligendi quibusdam voluptatum magnam, harum quod omnis impedit
              fuga voluptatem vitae eaque! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Alias praesentium labore amet quos"
            </p>
            <Rating style={{ maxWidth: 100 }} value={3} readOnly />
          </div>

          <div className="p-8 bg-[#373a3d] card w-96   shadow-xl">
            <div className="flex  gap-5 items-center ">
              <div>
                <img
                  className="w-14 h-14 border rounded-full "
                  src="https://harnishdesign.net/demo/react/simone/demo/images/testimonial/client-sm-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-white font-bold ">Chirs Tom</h2>
                <p className="font-bold">User from UK</p>
              </div>
            </div>

            <p className="mt-5 font-bold mb-2">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eligendi quibusdam voluptatum magnam, harum quod omnis impedit
              fuga voluptatem vitae eaque! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Alias praesentium labore amet quos"
            </p>
            <Rating style={{ maxWidth: 100 }} value={4} readOnly />
          </div>

          <div className="p-8 bg-[#373a3d] card w-96   shadow-xl">
          <div className="flex  gap-5 items-center ">
            <div>
              <img
                className="w-14 h-14 border rounded-full "
                src="https://harnishdesign.net/demo/react/simone/demo/images/testimonial/client-sm-1.jpg"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-white font-bold ">Chirs Tom</h2>
              <p className="font-bold">User from UK</p>
            </div>
          </div>

          <p className="mt-5 font-bold mb-2">
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Eligendi quibusdam voluptatum magnam, harum quod omnis impedit
            fuga voluptatem vitae eaque! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Alias praesentium labore amet quos"
          </p>
          <Rating style={{ maxWidth: 100 }} value={4} readOnly />
        </div>
         
        
        <div className="p-8 bg-[#373a3d] card w-96 shadow-xl mr-10">
        <div className="flex  gap-5 items-center ">
          <div>
            <img
              className="w-14 h-14 border rounded-full "
              src="https://harnishdesign.net/demo/react/simone/demo/images/testimonial/client-sm-2.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-white font-bold ">Chirs Tom</h2>
            <p className="font-bold">User from UK</p>
          </div>
        </div>

        <p className="mt-5 font-bold mb-2">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Eligendi quibusdam voluptatum magnam, harum quod omnis impedit
          fuga voluptatem vitae eaque! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Alias praesentium labore amet quos"
        </p>
        <Rating style={{ maxWidth: 100 }} value={4} readOnly />
      </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Testimonial;
