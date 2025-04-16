import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <section className="bg-[#0C2F20] md:py-10 py-10 px-2">
        <div className=" px-2 md:flex flex-col-reverse md:flex-row md:justify-around md:w-[90%]">
          <div className="w-full md:w-1/2 mb-5 ">
            <img className="" src="/01 (2).webp" alt="" />
          </div>

          <div className="">
            <h1 className="text-primary text-3xl font-bold md:text-4xl">
              Sign in to your account
            </h1>
            <ul className="flex md:flex gap-4 text-primary mt-4 text-16 ">
              <li>
                <Link to="#">Sign in with OTP</Link>
              </li>
              <li>
                <Link to="#">Sign in with Password</Link>
              </li>
            </ul>

            {/*Sign in with OTP*/}

            <h1 className="text-gray-300 font-poppins mt-4 mb-2 ">
              Phone Number
            </h1>
            <input
              className="w-full py-2 px-3 rounded border-2 border-green-600 bg-[#00000035] focus:outline-none text-white"
              type="text"
              placeholder="Enter Phone Number"
            />
            <button className="bg-secondary w-full py-2 mt-6 rounded font-poppins mb-3 text-center">
              Request OTP
            </button>
            <div className="text-center gap-5">
              <span className="text-gray-300 ml-auto text-[17px] font-poppins">
                Don’t have an account yet?{" "}
                <a className="text-secondary" href="">
                  Sign up
                </a>
              </span>
            </div>

            {/* =========== */}

            {/* Sign in with Password */}
            <label className="text-gray-300 font-poppins " htmlFor="">Phone Number </label>
            <input
              className="w-full py-2 px-3 rounded border-2 border-green-600 bg-[#00000035] focus:outline-none text-white  mt-2"
              type="text"
              placeholder="Enter Phone Number"
            /> <br /><br />
            <label className="text-gray-300 font-poppins " htmlFor="">Password</label>
            <input
              className="w-full py-2 px-3 rounded border-2 border-green-600 bg-[#00000035] focus:outline-none text-white mt-2"
              type="text"
              placeholder="Password"
            />
            
            <div className="text-gray-400 flex justify-between mt-4 font-poppins ">
               <span><input 
  type="checkbox" 
  className="appearance-none  w-3 h-3 border border-white bg-transparent rounded-sm cursor-pointer checked:bg-green-500 checked:border-white" 
  /> Remember Me</span>

              <a href="" className="text-secondary">Forgot Password</a>
            </div>

            <button className="bg-secondary w-full py-2 mt-6 rounded font-poppins mb-3 text-center">
              Request OTP
            </button>

          </div>
        </div>

        {/* ////////////////// */}
      </section>
    </>
  );
};

export default Signup;
