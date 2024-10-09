import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="login_bg_img flex justify-center items-center">
      <div className="w-screen h-screen flex justify-center items-center bg_blure p-24">
        <div className="login_container w-[993px] h-[699px] flex items-center justify-center flex-col p-16">
          <div className="title flex items-center justify-center flex-col mt-[20px]">
            <h1 className="text-center text-white text-4xl font-semibold mb-[12px]">
              Get Started
            </h1>
            <p className="text-center text-white text-base max-w-[360px]">
              Welcome to Uno - Let’s create your account
            </p>
          </div>

          <div className="details flex items-center justify-center mt-[40px]">
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  className="name appearance-none  bg-transparent focus:outline-none w-full py-2 px-3 leading-tight focus:shadow-outline light-white"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  className="email appearance-none  bg-transparent focus:outline-none w-full py-2 px-3 leading-tight focus:shadow-outline light-white"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  className="password appearance-none  bg-transparent focus:outline-none w-full py-2 px-3 leading-tight focus:shadow-outline light-white"
                  placeholder="Password"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="confirm-password"
                  className="confirm-password appearance-none  bg-transparent focus:outline-none w-full py-2 px-3 leading-tight focus:shadow-outline light-white"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="flex flex-col items-center justify-between">
                <button
                  type="submit"
                  className="mobile-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[24px] focus:outline-none focus:shadow-outline w-[398px] h-[44px] mt-[20px] mb-[20px]"
                >
                  Sign Up
                </button>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="checkbox" className="mr-2" />
                <label htmlFor="checkbox" className="text-gray-700">
                  <p className="text-sm text-white max-w-[360px]">
                    By creating an account you agree to the &nbsp;
                    <Link href="#" className="font-bold underline">
                      terms of use &nbsp;
                    </Link>
                    and our &nbsp;
                    <Link href="#" className="font-bold underline">
                      privacy policy.
                    </Link>
                  </p>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
