'use client'
import Link from 'next/link';
import  React,{useState} from 'react';
import { Button } from '../ui/button';
import { Menu, X } from "lucide-react";

import Image from 'next/image';
import Theme from './theme';


const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-[999]">
         <section className=" p-2 py-4 flex justify-center items-center gap-6 bg-white/50 dark:bg-black/50 bg-clip-padding backdrop-filter backdrop-blur-sm">
           
           {/* Left: Logo */}
           <div className="flex gap-2 items-center">
             <Image
               unoptimized
               src="/images/logo.jpg"
               alt="Logo"
               width={40}
               height={40}
               className="rounded-full dark:invert invert-0"
             />
             {/*<p className="font-semibold">Gobind Rai Engg. Works</p>*/}
           </div>
   
           {/* Desktop Nav */}
           <div className="hidden md:flex gap-2">
             <Link href="/"><Button className='rounded-full text-[#432323] dark:text-[#FFFD8F]' variant="ghost">Home</Button></Link>
             <Link href="#contact">
               <Button className='rounded-full text-[#432323] dark:text-[#FFFD8F]' variant="ghost">Contact</Button>
             </Link>
             <Link href="#products"><Button className='rounded-full text-[#432323] dark:text-[#FFFD8F]' variant="ghost">Products</Button></Link>
             <Link href="#about"><Button className='rounded-full text-[#432323] dark:text-[#FFFD8F]' variant="ghost">About</Button></Link>
             <Link href="#youtube"><Button className='rounded-full text-[#432323] dark:text-[#FFFD8F]' variant="ghost">Videos</Button></Link>
           </div>
   
           {/* Theme + Hamburger */}
           <div className="flex items-center gap-2">
             <Theme />
             <Button
               variant="ghost"
               size="icon"
               className="md:hidden rounded-full"
               onClick={() => setOpen(!open)}
             >
               {open ? <X /> : <Menu />}
             </Button>
           </div>
   
         </section>
   
         {/* MOBILE DROPDOWN MENU */}
         {open && (
           <div className="md:hidden mx-2 p-3 bg-gray-400/10 rounded-md backdrop-blur-sm border border-gray-50/10">
             {/* Breadcrumb style */}
             <div className="text-sm mb-3 text-gray-300">Menu / Navigation</div>
   
             <div className="flex flex-col gap-2">
               <Link href="/" onClick={() => setOpen(false)}>
                 <Button className="w-full" variant="ghost">Home</Button>
               </Link>
   
               <Link href="#about" onClick={() => setOpen(false)}>
                 <Button className="w-full" variant="ghost">About</Button>
               </Link>
   
               <Link href="#products" onClick={() => setOpen(false)}>
                 <Button className="w-full" variant="ghost">Products</Button>
               </Link>
   
               <Link href="#contact" onClick={() => setOpen(false)}>
                 <Button className="w-full" variant="ghost">Contact</Button>
               </Link>
               <Link href="#youtube" onClick={() => setOpen(false)}>
                 <Button className="w-full" variant="ghost">Videos</Button>
               </Link>
             </div>
           </div>
         )}
       </nav>
  );
};

export default Header;