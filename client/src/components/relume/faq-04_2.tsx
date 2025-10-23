"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { Link } from "wouter";

export function Faq4_2() {
  return (
    <section id="rewards-prizes" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">REWARDS & PRIZES</h2>
          <p className="text-medium">
            Learn how rewards, prizes, progression, and payouts work on DAYRADE.
          </p>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <Card>
            <AccordionItem value="item-0" className="border-none px-5 md:px-6">
              <AccordionTrigger
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                How do I earn reward points?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Earn points by completing daily lessons, referring new users, participating in community events, maintaining trading consistency, and achieving milestones. Accumulated points can be redeemed for tournament tickets, exclusive badges, and other platform perks. Check your rewards dashboard to track your progress and available redemptions.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-1" className="border-none px-5 md:px-6">
              <AccordionTrigger
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                What prizes can I win in each division?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                <strong>Elevator:</strong> Top 10% earn free Crusader tickets ($69 value).<br/><br/>
                <strong>Crusader:</strong> 10 winners receive $1,000 Zimtra trading accounts (no cash equivalent).<br/><br/>
                <strong>Raider:</strong> Most Profitable Trader wins $50,000 cash + $250,000 Zimtra account. Highest Volume and Best Single Trade each win $10,000 cash + $50,000 Zimtra accounts. All Zimtra account earnings are yours to keep.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-2" className="border-none px-5 md:px-6">
              <AccordionTrigger
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                How and when do I receive prize payouts?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Winners are announced after the final trading day's closing bell. A Zimtra or DAYRADE team member will reach out directly to arrange prize transfers and account setup. Cash prizes are typically processed within 10 business days after account verification and required documentation. You're responsible for any taxes or fees on winnings.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-3" className="border-none px-5 md:px-6">
              <AccordionTrigger
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                What is the user status progression system?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                User status tracks your overall progression on DAYRADE, unlocking exclusive perks like early tournament access, priority support, special badges, and enhanced visibility on leaderboards. Advance your status by consistently participating in tournaments, maintaining good standing, completing educational content, and engaging with the community.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-4" className="border-none px-5 md:px-6">
              <AccordionTrigger
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                Can I withdraw Zimtra trading account earnings?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Yes! Any profits you generate in your Zimtra sponsored trading account are yours to keep and withdraw. The accounts come with specific stop-loss limits to manage risk, but all earnings beyond those limits can be withdrawn according to Zimtra's standard withdrawal procedures. Note that the base account value itself is not withdrawable as cash.
              </AccordionContent>
            </AccordionItem>
          </Card>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">
            Track Your Progress
          </h4>
          <p className="text-medium">
            Check your reward points, status level, and tournament history.
          </p>
          <div className="mt-6 md:mt-8">
            <Link href="/rewards-user-status">
              <Button title="View Rewards Dashboard" variant="secondary" data-testid="button-rewards">
                View Rewards Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
