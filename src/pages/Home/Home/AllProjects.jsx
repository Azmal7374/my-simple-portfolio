import { Link } from "react-router-dom";

const AllProjects = ({project}) => {
   const {title,id,image} = project;
  //  console.log(project)
  //  console.log(image[1])
    return (
      <Link to={`/details/${id}`}>
      <div className="group px-8 relative overflow-hidden w-64 md:w-auto">
      <img  className="w-96 h-48 md:h-60 hover:opacity-20  " src={image[0]} alt=""/>
   
    
     <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center text-orange-500 absolute -top-15 group-hover:top-1/2 group-hover:left-1/2 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] ">{title}</h2>
     <div className="text-center mt-2">
     
     </div>
   </div>
      
      </Link>
         
    );
};

export default AllProjects;