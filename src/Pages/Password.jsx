import React from "react";

export default function Password() {
  return (
    <div className="login_bg_img flex justify-center items-center">
      <div className="w-screen h-screen flex justify-center items-center bg_blure p-24">
        <div className="login_container w-[993px] h-[699px] flex items-center justify-center flex-col p-16">
          <div className="title flex items-center justify-center flex-col mt-[20px]">
            <h1 className="text-center text-white text-4xl font-semibold mb-[12px]">
              Forgot Password
            </h1>
            <p className="text-center text-white text-base max-w-[360px]">
              Please enter your register email address and reset your password
            </p>
          </div>

          <div className="details flex items-center justify-center mt-[40px]">
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  className="email appearance-none  bg-transparent focus:outline-none w-full py-2 px-3 leading-tight focus:shadow-outline  light-white"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-row items-center justify space-x-3">
                <button
                  type="submit"
                  className="mobile-button text-white border font-bold py-2 px-4 rounded-[24px] focus:outline-none focus:shadow-outline w-[200px] h-[48px] mt-[20px] mb-[20px]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="mobile-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[24px]  focus:outline-none focus:shadow-outline w-[200px] h-[48px] mt-[20px] mb-[20px]"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from 'react'

// function Password() {
//   return (
//     <div>
//       <h2 className='m-[50px]'>Password page</h2>
      
//     </div>
//   )
// }

// export default Password
