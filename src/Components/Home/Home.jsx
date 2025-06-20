import React from "react";
import avatarImg from "../../assets/my.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center gap-10 px-6 py-10 md:p-20 mt-10">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl md:text-6xl font-bold leading-snug md:leading-tight tracking-tighter mb-6">
          <TextChange />
        </h1>
        <p className="text-sm md:text-xl tracking-tight leading-relaxed">
          I'm a detail-oriented fresher passionate about building responsive and user-friendly websites. Skilled in HTML, CSS, JavaScript, React.js, and Tailwind CSS, I also work with Python, Django, and MySQL to create full-stack web applications. I’m eager to grow as a developer and contribute to impactful projects with clean, efficient code.
        </p>
        <button
          className="mt-6 md:mt-10 text-gray py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#22223f] over:bg-fuchsia-200"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/Mahesh-RESUME.pdf";
            link.download = "Mahesh-RESUME.pdf";
            link.click();
          }}
        >
          Download CV
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          className="rounded-xl w-64 h-64 md:w-96 md:h-96 object-cover"
          src={avatarImg}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Home;

