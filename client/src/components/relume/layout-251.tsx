"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout251() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Connect</p>
            <h2 className="heading-h2 font-bold">
              Related trading concepts and terms
            </h2>
          </div>
          <div>
            <p className="text-medium">
              Candlestick patterns are part of a broader landscape of trading
              analysis techniques and market interpretation strategies.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="heading-h4 mb-5 font-bold md:mb-6">
              Technical analysis foundations
            </h3>
            <p>Understand the broader context of market analysis techniques.</p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="heading-h4 mb-5 font-bold md:mb-6">
              Price action strategies
            </h3>
            <p>
              Learn how candlestick patterns integrate with comprehensive
              trading approaches.
            </p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="heading-h4 mb-5 font-bold md:mb-6">
              Market sentiment indicators
            </h3>
            <p>
              Explore how candlestick patterns reveal underlying market
              psychology.
            </p>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
          <Button variant="secondary">Learn</Button>
          <Button iconRight={<RxChevronRight />} variant="link" size="link">
            Explore
          </Button>
        </div>
      </div>
    </section>
  );
}
