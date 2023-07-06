import { FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllBlog = ({blog}) => {
    const {title, date, image, id, category} =blog
    return (
        <div className="mt-10 card lg:card-side bg- bg-[#373a3d] shadow-xl">
        <figure><img data-aos="fade-up-right" className="p-4 w-96 h-64 " src={image} alt="Album"/></figure>
        <div className="mt-5 px-16">
        <div className="md:flex gap-4 items-center">
        <p className="text-white font-semibold">{category}  </p>
        <hr className="border-white w-5" />
        <p>{date}</p>
        </div>
          <h2 className="text-xl md:text-3xl font-bold text-white mt-5">{title}</h2>
        
          <div className="card-actions mt-5 mb-3 justify-center md:justify-end">
         <Link to={`/blogs/${id}`}>
         <button className="text-white rounded-full border px-6 md:px-8 p-2 md:p-6 border-gray-700 flex items-center justify-center hover:bg-[#373a3d]  w-44 md:w-auto">Read More
         <FaGreaterThan className="ml-4"></FaGreaterThan>
         <FaGreaterThan></FaGreaterThan>
         </button>
         </Link>
          </div>
        </div>
      </div>
    );
};

export default AllBlog;