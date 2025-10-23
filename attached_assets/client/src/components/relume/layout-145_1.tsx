"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout145_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto flex max-w-lg flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-20"
                alt="Relume logo"
              />
            </div>
            <p className="mb-3 font-semibold md:mb-4">Verification</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Become a validated user
            </h2>
            <p className="text-medium">
              Complete our secure verification to unlock full tournament access.
              Fast, safe, transparent.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button title="Verify now" variant="secondary">
                Verify now
              </Button>
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
        </div>
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="size-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
