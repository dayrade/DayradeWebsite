"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { MdStar, MdTrendingUp, MdWorkspacePremium } from "react-icons/md";

export function Layout207() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Tagline</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Climb the ranks of status
            </h2>
            <p className="text-medium mb-5 md:mb-6">
              Your journey from novice to legend is mapped by skill, dedication,
              and continuous learning.
            </p>
            <div className="grid grid-cols-1 gap-4 py-2">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                    <MdStar className="size-5 text-primary-foreground" />
                  </div>
                </div>
                <p>Novice: Your first steps into competitive trading</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                    <MdTrendingUp className="size-5 text-primary-foreground" />
                  </div>
                </div>
                <p>Apprentice: Developing strategic insights</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                    <MdWorkspacePremium className="size-5 text-primary-foreground" />
                  </div>
                </div>
                <p>Contender: Proving your trading prowess</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Button" variant="secondary">
                Button
              </Button>
              <Button
                title="Button"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Button
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
