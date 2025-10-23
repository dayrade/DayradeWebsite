import React from "react";
import { Navbar6 } from "@/components/relume/navbar-06";
import { Header83 } from "@/components/relume/header-83";
import { Layout16 } from "@/components/relume/layout-16";
import { Layout359 } from "@/components/relume/layout-359";
import { Cta31 } from "@/components/relume/cta-31";
import { Footer3 } from "@/components/relume/footer-03";

export default function CreatorKit() {
  return (
    <div>
      <Navbar6 />
      <Header83 
        headlineParts={["Stream Dayrade", "Like a", "Pro."]}
        headlineWidths={[125, 50, 125]}
        headlineWeights={[700, 400, 700]}
        subheadline="We believe in community-driven growth. The Creator Kit helps streamers, educators, and commentators represent Dayrade authentically. Get logos, overlays, stingers, and 3D avatars ready for OBS and Unreal Engine."
        primaryCta="Download Kit"
        secondaryCta="Apply for Partnership"
      />
      <Layout16 />
      <Layout359 />
      <Cta31 />
      <Footer3 />
    </div>
  );
}
