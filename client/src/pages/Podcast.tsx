import React from "react";
import { Navbar6 } from "@/components/relume/navbar-06";
import { Header83 } from "@/components/relume/header-83";
import { Layout514 } from "@/components/relume/layout-514";
import { Layout514_1 } from "@/components/relume/layout-514_1";
import { Layout163 } from "@/components/relume/layout-163";
import { Footer3 } from "@/components/relume/footer-03";

export default function Podcast() {
  return (
    <div>
      <Navbar6 />
      <Header83 
        headline={
          <>
            <span className="font-bold">THE DAYRADE DOWN-LOW:</span>{" "}
            <span className="font-normal">THE OFFICIAL</span>{" "}
            <span className="font-bold italic">PODCAST.</span>
          </>
        }
        subheadline="Tune in for weekly insights, pro trader interviews, tournament recaps, and deep dives into the psychology of winning. Your weekly dose of market wisdom and community stories."
        primaryCta="Listen Now"
        secondaryCta="View Episodes"
      />
      <Layout514 />
      <Layout514_1 />
      <Layout163 />
      <Footer3 />
    </div>
  );
}
