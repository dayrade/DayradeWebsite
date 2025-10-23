"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout359() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Partnership</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">Grow together</h2>
            <p className="text-medium">
              Transform your audience into a trading community
            </p>
          </div>
        </div>
        <Card className="grid auto-cols-fr grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="size-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
            <div>
              <p className="text-small mb-2 font-semibold">Creator</p>
              <h3 className="heading-h3 mb-5 font-bold md:mb-6">
                Unlock your potential
              </h3>
              <p>
                Earn revenue through referral codes and sponsored content. Get
                exclusive access to Raider streams and media drops.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Apply now" variant="secondary">
                Apply now
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
        </Card>
      </div>
    </section>
  );
}
