
import React from "react";
import { GiClockwork } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import { RiDiscordLine, RiMixtralLine } from "react-icons/ri";
import { WiDayLightWind } from "react-icons/wi";



const Fucher = () => {
  return (
    <section className="bg-[#0C2F20] md:py-14 py-10 px-4">
      <h1 className="text-primary text-3xl font-hind text-center py-5 font-bold">
        কোর্সটির কিছু <span className="text-secondary">ফিচার</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-[90%] m-auto">
       
          <div
              className=" py-14 p-10  rounded-xl border border-gray-700 hover:border-secondary text-primary flex flex-col items-center transition duration-500 "
          >
            <IoHomeOutline className="text-6xl mb-4  text-secondary" />
            <h1 className="text-10 md:text-2xl font-hind font-bold text-center">
            করা যাবে ঘরে বসেই
            </h1>
          </div>
          <div
              className=" py-14 p-10 rounded-xl border border-gray-700 hover:border-secondary text-primary flex flex-col items-center transition duration-500 "
          >
            <GiClockwork className="text-6xl mb-4  text-secondary" />
            <h1 className="text-10 md:text-2xl font-hind font-bold text-center">
            প্রয়োজন হবে ২১ দিন
            </h1>
          </div>
          <div
             className=" py-14 p-10 rounded-xl border border-gray-700 hover:border-secondary text-primary flex flex-col items-center transition duration-500 "
          >
            <WiDayLightWind className="text-6xl mb-4  text-secondary" />
            <h1 className="text-10 md:text-2xl font-hind font-bold text-center">
            লাইভ প্রবলেম সল্ভিং
            </h1>
          </div>
          <div
             className=" py-14 p-10 rounded-xl border border-gray-700 hover:border-secondary text-primary flex flex-col items-center transition duration-500 "
          >
            <RiMixtralLine className="text-6xl mb-4  text-secondary" />
            <h1 className="text-10 md:text-2xl font-hind font-bold text-center">
            আছে ফ্রি ট্রায়াল
            </h1>
          </div>
          <div
             className=" py-14 p-10 rounded-xl border border-gray-700 hover:border-secondary text-primary flex flex-col items-center transition duration-500 "
          >
            <RiDiscordLine className="text-6xl mb-4  text-secondary" />
            <h1 className="text-10 md:text-2xl font-hind font-bold text-center">
            থাকছে Discord গ্রুপ
            </h1>
          </div>
          <div
            className=" py-14 p-10 rounded-xl border border-gray-700 hover:border-secondary text-primary flex flex-col items-center transition duration-500 "
          >
            <LuNotebookPen className="text-6xl mb-4  text-secondary" />
            <h1 className="text-10 md:text-2xl font-hind font-bold text-center">
            পাচ্ছেন প্র্যাকটিস রিসোর্স
            </h1>
          </div>
        
      </div>
    </section>
  );
};

export default Fucher;
