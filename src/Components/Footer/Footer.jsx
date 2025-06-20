// import React from "react";
// import { MdOutlineEmail } from "react-icons/md";
// import { CiLinkedin } from "react-icons/ci";
// // import { CiInstagram } from "react-icons/ci";
// import { FaGithub } from "react-icons/fa";
// import { SiCodechef } from "react-icons/si";

// const Footer = () => {
//   return (
//     <div
//       id="Footer"
//       className="flex justify-around text-white p-10 items-center h-52 bg-[#131b47] shadow-[0_-4px_8px_0_rgba(0,0,0,1)] "
//     >
//       <div>
//         <h1 className="text-2xl md:text-5xl font-bold">Contact</h1>
//         <h3 className="text-sm md:text-2xl font-normal">
//           Feel Free To reach out!
//         </h3>
//       </div>

//       <ul className="text-sm md:text-xl cursor-pointer flex gap-3">
//         <li className="flex gap-1 items-center">
//           <CiLinkedin className="text-5xl p-1 " />
//           <a
//             href="https://www.linkedin.com/in/maheshmorkhade"
//             className="cursor-pointer"
//           >
//             Linkedin
//           </a>
//         </li>
//         <li className="flex gap-1 items-center">
//           <FaGithub className="text-5xl p-1 " />
//           <a
//             href=" https://github.com/Maheshmorkhade"
//             className="cursor-pointer"
//           >
//             Git Hub
//           </a>
//         </li>
//         <li className="flex gap-1 items-center">
//           <SiCodechef className="text-5xl p-1 " />
//           <a
//             href="https://www.codechef.com/users/maheshmorkhade"
//             className="cursor-pointer"
//           >
//             CodeChef
//           </a>
//         </li>
//         <li className="flex gap-1 items-center">
//           <MdOutlineEmail className="text-5xl p-1" />
//           <a href="" className="cursor-pointer">
//             Gmail
//           </a>
//         </li>
//         {/* <li className="flex gap-1 items-center">
//           <CiInstagram className="text-5xl p-1" />
//           <a href=" maheshmorkhade3@gmail.com" className="cursor-pointer">
//             Instagram
//           </a>
//         </li> */}
//       </ul>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0c0e19] text-xl text-white py-8 shadow-[0_-4px_8px_0_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side: Name or Logo */}
        <div className="text-lg font-semibold">© 2025 Mahesh Morkhade</div>

        {/* Center: Navigation */}
        <div className="flex space-x-6">
          <a href="#About" className="hover:text-blue-400">About</a>
          <a href="#Projects" className="hover:text-blue-400">Projects</a>
          <a href="#Experience" className="hover:text-blue-400">Skills</a>
          <a  className="hover:text-blue-400">Contact</a>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex space-x-4 text-xl gap-5">
          <a href="https://github.com/Maheshmorkhade" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400  text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/maheshmorkhade" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400  text-2xl">
            <FaLinkedin />
          </a>
          <a href="mailto:maheshmorkhade3gmail.com" className="hover:text-blue-400 text-2xl">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

