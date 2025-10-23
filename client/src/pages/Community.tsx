import React from "react";
import { Navbar6 } from "@/components/relume/navbar-06";
import { Header83 } from "@/components/relume/header-83";
import { Layout16 } from "@/components/relume/layout-16";
import { Layout1 } from "@/components/relume/layout-01";
import { Layout192 } from "@/components/relume/layout-192";
import { Footer3 } from "@/components/relume/footer-03";

export default function Community() {
  return (
    <div>
      <Navbar6 />
      <Header83 
        headline={
          <>
            <span className="font-bold">TRADE ALONE.</span>{" "}
            <span className="font-normal">WIN</span>{" "}
            <span className="font-bold italic">TOGETHER.</span>
          </>
        }
        subheadline="DAYRADE is more than a platform—it's a community. Learn from pros, share strategies, celebrate wins, and grow with traders worldwide."
        primaryCta="Join Discord"
        secondaryCta="Explore Content"
      />
      <Layout16 />
      <Layout1 />
      <Layout192 />
      <Footer3 />
    </div>
  );
}
