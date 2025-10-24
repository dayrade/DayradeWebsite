"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AnimatedVariableHeading from "@/components/AnimatedVariableHeading";
import React from "react";

export function Cta32() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <AnimatedVariableHeading
            level="h2"
            className="mb-5 md:mb-6"
            parts={["Stay", "Ahead", "of the", "Market"]}
            widths={[75, 125, 50, 150]}
            weights={[500, 900, 400, 700]}
            italics={[0, 0, 0, 1]}
            lineHeight="1.15"
          />
          <p className="text-medium">
            Get the latest trading insights, strategies, and exclusive DAYRADE
            updates
          </p>
          <div className="mx-auto mt-6 w-full max-w-sm md:mt-8">
            <form className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input id="email" type="email" placeholder="Enter your email" />
              <Button
                title="Sign up"
                size="sm"
                className="items-center justify-center px-6 py-3"
              >
                Sign up
              </Button>
            </form>
            <p className="text-tiny">
              By signing up, you agree to our terms and receive personalized
              trading content
            </p>
          </div>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="size-full rounded-image object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
