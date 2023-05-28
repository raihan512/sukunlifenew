import React, { useEffect } from "react";
import Subscribe from "../../Shared/Subscribe/Subscribe";

const TabijJadu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="max-w-[1200px] mx-auto py-10 min-h-screen">
      <div className="mx-5">
        <h3 className="text-2xl md:text-4xl lg:text-6xl text-center mb-3 md:mb-8 text-primary">
          তাবিজ ও জাদু নষ্টের পদ্ধতি
        </h3>
        <p className="text-lg">
          "একটি পাত্রে পানি নিন। তারপর সেই পানিতে সিহরের আয়াত পড়ে ফুঁ দিন
          (অর্থাৎ সুরা আ’রাফ ১১৭-১২২, ইউনুস ৮১-৮২, সুরা ত্বহা ৬৯নং আয়াত), এরপর
          সূরা ফালাক্ব ৩বার, সূরা নাস ৩বার পড়ে ফুঁ দিন।" তাবিজ বা জাদুর
          জিনিসগুলো খুলে আলাদা আলাদা করে ভালভাবে এই পানিতে ভিজিয়ে রাখুন
          কিছুক্ষণ। তাহলে জাদু নষ্ট হয়ে যাবে ইনশাআল্লাহ। এরপর মানুষ চলাচল করে না
          এমন যায়গায় ফেলে দিন
        </p>
        <Subscribe></Subscribe>
      </div>
    </section>
  );
};

export default TabijJadu;
