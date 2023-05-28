import React from "react";
import { BiSad } from "react-icons/bi";
import Navbar from "../Shared/Navbar/Navbar";

const Error = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center min-h-screen">
        <h3 className="text-2xl md:text-4xl lg:text-6xl text-center mb-3 md:mb-8 text-primary flex items-center">
          <BiSad className="mr-2" /> দুঃখিত! পেজ খুজে পাওয়া যায়নি
        </h3>
      </div>
    </div>
  );
};

export default Error;
