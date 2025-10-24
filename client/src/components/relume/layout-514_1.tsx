"use client";

import React, { Fragment, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";
import AnimatedVariableHeading from "@/components/AnimatedVariableHeading";

const ConditionalRender = ({ condition, children }: { condition: boolean; children: React.ReactNode }) => {
  return condition ? <>{children}</> : null;
};

const useRelume = (props: { data: any[] }) => {
  const { data } = props;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const getStyles = (index: number) => {
    const startProgress = index / data.length;
    const endProgress = (index + 1) / data.length;
    const opacity = useTransform(
      scrollYProgress,
      [
        Math.max(0, startProgress - 0.07),
        startProgress,
        endProgress - 0.07,
        Math.min(1, endProgress),
      ],
      [0, 1, 1, 0],
    );
    const y = useTransform(
      scrollYProgress,
      [
        Math.max(0, startProgress - 0.1),
        startProgress,
        endProgress - 0.1,
        Math.min(1, endProgress),
      ],
      [100, 0, 0, -100],
    );
    return { opacity, y };
  };
  return { containerRef, getStyles };
};

const useMobile = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return { isMobile };
};

const useTablet = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  return { isTablet };
};

export function Layout514_1() {
  const renderTablet = useTablet();
  const renderMobile = useMobile();
  const useScroll = useRelume({
    data: [
      {
        heading: "01 Feature one",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1-portrait.svg",
          alt: "Relume placeholder image 1",
        },
        imageMobile: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
          alt: "Relume placeholder image 1",
        },
      },
      {
        heading: "02 Feature two",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2-portrait.svg",
          alt: "Relume placeholder image 2",
        },
        imageMobile: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
          alt: "Relume placeholder image 2",
        },
      },
      {
        heading: "03 Feature three",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3-portrait.svg",
          alt: "Relume placeholder image 3",
        },
        imageMobile: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg",
          alt: "Relume placeholder image 3",
        },
      },
      {
        heading: "04 Feature four",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4-portrait.svg",
          alt: "Relume placeholder image 4",
        },
        imageMobile: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg",
          alt: "Relume placeholder image 4",
        },
      },
    ],
  });
  return (
    <section
      ref={useScroll.containerRef}
      className="px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-20">
          <div className="hidden md:grid md:grid-cols-1 md:gap-4">
            <div className="flex h-screen w-full items-center justify-center overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1-portrait.svg"
                alt="Relume placeholder image 1"
                className="w-full rounded-image"
              />
            </div>
            <div className="flex h-screen w-full items-center justify-center overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2-portrait.svg"
                alt="Relume placeholder image 2"
                className="w-full rounded-image"
              />
            </div>
            <div className="flex h-screen w-full items-center justify-center overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3-portrait.svg"
                alt="Relume placeholder image 3"
                className="w-full rounded-image"
              />
            </div>
            <div className="flex h-screen w-full items-center justify-center overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4-portrait.svg"
                alt="Relume placeholder image 4"
                className="w-full rounded-image"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-16 md:sticky md:top-20 md:h-[calc(100vh_-10rem)] md:justify-center">
            <div className="flex flex-col">
              <p className="mb-3 font-semibold md:mb-4">Education</p>
              <AnimatedVariableHeading level="h2" className="mb-5 md:mb-6" parts={["Master", "Money.", "Not Just", "Markets."]} widths={[100, 125, 75, 150]} weights={[700, 900, 400, 700]} italics={[0, 0, 0, 1]} lineHeight="1.15" />
              <p className="text-medium">
                Understand financial dynamics beyond simple trading. Build
                lasting wealth through knowledge.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Learn" variant="secondary">
                  Learn
                </Button>
                <Button
                  title="Explore"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Explore
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-y-8">
              <AnimatePresence>
                <Fragment>
                  <ConditionalRender condition={renderMobile.isMobile}>
                    <div>
                      <h5 className="heading-h6 mb-3 font-bold">
                        Risk Management
                      </h5>
                      <p>
                        Understand the emotional intelligence behind successful
                        trading.
                      </p>
                      <div className="mt-4">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg"
                          alt="Relume placeholder image 1"
                          className="rounded-image"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={renderTablet.isTablet}>
                    <motion.div
                      style={{
                        opacity: useScroll.getStyles(0).opacity,
                        y: useScroll.getStyles(0).y,
                      }}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="heading-h5 font-bold md:mb-4">
                        Risk Management
                      </h5>
                      <p className="text-medium">
                        Understand the emotional intelligence behind successful
                        trading.
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
                <Fragment>
                  <ConditionalRender condition={renderMobile.isMobile}>
                    <div>
                      <h5 className="heading-h6 mb-3 font-bold">
                        Market Psychology
                      </h5>
                      <p>
                        Understand the emotional intelligence behind successful
                        trading.
                      </p>
                      <div className="mt-4">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg"
                          alt="Relume placeholder image 2"
                          className="rounded-image"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={renderTablet.isTablet}>
                    <motion.div
                      style={{
                        opacity: useScroll.getStyles(1).opacity,
                        y: useScroll.getStyles(1).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="heading-h5 font-bold md:mb-4">
                        Market Psychology
                      </h5>
                      <p className="text-medium">
                        Understand the emotional intelligence behind successful
                        trading.
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
                <Fragment>
                  <ConditionalRender condition={renderMobile.isMobile}>
                    <div>
                      <h5 className="heading-h6 mb-3 font-bold">
                        Technical Analysis
                      </h5>
                      <p>
                        Develop comprehensive strategies for long-term financial
                        success.
                      </p>
                      <div className="mt-4">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg"
                          alt="Relume placeholder image 3"
                          className="rounded-image"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={renderTablet.isTablet}>
                    <motion.div
                      style={{
                        opacity: useScroll.getStyles(2).opacity,
                        y: useScroll.getStyles(2).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="heading-h5 font-bold md:mb-4">
                        Technical Analysis
                      </h5>
                      <p className="text-medium">
                        Develop comprehensive strategies for long-term financial
                        success.
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
                <Fragment>
                  <ConditionalRender condition={renderMobile.isMobile}>
                    <div>
                      <h5 className="heading-h6 mb-3 font-bold">
                        Financial Planning
                      </h5>
                      <p>
                        Understand the emotional intelligence behind successful
                        trading.
                      </p>
                      <div className="mt-4">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg"
                          alt="Relume placeholder image 4"
                          className="rounded-image"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={renderTablet.isTablet}>
                    <motion.div
                      style={{
                        opacity: useScroll.getStyles(3).opacity,
                        y: useScroll.getStyles(3).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="heading-h5 font-bold md:mb-4">
                        Financial Planning
                      </h5>
                      <p className="text-medium">
                        Understand the emotional intelligence behind successful
                        trading.
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
