"use client";

import React, { RefObject, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";
import { Titan_One,Satisfy } from "next/font/google";

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});
  export function ProductCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick((ref as RefObject<HTMLDivElement>), () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[9999]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  unoptimized
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover "
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className={`text-[#FFFD8F] text-shadow-lg ${titan.className}`}>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    {/*<motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  */}
                  </div>

                  {/*<motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>*/}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
          {
            cards.map((card,index) => (
              <motion.div
        
                layoutId={`card-${card.title}-${id}`}
                key={index}
                onClick={() => setActive(card)}
                className="p-4 flex flex-col bg-linear-to-b from-[#63A361] dark:from-violet-700 to-transparent hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
              >
                <div className="flex gap-4 flex-col  w-full">
                  <motion.div layoutId={`image-${card.title}-${id}`}>
                    <Image
                      unoptimized
                      width={100}
                      height={100}
                      src={card.src}
                      alt={card.title}
                      className="h-60 w-full rounded-lg object-cover object-top"
                    />
                  </motion.div>
                  <div className="flex justify-center items-center flex-col">
                    <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className="font-bold text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                    >
                      {card.title}
                    </motion.h3>
                    {/*<motion.p
                      layoutId={`description-${card.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                    >
                      {card.description}
                    </motion.p>*/}
                  </div>
                </div>
              </motion.div>
            ))
          }
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
 
  {
    // description: "Front Weights",
    title: "Front Weights",
    src: "https://placehold.co/600x400",
    // ctaText: "Visit",
    // ctaLink: "#",
    content: () => {
      return (
        <p>
         Our front weights are manufactured using high-grade materials, precision-molded for consistency, and built to withstand rough agricultural conditions. Available in multiple weight options, they provide the perfect balance for both small and large tractors.
        </p>
      );
    },
  },
  {
    // description: "Hood",
    title: "Hood",
    src: "https://placehold.co/600x400",
    // ctaText: "Visit",
    // ctaLink: "#",
    content: () => {
      return (
        <p>
          Our tractor hoods are manufactured using high-quality materials. Each hood is precisely molded for accurate fitting and long-lasting performance, even in harsh agricultural conditions. With smooth finishing and strong structure, they enhance both the style and strength of the tractor.
        </p>
      );
    },
  },
  {
    // description: "",
    title: "Wheel guard",
    src: "https://placehold.co/600x400",
    // ctaText: "Visit",
    // ctaLink: "#",
    content: () => {
      return (
        <p>
          Each wheel guard is precisely shaped for accurate fitting, strong protection, and long-lasting durability, even in rough agricultural conditions. With a smooth finish and robust structure, they prevent mud splashes, safeguard the operator, and enhance the overall look and safety of the tractor
        </p>
      );
    },
  },
];
