import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import AllProjects from "../Home/Home/AllProjects";
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";
const Projetcs = () => {
    const [projects, setProjects]= useState([]);

     useEffect(()=>{
        fetch('./projects.json')
        .then( res=> res.json())
        .then(data =>{
            setProjects(data)
        })
     },[])
     console.log(projects)


 
    
    const html = projects.filter(item => item.category === 'html')
    const javascript = projects.filter(item => item.category === 'javascript')
    const react = projects.filter(item => item.category === 'react')
    const node = projects.filter(item => item.category === 'node')
    
 
    return (
        <div className="mt-20 ">
        <Helmet>
        <title>FolioMine | Projects</title>
        </Helmet>
        <div className="relative px-10">   
        <h1
         className=" text-4xl md:text-8xl opacity-10 text-center ">
         <Fade   delay={1e3} cascade damping={1e-1} className="">My Complete Projects</Fade>
       
         </h1>
         <h3 className="font-bold text-2xl md:text-4xl  text-center absolute left-1/2 top-1/2   bottom-1/2  text-white -translate-x-1/2 -translate-y-1/2">My Work</h3>
       
        </div>

        <div className="text-center p-10">
        <Tabs>
    <TabList className="">
      <Tab>All</Tab>
      <Tab>Html</Tab>
      <Tab>Javascript</Tab>
      <Tab>React</Tab>
      <Tab>Node Js</Tab>
    </TabList>

    <TabPanel>
    <div className="mt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  gap-5">
      {
        projects.map((project) => <AllProjects key={project.id} project={project}></AllProjects>)
      }
      </div>
    </TabPanel>
    <TabPanel>
    <div className="mt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  gap-5">
    {
      html.map((project) => <AllProjects key={project.id} project={project}></AllProjects>)
    }
    </div>
    </TabPanel>
    <TabPanel>
    <div className="mt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  gap-5">
    {
      javascript.map((project) => <AllProjects key={project.id} project={project}></AllProjects>)
    }
    </div>
    </TabPanel>
    <TabPanel>
    <div className="mt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  gap-5">
      {
        react.map((project) => <AllProjects key={project.id} project={project}></AllProjects>)
      }
      </div>
    </TabPanel>
    <TabPanel>
    <div className="mt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  gap-5">
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

export default Projetcs;