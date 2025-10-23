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
import { RxPlus } from "react-icons/rx";

export function Faq4_2() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            Understand how rewards, prizes, and user progression work on our
            platform.
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
                How do I earn points?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Complete daily lessons, refer new users, and participate in
                community events. Accumulated points can be redeemed for
                tournament tickets.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-1" className="border-none px-5 md:px-6">
              <AccordionTrigger
               
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                How do I withdraw winnings?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Cash prizes are credited within 24 hours of tournament
                completion. Withdraw directly to your bank account or crypto
                wallet.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-2" className="border-none px-5 md:px-6">
              <AccordionTrigger
               
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                What is user status?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                User status is our progression system that unlocks exclusive
                perks like early tournament access and priority support.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-3" className="border-none px-5 md:px-6">
              <AccordionTrigger
               
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                Question text goes here
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-4" className="border-none px-5 md:px-6">
              <AccordionTrigger
               
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                Question text goes here
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </AccordionContent>
            </AccordionItem>
          </Card>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">
            Need More Information?
          </h4>
          <p className="text-medium">
            Our support team stands ready to help you navigate your trading
            journey.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
