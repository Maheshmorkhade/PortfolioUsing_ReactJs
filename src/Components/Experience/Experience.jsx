import React from "react";
import logo from "../../assets/logo.svg"
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiDjango, SiPython, SiMysql, SiTailwindcss } from "react-icons/si";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 pt-20  border-solid">
      <h1 className="text-2xl font-bold text-center text-white md:text-4xl">
        Experience In Following Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap gap-8 py-10 mt-10 border border-white rounded-md md:w-2/5 md:p-12">
          <span className="p-3 bg-[#322240] flex items-center rounded-2xl text-white">
            <FaHtml5 color="#E34F26" size={50} /> HTML
          </span>
          <span className="p-3  bg-[#322240] flex items-center rounded-2xl  text-white">
            <FaCss3 color="#1572B6" size={50} /> CSS
          </span>
          <span className="p-3 flex bg-[#322240] items-center rounded-2xl  text-white">
            <FaReact color="#61DAFB" size={50} /> ReactJs
          </span>
          
          <span className="p-3  bg-[#322240] flex items-center rounded-2xl  text-white">
            <SiDjango title="Django" color="#F7DF1E" size={50} /> Django
          </span>
          <span className="p-3 bg-[#322240] flex items-center rounded-2xl  text-white">
            <SiPython title="Python" color="#F7DF1E" size={50} /> Python
          </span>
          <span className="p-3 bg-[#322240] flex items-center rounded-2xl  text-white">
            <SiMysql title="MySQL" color="#F7DF1E" size={50} /> MySql
          </span>
          <span className="p-3 bg-[#322240] flex items-center rounded-2xl  text-white">
            <FaJs color="#F7DF1E" size={50} /> JavaScript
          </span>
         
          <span className="p-3 bg-[#322240] flex items-center rounded-2xl  text-white">
            <SiTailwindcss title="Tailwind CSS" color="#F7DF1E" size={50} />
            Tailwind
          </span>
        </div>

        {/* <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 md:grid-cols-3 md:p-12 md:w-4/5">
          <span className="p-3 bg-[#322240] flex items-center gap-2 rounded-2xl text-white">
            <FaHtml5 color="#E34F26" size={50} /> HTML
          </span>
          <span className="p-3 bg-[#322240] flex items-center gap-2 rounded-2xl text-white">
            <FaCss3 color="#1572B6" size={50} /> CSS
          </span>
          <span className="p-3 bg-[#322240] flex items-center gap-2 rounded-2xl text-white">
            <FaReact color="#61DAFB" size={50} /> ReactJs
          </span>
          <span className="p-3 bg-[#322240] flex items-center gap-2 rounded-2xl text-white">
            <FaJs color="#F7DF1E" size={50} /> JavaScript
          </span>
          <span className="p-3 bg-[#322240] flex items-center gap-2 rounded-2xl text-white">
            <SiDjango color="#092E20" size={50} /> Django
          </span>
          <span className="p-3 bg-[#322240] flex items-center gap-2 rounded-2xl text-white">
            <SiPython color="#3776AB" size={50} /> Python
          </span>
          <span className="p-3 bg-[#322240] flex items-center gap-2 rounded-2xl text-white">
            <SiMysql color="#4479A1" size={50} /> MySql
          </span>
          <span className="p-3 bg-[#322240] flex items-center gap-2 rounded-2xl text-white">
            <SiTailwindcss color="#38B2AC" size={50} /> Tailwind
          </span>
        </div> */}

        <div >
          <div className="flex gap-10 bg-[#322240] bg-opacity-75 mt-4 rounded-lg  p-4 items-center">
            <div className="text-white h-[150px]"><img className="h-10" src={logo} alt="About img"/>FelixIts</div>
            <span className="text-white">
              <h2 className="leading-tight">
                Software Engineer,FelixIts System
              </h2>
              <p className="text-sm font-thin leading-tight">
                Aug 2024 - Feb 2025
              </p>
              <ul className="p-2 text-sm">
                <li>- Work as software developer.</li>
                <li>- Junior SoftWare Developer</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
