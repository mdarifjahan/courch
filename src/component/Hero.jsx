
import { AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
  return (
    <>
    <section className="bg-bg-color py-10">
  <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row justify-between items-center  w-[85%]">
    
    {/* Left Part */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <img className="hidden md:block animate-bounce" src="/01 (1).webp" alt="" />
      
      <h2 className="text-primary text-3xl md:text-4xl pt-5 font-hind font-bold">
        <span className="text-secondary">আফটার ইফেক্টস</span> ক্র্যাশ কোর্স
      </h2>

      <h1 className="text-primary text-[32px] md:text-[45px] font-hind pt-2 font-bold">
        মাত্র ২১ দিনে !
      </h1>

      <div className="flex justify-center md:justify-start items-center gap-3 mt-5">
        <button className="border-red-100 bg-secondary flex justify-center items-center py-2 px-4 rounded-md">
          এনরোল করুন <AiOutlineArrowRight className="ml-2" />
        </button>

        <button className="py-2 px-4 rounded-md border text-secondary hover:bg-secondary hover:text-black transition duration-500 border-secondary">
          ফ্রি ক্লাস করুন
        </button>
      </div>
    </div>

    {/* Right Part */}
    <div className="w-full md:w-1/2 mb-5 md:mb-0 ">
      <img className="mx-auto" src="/01 (2).webp" alt="" />
    </div>

  </div>
</section>


      {/*  <section>
        <div>
            <img src="/public" alt=""  />
        </div>
       <div>

       </div>
       </section> */}


      


    </>
  );
};

export default Hero;
