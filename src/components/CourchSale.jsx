import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const CourchSale = () => {
    return (
        <>
         <section className='bg-[#0C2F20] md:py-20 py-10 px-4 md:pb-14 '>
                <div className='flex flex-col items-center md:flex-row '>
                    
                <div className='w-full md:w-1/2 mt-10 md:mb-0  shadow-soft '>
                    <img className="mx-auto rounded-2xl bg-green-500 shadow-xl shadow-green-500/100 md:w-[70%] w-[90%]" src="/01.webp" alt="" />
                </div>
                <div className='w-full md:w-1/2 mt-16 md:mb-14    '>
                    <img className='mb-10 animate-bounce md:ml-80 hidden md:block' src="/04.webp" alt="" srcset="" />
                     <h1 className='text-primary md:font-hind md:text-5xl md:font-bold md:leading-tight    text-[1.70rem] font-hind font-bold '>শিখে নিন  <span className='text-secondary'>লাইন অ্যান্ড প্যাথ</span></h1>
                     <h1 className='text-primary md:font-hind md:text-5xl md:font-bold md:leading-tight    text-[1.70rem] font-hind font-bold '>অ্যানিমেশন,  <span className='text-secondary'>যা ইনফোটেইনমেন্ট</span></h1>
                    <h2 className='text-primary md:text-4xl text-2xl font-hind font-bold mt-3 mb-2  '>কন্টেন্ট বানাতে সাহায্য করবে</h2>
                    
                     <button className=" border-red-100 bg-secondary flex justify-center items-center py-2 px-4 rounded-md mt-8 hover:animate-pulse">
                              এনরোল করুন <AiOutlineArrowRight className="ml-2" />
                    </button>
        
        
                   
                </div>
                </div>
              
              </section>
        </>
    );
};

export default CourchSale;