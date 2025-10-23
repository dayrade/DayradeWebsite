import React from "react";
import { Navbar6 } from "@/components/relume/navbar-06";
import { Header83 } from "@/components/relume/header-83";
import { Layout491 } from "@/components/relume/layout-491";
import { Layout491_1 } from "@/components/relume/layout-491_1";
import { Layout503 } from "@/components/relume/layout-503";
import { Layout410 } from "@/components/relume/layout-410";
import { Layout19 } from "@/components/relume/layout-19";
import { Footer3 } from "@/components/relume/footer-03";

export default function Elevator() {
  return (
    <div>
      <Navbar6 />
      <Header83 
        headline={
          <>
            <span className="font-bold">START HERE.</span>{" "}
            <span className="font-normal">RISE</span>{" "}
            <span className="font-bold italic">EVERYWHERE.</span>
          </>
        }
        subheadline="The Elevator Division is designed for beginners. Learn the fundamentals of day trading in a safe, supportive environment. No risk. All reward."
        primaryCta="Enter Elevator Division"
        secondaryCta="Learn More"
      />
      <Layout491 />
      <Layout491_1 />
      <Layout503 />
      <Layout410 />
      <Layout19 />
      <Footer3 />
    </div>
  );
}
