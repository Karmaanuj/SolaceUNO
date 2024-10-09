import React from "react";
import Homeimg from "../Assets/herosectionimg.png";
import LogoImage from "../Assets/logoimage.png";
import Aboutcompany from "../Components/Aboutcompany";
import Everydaypractice from "../Components/Everydaypractice";
import Question from "../Components/Question";
import Businessbox from "../Components/Businessbox";

function Home() {
  return (
    <>
      <section className=" bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="flex flex-row gap-5">
            <div className="md:w-1/2 md:mb-0 text-start px-8">
              <h1 className="text-5xl font-bold mt-20">
                Welcome to <span className="text-blue-400">Solace</span> <br />
                Uno
              </h1>
              <p className="text-gray-300 my-4">
                Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
              </p>
              <div className="mt-6">
                <a
                  href="/"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg mr-4 hover:bg-blue-600"
                >
                  Get Started
                </a>
                <a
                  href="/"
                  className="bg-transparent border border-gray-400 text-white px-6 py-3 rounded-lg hover:border-white hover:text-white"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src={Homeimg}
                alt="Hero"
                className="w-[532px] h-[450px] top-[139px] left-[788px]"
              />
            </div>
          </div>
          <div className="ml-[20]">
            <img src={LogoImage} alt="" />
          </div>
        </div>
        <section>
          <Aboutcompany />
        </section>
        <section>
          <Everydaypractice />
        </section>
        <section>
          <Question />
        </section>
        <section>
          <Businessbox />
        </section>
      </section>
    </>
  );
}

export default Home;
