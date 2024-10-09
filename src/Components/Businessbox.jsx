import React from "react";
import Business from "../Assets/Business.png";

function Businessbox() {
  return (
    <section className=" bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 mt-10">
      <div className=" border rounded-md border-blue-500 bg-[#2B659629] container mx-auto flex flex-col w-[1150px] h-auto top-[2714px] left-[120px]">
        {/* <div className="flex bg-gradient-to-r from-[#0285E3] to-[#0194FE]"> */}
        <div className="flex">
        <div className=" w-[60%] md:w-1/2 flex mb-8 md:mb-0">
          <img 
            src={Business} 
            alt="Blockchain Illustration" 
            className="w-[400px] h-auto " 
          />
        </div>

        {/* Right Section: Content */}
        <div className="  w-[30%] md:w-3/4 text-white text-left mr-[50px] justify-center items-center p-8">
          <h2 className=" text-4xl font-extrabold w-[500px]">
            Your <span className="text-blue-400">Business</span> Ready For The Blockchain
          </h2>
          <p className="  mt-3 mb-5  text-gray-300 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla eu 
            stetuer eget. Nec, ac sollicitudin aliquam ut egestas duis dolor.
            stetuer eget. Nec, ac sollicitudin aliquam ut egestas duis dolor.
          </p>

          {/* Email Form */}
          <div className="flex items-center mr-[30px]">
            <input 
              type="email" 
              placeholder="Your Email address ..." 
              className="text-white w-full px-4 py-2 border bg-[#2B659629] border-gray-400 rounded-tl-lg rounded-bl-lg  focus:outline-none focus:border-blue-400" 
            />
            <button 
              className="h-[42px] w-[90px] bg-blue-500 hover:bg-blue-600 text-white font-sans rounded-tr-lg rounded-br-lg ">
              Join Now
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Businessbox;
