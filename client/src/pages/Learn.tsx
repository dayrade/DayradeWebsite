import React from "react";
import { Navbar6 } from "@/components/relume/navbar-06";
import { Header83 } from "@/components/relume/header-83";
import { Layout141 } from "@/components/relume/layout-141";
import { Layout356 } from "@/components/relume/layout-356";
import { Layout210 } from "@/components/relume/layout-210";
import { Footer3 } from "@/components/relume/footer-03";

export default function Learn() {
  return (
    <div>
      <Navbar6 />
      <Header83 
        headlineParts={["Master Money.", "Master", "Markets."]}
        headlineWidths={[125, 50, 125]}
        headlineWeights={[700, 400, 700]}
        subheadline="DAYRADE isn't just competition—it's education. Learn trading psychology, risk management, technical analysis, and market fundamentals. Free, accessible, actionable."
        primaryCta="Start Learning"
        secondaryCta="Daily Lessons"
      />
      <Layout141 />
      <Layout356 />
      <Layout210 />
      <Footer3 />
    </div>
  );
}
