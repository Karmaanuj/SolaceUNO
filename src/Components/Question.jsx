import React, { useState } from "react";
import pluscircle from "../Assets/plus-circle.png"

function Question() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 mt-10">
      <div className=" container mx-auto flex flex-col w-[1150px] h-auto top-[2714px] left-[120px]">
        <div>
          <div className="w-full h-auto">
            <span className="text-[40px] extrabold">
              Frequently Asked Questions
            </span>
            <div className="w-[900px] h-[60px] ml-[120px]">
              <h4 className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                facilis repudiandae quam perferendis tempore nihil, asperiores
                dignissimos autem vitae quisquam voluptatem labore vero
                provident minima ad libero non numquam est.
              </h4>
            </div>
          </div>
          <div className="mt-[50px] w-auto">
            <div className="flex flex-col space-y-4">

              {/* First Accordion Item */}
              <div className="">
                <button
                  className="flex justify-between w-full py-4 px-6 text-white"
                  onClick={() => toggleAccordion(0)}
                >
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">01</span>
                    <h2>Lorem ipsum lorem ipsum Lorem ipsum lorem?</h2>
                  </div>
                  <span
                    className={`transform ${
                      activeIndex === 0 ? "rotate-180" : ""
                    }`}
                  >
                    <img src={pluscircle} alt="" />
                  </span>
                </button>
                {activeIndex === 0 && (
                  <div className="p-6 bg-gray-800 text-gray-400">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum.
                  </div>
                )}
              </div>

              {/* Second Accordion Item */}
              <div className="">
                <button
                  className="flex justify-between w-full py-4 px-6 text-white"
                  onClick={() => toggleAccordion(1)}
                >
                  <div className="flex items-center space-x-2">
                    <span className=" font-bold">02</span>
                    <h2>Lorem ipsum lorem ipsum Lorem ipsum lorem?</h2>
                  </div>
                  <span
                    className={`transform ${
                      activeIndex === 1 ? "rotate-180" : ""
                    }`}
                  >
                   <img src={pluscircle} alt="" />
                  </span>
                </button>
                {activeIndex === 1 && (
                  <div className="p-6 bg-gray-800 text-gray-400">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum.
                  </div>
                )}
              </div>

              {/* Fourth Accordion Item */}
              <div className="">
                <button
                  className="flex justify-between w-full py-4 px-6  text-white"
                  onClick={() => toggleAccordion(3)}
                >
                  <div className="flex items-center space-x-2">
                    <span className=" font-bold">04</span>
                    <h2>Lorem ipsum lorem ipsum Lorem ipsum lorem?</h2>
                  </div>
                  <span
                    className={`transform ${
                      activeIndex === 3 ? "rotate-180" : ""
                    }`}
                  >
                    <img src={pluscircle} alt="" />
                  </span>
                </button>
                {activeIndex === 3 && (
                  <div className="p-6 bg-gray-800 text-gray-400">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum.
                  </div>
                )}
              </div>

              {/* Fifth Accordion Item */}
              <div className="">
                <button
                  className="flex justify-between w-full py-4 px-6 text-white"
                  onClick={() => toggleAccordion(4)}
                >
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">05</span>
                    <h2>Lorem ipsum lorem ipsum Lorem ipsum lorem?</h2>
                  </div>
                  <span
                    className={`transform ${
                      activeIndex === 4 ? "rotate-180" : ""
                    }`}
                  >
                    <img src={pluscircle} alt="" />
                  </span>
                </button>
                {activeIndex === 4 && (
                  <div className="p-6 bg-gray-800 text-gray-400">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Question;
