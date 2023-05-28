import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import rocket from "../../../assets/Rocket.png";
import nagad from "../../../assets/Nagad.png";
import bkash from "../../../assets/Bkash.png";
import visa from "../../../assets/Visa.png";

const Footer = () => {
  return (
    <footer>
      {/* Footer Top */}
      <div className="max-w-[1200px] mx-auto py-10">
        <div className="mx-5">
          <img src={logo} alt="Sukunlife Logo" />
          <div className="flex flex-wrap justify-between items-start my-5">
            <div className="w-full lg:w-4/12">
              <h5 className="text-[16px] md:text-[20px] lg:text-[28px]">
                SukunLife Limited
              </h5>
              <p className="text-[13px] my-5">
                লরেম ইপ্সাম ডলর সিট আমেত, কনসেক্টেচুর অ্যাডিপিস্কিং এলিট। নানসি
                আল্ট্রিচিস ভ্যারিয়াস আউগিউ ইউ ফ্যাউসিবাস। ইন প্যালেনটেস্কিউ
                আউগিউ নন নিকিউ টেম্পর ট্রিস্টিক। নিউলা এ পিউরাস অরনারে, ম্যাটুস
                এনিম স্যাড, ম্যাক্সিমাস মি। ডোনেক পোর্টা রিউট্রাম ডিগনিসসিম।
                ডোনেক ভাইটা ইরস এলিকুয়াম, রিউট্রাম রাইসাস এট, পরতিটর লরেম।
                আয়েনান স্যাড এনিম লুকাস। সেড ইয়াকিউলাস এরাট আইডি ম্যাক্সিমাস
                হেন্ড্রেরিট। নিউলাম এ এফিকিটার ইরস। আয়েনান স্যাড এনিম লুকাস।
                সেড ইয়াকিউলাস এরাট আইডি ম্যাক্সিমাস হেন্ড্রেরিট। নিউলাম এ
                এফিকিটার ইরস।
              </p>
            </div>
            <div className="flex flex-col w-full md:w-4/12 lg:w-2/12 mb-5">
              <Link className="text-[16px] md:[18px] lg:text-[22px]">
                পরিচিতি
              </Link>
              <Link className="text-[16px] md:[18px] lg:text-[22px]">
                কনসালটেন্ট
              </Link>
              <Link className="text-[16px] md:[18px] lg:text-[22px]">সেবা</Link>
              <Link className="text-[16px] md:[18px] lg:text-[22px]">
                রিভিউ
              </Link>
              <Link className="text-[16px] md:[18px] lg:text-[22px]">
                যোগাযোগ
              </Link>
              <Link className="text-[16px] md:[18px] lg:text-[22px]">
                লগইন/রেজিস্ট্রেশন
              </Link>
            </div>
            <div className="flex flex-col w-full md:w-4/12 lg:w-2/12 mb-5">
              <Link className="text-[16px] md:[18px] lg:text-[22px]">
                কোর্স
              </Link>
              <Link className="text-[16px] md:[18px] lg:text-[22px]">
                গ্যালারি
              </Link>
              <Link className="text-[16px] md:[18px] lg:text-[22px]">
                সেল্ফ রুক্ইয়াহ
              </Link>
              <Link className="text-[16px] md:[18px] lg:text-[22px]">
                মিডিয়া
              </Link>
              <Link className="text-[16px] md:[18px] lg:text-[22px]">শপ</Link>
              <Link className="text-[16px] md:[18px] lg:text-[22px]">ব্লগ</Link>
            </div>
            <div className="flex flex-col w-full md:w-4/12 lg:w-2/12 mb-5">
              <Link className="text-[16px] md:[18px] lg:text-[22px]">
                গোপনীয়তার নীতিমালা
              </Link>
              <Link className="text-[16px] md:[18px] lg:text-[22px]">
                শর্তাবলি
              </Link>
              <Link className="text-[16px] md:[18px] lg:text-[22px]">
                ব্যবহারিক নীতিমালা
              </Link>
              <Link className="text-[16px] md:[18px] lg:text-[22px]">
                বিবৃতি
              </Link>
              <Link className="text-[16px] md:[18px] lg:text-[22px]">
                পেমেন্ট ও রিফান্ড পলিসি
              </Link>
              <Link className="text-[16px] md:[18px] lg:text-[22px]">FAQ</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mx-5">
        <div className="max-w-[1200px] mx-auto py-10 lg:flex justify-between mb-12">
          <div className="flex items-center mb-3">
            <span className="bg-primary h-8 w-8 rounded-full flex justify-center items-center">
              <FaEnvelope className="text-lg text-white" />
            </span>
            <a
              href="mailto:sukunlife24@gmail.com"
              className="ml-2 text-[16px] md:text-[18px] lg:text-[21px]"
            >
              sukunlife24@gmail.com
            </a>
          </div>
          <div className="flex items-center mb-3">
            <span className="bg-primary h-8 w-8 rounded-full flex justify-center items-center">
              <FaWhatsapp className="text-lg text-white" />
            </span>
            <a
              href="tel:+88101817199226"
              className="ml-2 text-[16px] md:text-[18px] lg:text-[21px]"
            >
              01817199226
            </a>
          </div>
          <div className="md:flex items-center">
            <p className="text-[13px] md:text-[15px] text-primary pr-5 mr-5 mb-3 md:border-r-2">
              অর্থ প্রদান করুন
            </p>
            <div className="flex flex-wrap">
              <img
                src={bkash}
                className="h-12 md:h-16 p-3 md:p-5 ml-2 mb-2 rounded-md bg-white"
                alt=""
              />
              <img
                src={rocket}
                className="h-12 md:h-16 p-3 md:p-5 ml-2 mb-2 rounded-md bg-white"
                alt=""
              />
              <img
                src={nagad}
                className="h-12 md:h-16 p-3 md:p-5 ml-2 mb-2 rounded-md bg-white"
                alt=""
              />
              <img
                src={visa}
                className="h-12 md:h-16 p-3 md:p-5 ml-2 mb-2 rounded-md bg-white"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 bg-green-10 text-white">
        <h4 className="text-[14px] md:text-[16px] lg:text-[20px] text-center">
          Copyright © 2022 | Design by Befind Developed by KiJani
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
