"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import AnimatedVariableHeading from "@/components/AnimatedVariableHeading";

export function Cta31() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <AnimatedVariableHeading level="h2" className="mb-5 md:mb-6" parts={["Your Arena", "Awaits"]} widths={[50, 150]} weights={[600, 900]} />
          <p className="text-medium">
            Join a community of traders committed to skill, strategy, and
            continuous improvement.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Sign Up">Sign Up</Button>
            <Button title="View Schedule" variant="secondary">
              View Schedule
            </Button>
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
