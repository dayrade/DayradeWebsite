"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AnimatedVariableHeading from "@/components/AnimatedVariableHeading";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout369() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Dayrade</p>
            <AnimatedVariableHeading
              level="h2"
              className="mb-5 md:mb-6"
              parts={["Your", "Path", "to", "Trading", "Mastery"]}
              widths={[50, 75, 50, 100, 150]}
              weights={[400, 500, 300, 700, 900]}
              italics={[0, 0, 0, 1, 0]}
              lineHeight="1.15"
            />
            <p className="text-medium">
              Transform your trading journey in three powerful steps.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card className="grid grid-cols-1 sm:col-span-2 sm:row-span-1 sm:grid-cols-2">
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="text-small mb-2 font-semibold">01</p>
                  <h3 className="heading-h5 mb-2 font-bold">
                    Create Your Persona
                  </h3>
                  <p>
                    AI spirit animal plus profile card. Ready in 2 minutes.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                  <Button
                    title="Start"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Start
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait.svg"
                  alt="Relume placeholder image 3"
                  className="size-full object-cover"
                />
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="text-small mb-2 font-semibold">02</p>
                  <h3 className="heading-h5 mb-2 font-bold">
                    Learn and Practice
                  </h3>
                  <p>
                    Daily lessons on psychology, risk management, and technical analysis.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
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
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="w-full object-cover"
                />
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="text-small mb-2 font-semibold">03</p>
                  <h3 className="heading-h5 mb-2 font-bold">
                    Compete and Win
                  </h3>
                  <p>
                    Tournament competitions with virtual capital. Prizes based on skill and performance.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
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
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                  className="w-full object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
