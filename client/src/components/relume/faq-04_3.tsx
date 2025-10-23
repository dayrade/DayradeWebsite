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

export function Faq4_3() {
  return (
    <section id="safety-compliance" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">SAFETY & COMPLIANCE</h2>
          <p className="text-medium">
            Our commitment to security, fair play, data protection, and regulatory compliance.
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
                Is my personal data and financial information safe?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Absolutely. We use industry-standard 256-bit encryption to protect all data transmission and storage. DAYRADE complies with international data protection standards including GDPR. Your information is never shared with third parties without explicit consent, and our infrastructure undergoes regular security audits to maintain the highest protection standards.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-1" className="border-none px-5 md:px-6">
              <AccordionTrigger
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                How does DAYRADE prevent cheating and ensure fair play?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Our comprehensive anti-cheat system monitors all tournament activity in real-time. KYC verification ensures one account per person, preventing multi-accounting. We track trading patterns, flag suspicious behavior, and use sophisticated algorithms to detect manipulation attempts. Violations result in immediate disqualification, account suspension, and potential legal action for severe cases.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-2" className="border-none px-5 md:px-6">
              <AccordionTrigger
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                Who can participate in DAYRADE tournaments?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Participants must be 18 years or older (or the age of majority in their jurisdiction, whichever is higher). DAYRADE is available globally except where local laws prohibit participation. All users must comply with their local regulations. DAYRADE employees and contractors are ineligible to compete. Raider Division has additional eligibility requirements verified during registration.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-3" className="border-none px-5 md:px-6">
              <AccordionTrigger
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                What are the key tournament rules I need to know?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                All participants must provide accurate information, maintain professional conduct, and follow platform terms of service. Prohibited activities include market manipulation, collusion, unauthorized automation/bots, exploiting system glitches, and offensive conduct. Rules are governed by Cayman Islands law. Violations can result in warnings, disqualification, or permanent bans. Appeals must be submitted within 24 hours of any ruling.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-4" className="border-none px-5 md:px-6">
              <AccordionTrigger
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                What trading instruments and order types are allowed?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Tournament rules specify which instruments are permitted (stocks, ETFs, etc.) and may vary by division. Raider Division participants trade with 1:20 leverage, $10,000 maximum loss limit, and $5,000 maximum daily loss limit. All standard order types (market, limit, stop orders) are supported through the DAYRADE platform. Specific instrument lists are published before each tournament begins.
              </AccordionContent>
            </AccordionItem>
          </Card>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">
            Questions About Rules or Safety?
          </h4>
          <p className="text-medium">
            Contact our compliance team for detailed rule clarifications and safety information.
          </p>
          <div className="mt-6 md:mt-8">
            <Link href="/contact">
              <Button title="Contact Compliance" variant="secondary" data-testid="button-compliance">
                Contact Compliance
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
