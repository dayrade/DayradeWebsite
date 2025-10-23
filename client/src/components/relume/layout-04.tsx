"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout4() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Legends</p>
            <h1 className="heading-h2 mb-5 font-bold md:mb-6">
              Meet the legends of trading
            </h1>
            <p className="text-medium mb-6 md:mb-8">
              Each trader brings a unique perspective to the arena. Their
              stories demonstrate the power of strategy, discipline, and
              continuous learning.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Diverse Paths
                </h6>
                <p>
                  Traders from different backgrounds united by their passion for
                  financial markets.
                </p>
              </div>
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Winning Strategies
                </h6>
                <p>
                  Innovative approaches that challenge traditional trading
                  methodologies.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Discover" variant="secondary">
                Discover
              </Button>
              <Button
                title="Connect"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Connect
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
