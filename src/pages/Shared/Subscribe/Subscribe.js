import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Subscribe = () => {
  const form = useRef();
  // const notify = () => toast();

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
          <h5 className="text-[22px] md:text-[28px] lg:text-[38px] font-bold mb-2 text-primary">
            অ্যাপয়েন্টমেন্ট নিন
          </h5>
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                {/* <label className="text-lg">আপনার নাম লিখুন</label>
              <br /> */}
                <input
                  type="text"
                  name="user_name"
                  className="text-primary py-2 px-3 rounded-sm border border-primary w-full"
                  placeholder="আপনার নাম লিখুন"
                  required
                />
              </div>
              {/* <input type="email" name="user_email" /> */}
              <div className="mb-3">
                {/* <label className="text-lg">আপনার মোবাইল নাম্বার দিন</label>
              <br /> */}
                <input
                  type="tel"
                  id="phone"
                  name="user_phone"
                  className="text-primary py-2 px-3 rounded-sm border border-primary w-full"
                  required
                  pattern="[0-9]{11}"
                  placeholder="আপনার ১১ ডিজিটের মোবাইল নাম্বার দিন"
                />
              </div>
              {/* <div className="mb-3">
              <textarea
                name="message"
                className="text-primary py-1 px-5"
                placeholder="আপনার মেসেজ লিখুন"
              />
            </div> */}
              <input
                type="submit"
                className="py-2 pb-1 mt-3 px-12 text-lg cursor-pointer rounded-sm bg-white text-primary border border-transparent hover:border-primary"
                value="কনফার্ম"
              />
              <Toaster />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
