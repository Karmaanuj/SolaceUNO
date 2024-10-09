import React from "react";
import I8997 from "../Assets/Group 8997.png";
import I8998 from "../Assets/Group 8998.png";
import I8999 from "../Assets/Group 8999.png";
import I8995 from "../Assets/Group 8995.png";
import I9001 from "../Assets/Group 9001.png";
import I9000 from "../Assets/Group 9000.png";
import I9003 from "../Assets/Group 9003.png";

function Everydaypractice() {
  return (
    <section className="  bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 mt-10">
    <div className=" container flex flex-col lg:flex-row justify-center items-center max-w-6xl mx-auto mt-10">
      <div className="flex flex-col w-[1142px] h-[840px] top-[1674px] left-[149px] gap-0">
        <div className="w-full h-[10%] text-xl font-nunito text-[33px] font-bold  text-center">
          <h1 className="text-white">HOW IT WORKS</h1>
        </div>
        <div className="block rounded-3xl w-[1142px] h-[900px] top-[1674px] left-[149px] gap-0 bg-[rgba(43,101,150,0.27)]">
          <div className="flex flex-col">
            <div className="flex justify-evenly items-center  m-4 p-5">
              <div className="flex flex-col">
                <div>
                  <img className="ml-[120px]" src={I8997} alt="img" />
                </div>
                <p>EveryDay Practice</p>
                <h3>
                  Everday Practise shows that the constant propaganda support of
                  our activities plays an important role in the system
                </h3>
              </div>
              <div>
                <div>
                  <img className="ml-[120px]" src={I8998} alt="img" />
                </div>
                <p>EveryDay Practice</p>
                <h3>
                  Everday Practise shows that the constant propaganda support of
                  our activities plays an important role in the system
                </h3>
              </div>
              <div>
                <div>
                  <img className="ml-[120px]" src={I8999} alt="img" />
                </div>
                <p>EveryDay Practice</p>
                <h3>
                  Everday Practise shows that the constant propaganda support of
                  our activities plays an important role in the system
                </h3>
              </div>
            </div>
            <div className="flex justify-evenly">
              <div className="m-3">
                <img src={I9003} alt="Image1" />
              </div>
              <div>
                <img src={I9003} alt="Image2" />
              </div>
            </div>
            <div className="flex justify-evenly items-center  m-4 p-5">
              <div className="flex flex-col">
                <div>
                  <img className="ml-[120px]" src={I8995} alt="img" />
                </div>
                <p>EveryDay Practice</p>
                <h3>
                  Everday Practise shows that the constant propaganda support of
                  our activities plays an important role in the system
                </h3>
              </div>

              <div>
                <div>
                  <img className="ml-[120px]" src={I9001} alt="img" />
                </div>
                <p>EveryDay Practice</p>
                <h3>
                  Everday Practise shows that the constant propaganda support of
                  our activities plays an important role in the system
                </h3>
              </div>
              <div>
                <div>
                  <img className="ml-[120px]" src={I9000} alt="img" />
                </div>
                <p>EveryDay Practice</p>
                <h3>
                  Everday Practise shows that the constant propaganda support of
                  our activities plays an important role in the system
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Everydaypractice;
