import React from "react";
import { Link } from "react-router-dom";
import Twitter from "../Assets/Twitter.png";
import Insta from "../Assets/Insta.png";
import Youtube from "../Assets/Youtube.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white ">
      <div className=" container mx-auto flex justify-between  w-[1150px] h-auto top-[2714px] left-[120px] border-t-2 border-gray-400">
        <div className=" flex mt-[50px] justify-between w-full p-4">
        {/* Left Section */}
        <div className="  text-left w-[30%]">
          <span className="text-2xl text-blue-400 font-bold mb-[70px] ml-[30px]">UNO</span>
          <p className="mt-2 mb-4">
            Join our Discord channel or follow us on Twitter to keep up to date
            with our latest work and announcements.
          </p>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a
              href="https://x.com/?lang=en&mx=2"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
              <img src={Twitter} alt="" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
              <img src={Insta} alt="" />
            </a>
            <a
              href="https://www.youtube.com/"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
              <img src={Youtube} alt="" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className=" flex space-x-16 text-left w-[40%] border-green-900 justify-center">
          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Link</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Community</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:underline">
                  How it works!
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Blockchain
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="  container mx-auto flex justify-between items-center w-[1150px] h-auto top-[2714px] left-[120px] mt-[120px]">
        <div className="container mx-auto flex justify-between items-center pb-10">
          <p>Copyright © 2023 Uno All Rights Reserved.</p>
          <div className="flex space-x-4">
            <Link href="/" className="hover:underline">
              Privacy policy
            </Link>
            <Link href="/" className="hover:underline">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
