import React from "react";
import { Navbar6 } from "@/components/relume/navbar-06";
import { Header83 } from "@/components/relume/header-83";
import { Layout504 } from "@/components/relume/layout-504";
import { Layout508 } from "@/components/relume/layout-508";
import { Layout514 } from "@/components/relume/layout-514";
import { Layout442 } from "@/components/relume/layout-442";
import { Footer3 } from "@/components/relume/footer-03";

export default function Divisions() {
  return (
    <div>
      <Navbar6 />
      <Header83 
        headlineParts={["The Arena", "Where", "Skill Wins."]}
        headlineWidths={[50, 50, 125]}
        headlineWeights={[700, 400, 700]}
        subheadline="DAYRADE tournaments are time-bound, skill-based competitions where every trader starts with the same virtual capital. Your performance determines your rank. Top performers win real prizes."
        primaryCta="Enter a Tournament"
        secondaryCta="View Divisions"
      />
      <Layout504 />
      <Layout508 />
      <Layout514 />
      <Layout442 />
      <Footer3 />
    </div>
  );
}
