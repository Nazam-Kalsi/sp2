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
         <section className="border border-gray-50/10 p-2 m-2 flex justify-between items-center bg-gray-400/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm">
           
           {/* Left: Logo */}
           <div className="flex gap-2 items-center">
             <Image
               unoptimized
               src="https://placehold.co/600x400"
               alt="Logo"
               width={40}
               height={40}
               className="rounded-full"
             />
             {/*<p className="font-semibold">Gobind Rai Engg. Works</p>*/}
           </div>
   
           {/* Desktop Nav */}
           <div className="hidden md:flex gap-2">
             <Link href="/"><Button variant="ghost">Home</Button></Link>
             <Link href="#about"><Button variant="ghost">About</Button></Link>
             <Link href="#products"><Button variant="ghost">Products</Button></Link>
             <Link href="#youtube"><Button variant="ghost">Videos</Button></Link>
             <Link href="#contact">
               <Button variant="ghost">Contact</Button>
             </Link>
           </div>
   
           {/* Theme + Hamburger */}
           <div className="flex items-center gap-2">
             <Theme />
             <Button
               variant="ghost"
               size="icon"
               className="md:hidden"
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