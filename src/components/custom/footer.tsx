'use client'
import * as React from "react";
import { Social } from "./heroSec";
import Image from "next/image";
import { Bowlby_One_SC } from "next/font/google";

  const bowlby = Bowlby_One_SC({
    subsets: ["latin"],
    weight: ["400"],
  });
  
const Footer: React.FC = () => {
  return (
    <footer className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
         <div className="flex items-center justify-between md:flex-row flex-col gap-4">
           <div className="md:max-w-md lg:col-span-2">
             <a
               href="/"
               aria-label="Go home"
               title="Company"
               className="inline-flex items-center md:flex-row flex-col gap-2"
             >
               <div className="flex  gap-2 items-center">
                 <Image
                   unoptimized
                   src="/images/logo.jpg"
                   alt="Logo"
                   width={80}
                   height={80}
                   className="rounded-full dark:invert invert-0"
                 />
                 {/*<p className="font-semibold">Gobind Rai Engg. Works</p>*/}
               </div>
               <span className={`ml-2 text-center text-xl font-black w-full tracking-wide text-[#432323] dark:text-[#FFFD8F] uppercase ${bowlby.className}`}>
                  Bakhtawar Mechanical Works
               </span>
             </a>
           </div>

             <div>
               <ul className="font-sans text-lg flex flex-col pb-2  items-center justify-center  gap-7 md:flex-row md:gap-12 font-semibold text-sm">
                 <li>
                   <a
                     href="/"
                     className="relative group transition-all duration-300 hover:text-[#432323] dark:text-[#FFFD8F] active:scale-95"
                   >
                     Home
                     <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#432323] dark:bg-[#FFFD8F] transition-all duration-300 group-hover:w-full"></span>
                   </a>
                 </li>

                 <li>
                   <a
                     href="#about"
                     className="relative group transition-all duration-300 hover:text-[#432323] dark:text-[#FFFD8F] active:scale-95"
                   >
                     About
                     <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#432323] dark:bg-[#FFFD8F] transition-all duration-300 group-hover:w-full"></span>
                   </a>
                 </li>

                 <li>
                   <a
                     href="#products"
                     className="relative group transition-all duration-300 hover:text-[#432323] dark:text-[#FFFD8F] active:scale-95"
                   >
                     Products
                     <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#432323] dark:bg-[#FFFD8F] transition-all duration-300 group-hover:w-full"></span>
                   </a>
                 </li>

                 <li>
                   <a
                     href="#youtube"
                     className="relative group transition-all duration-300 hover:text-[#432323] dark:text-[#FFFD8F] active:scale-95"
                   >
                     Videos
                     <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#432323] dark:bg-[#FFFD8F] transition-all duration-300 group-hover:w-full"></span>
                   </a>
                 </li>

                 <li>
                   <a
                     href="#contact"
                     className="relative group transition-all duration-300 hover:text-[#432323] dark:text-[#FFFD8F] active:scale-95"
                   >
                     Contact
                     <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#432323] dark:bg-[#FFFD8F] transition-all duration-300 group-hover:w-full"></span>
                   </a>
                 </li>
               </ul>
             </div>
         </div>
         <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
           <p className="text-sm text-gray-600">
             © Copyright 2025, Bakhtawar Mechanical Works, All rights reserved.
           </p>
           <Social/>
         </div>
       </footer>
  );
};

export default Footer;
