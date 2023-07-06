import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/portfolio.png'
import {FaGreaterThan } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
const Navbar = () => {


  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };


  return (
    <div className=" sticky top-0 z-30  bg-[#1D232A] shadow-md">
      <div className="navbar ml-6  md:ml-12 ">
        <img data-aos="fade-down" className="w-8 bg-white " src={logo} alt="" />
        <h2 className="text-2xl  md:text-3xl font-bold ml-2 " data-aos="fade-down"><span className=" text-orange-500">Folio</span> <span className="text-xl mt-3 ml-1 text-white">Mine</span></h2>

        <div className="md:px-32 px-2" >
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-4 bg-base-100 rounded-md  w-52"
           >
              <p className="px-2 my-3">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Home
                </NavLink>
              </p>

              <p className="px-2 py-2">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
               About Me
                </NavLink>
              </p>

              <p className="px-2 py-2">
              <NavLink
                to="/summary"
                className={({ isActive }) =>
                  isActive ? "active" : "default"
                }
              >
           Summary
              </NavLink>
            </p>

              <p className="px-2 py-2">
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Service
                </NavLink>
              </p>
              <p className=" px-2 py-2">
              <NavLink
                to="/project"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
             Project
              </NavLink>
            </p>
            
              <p className="px-2 py-2">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Blog
                </NavLink>
              </p>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ml-24"  data-aos="fade-down">
            <p className="mx-4 my-4">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </p>

            <p className="mx-4 my-4">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              About Me
            </NavLink>
          </p>
          <p className="mx-4 my-4">
            <NavLink
              to="/summary"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Summary
            </NavLink>
          </p>
            <p className="mx-4  my-4">
              <NavLink
                to="/service"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
             Service
              </NavLink>
            </p>

            <p className="mx-4  my-4">
            <NavLink
              to="/project"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
           Project
            </NavLink>
          </p>

 

            <p className="mx-4  my-4">
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
              Blog
              </NavLink>
            </p>

          
          </ul>

       
        </div>
        <div className=" md:ml-24">

        <div className="mt-4 mr-6 md:mr-12">
        {/* Toggle button here */}
         
          <label className="w-2 h-2 swap  ">
            <input className="w-0  bg-transparent "
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
            />
             
            <MdDarkMode className="w-8 h-8 swap-on"> </MdDarkMode>
 
            <MdOutlineLightMode className="w-8 h-8 swap-off"></MdOutlineLightMode>
          </label>

          

          
      </div>
       <Link to='/contact'>
       <button className="text-white rounded-full border px-4 md:px-8 p-2 md:p-3 border-gray-700 flex items-center justify-center hover:bg-[#373a3d]">Hire Me
       <FaGreaterThan className="ml-4"></FaGreaterThan>
       <FaGreaterThan></FaGreaterThan>
       </button>
       </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
