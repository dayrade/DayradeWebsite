"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { MdTrendingUp, MdInsights } from "react-icons/md";

export function Layout386() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Master</p>
          <h1 className="heading-h2 mb-5 font-bold md:mb-6">
            Benefits of candlestick pattern analysis
          </h1>
          <p className="text-medium">
            Unlock deeper understanding of market dynamics through visual
            trading intelligence.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="mb-5 md:mb-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary">
                  <MdTrendingUp className="size-7 text-primary-foreground" />
                </div>
              </div>
              <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                Improve trading decision making
              </h2>
              <p>
                Develop a strategic approach to interpreting market movements
                and trends.
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
          </Card>
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="mb-5 md:mb-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary">
                  <MdInsights className="size-7 text-primary-foreground" />
                </div>
              </div>
              <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                Improve trading decision making
              </h2>
              <p>
                Develop a strategic approach to interpreting market movements
                and trends.
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
          </Card>
          <Card className="flex flex-col sm:col-span-2 sm:row-span-2 lg:col-start-2 lg:row-start-1">
            <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8 lg:p-12">
              <div>
                <p className="mb-2 font-semibold">Skill</p>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Build trading confidence
                </h2>
                <p>
                  Develop a systematic approach to understanding market behavior
                  through visual pattern recognition.
                </p>
              </div>
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
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
