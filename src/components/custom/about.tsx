import * as React from "react";
import { Bowlby_One_SC, Charm } from "next/font/google";
import Image from "next/image";

const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  weight: ["400"],
});
const charm = Charm({
  subsets: ["latin"],
  weight: ["400"],
});
const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative px-4 sm:px-8 lg:px-20 py-16 sm:py-24 transition-colors bg-[#432323] rounded-lg mx-3 text-white dark:bg-linear-to-b dark:from-black dark:to-transparent dark:bg-transparent overflow-hidden"
    >
      <div className="absolute z-[10] w-screen h-screen overflow-hidden lg:block hidden">
        <Image
          alt="Hero Background"
          src="/images/6.jpeg"
          width={490}
          height={490}
          className="absolute rounded-2xl size-32 left-0 top-0 object-fit opacity-100 "
        />
      </div>
      <div className="absolute z-[10]  w-screen h-screen overflow-hidden lg:block hidden">
        <Image
          alt="Hero Background"
          src="/images/9.jpeg"
          width={490}
          height={490}
          className="absolute rounded-2xl size-32 right-50 top-32 object-fit opacity-100"
        />

        <Image
          alt="Hero Background"
          src="/images/11.jpeg"
          width={490}
          height={490}
          className="absolute rounded-2xl size-32 left-0 bottom-40 object-fit opacity-100 "
        />
      </div>
      <div className="absolute z-[10] w-screen h-screen">
        <Image
          alt="Hero Background"
          src="/images/6.png"
          width={590}
          height={590}
          unoptimized

          className="absolute left-0 sm:left-[25%] bottom-0 object-fit opacity-15 "
        />
        <Image
          alt="Hero Background"
          src="/images/7.png"
          width={590}
          height={590}
          unoptimized
          className="absolute sm:hidden left-0 sm:left-[25%] top-0 object-fit opacity-15 "
        />
      </div>
      <div className="w-full text-center font-normal">
        <h1
          className={`text-3xl  sm:text-4xl md:text-5xl text-[#FFFD8F] text-shadow-lg ${bowlby.className} pb-1`}
        >
          The Company Behind the Parts
        </h1>

      <div className="w-3/4 mx-auto text-sm sm:text-base md:text-lg text-justify leading-normal font-sans">
          <p>
          Established in 1976 ,<span className={`text-[#FFFD8F] ${charm.className} text-shadow-lg`}>&nbsp;Bakhtawar Mechanical Works,</span> began with a simple vision — to provide reliable, high-quality products backed by honest service. What started as a small workshop has grown into a trusted name, serving customers across multiple industries for more than four decades.
          <br/>
          <br/>
          With over   <span className={`text-[#FFFD8F] ${charm.className} text-shadow-lg`}>&nbsp;40+ years</span> of experience, we have continuously adapted to new technologies, changing customer needs, and modern manufacturing standards. Our journey is built on hard work, innovation, and a commitment to excellence that has stayed unchanged since the day we started.
          <br/>          
          <br/>          
          Our long presence in the market has allowed us to understand industry demands deeply. We believe in building strong relationships, offering on-time service, and maintaining transparency in every project we undertake.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
