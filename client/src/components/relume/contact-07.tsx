"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AnimatedVariableHeading from "@/components/AnimatedVariableHeading";
import React from "react";

export function Contact7() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <div>
          <div className="mb-6 md:mb-8">
            <p className="mb-3 font-semibold md:mb-4">Message</p>
            <AnimatedVariableHeading
              level="h2"
              className="mb-5 md:mb-6"
              parts={["Send", "Us", "a", "Message"]}
              widths={[75, 100, 50, 150]}
              weights={[500, 700, 400, 900]}
              italics={[0, 0, 0, 1]}
              lineHeight="1.15"
            />
            <p className="text-medium">
              Share your thoughts and we'll respond quickly.
            </p>
          </div>
          <form className="grid grid-cols-1 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="name" className="mb-2">
                Name
              </Label>
              <Input type="text" id="name" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input type="email" id="email" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="message" className="mb-2">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us what you need"
                className="min-h-[11.25rem] overflow-auto"
              />
            </div>
            <div className="text-small mb-3 flex items-center space-x-2 md:mb-4">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="cursor-pointer">
                I accept the terms of service
              </Label>
            </div>
            <div>
              <Button title="Submit">Submit</Button>
            </div>
          </form>
        </div>
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            alt="Relume placeholder image"
            className="size-full rounded-image object-cover"
          />
        </div>
      </div>
    </section>
  );
}
