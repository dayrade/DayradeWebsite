"use client";

import { Button } from "@/components/ui/button";
import AnimatedVariableHeading from "@/components/AnimatedVariableHeading";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { MdCalendarToday } from "react-icons/md";

export function Layout22() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="mb-5 md:mb-6">
              <div className="flex size-20 items-center justify-center rounded-xl bg-primary">
                <MdCalendarToday className="size-10 text-primary-foreground" />
              </div>
            </div>
            <AnimatedVariableHeading
              level="h2"
              className="mb-5 md:mb-6"
              parts={["Tournament", "Schedule", "for", "Strategic", "Traders"]}
              widths={[100, 125, 50, 75, 150]}
              weights={[700, 900, 400, 500, 700]}
              italics={[0, 0, 0, 0, 1]}
              lineHeight="1.15"
            />
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
