import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

const HomeConsultant = () => {
  return (
    <section className="max-w-[1200px] mx-auto py-10">
      <div className="mx-5">
        {/* Consultant Container */}
        <div className="grid gap-5 lg:gap-40 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 place-items-center">
          {/* Item */}
          <div className="w-[200px] md:max-w-[500px]">
            <h5 className="text-[18px] md:text-[22px] lg:text-[27px] text-center">
              <strong>রুকইয়া প্লেয়ার</strong>
            </h5>
            <a href="https://sukunlife-player.web.app/">
              <div className="rounded-md hover:-translate-y-1 transition-all hover:shadow-xl w-11/12 pt-4 md:w-full mx-auto sm:mx-0 flex flex-col items-center justify-center border border-primary">
                <div className="p-5 text-center pt-2">
                  <img
                    src="https://sukunlife-player.web.app/static/media/cassete.7eeb4b4d872a70e04195.png"
                    className="h-20 w-20 md:h-40 md:w-40"
                    alt="player"
                  />
                </div>
              </div>
            </a>
          </div>
          {/* Item */}
          <div className="w-[200px] md:max-w-[500px]">
            <h5 className="text-[18px] md:text-[22px] lg:text-[27px] text-center">
              <strong>সেলফ রুকইয়া</strong>
            </h5>
            <a href="/selfruqia">
              <div className="rounded-md hover:-translate-y-1 transition-all hover:shadow-xl w-11/12 pt-4 md:w-full mx-auto sm:mx-0 flex flex-col items-center justify-center border border-primary">
                <div className="p-5 text-center pt-2">
                  <img
                    src="https://i.ibb.co/NWWMrC1/pngtree-flat-icon-holy-book-quran-and-islamic-dhikr-tasbih-png-image-6659309.png"
                    className="h-20 md:h-40"
                    alt="player"
                  />
                </div>
              </div>
            </a>
          </div>
          {/* Item */}
          <div className="w-[200px] md:max-w-[500px]">
            <h5 className="text-[18px] md:text-[22px] lg:text-[27px] text-center">
              <strong>রুকইয়া জিজ্ঞাসা</strong>
            </h5>
            <a href="/questions">
              <div className="rounded-md hover:-translate-y-1 transition-all hover:shadow-xl w-11/12 pt-4 md:w-full mx-auto sm:mx-0 flex flex-col items-center justify-center border border-primary">
                <div className="p-5 text-center pt-2">
                  <AiFillQuestionCircle className="h-20 w-20 md:h-40 md:w-40" />
                </div>
              </div>
            </a>
          </div>
          {/* Item */}
        </div>
      </div>
    </section>
  );
};

export default HomeConsultant;
