import * as React from 'react';
import { Bowlby_One_SC } from "next/font/google";
import { FocusCards } from '../ui/focus-cards';

const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  weight: ["400"],
});

const Products: React.FC = () => {
  const cards = [
     {
       title: "Front-end Loader Attachment",
       src: "/images/4.jpeg",
     },
     {
       title: "Spring-loaded Cultivator",
       src: "/images/6.jpeg",
     },
     {
       title: "Super Seeder",
       src: "/images/5.jpeg",
     },
     {
       title: "Pole Erection Machine",
       src: "/images/1.jpeg",
     },
     {
       title: "Rotary Slasher",
       src: "/images/7.jpeg",
     },
     {
       title: "Disc Plough",
       src: "/images/11.jpeg",
     },
     {
       title: "8 Disk Harrow",
       src: "/images/9.jpeg",
     },
     {
       title: "Hydrolic Harrow",
       src: "/images/8.jpeg",
     },
     {
       title: "Spring-loaded Cultivator",
       src: "/images/10.jpeg",
     },
     {
       title: "Front Loader",
       src: "/images/12.jpeg",
     },
   ];
  
   return (
     <div className='p-4 flex flex-col gap-4 py-16' id='products'>
       <h2 className={`md:text-5xl text-4xl pb-3 font-bold text-center  text-[#432323] dark:text-[#FFFD8F] text-shadow-lg ${bowlby.className}`}>Our Products</h2>
     <FocusCards cards={cards} />
     </div>
   );
};

export default Products;