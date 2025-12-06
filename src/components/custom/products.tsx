import * as React from 'react';
import { Titan_One } from "next/font/google";
import { FocusCards } from '../ui/focus-cards';

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Products: React.FC = () => {
  const cards = [
     {
       title: "Camping is for pros",
       src: "/images/4.jpeg",
     },
     {
       title: "The First Rule",
       src: "/images/6.jpeg",
     },
     {
       title: "The road not taken",
       src: "/images/5.jpeg",
     },
     {
       title: "Forest Adventure",
       src: "/images/1.jpeg",
     },
     {
       title: "The First Rule",
       src: "/images/7.jpeg",
     },
     {
       title: "The First Rule",
       src: "/images/11.jpeg",
     },
     {
       title: "The First Rule",
       src: "/images/9.jpeg",
     },
     {
       title: "The First Rule",
       src: "/images/8.jpeg",
     },
     {
       title: "The First Rule",
       src: "/images/10.jpeg",
     },
     {
       title: "The First Rule",
       src: "/images/12.jpeg",
     },
   ];
  
   return (
     <div className='p-4 flex flex-col gap-4 py-16' id='products'>
       <h2 className={`text-5xl pb-3 font-bold text-center  text-[#432323] dark:text-[#FFFD8F] text-shadow-lg ${titan.className}`}>Our Products</h2>
     <FocusCards cards={cards} />
     </div>
   );
};

export default Products;