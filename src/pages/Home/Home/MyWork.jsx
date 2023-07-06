import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import AllProjects from "./AllProjects";
import { Fade } from "react-awesome-reveal";
const MyWork = () => {
    const [projects, setProjects]= useState([]);

     useEffect(()=>{
        fetch('projects.json')
        .then( res=> res.json())
        .then(data =>{
            setProjects(data)
        })
     },[])
    //  console.log(projects)


 
    
    const html = projects.filter(item => item.category === 'html')
    const javascript = projects.filter(item => item.category === 'javascript')
    const react = projects.filter(item => item.category === 'react')
    const node = projects.filter(item => item.category === 'node')
    
//   console.log(html.length)
//   console.log(javascript.length)
//   console.log(react.length)
//   console.log(node.length)

    return (
        <div className="mt-20 md:md:px-20">
        <div className="relative">   
        <h1
         className=" text-6xl md:text-8xl opacity-10 text-center ">
         <Fade   delay={1e3} cascade damping={1e-1} className="">My Complete Projects</Fade>
      
         </h1>
         <h3 className="font-bold text-2xl md:text-4xl  text-center absolute left-1/2 top-1/2   bottom-1/2  text-white -translate-x-1/2 -translate-y-1/2">My Work</h3>
       
        </div>

        <div className="text-center p-10">
        <Tabs>
    <TabList >
      <Tab >All</Tab>
      <Tab>Html</Tab>
      <Tab>Javascript</Tab>
      <Tab>React</Tab>
      <Tab>Node Js</Tab>
  </TabList>

    <TabPanel >
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5" data-aos="fade-up">
      {
        projects.map((project) => <AllProjects key={project.id} project={project}></AllProjects>)
      }
      </div>
    </TabPanel>
    <TabPanel  >
    <div className="mt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  gap-5" data-aos="fade-up">
    {
      html.map((project) => <AllProjects key={project.id} project={project}></AllProjects>)
    }
    </div>
    </TabPanel>
    <TabPanel >
    <div className="mt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  gap-5" data-aos="fade-up">
    {
      javascript.map((project) => <AllProjects key={project.id} project={project}></AllProjects>)
    }
    </div>
    </TabPanel>
    <TabPanel >
    <div className="mt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  gap-5" data-aos="fade-up">
      {
        react.map((project) => <AllProjects key={project.id} project={project}></AllProjects>)
      }
      </div>
    </TabPanel>
    <TabPanel >
    <div className="mt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  gap-5" data-aos="fade-up">
      {
        node.map((project) => <AllProjects key={project.id} project={project}></AllProjects>)
      }
      </div>
    </TabPanel>
  </Tabs>
        
        </div>
        </div>
    );
};

export default MyWork;