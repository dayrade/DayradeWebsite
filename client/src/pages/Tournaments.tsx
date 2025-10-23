import React from "react";
import { Navbar6 } from "@/components/relume/navbar-06";
import { Header83 } from "@/components/relume/header-83";
import { Layout357 } from "@/components/relume/layout-357";
import { Layout419 } from "@/components/relume/layout-419";
import { Layout514 } from "@/components/relume/layout-514";
import { Cta31 } from "@/components/relume/cta-31";
import { Footer3 } from "@/components/relume/footer-03";

export default function Tournaments() {
  return (
    <div>
      <Navbar6 />
      <Header83 
        headline={
          <>
            <span className="font-bold">COMPETE.</span>{" "}
            <span className="font-normal">PROVE YOUR</span>{" "}
            <span className="font-bold italic">SKILL.</span>
          </>
        }
        subheadline="DAYRADE tournaments are time-bound competitions where everyone starts equal. Trade with virtual capital. Climb the leaderboard. Win real prizes."
        primaryCta="View Schedule"
        secondaryCta="How It Works"
      />
      <Layout357 />
      <Layout419 />
      <Layout514 />
      <Cta31 />
      <Footer3 />
    </div>
  );
}
