

import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const AfterEffectsCTA = () => {
  return (
    <>
     
      <section className="bg-[#0d271c] md:py-8 py-10 px-4 md:pb-14 ">

        <div className="md:w-[82%] md:m-auto bg-[url('/banner.webp')] bg-cover bg-blend-overlay rounded-2xl py-10 px-0">
          
           <h1 className="md:text-center text-white text-3xl  md:text-4xl font-hind text-center font-bold leading-10  md:leading-tight">আফটার ইফেক্টস শিখে আপনার <br /> ভিডিও এডিটিং স্কিল নিয়ে যান <br /> আরও এক ধাপ উপরে!</h1>
            <button className=" border-red-100 bg-secondary flex justify-center items-center py-2 px-4 rounded-md mt-10 hover:animate-pulse m-auto">
            ক্লিক করুন <AiOutlineArrowRight className="ml-2 " />
              </button>
        </div>

      </section>
    </>
  );
};

export default AfterEffectsCTA;
