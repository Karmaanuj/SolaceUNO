import Globe from "../Assets/Globe.png";
import G1 from "../Assets/G1.png";
import G2 from "../Assets/G2.png";
import G3 from "../Assets/G3.png";
// import Dash from "../Assets/Line 49.png";
import Hand from "../Assets/Aboutasset.png";
import Write from "../Assets/Write.png";
import Businessbox from "../Components/Businessbox";
import { useEffect, useRef } from "react";

export default function About() {
  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      ref={topRef}
      className=" bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20"
    >
      <div className=" container mx-auto flex flex-col items-center justify-center w-full">
        <div className=" w-[50%] py-4">
          <h1 className=" text-5xl font-extrabold mt-20">About Us</h1>
          <p className="text-gray-300 my-4">
            Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident. Excepteur sint
            occaecat cupidatat non proident cupidatat non proident..
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

      <section className=" bg-[#2B659629] text-white py-20 mt-[50px]">
        <div className=" p-5 flex justify-between gap-5 ">
          {/* <div className=" container w-[1150px] h-auto top-[2714px] left-[120px] flex lg:flex-row "> */}
          {/* Left Section */}
          <div className="  text-left w-[50%] p-8">
            <div className=" w-[500px] ">
              <h1 className=" text-4xl font-bold mb-10 p-3">
                We Have Built a Platform to Buy and Sell Shares
              </h1>
              <ul className="  space-y-8 text-left p-3">
                {/* <div className="border w-10 h-10 absolute left-6 top-0 bottom-0 border-l-2 border-dashed border-blue-500"></div> */}
                {/* First Item */}
                {/* <div className="flex ml-10">
              <img src={Dash} alt="" />
            </div> */}
                <li className="flex items-start space-x-6">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center">
                    <img src={G1} alt="icon1" className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Decentralized Platform
                    </h3>
                    <p className="text-gray-400">
                      The platform helps investors to make it easy to purchase
                      and sell their tokens.
                    </p>
                  </div>
                </li>

                {/* Second Item */}
                <li className="flex items-start space-x-6">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center">
                    <img src={G2} alt="icon2" className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Crowd Wisdom</h3>
                    <p className="text-gray-400">
                      The process of taking into account the collective opinion
                      of a group.
                    </p>
                  </div>
                </li>
                {/* Third Item */}
                <li className="flex items-start space-x-6 mt-[120px]">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center">
                    <img src={G3} alt="icon3" className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Rewards Mechanism</h3>
                    <p className="text-gray-400">
                      The system pays a bonus for excellent individuals.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className=" flex justify-center w-[40%]">
            <img src={Globe} alt="" className="" />
          </div>
        </div>
      </section>

      {/* Ready Documents section  */}

      <section className=" flex bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 md:py-10">
        <div className="   border-red-600 flex justify-between p-4 w-full gap-10 h-auto ">
          {/* Left Section */}
          <div className=" text-left border-green-400 p-5 w-[50%]">
            <div className=" p-4 w-auto">
              <div>
                <label className=" text-4xl font-bold mb-8">
                  Ready Our Documents
                </label>
                <h3 className="mt-5 w-[400px]">
                  Here is our full documents that help you to understand deeply
                  about us and our operation
                </h3>
              </div>
              <div className=" flex flex-col justify-between py-6">
                <div className=" flex gap-10 py-6">
                  <div className="flex gap-4">
                    <div>
                      <img src={Write} alt="" />
                    </div>
                    <div className="mt-2">
                      <h3>Lorem ipsum dolor</h3>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <img src={Write} alt="" />
                    </div>
                    <div className="mt-2">
                      <h3>Lorem ipsum dolor</h3>
                    </div>
                  </div>
                </div>
                <div className=" flex gap-9 py-6">
                  <div className="flex gap-4">
                    <div>
                      <img src={Write} alt="" />
                    </div>
                    <div className="mt-2">
                      <h3>Lorem ipsum dolor</h3>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <img src={Write} alt="" />
                    </div>
                    <div className="mt-2">
                      <h3>Lorem ipsum dolor</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="/"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg mr-4 hover:bg-blue-600"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className=" w-[40%] flex justify-center">
            <img src={Hand} alt="" className="" />
          </div>
        </div>
      </section>

      <Businessbox />
    </section>
  );
}
