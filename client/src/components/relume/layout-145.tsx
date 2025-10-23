"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { MdEmail } from "react-icons/md";

export function Layout145() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto flex max-w-lg flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <div className="flex size-20 items-center justify-center rounded-xl bg-primary">
                <MdEmail className="size-10 text-primary-foreground" />
              </div>
            </div>
            <p className="mb-3 font-semibold md:mb-4">First Step</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Enter Your Email
            </h2>
            <p className="text-medium">
              Your gateway to the trading arena. We respect your privacy and
              protect your data.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button title="Continue" variant="secondary">
                Continue
              </Button>
              <Button
                title="Learn More"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Learn More
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
