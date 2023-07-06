import { useEffect, useState } from "react";
import AllBlog from "./AllBlog";
import { Fade } from "react-awesome-reveal";

const Blog = () => {

  const [blogs, setBlogs] = useState([])
  useEffect(()=>{
    fetch('blog.json')
    .then(res => res.json())
    .then(data =>{
      setBlogs(data)
    })
  },[])
  console.log(blogs)

    return (
        <div className="md:px-20 mt-20">
        <div className="relative mb-20">
        <h1 className=" text-6xl md:text-8xl opacity-10 text-center ">
       
        <Fade  delay={1e3} cascade damping={1e-1} className="text-orange-400"> Latest Tips & Tricks</Fade>
        </h1>
        <h3 className="font-bold text-2xl md:text-4xl  text-center absolute left-1/2 top-1/2 -bottom-1/2  text-white -translate-x-1/2 -translate-y-1/2">
        Blog Post
        </h3>

        <div className="mt-20">
        {
          blogs.map(blog => <AllBlog key={blog.id} blog={blog}></AllBlog>)
        }
        </div>
      </div>
    
        </div>
    );
};

export default Blog;