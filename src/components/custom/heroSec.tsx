import {
  ArrowRightIcon,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";
import * as React from "react";
import Link from "next/link";
import { Spotlight } from "../ui/spotlight";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Bowlby_One_SC,Charm } from "next/font/google";
import Image from "next/image";
import { TextAnimate } from "../ui/text-animate";
import { AuroraBackground } from "../ui/aurora-background";


const charm = Charm({
  subsets: ["latin"],
  weight: ["400"],
});
const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  weight: ["400"],
});

export const Social = ({ className }: { className?: string }) => {
  const icons = {
    Instagram: Instagram,
    Facebook: Facebook,
    Youtube: Youtube,
    Mail: Mail,
  };
  return (
    <div className={`flex items-center justify-center flex-wrap gap-6 ${className}`}>
      {[
        {
          name: "Facebook",
          src: "https://www.facebook.com/p/Bakhtawar-mech-works-twb-100063972195975/",
          className: "stroke-blue-600",
        },
        {
          name: "Instagram",
          src: "https://www.instagram.com/bakhtawar.mech.works/",
          className: " stroke-orange-600",
        },
        {
          name: "Mail",
          src: "mailto:Bakhtawarsinghgahle@yahoo.in",
          className: "stroke-red-600",
        },
        {
          name: "Youtube",
          src: "https://www.youtube.com/@bakhtawarmechanicalworks",
          className: "stroke-red-600",
        },
      ].map((x) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const Icon = (icons as any)[x.name];
        return (
          <Tooltip key={x.name}>
            <TooltipTrigger>
              <Link href={x.src} target="_blank" rel="noopener noreferrer">
                <Icon
                  className={`hover:scale-110 hover:-translate-y-1 transition-all ${x.className}`}
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{x.name}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
      <Tooltip>
        <TooltipTrigger>
          <Link href={"tel:+919417319262"}>
            <Phone className="hover:scale-110 hover:-translate-y-1 transition-all stroke-teal-800" />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>phone</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <Link href="https://api.whatsapp.com/send?phone=+919417319262&text=hello">
            <svg
              className="hover:scale-110 hover:-translate-y-1 transition-all"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.96C.16 5.317 5.43 0 12.02 0c3.178 0 6.167 1.24 8.413 3.488a11.8 11.8 0 013.498 8.402c-.003 6.59-5.32 11.86-11.886 11.86a11.9 11.9 0 01-5.96-1.588L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.43 9.889-9.867.003-5.462-4.415-9.89-9.881-9.894-5.46-.004-9.89 4.415-9.894 9.88a9.82 9.82 0 001.588 5.22l-.999 3.648 3.905-1.579zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51a1.327 1.327 0 00-.57.074c-.198.099-.52.248-.792.521-.272.273-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.007-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Whatsapp</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
     <AuroraBackground>
    <section
      id="herosection"
      className="h-screen flex gap-2 md:gap-8 items-end justify-center relative overflow-hidden"
    >
      <div className="absolute z-[-10] w-screen h-screen lg:block hidden">
        <Image
          alt="Hero Background"
          src="https://placehold.co/600x400"
          width={590}
          height={590}
          unoptimized
          className="absolute left-0 bottom-0 object-fit opacity-15 dark:opacity-10"
        />
      </div>

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="flex flex-col gap-2 items-center justify-center h-[90vh]">
        <div className="text-center flex flex-col items-center justify-center px-2 gap-1">
          <div className="group rounded-full border border-black/5  text-base transition-all ease-in hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <div className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span
                className={`${charm.className} text-[#432323] dark:text-[#FFFD8F]`}
              >
                 1976 estd.
              </span>
            </div>
          </div>

          <TextAnimate
            animation="blurIn"
            as="p"
            className={`md:text-7xl text-5xl  leading-none text-center font-bold ${bowlby.className} text-[#432323] dark:text-[#F7E396] text-shadow-lg`}
          >
            Bakhtawar
            
          </TextAnimate>
          <TextAnimate
            animation="blurIn"
            as="p"
            className={`md:text-7xl text-5xl leading-none text-center font-bold ${bowlby.className} text-[#432323] dark:text-[#F7E396] text-shadow-lg`}
          >Mechanical Works            
          </TextAnimate>
          <TextAnimate
            animation="blurInDown"
            as="h1"
            className={`md:text-4xl text-2xl text-center font-bold ${bowlby.className} text-[#432323] dark:text-[#FCF6D9] text-shadow-lg`}
          >Talwandi Bhai
          </TextAnimate>
          <TextAnimate
            animation="blurInDown"
            as="h1"
            className={`text-center  font-bold text-[#D96F32] dark:text-[#FCF6D9] ${charm.className}`}
          >
            Manufacturing perfection
          </TextAnimate>
        </div>
        <div className="flex gap-10">
          <Link href="#products">
            <div className="group rounded-full border border-black/5  text-base transition-all ease-in bg-white hover:-translate-y-1 hover:scale-105 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
              <div className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <TextAnimate
                  animation="blurIn"
                  as="h1"
                  className={`${charm.className} text-[#432323] dark:text-[#FFFD8F]`}
                >
                  ✨ Explore Products
                </TextAnimate>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
        </div>
        <Social className="absolute bottom-6" />
      </div>

      <div className="relative hidden lg:block ">
        <Image
          src="/images/p1.png"
          alt="Tractor"
          width={500}
          height={500}
          className="absolute bottom-0 right-40"
        />
        <Image
          src="/images/p3.png"
          alt="Tractor"
          width={500}
          height={500}
          className="relative z-2"
        />
      </div>
    </section>
     </AuroraBackground>
  );
};

export default HeroSection;
