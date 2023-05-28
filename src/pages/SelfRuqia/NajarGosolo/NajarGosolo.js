import React from "react";
import Subscribe from "../../Shared/Subscribe/Subscribe";

const NajarGosolo = () => {
  return (
    <section className="max-w-[1200px] mx-auto py-10 min-h-screen">
      <div className="mx-5">
        <h3 className="text-2xl md:text-4xl lg:text-6xl text-center mb-3 md:mb-8 text-primary">
          বড়ই পাতার গোসল
        </h3>
        <p className="text-lg">
          এক বালতি পানি নিবেন। তারপর পানিতে দুই হাত ডুবাবেন অথবা মুখটা বালতির
          কাছাকাছি নিয়ে "যেকোনো দরুদ শরিফ, সুরা ফাতিহা, আয়াতুল কুরসি, সুরা
          ইখলাস, ফালাক, নাস এবং সর্বশেষ দরুদপাঠ করবেন। সবগুলো ৩ বার অথবা ৭ বার
          পড়তে হবে। এরপর ফু দিবেন।
        </p>
        <Subscribe></Subscribe>
      </div>
    </section>
  );
};

export default NajarGosolo;
