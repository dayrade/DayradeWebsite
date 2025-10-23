import React from "react";
import { Navbar6 } from "@/components/relume/navbar-06";
import { Header83 } from "@/components/relume/header-83";
import { Layout141 } from "@/components/relume/layout-141";
import { Layout149 } from "@/components/relume/layout-149";
import { Cta31 } from "@/components/relume/cta-31";
import { Stats40 } from "@/components/relume/stats-40";
import { Testimonial17 } from "@/components/relume/testimonial-17";
import { Contact15 } from "@/components/relume/contact-15";
import { Footer3 } from "@/components/relume/footer-03";

export default function Raider() {
  return (
    <div>
      <Navbar6 />
      <Header83 
        headlineParts={["Elite Traders.", "Elite", "Prizes."]}
        headlineWidths={[50, 50, 125]}
        headlineWeights={[700, 400, 700]}
        subheadline="The Raider Division is the pinnacle of DAYRADE competition. Only the most skilled and disciplined traders compete here. Prize pools reach $10,000."
        primaryCta="Enter Raider Division"
        secondaryCta="Prove You Belong"
      />
      <Layout141 />
      <Layout149 />
      <Cta31 />
      <Stats40 />
      <Testimonial17 />
      <Contact15 />
      <Footer3 />
    </div>
  );
}
