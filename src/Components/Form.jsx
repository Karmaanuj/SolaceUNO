import React from "react";
import Msg from "../Assets/msg.png"
import Call from "../Assets/call.png"
import Loc from "../Assets/loc.png"

function Form() {
  return (
    // <section className="container w-[1142px] h-auto   m-[120px] bg-gradient-to-r from-gray-800 to-gray-900">
    //   <div className="border border-blue-500 rounded-xl flex justify-center items-center">
    <section className=" bg-gradient-to-r from-gray-800 to-gray-900 text-white py-[50px]">
      <div className=" border rounded-[42px] border-blue-500 container mx-auto flex flex-col w-[1000px] h-auto top-[2714px] left-[120px] gap-[50px]">
        {/* Left div */}
        <div className=" text-white flex flex-wrap rounded-lg shadow-lg">
          {/* Left Section - Form */}
          <div className=" w-full md:w-1/2 p-4">
            <form className="space-y-6">
              {/* First Name and Last Name */}
              <div className="flex space-x-4">
                <div className="flex-1">
                  {/* <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor="first-name"
                  >
                    First Name
                  </label> */}
                  <input
                    id="first-name"
                    // type="text"
                    placeholder="First Name"
                    className="w-full bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 p-2"
                  />
                </div>
                <div className="flex-1">
                  {/* <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor="last-name"
                  >
                    Last Name
                  </label> */}
                  <input
                    id="last-name"
                    // type="text"
                    placeholder="Last Name"
                    className="w-full bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 p-2"
                  />
                </div>
              </div>

              {/* Email and Phone Number */}
              <div className="flex space-x-4">
                <div className="flex-1">
                  {/* <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor="email"
                  >
                    Enter Your Email Address
                  </label> */}
                  <input
                    id="email"
                    // type="email"
                    placeholder="Enter Your Email Address"
                    className="w-full bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 p-2"
                  />
                </div>
                <div className="flex-1">
                  {/* <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor="phone"
                  >
                    Enter Your Number
                  </label> */}
                  <div className="flex items-center">
                    <span className="bg-transparent border-b-2 border-gray-400 p-2">
                      +91
                    </span>
                    <input
                      id="phone"
                      // type="text"
                      placeholder="Enter your number"
                      className="w-full bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 p-2"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                {/* <label
                  className="block text-sm font-semibold mb-2"
                  htmlFor="message"
                >
                  Type Your Message
                </label> */}
                <textarea
                  id="message"
                  placeholder="Type Your Message"
                  className="w-full bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 p-2"
                  rows="4"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300">
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Right Section - Contact Information */}
          <div className=" w-full  md:w-1/2 border-l-2 border-blue-500 p-5">
            <div className=" p-8  w-[400px] text-left ml-[50px]">
              <h2 className="text-2xl font-semibold mb-4">
                Contact Information
              </h2>
              <p className="text-gray-400 mb-6">
                In a laoreet purus. Integer turpis quam, laoreet id orci
                ultricies lacinia nunc.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <span className="text-blue-400">
                    <img src={Msg} alt="" />
                  </span>
                  <span>+91 8898551247</span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="text-blue-400">
                    <img src={Call} alt="" />
                  </span>
                  <span>Contact@gmail.com</span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="text-blue-400">
                    <img src={Loc} alt="" />
                  </span>
                  <span className=" w-[200px]">Address123 Vijay Nagar, Indore, 452010</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
