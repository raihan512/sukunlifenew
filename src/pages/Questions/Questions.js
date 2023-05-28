import React from "react";
import img1 from "../../../src/assets/question/ruqyahbd.org-FAQ__বহুল_জিজঞাসিত_পরশনের_উততর[1]_page-0001.jpg";
import img2 from "../../../src/assets/question/ruqyahbd.org-FAQ__বহুল_জিজঞাসিত_পরশনের_উততর[1]_page-0002.jpg";
import img3 from "../../../src/assets/question/ruqyahbd.org-FAQ__বহুল_জিজঞাসিত_পরশনের_উততর[1]_page-0003.jpg";
import img4 from "../../../src/assets/question/ruqyahbd.org-FAQ__বহুল_জিজঞাসিত_পরশনের_উততর[1]_page-0004.jpg";
import img5 from "../../../src/assets/question/ruqyahbd.org-FAQ__বহুল_জিজঞাসিত_পরশনের_উততর[1]_page-0005.jpg";
import Subscribe from "../Shared/Subscribe/Subscribe";

const Questions = () => {
  return (
    <section className="max-w-[1200px] mx-auto py-10 min-h-screen">
      <div className="mx-5">
        <h3 className="text-2xl md:text-2xl lg:text-4xl text-center mb-3 md:mb-8 font-bold">
          রুকইয়া জিজ্ঞাসা
        </h3>
        <div>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>
        <Subscribe></Subscribe>
      </div>
    </section>
  );
};

export default Questions;
