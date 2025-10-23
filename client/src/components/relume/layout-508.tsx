"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { MdHowToReg, MdPlayArrow, MdLeaderboard, MdEmojiEvents, MdAttachMoney } from "react-icons/md";

export function Layout508() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Fair. Transparent. Thrilling.</p>
          <h1 className="heading-h2 mb-5 font-bold md:mb-6">
            How Tournaments Work
          </h1>
          <p className="text-medium">
            A transparent, five-step process ensures every tournament is fair, exciting, and rewarding.
          </p>
        </div>
        <Card className="relative grid auto-cols-fr grid-cols-1 gap-x-12 lg:gap-x-0">
          <Tabs defaultValue="registration" className="grid">
            <TabsList className="order-2 flex-col md:order-1 md:flex-row">
              <TabsTrigger
                value="registration"
                className="heading-h6 w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 font-bold whitespace-normal data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-r md:px-8 md:py-6 md:last-of-type:border-r-0"
              >
                1. Registration
              </TabsTrigger>
              <TabsTrigger
                value="tournament-begins"
                className="heading-h6 w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 font-bold whitespace-normal data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-r md:px-8 md:py-6 md:last-of-type:border-r-0"
              >
                2. Tournament Begins
              </TabsTrigger>
              <TabsTrigger
                value="live-leaderboard"
                className="heading-h6 w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 font-bold whitespace-normal data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-r md:px-8 md:py-6 md:last-of-type:border-r-0"
              >
                3. Live Leaderboard
              </TabsTrigger>
              <TabsTrigger
                value="tournament-ends"
                className="heading-h6 w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 font-bold whitespace-normal data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-r md:px-8 md:py-6 md:last-of-type:border-r-0"
              >
                4. Tournament Ends
              </TabsTrigger>
              <TabsTrigger
                value="prizes"
                className="heading-h6 w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 font-bold whitespace-normal data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-r md:px-8 md:py-6 md:last-of-type:border-r-0"
              >
                5. Prizes
              </TabsTrigger>
            </TabsList>
            
            {/* Step 1: Registration Opens */}
            <TabsContent
              value="registration"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="w-full rounded-image object-cover"
                    alt="Tournament registration interface"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <MdHowToReg className="w-8 h-8 text-primary" />
                    <p className="font-semibold text-lg">Step 1: Registration Opens</p>
                  </div>
                  <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                    Choose Your Tournament
                  </h2>
                  <p className="mb-4">
                    Browse upcoming tournaments and register with a ticket. See the rules, prize pool, and start time before you commit.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>View all tournament details and requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Check prize pools and division requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Register with a ticket or reward points</span>
                    </li>
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="View Schedule" variant="secondary">
                      View Schedule
                    </Button>
                    <Button
                      title="How Tickets Work"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      How Tickets Work
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Step 2: Tournament Begins */}
            <TabsContent
              value="tournament-begins"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="w-full rounded-image object-cover"
                    alt="Tournament trading interface"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <MdPlayArrow className="w-8 h-8 text-primary" />
                    <p className="font-semibold text-lg">Step 2: Tournament Begins</p>
                  </div>
                  <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                    Everyone Starts Equal
                  </h2>
                  <p className="mb-4">
                    All participants receive the same starting capital in a dedicated tournament account. Trade your strategy and compete on skill alone.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Same virtual capital for all competitors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Access tournament-only trading account</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Execute your trading strategy in real-time</span>
                    </li>
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Enter Tournament" variant="secondary">
                      Enter Tournament
                    </Button>
                    <Button
                      title="Trading Basics"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Trading Basics
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Step 3: Live Leaderboard */}
            <TabsContent
              value="live-leaderboard"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="w-full rounded-image object-cover"
                    alt="Live tournament leaderboard"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <MdLeaderboard className="w-8 h-8 text-primary" />
                    <p className="font-semibold text-lg">Step 3: Live Leaderboard</p>
                  </div>
                  <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                    Watch Your Rank in Real-Time
                  </h2>
                  <p className="mb-4">
                    See your rank update live as you trade. Watch who's climbing and who's falling. The competition is intense and transparent.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Real-time leaderboard updates every second</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Track your position against all competitors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Adjust your strategy based on performance</span>
                    </li>
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="View Leaderboard" variant="secondary">
                      View Leaderboard
                    </Button>
                    <Button
                      title="Scoring System"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Scoring System
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Step 4: Tournament Ends */}
            <TabsContent
              value="tournament-ends"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="w-full rounded-image object-cover"
                    alt="Tournament results"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <MdEmojiEvents className="w-8 h-8 text-primary" />
                    <p className="font-semibold text-lg">Step 4: Tournament Ends</p>
                  </div>
                  <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                    Final Rankings Calculated
                  </h2>
                  <p className="mb-4">
                    Trading closes at the scheduled end time. Final rankings are calculated automatically and winners are announced immediately.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Automatic trade closure at end time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Instant calculation of final positions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Winners announced and leaderboard finalized</span>
                    </li>
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Past Results" variant="secondary">
                      Past Results
                    </Button>
                    <Button
                      title="Tournament Rules"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Tournament Rules
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Step 5: Prizes Distributed */}
            <TabsContent
              value="prizes"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="w-full rounded-image object-cover"
                    alt="Prize distribution"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <MdAttachMoney className="w-8 h-8 text-primary" />
                    <p className="font-semibold text-lg">Step 5: Prizes Distributed</p>
                  </div>
                  <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                    Get Rewarded Within 24 Hours
                  </h2>
                  <p className="mb-4">
                    Top performers receive cash prizes or reward points, credited to their accounts within 24 hours. No delays, no excuses.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Cash prizes up to $10,000 in Raider Division</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Reward points for Elevator Division winners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Automatic credit to your account within 24 hours</span>
                    </li>
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Prize Pools" variant="secondary">
                      Prize Pools
                    </Button>
                    <Button
                      title="Withdraw Winnings"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Withdraw Winnings
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}
