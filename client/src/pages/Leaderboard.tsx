import React from "react";
import { Navbar6 } from "@/components/relume/navbar-06";
import { Header83 } from "@/components/relume/header-83";
import { Layout149 } from "@/components/relume/layout-149";
import { Cta31 } from "@/components/relume/cta-31";
import { Footer3 } from "@/components/relume/footer-03";

export default function Leaderboard() {
  return (
    <div>
      <Navbar6 />
      <Header83 
        headline={
          <>
            <span className="font-bold">THE CLIMB IS REAL.</span>{" "}
            <span className="font-normal">THIS IS WHERE</span>{" "}
            <span className="font-bold italic">LEGENDS ARE MADE.</span>
          </>
        }
        subheadline="Track the top performers across all divisions. Filter by global rank, division, or follow your friends to see who has the ultimate edge."
        primaryCta="View Rankings"
        secondaryCta="Enter Tournament"
      />
      <Layout149 />
      <Cta31 />
      <Footer3 />
    </div>
  );
}
