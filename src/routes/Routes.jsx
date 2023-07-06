import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ProjectDetails from "../pages/Home/Home/ProjectDetails";
import BlogDetails from "../pages/Home/Home/BlogDetails";
import AboutMe from "../pages/AboutMe/AboutMe";
import Service from "../pages/Service/Service";
import Projetcs from "../pages/Projects/Projects";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Home/Home/Contact";
import Summary from "../pages/Home/Home/Summary";

const router = createBrowserRouter([
        {
            path: "/",
            element:<Main></Main>,
            children:[
             {
                path:'/',
                element:<Home></Home>,
             },
             {
                path:'/details/:id',
                element:<ProjectDetails></ProjectDetails>
                
             },
             {
               path:'/blogs/:id',
               element:<BlogDetails></BlogDetails>
             },
             {
               path:'/about',
               element:<AboutMe></AboutMe>
             },
             {
               path:'/service',
               element:<Service></Service>
             },
             {
               path:'/summary',
               element:<Summary></Summary>
             },

             {
               path:'/project',
               element: <Projetcs></Projetcs>
             },
             {
               path:'/blog',
               element:<Blogs></Blogs>
             },
             {
               path:'/contact',
               element:<Contact></Contact>
             }
            ]
        }
  ]);
  
  export default router;