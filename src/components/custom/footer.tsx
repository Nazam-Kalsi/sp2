'use client'
import * as React from "react";
import { Social } from "./heroSec";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="relative w-full py-14 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-8 relative z-99">
        <div className="max-w-3xl mx-auto">
          <ul className="font-sans text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12">
            <li>
              <a
                href="/"
                className="relative group transition-all duration-300 hover:text-blue-500 active:scale-95"
              >
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          
            <li>
              <a
                href="#about"
                className="relative group transition-all duration-300 hover:text-blue-500 active:scale-95"
              >
                About
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          
            <li>
              <a
                href="#products"
                className="relative group transition-all duration-300 hover:text-blue-500 active:scale-95"
              >
                Products
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          
            <li>
              <a
                href="#youtube"
                className="relative group transition-all duration-300 hover:text-blue-500 active:scale-95"
              >
                Videos
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          
            <li>
              <a
                href="#contact"
                className="relative group transition-all duration-300 hover:text-blue-500 active:scale-95"
              >
                Contact
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>

        </div>
        <Social className = ''/>
        <p className= 'text-center font-sans'>© 2025 Gobind Rai Engg. Works. All rights reserved.</p>
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-[#63A361] dark:from-violet-600/50 to-transparent z-0 pointer-events-none" />
    </footer>
  );
};

export default Footer;
