import React, { useEffect } from "react";
import Subscribe from "../../Shared/Subscribe/Subscribe";

const GharHefajot = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="max-w-[1200px] mx-auto py-10 min-h-screen">
      <div className="mx-5">
        <h3 className="text-2xl md:text-4xl lg:text-6xl text-center mb-3 md:mb-8 text-primary">
          ঘর হেফাজতের পদ্ধতি
        </h3>
        <p className="text-lg">
          সুরা বাকারার শুরু থেকে ১১০ আয়াত, সুরা আরাফ ১১৭ থেকে ১২২ আয়াত , সুরা
          ইউনুস ৮১ - ৮২ আয়াত, সুরা ইয়াসিন, সুরা সাফফাত ১ -২০ আয়াত এগুলো
          প্রত্যেকটা ১ বার করে আর সুরা ফাতিহা, আয়াতুল কুরসি, ৩ কুল এগুলো
          প্রত্যেকটা ৩ বার করে আর আগে পরে ৩ বার দুরুদ শরীফ পড়ে পানিতে ফুঁ
          দিবেন। অবশ্যই শুরুতে ঘর হেফাজতের নিয়ত করে নিবেন। এরপর পুরা ঘরে
          স্প্রে করে দিবেন।
        </p>
        <Subscribe></Subscribe>
      </div>
    </section>
  );
};

export default GharHefajot;
