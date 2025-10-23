import React from "react";
import { Navbar6 } from "@/components/relume/navbar-06";
import { Header83 } from "@/components/relume/header-83";
import { Contact15 } from "@/components/relume/contact-15";
import { Footer3 } from "@/components/relume/footer-03";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar6 />
      <div className="flex-1">
        <Header83 
          headline={
            <>
              <span className="font-bold">GET IN</span>{" "}
              <span className="font-normal">TOUCH.</span>{" "}
              <span className="font-bold italic">GET ANSWERS.</span>
            </>
          }
          subheadline="Our support team is here to help you navigate DAYRADE. Whether you have questions about tournaments, technical issues, or partnerships, we're ready to assist."
          primaryCta="Contact Support"
          secondaryCta="Visit FAQ"
        />
        <Contact15 />
      </div>
      <Footer3 />
    </div>
  );
}
