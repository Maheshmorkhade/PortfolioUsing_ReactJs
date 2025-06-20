import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectCard2 from "./ProjectCard2";
import ProjectCard3 from "./ProjectCard3";
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 items-center justify-center">
        <ProjectCard 
          title="Portfolio"
          main="This Portfolio website is totally build in Html, Css, React js, Tailwind Css, one or more section are there in this web site you can see in my github"
        />
        <ProjectCard2  title="Online Courses"
          main="This website is totally build in html css,React js, Python, Django one or more section are there in this web site you can see in my github"/>
        <ProjectCard3  title="Ecommerce-Website"
          main="This website is totally build in html css, TailwindCss, React js, one or more section are there in this web site you can see in my github"/>
      </div>
    </div>
  );
};

export default Projects;
