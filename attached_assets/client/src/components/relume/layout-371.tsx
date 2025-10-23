"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout371() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Glossary</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Glossary a to z
            </h2>
            <p className="text-medium">
              Navigate financial complexity with our comprehensive trading
              terminology guide
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card className="grid grid-cols-1 sm:col-span-2 sm:row-span-1 sm:grid-cols-2">
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="text-small mb-2 font-semibold">Terms</p>
                  <h3 className="heading-h5 mb-2 font-bold">
                    Definitions that transform financial language
                  </h3>
                  <p>
                    Unlock the meaning behind every trading term and concept
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                  <Button
                    title="Learn"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Learn
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait.svg"
                  alt="Relume placeholder image 3"
                  className="w-full object-cover"
                />
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      alt="Relume logo 1"
                      className="size-12"
                    />
                  </div>
                  <h3 className="heading-h5 mb-2 font-bold">
                    Examples that bring financial terms to life
                  </h3>
                  <p>
                    Real-world context to help you understand complex financial
                    concepts
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
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
            </Card>
            <Card className="flex flex-col">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      alt="Relume logo 2"
                      className="size-12"
                    />
                  </div>
                  <h3 className="heading-h5 mb-2 font-bold">
                    Examples that bring financial terms to life
                  </h3>
                  <p>
                    Real-world context to help you understand complex financial
                    concepts
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
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
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
