import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsTelephoneForwardFill } from "react-icons/bs";
import Subscribe from "../Shared/Subscribe/Subscribe";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="max-w-[1200px] mx-auto py-10 min-h-screen">
      <div className="mx-5">
        <h3 className="text-2xl md:text-4xl lg:text-6xl text-center mb-3 md:mb-8 text-primary">
          আমদের সাথে যোগাযোগ করুন
        </h3>
        {/* Consultant Container */}
        <div className="grid gap-5 lg:gap-40 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 place-items-center mt-20">
          {/* Item */}
          <div className="w-[200px] md:max-w-[500px]">
            <a href="https://www.facebook.com/sukunlife" target="_blank">
              <div className="rounded-md hover:-translate-y-1 transition-all hover:shadow-xl w-11/12 pt-4 md:w-full mx-auto sm:mx-0 flex flex-col items-center justify-center border border-primary">
                <div className="p-5 text-center pt-2">
                  <AiFillFacebook className="h-20 w-20 md:h-40 md:w-40 text-[#3b5998]" />
                </div>
              </div>
            </a>
          </div>
          {/* Item */}
          <div className="w-[200px] md:max-w-[500px]">
            <a href="http://wa.me/8801817199226" target="_blank">
              <div className="rounded-md hover:-translate-y-1 transition-all hover:shadow-xl w-11/12 pt-4 md:w-full mx-auto sm:mx-0 flex flex-col items-center justify-center border border-primary">
                <div className="p-5 text-center pt-2">
                  <FaWhatsappSquare className="h-20 w-20 md:h-40 md:w-40 text-[#075e54]" />
                </div>
              </div>
            </a>
          </div>
          {/* Item */}
          <div className="w-[200px] md:max-w-[500px]">
            <a href="tel:+8801817199226">
              <div className="rounded-md hover:-translate-y-1 transition-all hover:shadow-xl w-11/12 pt-4 md:w-full mx-auto sm:mx-0 flex flex-col items-center justify-center border border-primary">
                <div className="p-5 text-center pt-2">
                  <BsTelephoneForwardFill className="h-20 w-20 md:h-40 md:w-40 text-primary" />
                </div>
              </div>
            </a>
          </div>
          {/* Item */}
        </div>
        <div className="mt-20">
          <Subscribe></Subscribe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
