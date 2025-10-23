"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout22() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-20"
                alt="Relume logo"
              />
            </div>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Tournament schedule for strategic traders
            </h2>
            <p className="text-medium">
              Navigate the markets with precision and confidence. Our
              comprehensive event calendar helps you plan your trading strategy
              with military-like accuracy.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Explore" variant="secondary">
                Explore
              </Button>
              <Button
                title="Button"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Button
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
