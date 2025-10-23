"use client";

import { Card } from "@/components/ui/card";
import React from "react";

export function Stats40() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h3 className="heading-h3 font-bold">
            Raider Division performance metrics that define excellence
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <Card className="p-8">
            <h3 className="heading-h6 mb-8 font-bold md:mb-10 lg:mb-12">
              Prize pools
            </h3>
            <p className="text-right text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
              $10K
            </p>
            <div className="my-4 h-px w-full bg-scheme-border" />
            <p className="text-right">Average tournament prize money</p>
          </Card>
          <Card className="p-8">
            <h3 className="heading-h6 mb-8 font-bold md:mb-10 lg:mb-12">
              Success rate
            </h3>
            <p className="text-right text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
              85%
            </p>
            <div className="my-4 h-px w-full bg-scheme-border" />
            <p className="text-right">
              Top traders achieving consistent results
            </p>
          </Card>
          <Card className="p-8">
            <h3 className="heading-h6 mb-8 font-bold md:mb-10 lg:mb-12">
              Community growth
            </h3>
            <p className="text-right text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
              500+
            </p>
            <div className="my-4 h-px w-full bg-scheme-border" />
            <p className="text-right">Elite traders competing monthly</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
