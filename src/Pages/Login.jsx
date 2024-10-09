import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login_bg_img flex justify-center items-center">
      <div className="w-screen h-screen flex justify-center items-center bg_blure p-24">
        <div className="login_container w-[993px] h-[699px] flex items-center justify-center flex-col p-16">
          <div className="title flex items-center justify-center flex-col mt-[20px]">
            <h1 className="text-center text-white text-4xl font-semibold mb-[12px]">
              Welcome Back
            </h1>
            <p className="text-center text-white text-base max-w-[316px]">
              To keep connected with us please enter your login details.
            </p>
          </div>

          <div className="details flex items-center justify-center mt-[40px]">
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  className="email appearance-none  bg-transparent focus:outline-none w-full py-2 px-3 leading-tight focus:shadow-outline light-white"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  className="password appearance-none  bg-transparent focus:outline-none w-full py-2 px-3 leading-tight focus:shadow-outline  light-white"
                  placeholder="Enter your password"
                />
              </div>
              <p className="text-md text-right text-white text-base cursor-pointer">
                <Link to="/forgot-password">forgot Password?</Link>
              </p>
              <div className="flex flex-col items-center justify-between">
                <button
                  type="submit"
                  className="mobile-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[24px] focus:outline-none focus:shadow-outline w-[398px] h-[44px] mt-[20px] mb-[20px]"
                >
                  Login
                </button>

                <p className="text-md text-center text-white text-md">
                  You don’t have an account?&nbsp;
                  <span className="font-bold cursor-pointer">
                    <Link to="/signup"> Signup</Link>
                    </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
