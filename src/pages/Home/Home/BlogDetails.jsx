import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams()
   
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
      fetch('/blog.json')
      .then(res => res.json())
      .then(data =>{
        setBlogs(data)
      })
    },[])
    console.log(blogs)
    console.log(id)
 
 
const matched = blogs.filter(blog => blog.id === parseInt(id))
console.log(matched)
 
    return (
        <div className="md:px-20 mt-20 mb-10">
       {

        matched.map(match => <>
            
            <div className="card    shadow-xl">
  <figure><img className="w-96" src={match.image} alt="blogs" /></figure>
  <div className="card-body">
    <h2 className=" text-4xl font-bold text-white">{match.title}</h2>
    <p className="mt-5 text-white">{match.description}</p>
    
  </div>
</div>
          
          </>)
       }
        </div>
    );
};

export default BlogDetails;