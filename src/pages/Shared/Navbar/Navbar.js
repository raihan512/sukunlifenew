import React, { useState } from "react";
import { Link } from "react-router-dom";
// import search from '../../../assets/search.png';
import logo from "../../../assets/logo.png";
import { MdMenu } from "react-icons/md";
const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleMobileNav = () => setMobileNav((value) => !value);

  const menuItems = (
    <>
      <li
        className="bg-primary py-1 px-3 rounded-md mr-0 md:mr-3"
        onClick={handleMobileNav}
      >
        <a href="#appointment">অ্যাপয়েন্টমেন্ট</a>
      </li>
      <li className="bg-primary py-1 px-3 rounded-md" onClick={handleMobileNav}>
        <Link to="/contact">যোগাযোগ</Link>
      </li>
    </>
  );
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-white sticky top-0 z-40 overflow-hidden md:text-[16px] lg:text-[18px] xl:text-[20px] px-5 drop-shadow-2xl">
        <div className="max-w-[1200px] mx-auto py-2">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img src={logo} className="h-14" alt="" />
            </Link>
            <ul className="hidden md:flex justify-between text-white">
              {menuItems}
            </ul>
            <MdMenu
              className="cursor-pointer block md:hidden text-2xl text-primary"
              onClick={handleMobileNav}
            />
          </div>
        </div>
      </nav>
      {/* Mobile Nav */}
      <div
        className={`block md:hidden fixed top-0 left-0 h-screen w-9/12 bg-primary z-40 border-r-2 border-white 
                transition-all ${mobileNav ? "left-0" : "-left-[900px]"}`}
      >
        <ul className="p-10 text-white text-[16px] z-50">{menuItems}</ul>
      </div>
    </>
  );
};

export default Navbar;
