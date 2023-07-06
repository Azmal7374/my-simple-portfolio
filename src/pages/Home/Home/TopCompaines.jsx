import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Fade } from "react-awesome-reveal";
const TopCompaines = () => {
    return (
        <div className="mt-20 md:px-20">
        <div className="relative">
        <Fade   delay={1e3} cascade damping={1e-1} className=" text-4xl md:text-8xl opacity-10 text-center ">
        Work With Trusted Comapny.
        </Fade>
        <h3 className="font-bold text-2xl md:text-4xl  text-center absolute left-1/2 top-1/2  bottom-1/2  text-white -translate-x-1/2 -translate-y-1/2">
        Favourite Clients
        </h3>
        
      </div>

        <Swiper  
        slidesPerView={4}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide className="mt-20 hover:bg-[#373a3d] ">
        <img data-aos="zoom-in-up" className="border  border-gray-700 p-2 md:p-14  w-full" src="https://htmldemo.net/lendex/lendex/assets/images/company-logo/4.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className="mt-20 hover:bg-[#373a3d]">
        <img data-aos="zoom-out-up" className="border  border-gray-700 p-2 md:p-14  w-full" src="https://htmldemo.net/lendex/lendex/assets/images/company-logo/1.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className="mt-20 hover:bg-[#373a3d]">
        <img data-aos="zoom-in-up"  className="border  border-gray-700 p-2 md:p-14  w-96 md:w-full" src="https://htmldemo.net/lendex/lendex/assets/images/company-logo/2.png" alt="" />
        </SwiperSlide>


        <SwiperSlide className="mt-20 hover:bg-[#373a3d]">
        <img data-aos="zoom-out-up"  className="border  border-gray-700 p-2 md:p-14 w-full" src="https://htmldemo.net/lendex/lendex/assets/images/company-logo/4.png" alt="" />
        </SwiperSlide>

        <SwiperSlide  className="mt-20 hover:bg-[#373a3d]">
        <img data-aos="zoom-in-up"  className="border  border-gray-700 p-2 md:p-14 w-full" src="https://htmldemo.net/lendex/lendex/assets/images/company-logo/2.png" alt="" />
        </SwiperSlide>
        
      </Swiper>

        </div>
    );
};

export default TopCompaines;