"use client";

import { Button } from "@/components/ui/button";
import AnimatedVariableHeading from "@/components/AnimatedVariableHeading";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Integrity</p>
            <AnimatedVariableHeading
              level="h2"
              className="mb-5 md:mb-6"
              parts={["Fair", "Play", "Requires", "Verified", "Players"]}
              widths={[75, 100, 50, 75, 150]}
              weights={[700, 900, 400, 500, 700]}
              italics={[0, 0, 0, 0, 1]}
              lineHeight="1.15"
            />
            <p className="text-medium">
              KYC prevents fraud and multiple account manipulation. We ensure
              every trader competes on a level battlefield where skill
              determines victory.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Verify" variant="secondary">
                Verify
              </Button>
              <Button
                title="Details"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Details
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
