import React from "react";
import { Navbar6 } from "@/components/relume/navbar-06";
import { Header83 } from "@/components/relume/header-83";
import { Layout22 } from "@/components/relume/layout-22";
import { Layout13 } from "@/components/relume/layout-13";
import { Team22 } from "@/components/relume/team-22";
import { Testimonial17 } from "@/components/relume/testimonial-17";
import { Layout141 } from "@/components/relume/layout-141";
import { Footer3 } from "@/components/relume/footer-03";

export default function About() {
  return (
    <div>
      <Navbar6 />
      <Header83 
        headlineParts={["Trading Should Be", "a", "Sport."]}
        headlineWidths={[50, 50, 125]}
        headlineWeights={[700, 400, 700]}
        subheadline="We're building the arena where skill wins, education empowers, and community thrives. Fair. Transparent. For everyone."
        primaryCta="Read Our Story"
        secondaryCta="Contact Us"
      />
      <Layout22 />
      <Layout13 />
      <Team22 />
      <Testimonial17 />
      <Layout141 />
      <Footer3 />
    </div>
  );
}
