"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout141() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Gateway</p>
              <h2 className="heading-h2 mb-5 font-bold md:mb-6">
                Enter your email
              </h2>
              <p className="text-medium">
                Your gateway to the trading arena starts here. We protect your
                data like a fortress.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="Continue" variant="secondary">
                  Continue
                </Button>
                <Button
                  title="Help"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Help
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="size-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
