"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import AnimatedVariableHeading from "@/components/AnimatedVariableHeading";
import { Link } from "wouter";

const useRelume = () => {
  const { scrollYProgress } = useScroll();
  const opacityOverlay = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [3.2, 1]);

  return {
    opacityOverlay,
    scale,
  };
};

interface Header83Props {
  headline?: React.ReactNode;
  subheadline?: string;
  primaryCta?: string;
  secondaryCta?: string;
}

export function Header83({
  headline,
  subheadline = "A skill-based arena where traders battle with precision and strategy. Build your trading persona and rise through the ranks.",
  primaryCta = "Sign Up",
  secondaryCta = "Watch"
}: Header83Props = {}) {
  const useActive = useRelume();

  return (
    <section className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full items-center justify-center">
          <div className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="relative z-10 mx-auto max-w-lg text-center">
              {headline ? (
                <h1 className="heading-h1 mb-5 text-white md:mb-6">
                  {headline}
                </h1>
              ) : (
                <AnimatedVariableHeading
                  level="h1"
                  className="mb-5 text-white md:mb-6"
                  parts={["Trade Like a", "Pro.", "Compete Like an", "Athlete."]}
                  widths={[50, 125, 50, 125]}
                  weights={[700, 900, 700, 900]}
                />
              )}
              <p className="text-medium text-white">
                {subheadline}
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Link href="/signup">
                  <Button title={primaryCta} data-testid="button-primary-cta">{primaryCta}</Button>
                </Link>
                <Link href="/tournaments">
                  <Button title={secondaryCta} variant="secondary-alt" data-testid="button-secondary-cta">
                    {secondaryCta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 z-10 bg-neutral-darkest/50"
            style={{ opacity: useActive.opacityOverlay }}
          />
          <motion.div
            style={{ scale: useActive.scale }}
            className="grid size-full auto-cols-fr grid-cols-1 md:grid-cols-3"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
