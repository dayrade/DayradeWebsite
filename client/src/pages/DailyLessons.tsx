import React from "react";
import { Navbar6 } from "@/components/relume/navbar-06";
import { Header83 } from "@/components/relume/header-83";
import { Layout359 } from "@/components/relume/layout-359";
import { Layout239 } from "@/components/relume/layout-239";
import { Cta31 } from "@/components/relume/cta-31";
import { Footer3 } from "@/components/relume/footer-03";

export default function DailyLessons() {
  return (
    <div>
      <Navbar6 />
      <Header83 
        headline={
          <>
            <span className="font-bold">MASTER THE MARKETS,</span>{" "}
            <span className="font-normal">ONE</span>{" "}
            <span className="font-bold italic">LESSON AT A TIME.</span>
          </>
        }
        subheadline="Our daily lessons break down complex financial topics into simple, actionable insights. Build your knowledge, boost your confidence, and make smarter decisions—in and out of the arena."
        primaryCta="Start Your First Lesson"
        secondaryCta="Browse Lessons"
      />
      <Layout359 />
      <Layout239 />
      <Cta31 />
      <Footer3 />
    </div>
  );
}
