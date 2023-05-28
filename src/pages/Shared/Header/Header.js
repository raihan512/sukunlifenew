import React from "react";
import { Link } from "react-router-dom";
// import { FiPhoneCall } from "react-icons/fi";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <header className="mb-5 mx-5">
      <div className="max-w-[1200px] mx-auto py-10">
        <div className="md:flex justify-center items-end">
          {/* <div className='w-full mx-auto'> */}
          <Link to="">
            <img src={logo} alt="SukunLife" />
          </Link>
          {/* </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
