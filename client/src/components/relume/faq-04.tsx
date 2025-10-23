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

export function Faq4() {
  return (
    <section id="getting-started" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">GETTING STARTED</h2>
          <p className="text-medium">
            Your guide to understanding DAYRADE and beginning your competitive trading journey.
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
                How do I create an account?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Creating your DAYRADE account is quick and easy. Click "Sign Up" and complete the streamlined onboarding process. You'll create your unique spirit animal avatar, build your profile, and be tournament-ready in minutes. Registration is free and available globally where legally permissible.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-1" className="border-none px-5 md:px-6">
              <AccordionTrigger
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                Is DAYRADE free to use?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Yes! Registration and platform access are completely free. The Elevator Division (our entry-level simulation tournament) offers free monthly participation. Advanced divisions like Crusader and Raider require tournament tickets, which can be earned through performance, reward points, or purchased directly.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-2" className="border-none px-5 md:px-6">
              <AccordionTrigger
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                What is KYC verification and why is it required?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                KYC (Know Your Customer) verification ensures fair play by confirming user identity and preventing multiple accounts. It's required by global financial regulations for tournament participation, prize withdrawals, and connecting real trading accounts. We use Zimtra-sponsored SumSub verification, which provides a trusted KYC ID you can reuse across many financial platforms. Verification unlocks unlimited messaging, ticket purchases, and full platform access.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-3" className="border-none px-5 md:px-6">
              <AccordionTrigger
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                What documents do I need for verification?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                You'll need one government-issued photo ID (passport or national ID card) and one or two proofs of address (utility bill, bank statement, or lease/tenancy agreement). Requirements vary by country, so visit the verification page for specific details for your region. The process typically takes just a few minutes to complete.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-4" className="border-none px-5 md:px-6">
              <AccordionTrigger
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                Can I explore DAYRADE before verifying?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Absolutely! You can create an account, explore the platform, view tournaments, check out leaderboards, and access learning resources without verification. However, to purchase tickets, participate in paid tournaments, connect trading accounts, or unlock unlimited social features, you'll need to complete the quick verification process.
              </AccordionContent>
            </AccordionItem>
          </Card>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">
            Still Have Questions?
          </h4>
          <p className="text-medium">
            Our support team is ready to help you navigate your competitive trading journey.
          </p>
          <div className="mt-6 md:mt-8">
            <Link href="/contact">
              <Button title="Contact Support" variant="secondary" data-testid="button-contact">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
