import React from "react";
import { Navbar6 } from "@/components/relume/navbar-06";
import { Header83 } from "@/components/relume/header-83";
import { Layout13 } from "@/components/relume/layout-13";
import { Layout16 } from "@/components/relume/layout-16";
import { Footer3 } from "@/components/relume/footer-03";

export default function Crusader() {
  return (
    <div>
      <Navbar6 />
      <Header83 
        headlineParts={["Prove Your Skill.", "Earn", "Real Rewards."]}
        headlineWidths={[50, 50, 125]}
        headlineWeights={[700, 400, 700]}
        subheadline="The Crusader Division is for traders who have mastered the basics and are ready to compete for cash prizes. Consistency wins here."
        primaryCta="Enter Crusader Division"
        secondaryCta="View Tournaments"
      />
      <Layout13 />
      <Layout16 />
      <Footer3 />
    </div>
  );
}
