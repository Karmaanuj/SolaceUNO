import React, { useEffect, useRef } from "react";
import Form  from "../Components/Form";
import Businessbox from "../Components/Businessbox";

function Contact() {

  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current)
    {
      topRef.current.scrollIntoView({behavior : "smooth"});
    }
  },[]);


  return (
    <section ref={topRef} className=" bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
      <div className=" container mx-auto flex flex-col items-center justify-center w-full">
        <div className=" w-[50%] py-4">
          <h1 className=" text-5xl font-extrabold mt-20">
            Contact  Us
          </h1>
          <p className="text-gray-300 my-4">
            Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.
            Excepteur sint occaecat cupidatat non proident  cupidatat non proident..
          
          </p>
          <div className="mt-6">
            <a
              href="/"
              className=" w-[100px] bg-blue-500 text-white px-[50px] py-3 rounded-lg mr-4 hover:bg-blue-600"
            >
              Get Started
            </a>
            <a
              href="/"
              className="bg-transparent border border-gray-400 text-white px-[50px] py-3 rounded-lg hover:border-white hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <section>
        <Form/>
      </section>

      <section>
      <Businessbox/>
      </section>
      
    </section>
    
  );
}
export default Contact;
