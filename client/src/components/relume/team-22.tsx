"use client";

import React, { Fragment } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const ConditionalRender = ({ condition, children }: { condition: boolean; children: React.ReactNode }) => {
  return condition ? <>{children}</> : null;
};

const useTablet = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  return { isTablet };
};

export function Team22() {
  const render = useTablet();
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative container">
        <div className="static top-[50vh] mx-auto mt-20 max-w-lg translate-y-[-50%] text-center md:sticky">
          <p className="mb-3 font-semibold md:mb-4">Team</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">
            Meet our founders
          </h2>
          <p className="text-medium">
            The visionaries transforming the trading landscape
          </p>
        </div>
        <div className="relative z-10 grid auto-cols-fr grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          <Fragment>
            <div className="flex flex-col text-center">
              <div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%]">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="text-large font-semibold">Alex Rodriguez</h5>
                <h6 className="text-medium">Chief executive officer</h6>
              </div>
              <p>
                A former hedge fund manager with a passion for democratizing
                financial markets.
              </p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a href="#">
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a href="#">
                  <BiLogoDribbble className="size-6" />
                </a>
              </div>
            </div>
            <ConditionalRender condition={render.isTablet}>
              <div className="size-full" />
              <div className="size-full" />
            </ConditionalRender>
          </Fragment>
          <Fragment>
            <div className="flex flex-col text-center md:mt-16">
              <div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%]">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 2"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="text-large font-semibold">Maya Chen</h5>
                <h6 className="text-medium">Chief technology officer</h6>
              </div>
              <p>
                An expert in AI and machine learning who believes in
                technology's power to level the playing field.
              </p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a href="#">
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a href="#">
                  <BiLogoDribbble className="size-6" />
                </a>
              </div>
            </div>
            <ConditionalRender condition={render.isTablet}>
              <div className="size-full" />
            </ConditionalRender>
          </Fragment>
          <Fragment>
            <div className="flex flex-col text-center">
              <div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%]">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 3"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="text-large font-semibold">Jake Thompson</h5>
                <h6 className="text-medium">Chief product officer</h6>
              </div>
              <p>
                A gaming industry veteran who sees trading as the next great
                competitive arena.
              </p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a href="#">
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a href="#">
                  <BiLogoDribbble className="size-6" />
                </a>
              </div>
            </div>
            <ConditionalRender condition={render.isTablet}>
              <div className="size-full" />
              <div className="size-full" />
            </ConditionalRender>
          </Fragment>
          <Fragment>
            <div className="flex flex-col text-center md:mt-16">
              <div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%]">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 4"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="text-large font-semibold">Sarah Kim</h5>
                <h6 className="text-medium">Head of education</h6>
              </div>
              <p>
                A financial literacy advocate committed to making complex
                markets accessible to everyone.
              </p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a href="#">
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a href="#">
                  <BiLogoDribbble className="size-6" />
                </a>
              </div>
            </div>
            <ConditionalRender condition={render.isTablet}>
              <div className="size-full" />
              <div className="size-full" />
            </ConditionalRender>
          </Fragment>
          <Fragment>
            <div className="flex flex-col text-center">
              <div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%]">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 5"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="text-large font-semibold">Michael Torres</h5>
                <h6 className="text-medium">Head of community</h6>
              </div>
              <p>
                A community builder who understands the power of shared learning
                and competition.
              </p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a href="#">
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a href="#">
                  <BiLogoDribbble className="size-6" />
                </a>
              </div>
            </div>
            <ConditionalRender condition={render.isTablet}>
              <div className="size-full" />
              <div className="size-full" />
            </ConditionalRender>
          </Fragment>
          <Fragment>
            <div className="flex flex-col text-center">
              <div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%]">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 6"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="text-large font-semibold">Elena Petrova</h5>
                <h6 className="text-medium">Head of design</h6>
              </div>
              <p>
                A creative director who transforms complex ideas into intuitive,
                engaging experiences.
              </p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a href="#">
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a href="#">
                  <BiLogoDribbble className="size-6" />
                </a>
              </div>
            </div>
            <ConditionalRender condition={render.isTablet}>
              <div className="size-full" />
            </ConditionalRender>
          </Fragment>
          <Fragment>
            <div className="flex flex-col text-center">
              <div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%]">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 7"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="text-large font-semibold">Full name</h5>
                <h6 className="text-medium">Job title</h6>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a href="#">
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a href="#">
                  <BiLogoDribbble className="size-6" />
                </a>
              </div>
            </div>
            <ConditionalRender condition={render.isTablet}>
              <div className="size-full" />
              <div className="size-full" />
            </ConditionalRender>
          </Fragment>
          <Fragment>
            <div className="flex flex-col text-center md:mt-16">
              <div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%]">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 8"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="text-large font-semibold">Full name</h5>
                <h6 className="text-medium">Job title</h6>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a href="#">
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a href="#">
                  <BiLogoDribbble className="size-6" />
                </a>
              </div>
            </div>
            <ConditionalRender condition={render.isTablet}>
              <div className="size-full" />
              <div className="size-full" />
            </ConditionalRender>
          </Fragment>
        </div>
      </div>
    </section>
  );
}
