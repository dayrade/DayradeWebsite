import React from "react";
import { Navbar6 } from "@/components/relume/navbar-06";
import { Header83 } from "@/components/relume/header-83";
import { Layout141 } from "@/components/relume/layout-141";
import { Layout149 } from "@/components/relume/layout-149";
import { Header80 } from "@/components/relume/header-80";
import { Layout145 } from "@/components/relume/layout-145";
import { Layout155 } from "@/components/relume/layout-155";
import { Layout141_1 } from "@/components/relume/layout-141_1";
import { Layout141_2 } from "@/components/relume/layout-141_2";
import { Layout145_1 } from "@/components/relume/layout-145_1";
import { Footer3 } from "@/components/relume/footer-03";

export default function HowItWorks() {
  return (
    <div>
      <Navbar6 />
      <Header83 
        headline={
          <>
            <span className="font-bold">YOUR JOURNEY TO</span>{" "}
            <span className="font-normal">LEGEND STATUS</span>{" "}
            <span className="font-bold italic">BEGINS NOW.</span>
          </>
        }
        subheadline="Create your unique trading persona and join the arena. The path is simple, fast, and secure."
        primaryCta="Start the Journey"
        secondaryCta="Learn More"
      />
      <Layout141 />
      <Layout149 />
      <Header80 />
      <Layout145 />
      <Layout155 />
      <Layout141_1 />
      <Layout141_2 />
      <Layout145_1 />
      <Footer3 />
    </div>
  );
}
