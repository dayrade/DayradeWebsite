"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout141_2() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Arrival</p>
              <h2 className="heading-h2 mb-5 font-bold md:mb-6">
                Welcome to DAYRADE
              </h2>
              <p className="text-medium">
                Your profile is live. The arena awaits your first move. Explore
                tournaments, track your progress.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="Dashboard" variant="secondary">
                  Dashboard
                </Button>
                <Button
                  title="Validate"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Validate
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
