"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout19() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Security</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Bank-level protection for your data
            </h2>
            <p className="text-medium mb-5 md:mb-6">
              We use 256-bit encryption and follow international data protection
              standards. Your information remains confidential and secure.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Encrypted storage</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>No third-party sharing</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Strict compliance protocols</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Verify" variant="secondary">
                Verify
              </Button>
              <Button
                title="Learn More"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Learn More
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
