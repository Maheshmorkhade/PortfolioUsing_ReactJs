import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  return (
    <nav className="flex flex-wrap justify-between text-xl md:items-center px-10 pt-3 md:px-20 fixed w-screen bg-[#8a68adf5] pb-5 text-white">
      <span className="text-2xl font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        }     mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-10`}
      >
        <a href="#About">
          <li className="p-1 transition-all duration-300 text-md md:p-0 ">
            About
          </li>
        </a>
        <a href="#Experience">
          <li className="p-1 transition-all duration-300 text-md md:p-0 ">
            Experience
          </li>
        </a>
        <a href="#Projects">
          <li className="p-1 transition-all duration-300 text-md md:p-0 ">
            Projects
          </li>
        </a>
        <a href="#ContactUs">
          <li className="p-1 transition-all duration-300 text-md md:p-0 md:pr-10">
            Contact
          </li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="absolute transition-all duration-300 md:hidden right-10 top-6"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="absolute transition-all duration-300 md:hidden right-10 top-6"
        />
      )}
    </nav>
  );
};

export default Navbar;
