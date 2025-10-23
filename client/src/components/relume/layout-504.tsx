"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { MdSchool, MdAttachMoney, MdEmojiEvents, MdTrendingUp } from "react-icons/md";

export function Layout504() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Three Divisions</p>
            <h1 className="heading-h2 mb-5 font-bold md:mb-6">Find Your Division</h1>
            <p className="text-medium">
              Choose the division that matches your skill level. Start in Elevator to learn, move to Crusader to compete, and reach Raider for elite prizes.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="View All Divisions" variant="secondary">
                View All Divisions
              </Button>
              <Button
                title="How It Works"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                How It Works
              </Button>
            </div>
          </div>
        </div>
        <Tabs defaultValue="elevator" className="flex flex-col items-center">
          <TabsList className="relative mb-12 no-scrollbar flex w-screen flex-nowrap items-center gap-x-6 overflow-auto px-[5vw] md:mb-16 md:w-auto md:max-w-full md:px-0">
            <TabsTrigger
              value="elevator"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Elevator
            </TabsTrigger>
            <TabsTrigger
              value="crusader"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Crusader
            </TabsTrigger>
            <TabsTrigger
              value="raider"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Raider
            </TabsTrigger>
          </TabsList>
          
          {/* Elevator Division */}
          <TabsContent
            value="elevator"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="aspect-square">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Elevator Division - Beginner trading arena"
                />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Beginner Division</p>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Start Here. Rise Everywhere.
                </h2>
                <p className="mb-6">
                  Perfect for beginners. Learn the fundamentals, practice your strategy, and earn free tickets to higher divisions. No risk. All reward.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2">
                    <MdSchool className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Free Entry</p>
                      <p className="text-xs text-muted-foreground">No cost to join</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MdTrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Daily Lessons</p>
                      <p className="text-xs text-muted-foreground">Learn & grow</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MdEmojiEvents className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Real Competition</p>
                      <p className="text-xs text-muted-foreground">Virtual capital</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MdAttachMoney className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Reward Points</p>
                      <p className="text-xs text-muted-foreground">Earn free tickets</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Enter Elevator Division" variant="secondary">
                    Enter Elevator Division
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
            </Card>
          </TabsContent>
          
          {/* Crusader Division */}
          <TabsContent
            value="crusader"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="aspect-square">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Crusader Division - Intermediate trading competition"
                />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Intermediate Division</p>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Prove Your Skill. Earn Real Rewards.
                </h2>
                <p className="mb-6">
                  For traders with a solid foundation. Compete for cash prizes up to $1,000 and prove your consistency.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2">
                    <MdAttachMoney className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Low-Cost Entry</p>
                      <p className="text-xs text-muted-foreground">Affordable tickets</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MdEmojiEvents className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">$1K Prizes</p>
                      <p className="text-xs text-muted-foreground">Real cash rewards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MdTrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Performance Analytics</p>
                      <p className="text-xs text-muted-foreground">Track your progress</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MdSchool className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Leaderboard</p>
                      <p className="text-xs text-muted-foreground">Earn recognition</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Enter Crusader Division" variant="secondary">
                    Enter Crusader Division
                  </Button>
                  <Button
                    title="View Tournaments"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    View Tournaments
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          {/* Raider Division */}
          <TabsContent
            value="raider"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="aspect-square">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Raider Division - Elite trading competition"
                />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Elite Division</p>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Elite Traders. Elite Prizes.
                </h2>
                <p className="mb-6">
                  The highest stakes, the biggest prizes, and the most intense trading environment. Prize pools reach $10,000.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2">
                    <MdEmojiEvents className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Premium Tournaments</p>
                      <p className="text-xs text-muted-foreground">Higher entry costs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MdAttachMoney className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">$10K Prizes</p>
                      <p className="text-xs text-muted-foreground">Life-changing cash</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MdTrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Elite Leaderboard</p>
                      <p className="text-xs text-muted-foreground">Mark of true skill</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MdSchool className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Exclusive Community</p>
                      <p className="text-xs text-muted-foreground">Best traders</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Enter Raider Division" variant="secondary">
                    Enter Raider Division
                  </Button>
                  <Button
                    title="Prove You Belong"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Prove You Belong
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
