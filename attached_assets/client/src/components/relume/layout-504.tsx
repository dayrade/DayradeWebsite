"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout504() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Tagline</p>
            <h1 className="heading-h2 mb-5 font-bold md:mb-6">How you earn</h1>
            <p className="text-medium">
              Your performance drives your potential. Compete, learn, and
              transform your trading journey into a path of continuous growth.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
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
        <Tabs defaultValue="tab-one" className="flex flex-col items-center">
          <TabsList className="relative mb-12 no-scrollbar flex w-screen flex-nowrap items-center gap-x-6 overflow-auto px-[5vw] md:mb-16 md:w-auto md:max-w-full md:px-0">
            <TabsTrigger
              value="tab-one"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Tab One
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Tab Two
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Tab Three
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="tab-one"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="aspect-square">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image 1"
                />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Tagline</p>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Tournament winnings
                </h2>
                <p>
                  Top performers claim real cash prizes. Withdraw your earnings
                  or reinvest in your trading strategy.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
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
            </Card>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="aspect-square">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image 2"
                />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Tagline</p>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Tournament winnings
                </h2>
                <p>
                  Top performers claim real cash prizes. Withdraw your earnings
                  or reinvest in your trading strategy.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
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
            </Card>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="aspect-square">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image 3"
                />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Tagline</p>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Tournament winnings
                </h2>
                <p>
                  Top performers claim real cash prizes. Withdraw your earnings
                  or reinvest in your trading strategy.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
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
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
