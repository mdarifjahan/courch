import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Mentor = () => {
    return (
      <>
      <section className='bg-[#0C2F20] md:py-10 py-10 px-4'>
        <div className='flex flex-col-reverse items-center md:flex-row'>
        <div className='w-full md:w-1/2 mt-10 md:mb-0 '>
            <img className="mx-auto" src="/01 (3).webp" alt="" />
        </div>
        <div className='w-full md:w-1/2 mb-5 md:mb-0'>
            <h1 className='text-primary md:font-hind md:text-5xl md:font-bold md:leading-tight    text-[1.70rem] font-hind font-bold '>আফটার ইফেক্টসের সবচেয়ে বেশি <br />ব্যবহৃত ফিচার গুলো শিখে নিন <br/> মাত্র <span className='text-secondary'>২১ দিনেই</span></h1>
            <h2 className='text-primary md:text-4xl text-3xl font-hind font-bold mt-8 mb-2  '>মেন্টর হিসেবে থাকছে</h2>
            <span className='text-secondary md:text-4xl text-3xl font-hind font-bold pb-4'>জুবায়ের তালুকদার</span>

             <button className=" border-red-100 bg-secondary flex justify-center items-center py-2 px-4 rounded-md mt-14 hover:animate-pulse">
                      এনরোল করুন <AiOutlineArrowRight className="ml-2" />
            </button>


           
        </div>
        </div>
      
      </section>
      </>
    );
};

export default Mentor;
