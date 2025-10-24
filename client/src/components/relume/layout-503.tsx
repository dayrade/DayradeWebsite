"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import AnimatedVariableHeading from "@/components/AnimatedVariableHeading";

export function Layout503() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Process</p>
            <AnimatedVariableHeading level="h2" className="mb-5 md:mb-6" parts={["Three", "simple", "steps"]} widths={[75, 50, 150]} weights={[500, 400, 900]} italics={[0, 1, 0]} lineHeight="1.15" />
            <p className="text-medium">
              Verification is straightforward and designed for your convenience.
              We protect your information while creating a transparent trading
              environment.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Begin" variant="secondary">
                Begin
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
        <Tabs defaultValue="tab-one" className="flex flex-col items-center">
          <TabsList className="relative mb-12 no-scrollbar flex w-screen flex-nowrap items-center gap-x-6 overflow-auto px-[5vw] md:mb-16 md:w-auto md:max-w-full md:px-0">
            <TabsTrigger
              value="tab-one"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Personal Info
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Document Upload
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Confirmation
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="tab-one"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Step</p>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Provide your personal details
                </h2>
                <p>
                  Enter your full name, date of birth, and current address
                  accurately.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Next" variant="secondary">
                    Next
                  </Button>
                  <Button
                    title="Info"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Info
                  </Button>
                </div>
              </div>
              <div className="aspect-square">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image 1"
                />
              </div>
            </Card>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Step</p>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Provide your personal details
                </h2>
                <p>
                  Enter your full name, date of birth, and current address
                  accurately.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Next" variant="secondary">
                    Next
                  </Button>
                  <Button
                    title="Info"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Info
                  </Button>
                </div>
              </div>
              <div className="aspect-square">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image 2"
                />
              </div>
            </Card>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Step</p>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Provide your personal details
                </h2>
                <p>
                  Enter your full name, date of birth, and current address
                  accurately.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Next" variant="secondary">
                    Next
                  </Button>
                  <Button
                    title="Info"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Info
                  </Button>
                </div>
              </div>
              <div className="aspect-square">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image 3"
                />
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
