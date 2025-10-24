"use client";

import { Button } from "@/components/ui/button";
import AnimatedVariableHeading from "@/components/AnimatedVariableHeading";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout192() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 font-semibold md:mb-4">Interact</p>
            <AnimatedVariableHeading
              level="h2"
              className="mb-5 md:mb-6"
              parts={["Dive", "Deep", "into", "Event", "Details"]}
              widths={[75, 100, 50, 100, 150]}
              weights={[500, 700, 400, 700, 900]}
              italics={[0, 0, 0, 0, 1]}
              lineHeight="1.15"
            />
            <p className="text-medium">
              Click any event to reveal comprehensive information, registration
              options, and strategic insights.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="View details" variant="secondary">
                View details
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
        </div>
      </div>
    </section>
  );
}
