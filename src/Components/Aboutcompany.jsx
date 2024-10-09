import React from 'react'
import Group from "../Assets/Group.png"

function Aboutcompany() {
  return (
    <section className=" bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 mt-10">
      <div className=" container w-[1150px] h-auto top-[2714px] left-[120px] flex flex-col lg:flex-row justify-center items-center  max-w-6xl mx-auto mt-10">
            <div className="flex items-center justify-center w-full lg:w-1/2 mb-6 lg:mb-0">
                <div className="flex items-center justify-center rounded-full shadow-md">
                    <img
                        src= {Group} 
                        alt="Company Icon"
                        className="w-408 h-462" // Adjust size as needed
                    />
                </div>
            </div>

            <div className="text-white lg:w-1/2 lg:pl-10 text-left">
                <h2 className="text-3xl font-bold mb-4">ABOUT COMPANY</h2>
                <p className="mb-4">
                    Everyday practice shows that the constant information and
                    propaganda support of our activities plays an important role in shaping the personnel training system and meets urgent needs.
                </p>
                <p className="mb-6">
                    Everyday practice shows that the constant information and propaganda support of our activities plays an important role in shaping the personnel training system and meets urgent needs.
                </p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                    Get Started
                </button>
            </div>
        </div>
    </section>
  )
}

export default Aboutcompany
