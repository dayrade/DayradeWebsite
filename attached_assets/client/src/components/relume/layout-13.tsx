"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout13() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Accounts</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              A level playing field
            </h2>
            <p className="text-medium mb-5 md:mb-6">
              Tournament accounts reset the game. Every trader starts with
              identical virtual capital, ensuring pure skill determines victory.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-6 py-2">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                className="max-h-12"
                alt="Webflow logo 1"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                className="max-h-12"
                alt="Relume logo 1"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                className="max-h-12"
                alt="Webflow logo 2"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                className="max-h-12"
                alt="Relume logo 2"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Enter tournament" variant="secondary">
                Enter tournament
              </Button>
              <Button
                title="Learn more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Learn more
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
