"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedVariableHeading from "@/components/AnimatedVariableHeading";
import React from "react";

const useRelume = () => {
  const { scrollYProgress } = useScroll();
  const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [3.2, 1]);

  return {
    opacityContent,
    opacityOverlay,
    scale,
  };
};

interface Header83Props {
  headlineParts?: string[];
  headlineWidths?: number[];
  headlineWeights?: number[];
  subheadline?: string;
  primaryCta?: string;
  secondaryCta?: string;
}

export function Header83({ 
  headlineParts = ["Trade Like a", "Pro.", "Compete Like an", "Athlete."],
  headlineWidths,
  headlineWeights,
  subheadline = "A skill-based arena where traders battle with precision and strategy. Build your trading persona and rise through the ranks.",
  primaryCta = "Sign Up",
  secondaryCta = "Watch"
}: Header83Props = {}) {
  // Ensure arrays match length - use default if not provided
  const partsCount = headlineParts.length;
  const finalWidths = headlineWidths && headlineWidths.length === partsCount 
    ? headlineWidths 
    : Array(partsCount).fill(50).map((_, i) => i % 2 === 0 ? 50 : 125);
  const finalWeights = headlineWeights && headlineWeights.length === partsCount
    ? headlineWeights
    : Array(partsCount).fill(700).map((_, i) => i % 2 === 0 ? 700 : 900);
  const useActive = useRelume();
  return (
    <section className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="flex h-full items-center justify-center"
          style={{ opacity: useActive.opacityContent }}
        >
          <div className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="relative z-10 mx-auto max-w-lg text-center">
              <AnimatedVariableHeading
                level="h1"
                className="mb-5 text-white md:mb-6"
                parts={headlineParts}
                widths={finalWidths}
                weights={finalWeights}
              />
              <p className="text-medium text-white">
                {subheadline}
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title={primaryCta}>{primaryCta}</Button>
                <Button title={secondaryCta} variant="secondary-alt">
                  {secondaryCta}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 z-10 bg-neutral-darkest/50"
            style={{ opacity: useActive.opacityOverlay }}
          />
          <motion.div
            style={{ scale: useActive.scale }}
            className="grid size-full auto-cols-fr grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-3"
          >
            <div className="relative hidden md:block">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 2"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 3"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 4"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 5"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 6"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 7"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 8"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 9"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
