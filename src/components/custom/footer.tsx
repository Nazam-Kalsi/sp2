'use client'
import * as React from "react";
import { Social } from "./heroSec";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    // <footer id="footer" className="relative w-full py-14 border-t">
    //   <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-8 relative z-99">
    //     <div className="max-w-3xl mx-auto">
          // <ul className="font-sans text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12">
          //   <li>
          //     <a
          //       href="/"
          //       className="relative group transition-all duration-300 hover:text-blue-500 active:scale-95"
          //     >
          //       Home
          //       <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          //     </a>
          //   </li>
          
          //   <li>
          //     <a
          //       href="#about"
          //       className="relative group transition-all duration-300 hover:text-blue-500 active:scale-95"
          //     >
          //       About
          //       <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          //     </a>
          //   </li>
          
          //   <li>
          //     <a
          //       href="#products"
          //       className="relative group transition-all duration-300 hover:text-blue-500 active:scale-95"
          //     >
          //       Products
          //       <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          //     </a>
          //   </li>
          
          //   <li>
          //     <a
          //       href="#youtube"
          //       className="relative group transition-all duration-300 hover:text-blue-500 active:scale-95"
          //     >
          //       Videos
          //       <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          //     </a>
          //   </li>
          
          //   <li>
          //     <a
          //       href="#contact"
          //       className="relative group transition-all duration-300 hover:text-blue-500 active:scale-95"
          //     >
          //       Contact
          //       <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          //     </a>
          //   </li>
          // </ul>

    //     </div>
    //     <Social className = ''/>
    //     <p className= 'text-center font-sans'>© 2025 Gobind Rai Engg. Works. All rights reserved.</p>
    //   </div>
    //   <div className="absolute inset-0 bg-linear-to-t from-[#63A361] dark:from-violet-600/50 to-transparent z-0 pointer-events-none" />
    // </footer>
    // 
    // 
    
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
         <div className="flex items-center justify-between md:flex-row flex-col gap-4">
           <div className="md:max-w-md lg:col-span-2">
             <a
               href="/"
               aria-label="Go home"
               title="Company"
               className="inline-flex items-center"
             >
               <div className="flex gap-2 items-center">
                 <Image
                   unoptimized
                   src="/images/logo.jpg"
                   alt="Logo"
                   width={80}
                   height={80}
                   className="rounded-full"
                 />
                 {/*<p className="font-semibold">Gobind Rai Engg. Works</p>*/}
               </div>
               <span className="ml-2 text-center text-xl font-black w-full tracking-wide text-gray-800 uppercase">
                  Bakhtawar Mechanical Works
               </span>
             </a>
             {/*<div className="mt-4 lg:max-w-sm">
               <p className="text-sm text-gray-800">
                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam.
               </p>
               <p className="mt-4 text-sm text-gray-800">
                 Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                 beatae vitae dicta sunt explicabo.
               </p>
             </div>*/}
           </div>
           
             <div>               
               <ul className="font-sans text-lg flex flex-col items-center justify-center  gap-7 md:flex-row md:gap-12 font-semibold text-sm">
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
         </div>
         <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
           <p className="text-sm text-gray-600">
             © Copyright 2025, Bakhtawar Mechanical Works, All rights reserved.
           </p>
           <Social/>
         </div>
       </div>
  );
};

export default Footer;
