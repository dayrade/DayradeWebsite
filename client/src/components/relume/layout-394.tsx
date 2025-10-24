"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import AnimatedVariableHeading from "@/components/AnimatedVariableHeading";

export function Layout394() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Key strategies</p>
          <AnimatedVariableHeading level="h2" className="mb-5 md:mb-6" parts={["Three", "pillars", "of", "smart", "trading"]} widths={[75, 100, 50, 75, 150]} weights={[500, 700, 300, 500, 900]} italics={[0, 0, 0, 1, 0]} lineHeight="1.15" />
          <p className="text-medium">
            Develop a robust approach to navigate complex market landscapes
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Strategy</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Position sizing fundamentals
                </h2>
                <p>
                  Never risk more than 2% of your total trading capital per
                  trade
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Learn"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Learn
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Analysis</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Technical and fundamental research techniques
                </h2>
                <p>
                  Combine multiple analysis methods for comprehensive market
                  understanding
                </p>
              </div>
              <div className="mt-5 md:mt-6">
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
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Psychology</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Emotional discipline in trading
                </h2>
                <p>
                  Control your emotions to make rational, data-driven decisions
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Dive in"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Dive in
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
