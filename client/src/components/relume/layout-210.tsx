"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout210() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Practice</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Apply what you learn
            </h2>
            <p className="text-medium mb-5 md:mb-6">
              Knowledge transforms when put into action. Transfer classroom
              insights directly into real trading scenarios.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Risk-free practice environment</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Track your progress</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Build confidence through experience</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Enter" variant="secondary">
                Enter
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
        </div>
      </div>
    </section>
  );
}
