import * as React from 'react';
import { ProductCard } from './productCard';
import { Titan_One } from "next/font/google";

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Products: React.FC = () => {
  return (
    <section id='products' className={`space-y-2 py-16 bg-[#f2e8cf] dark:bg-transparent px-4`}>
      <h1 className={`text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#63A361] dark:text-violet-700 text-shadow-lg ${titan.className}`}>Our Products</h1>
      <ProductCard/>
    </section>
  );
};

export default Products;