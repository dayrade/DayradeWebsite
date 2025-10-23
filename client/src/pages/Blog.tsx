import React from "react";
import { Navbar6 } from "@/components/relume/navbar-06";
import { Header83 } from "@/components/relume/header-83";
import { Blog68 } from "@/components/relume/blog-68";
import { Footer3 } from "@/components/relume/footer-03";

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar6 />
      <div className="flex-1">
        <Header83 
          headline={
            <>
              <span className="font-bold">INSIGHTS.</span>{" "}
              <span className="font-normal">STRATEGIES.</span>{" "}
              <span className="font-bold italic">WINS.</span>
            </>
          }
          subheadline="Expert analysis, trading strategies, and community stories from the arena. Learn from the best and stay ahead of the market."
          primaryCta="Browse Articles"
          secondaryCta="Subscribe"
        />
        <Blog68 />
      </div>
      <Footer3 />
    </div>
  );
}
