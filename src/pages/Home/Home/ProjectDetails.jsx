import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaFacebook, FaFacebookMessenger, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
const ProjectDetails = () => {
     const {id} = useParams()
    const [projects, setProjects]= useState([]);

    useEffect(()=>{
       fetch('/projects.json')
       .then( res=> res.json())
       .then(data =>{
           setProjects(data)
       })
    },[])

  const matchedId = projects.filter(item =>item.id === parseInt(id))
  console.log(matchedId)
 
    return (
        <div className="mt-20 md:px-20 mb-20">
      
           {
            matchedId.map(item => <>
                <h2 className="text-3xl text-center font-bold text-white ">{item.title}</h2>
              <div className="md:flex gap-10 mt-6">
              <div className=" w-full md:w-1/2">
              <Carousel className="text-center">
      <div>
        <img className="" src={item.image[0]} />
      </div>
      <div>
        <img src={item.image[1]} />
      </div>
      <div>
        <img src={item.image[2]} />
      </div>
    </Carousel>
              </div>

              <div className="w-full md:w-1/2">
              
              <div className=" ">
              <div className="">
               
                <p className="font-bold text-xl text-white">Project Info:</p>
                <p>{item.description}</p>

                <p className="font-bold text-xl text-white mt-4">Project Details:</p>
                <p className="mt-3"><span className="text-white">Client:</span> Antareep Hasan </p>
                <hr className="border-gray-700 mt-3"/>
                <p className="mt-3">  <div className="flex flex-wrap gap-2"><span className="text-white">Technologies: </span>
                {
                  item.tools.map((tool, index) => <p key={index} className="">{tool},</p>)
                }
                </div> </p>
                <p className="mt-3"><span className="text-white">Industry: </span>My Company </p>
                <hr className="border-gray-700 mt-3"/>
                <p className="mt-3"><span className="text-white">Date: </span>{item.date} </p>
                <hr className="border-gray-700 mt-3"/>

                <p><span className="text-white">URL: </span><a href={item.url} target="blank" className="mt-3">{item.url}</a></p>
                <hr className="border-gray-700 mt-3"/>

                <p className="mt-3"><span className="text-white">Share: </span> </p>
                <div className="mt-3 flex gap-3">
                <FaFacebook className=""></FaFacebook>
                <FaTwitter></FaTwitter>
                <FaGoogle></FaGoogle>
                <FaInstagram></FaInstagram>
                <FaFacebookMessenger></FaFacebookMessenger>
                </div>

                
                
              </div>
            </div>
              </div>
              </div>
                </> )
           }
        </div>
    );
};

export default ProjectDetails;