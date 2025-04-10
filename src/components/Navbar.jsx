import React from "react";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
     <section className="bg-bg-color">
     <div className="flex justify-between items-center w-[90%] m-auto pt-4 pb-4 sm:w-[80%]">

     <div >
        <img src="/logo-light.svg" alt="" />
      </div>

      <nav className="flex text-primary font-hind" >
        <ul className="flex gap-10 ">
          <li>
            <Link to ="/"  className="">হোম</Link>
          </li>
          <li>
            <Link to ="/afterEffectsCTA">কোর্সে’স</Link>
          </li>
          <li>
            <Link to ="/mentor">মেন্টর</Link>
          </li>
          <li>
            <Link to="/Fucher">ফিচার’স</Link>
          </li>
        </ul>
      </nav>

      <div className="text-black border-green-700 px-3 py-2 rounded-md bg-secondary">
        <button>Sign in</button>
      </div>

     </div>
     </section>
    
   
    </>
  );
};

export default Navbar;
