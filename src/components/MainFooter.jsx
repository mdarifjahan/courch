import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';

const MainFooter = () => {
    return (
        <>
        <section className='bg-[#0C2F20] font-poppins'>
            <div className='md:w-[85%] px-6   md:m-auto  md:grid md:grid-cols-4 md:gap-10 py-4 '>
                
                <div className=''>
                <img className='mt-9' src="/logo-light.svg" alt="" />
               </div>

             <div className='text-primary  py-8'>
                <h1 className='text-xl font-bold '>Get Support</h1>
               <span className='flex items-center gap-2  mt-3'><FaWhatsapp className='text-2xl' /><p>+88019945980</p></span> 
            </div>
             
             <div className='text-primary md:mt-8'>
                <h1 className='text-xl font-bold '>Office Address</h1>
               <span className='flex gap-2 mt-3'><GrLocation className='text-5xl' />
               <p>House-32, Road-01, Block-G, South Banasree, Dhaka</p></span> 
             </div>

             <div className='text-primary md:mt-8  mt-12 '>
                <h1 className='text-xl font-bold '>More Information</h1>
                <p className='mt-4'>Privacy Policy</p>
                <p>Privacy Policy</p>
                <p>Privacy Policy</p>
             </div>
                </div>
             

           

            <div className='md:w-[85%] m-auto px-10'>
                <img src="/sslcommerz-banner.png" alt="" />
            </div>
           <div className='md:w-[85%] m-auto mt-6'>
           <hr />
           </div>

           <div className='text-slate-400 md:w-[85%]  md:flex grid grid-cols-2 py-4  justify-between m-auto md:mb-0 md:mt-auto text-sm font-poppins  px-6' >
            <h1 className=''>© 2025 Copyright | All Rights Reserved</h1>
            <h2 className=''>License: TRAD/DSCC/003127/2024</h2>
           </div>

        </section>

        </>
    );
};

export default MainFooter;