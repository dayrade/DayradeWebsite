"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout155() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="size-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="mt-12 md:mt-18 lg:mt-20">
            <div className="mx-auto max-w-lg text-center">
              <p className="mb-3 font-semibold md:mb-4">Network</p>
              <h2 className="heading-h2 mb-5 font-bold md:mb-6">
                Add your digital connections
              </h2>
              <p className="text-medium">
                Transform your profile into a powerful networking hub. Link your
                worlds together.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
                <Button title="Add links" variant="secondary">
                  Add links
                </Button>
                <Button
                  title="Guide"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
