"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout442() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-white md:mb-4">Rewards</p>
            <h2 className="heading-h2 font-bold text-white">
              Win more than just money
            </h2>
          </div>
          <div className="mx-[7.5%] md:mt-48">
            <p className="text-medium text-white">
              Top performers earn cash prizes, recognition, and a permanent mark
              on the community leaderboard. Your trading journey becomes a
              visible achievement.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="View leaderboard" variant="secondary-alt">
                View leaderboard
              </Button>
              <Button
                title="Explore achievements"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Explore achievements
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
}
