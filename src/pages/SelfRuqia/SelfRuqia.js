import React from "react";
import { Link } from "react-router-dom";
import Subscribe from "../Shared/Subscribe/Subscribe";
const SelfRuqia = () => {
  return (
    <section className="max-w-[1200px] mx-auto py-10 min-h-screen">
      <div className="mx-5">
        <h3 className="text-2xl md:text-2xl lg:text-4xl text-center mb-3 md:mb-8 font-bold">
          সেলফ রুকইয়া
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* item */}
          <Link to="/masnunamol">
            <div className="rounded-md hover:-translate-y-1 transition-all hover:shadow-xl w-11/12 py-4 md:w-full mx-auto sm:mx-0 flex flex-col items-center justify-center border border-primary">
              <p className="text-lg font-bold">মাসনুন আমল</p>
            </div>
          </Link>
          {/* item */}
          <Link to="/tabijojadu">
            <div className="rounded-md hover:-translate-y-1 transition-all hover:shadow-xl w-11/12 py-4 md:w-full mx-auto sm:mx-0 flex flex-col items-center justify-center border border-primary">
              <p className="text-lg font-bold">তাবিজ ও জাদু নষ্টের আমল</p>
            </div>
          </Link>
          {/* item */}
          <Link to="/ghorhefajot">
            <div className="rounded-md hover:-translate-y-1 transition-all hover:shadow-xl w-11/12 py-4 md:w-full mx-auto sm:mx-0 flex flex-col items-center justify-center border border-primary">
              <p className="text-lg font-bold">ঘর হেফাজতের পদ্ধতি</p>
            </div>
          </Link>
          {/* item */}
          <Link to="/najorgosol">
            <div className="rounded-md hover:-translate-y-1 transition-all hover:shadow-xl w-11/12 py-4 md:w-full mx-auto sm:mx-0 flex flex-col items-center justify-center border border-primary">
              <p className="text-lg font-bold">নজর গোসল</p>
            </div>
          </Link>
          {/* item */}
          <Link to="/boroipata">
            <div className="rounded-md hover:-translate-y-1 transition-all hover:shadow-xl w-11/12 py-4 md:w-full mx-auto sm:mx-0 flex flex-col items-center justify-center border border-primary">
              <p className="text-lg font-bold">বড়ই পাতার গোসল</p>
            </div>
          </Link>
          {/* item */}
          <div className="rounded-md hover:-translate-y-1 transition-all hover:shadow-xl w-11/12 py-4 md:w-full mx-auto sm:mx-0 flex flex-col items-center justify-center border border-primary">
            <p className="text-lg font-bold">রুকইয়ার আয়াত</p>
          </div>
          {/* item */}
        </div>
        <Subscribe></Subscribe>
      </div>
    </section>
  );
};

export default SelfRuqia;
