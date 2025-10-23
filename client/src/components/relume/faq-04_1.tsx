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

export function Faq4_1() {
  return (
    <section id="tournaments-divisions" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">TOURNAMENTS & DIVISIONS</h2>
          <p className="text-medium">
            Understanding our competitive structure, divisions, and how tournaments work.
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
                How do tournaments work?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Tournaments are time-bound competitions where all participants start with equal capital (virtual or real, depending on division). Performance is tracked on real-time leaderboards using transparent scoring that considers P&L, risk management, and trading discipline. Winners are announced after the final trading day, with prizes processed within 10 business days.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-1" className="border-none px-5 md:px-6">
              <AccordionTrigger
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                What are the three divisions?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                <strong>Elevator Division:</strong> Monthly simulation tournament (free entry). Top 10% earn a $69 ticket to Crusader.<br/><br/>
                <strong>Crusader Division:</strong> 3-day simulation event. Requires a $69 ticket. 10 winners receive $1,000 Zimtra trading accounts.<br/><br/>
                <strong>Raider Division:</strong> 5-day professional real-money tournament. Grand prize: $50,000 cash + $250,000 Zimtra account. Additional prizes for highest volume and best single trade.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-2" className="border-none px-5 md:px-6">
              <AccordionTrigger
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                What's the difference between SIM and real-money trading?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Elevator and Crusader divisions use simulated trading environments with virtual currency, allowing you to practice and compete risk-free. Raider Division involves real money trading with live accounts, requiring proper verification, eligibility checks, and adherence to professional trading rules including 1:20 leverage and strict loss limits.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-3" className="border-none px-5 md:px-6">
              <AccordionTrigger
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                How do I enter a tournament?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Browse the tournament schedule, select your preferred competition, and register with the appropriate ticket. Elevator Division has free entry each month. Crusader requires a ticket (earn through Elevator performance or purchase). Raider requires ticket purchase and additional eligibility verification. Your trading account activates when the tournament begins.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-4" className="border-none px-5 md:px-6">
              <AccordionTrigger
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                Can I progress from Elevator to Raider Division?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Yes! The division system is designed for progression. Excel in the monthly Elevator tournament to earn free Crusader tickets. Build skills in Crusader, then when you're ready, purchase a Raider ticket and compete for the grand prize. This pathway ensures you develop proper risk management and trading discipline before risking real capital.
              </AccordionContent>
            </AccordionItem>
          </Card>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">
            Ready to Compete?
          </h4>
          <p className="text-medium">
            View the tournament schedule and find your next competition.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
            <Link href="/schedule">
              <Button title="View Schedule" variant="secondary" data-testid="button-schedule">
                View Schedule
              </Button>
            </Link>
            <Link href="/divisions">
              <Button title="Explore Divisions" variant="outline" data-testid="button-divisions">
                Explore Divisions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
