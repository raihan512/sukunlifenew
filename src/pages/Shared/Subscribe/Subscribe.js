import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Subscribe = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hqub7al",
        "template_tvomf9o",
        form.current,
        "nFbGxrobomO1Ovvwd"
      )
      .then(
        (result) => {
          // window.prompt("আপনার মেসেজ পাঠানো হয়েছে");
          // notify("আপনার মেসেজ পাঠানো হয়েছে");
          toast.success("আপনার মেসেজ পাঠানো হয়েছে");
          navigate("/blogs");
        },
        (error) => {
          // console.log(error.text);
          // window.prompt("মেসেজ পাঠানো যায় নি। আবার চেষ্টা করুন");
          toast.error("মেসেজ পাঠানো যায় নি। আবার চেষ্টা করুন");
        }
      );
  };

  return (
    <section id="appointment">
      <div className="max-w-[1200px] mx-auto py-5 text-white">
        <div className="">
          <h5 className="text-[22px] md:text-[28px] lg:text-[38px] font-bold mb-2 text-primary text-center">
            অ্যাপয়েন্টমেন্ট নিন
          </h5>
          <div>
            <div className="w-full md:w-8/12 lg:w-5/12 mx-auto bg-white rounded-md p-5">
              <form ref={form} className="mt-10" onSubmit={sendEmail}>
                <div className="mb-5">
                  <label className="text-base md:text-lg text-black font-bold">
                    আপনার নাম লিখুন
                  </label>
                  <br />
                  <input
                    type="text"
                    name="user_name"
                    className="text-primary py-2 px-3 border w-full rounded-md bg-[#e1e1e1]"
                    placeholder="আপনার নাম লিখুন"
                    required
                  />
                </div>
                {/* <input type="email" name="user_email" /> */}
                <div className="mb-5">
                  <label className="text-base md:text-lg text-black font-bold">
                    আপনার মোবাইল নাম্বার লিখুন
                  </label>
                  <br />
                  <input
                    type="tel"
                    id="phone"
                    name="user_phone"
                    className="text-primary py-2 px-3 border w-full rounded-md bg-[#e1e1e1]"
                    required
                    pattern="[0-9]{11}"
                    placeholder="আপনার ১১ ডিজিটের মোবাইল নাম্বার দিন"
                  />
                </div>
                <div className="mb-5">
                  <label className="text-base md:text-lg text-black font-bold">
                    আপনার সমস্যাটি সংক্ষেপে লিখুন
                  </label>
                  <br />
                  <textarea
                    name="message"
                    className="text-primary py-2 px-3 h-32 border w-full rounded-md bg-[#e1e1e1]"
                    placeholder="আপনার সমস্যাটি সংক্ষেপে লিখুন"
                  />
                </div>
                <input
                  type="submit"
                  className="py-2 pb-1 px-12 text-lg cursor-pointer rounded-md bg-primary w-full"
                  value="সাবমিট"
                />
                <Toaster />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
