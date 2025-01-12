import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu,close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [togggle, setTogggle] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5  fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scroll(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Suraj &nbsp;<span className="sm:block hidden">|&nbsp; JavaScript Master</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              className={`${
                active === navLink.title ? "text-white" : "text-secondary"
              } hover:text-white text-[15px] font-medium cursor-pointer`}
              onClick={() => setActive(navLink.title)}
            >
              <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>
        {/* //for small screen */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={togggle ? close: menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={()=>{setTogggle(!togggle)}} />
          <div className={`${!togggle ? 'hidden': 'flex'} p-6 black-gradient absolute top-24 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none flex items-start justify-end flex-col gap-4">
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              className={`${
                active === navLink.title ? "text-white" : "text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={() =>{
                setTogggle(!togggle)
                setActive(navLink.title);
              }}
            >
              <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>

          </div>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
