"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { MdShoppingCart, MdCardGiftcard, MdPeople } from "react-icons/md";

export function Layout16() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Tickets</p>
            <h1 className="heading-h2 mb-5 font-bold md:mb-6">
              One ticket, one entry
            </h1>
            <p className="text-medium mb-5 md:mb-6">
              Each tournament demands a ticket. This ensures every trader brings
              their sharpest skills and highest commitment to the arena.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                    <MdShoppingCart className="size-5 text-primary-foreground" />
                  </div>
                </div>
                <span>Direct purchase</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                    <MdCardGiftcard className="size-5 text-primary-foreground" />
                  </div>
                </div>
                <span>Earn through rewards</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                    <MdPeople className="size-5 text-primary-foreground" />
                  </div>
                </div>
                <span>Referral programs</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="View tickets" variant="secondary">
                View tickets
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
