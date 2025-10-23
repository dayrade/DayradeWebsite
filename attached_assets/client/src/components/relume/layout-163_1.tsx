"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout163_1() {
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
            <div className="mx-auto text-center">
              <div className="flex max-w-lg flex-col items-center justify-start">
                <p className="mb-3 font-semibold md:mb-4">Community</p>
                <h2 className="heading-h2 mb-5 font-bold md:mb-6">
                  Join our discord
                </h2>
                <p className="text-medium mb-5 md:mb-6">
                  Connect with fellow traders, share strategies, and get
                  real-time support from our active community.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                    alt="Webflow logo 1"
                    className="max-h-14"
                  />
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                    alt="Relume logo 1"
                    className="max-h-14"
                  />
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                    alt="Webflow logo 2"
                    className="max-h-14"
                  />
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                    alt="Relume logo 2"
                    className="max-h-14"
                  />
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
                  <Button title="Join Discord" variant="secondary">
                    Join Discord
                  </Button>
                  <Button
                    title="Explore"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
