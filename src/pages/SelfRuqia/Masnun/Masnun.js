import React from "react";
import img from "../../../assets/self/masnun-amal-ruqyahbd.org_(1)[1]_page-0001.jpg";
import img1 from "../../../assets/self/masnun-amal-ruqyahbd.org_(1)[1]_page-0002.jpg";
import img2 from "../../../assets/self/masnun-amal-ruqyahbd.org_(1)[1]_page-0003.jpg";
import img3 from "../../../assets/self/masnun-amal-ruqyahbd.org_(1)[1]_page-0004.jpg";
import Subscribe from "../../Shared/Subscribe/Subscribe";

const Masnun = () => {
  return (
    <section className="max-w-[1200px] mx-auto py-10 min-h-screen">
      <div className="mx-5">
        <h3 className="text-2xl md:text-4xl lg:text-6xl text-center mb-3 md:mb-8 text-primary">
          মাসনুন আমল
        </h3>
        <img src={img} className="w-full" alt="" />
        <img src={img1} className="w-full" alt="" />
        <img src={img2} className="w-full" alt="" />
        <img src={img3} className="w-full" alt="" />
        <Subscribe></Subscribe>
      </div>
    </section>
  );
};

export default Masnun;
