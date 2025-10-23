"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const useRelume = () => {
  const transformRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: transformRef });
  const animatedScrollYProgress = useSpring(scrollYProgress, { bounce: 0 });
  const yFirst = useTransform(
    animatedScrollYProgress,
    [0, 1],
    ["0vh", "-87.5vh"],
  );
  const ySecond = useTransform(
    animatedScrollYProgress,
    [0, 1],
    ["0vh", "-39.6vh"],
  );

  return {
    transformRef,
    yFirst,
    ySecond,
  };
};

export function Header80() {
  const useActive = useRelume();
  return (
    <section
      ref={useActive.transformRef}
      className="relative h-[150vh] px-[5%] md:h-[300vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute top-0 right-auto bottom-0 left-0 z-10">
          <motion.div
            className="flex flex-col gap-[26vw] pt-[70vh]"
            style={{ y: useActive.yFirst }}
          >
            <div className="relative h-[35vw] pt-[120%] sm:h-auto w-[30vw] md:w-[28vw] lg:w-[22vw]">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="absolute inset-0 size-full rounded-image object-cover"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="relative h-[35vw] pt-[120%] sm:h-auto left-[52vw] mt-[-46vw] w-[30vw] md:w-[28vw] lg:left-[58vw] lg:w-[22vw]">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="absolute inset-0 size-full rounded-image object-cover"
                alt="Relume placeholder image 2"
              />
            </div>
            <div className="relative h-[35vw] pt-[120%] sm:h-auto left-[4vw] mt-[-5vw] w-[28vw] md:w-[26vw] lg:w-[20vw]">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="absolute inset-0 size-full rounded-image object-cover"
                alt="Relume placeholder image 3"
              />
            </div>
            <div className="relative h-[35vw] pt-[120%] sm:h-auto left-[64vw] mt-[-45vw] w-[26vw] md:w-[24vw] lg:w-[18vw]">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="absolute inset-0 size-full rounded-image object-cover"
                alt="Relume placeholder image 4"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute top-0 right-0 bottom-0 left-auto z-0"
          style={{ y: useActive.ySecond }}
        >
          <div className="flex flex-col gap-[26vw] pt-[70vh]">
            <div className="relative h-[35vw] pt-[120%] opacity-75 sm:h-auto w-[28vw] md:w-[26vw] lg:w-[20vw]">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="absolute inset-0 size-full rounded-image object-cover"
                alt="Relume placeholder image 5"
              />
            </div>
            <div className="relative h-[35vw] pt-[120%] opacity-75 sm:h-auto right-[50vw] mt-[-44vw] w-[26vw] md:w-[24vw] lg:right-[54vw] lg:w-[18vw]">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="absolute inset-0 size-full rounded-image object-cover"
                alt="Relume placeholder image 6"
              />
            </div>
          </div>
        </motion.div>
        <div className="relative container flex h-full max-w-lg items-center pt-16 pb-24 text-center md:pt-24 lg:py-28">
          <div>
            <h1 className="heading-h1 mb-5 font-bold md:mb-6">
              Unleash your trading spirit animal
            </h1>
            <p className="text-medium relative z-20">
              Your inner trader has a wild heart. Discover the animal that
              embodies your market instincts and strategic prowess.
            </p>
            <div className="relative z-20 mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Generate">Generate</Button>
              <Button title="Explore" variant="secondary">
                Explore
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 mt-[35rem] md:mt-[100vh]" />
      </div>
    </section>
  );
}
