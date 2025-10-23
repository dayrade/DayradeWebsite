"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout29() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h1 className="heading-h5 mb-3 font-bold md:mb-4">
                  Reading the market
                </h1>
                <p>
                  Traders use candlestick patterns to predict potential price
                  movements and market trends.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h1 className="heading-h5 mb-3 font-bold md:mb-4">
                  Identifying signals
                </h1>
                <p>
                  Each candlestick reveals the open, close, high, and low prices
                  during a specific trading period.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h1 className="heading-h5 mb-3 font-bold md:mb-4">
                  Pattern recognition
                </h1>
                <p>
                  Experienced traders learn to spot recurring visual patterns
                  that indicate potential market shifts.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h1 className="heading-h5 mb-3 font-bold md:mb-4">
                  Strategic insights
                </h1>
                <p>
                  Candlestick patterns help traders make informed decisions
                  about entry and exit points.
                </p>
              </div>
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
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="size-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
