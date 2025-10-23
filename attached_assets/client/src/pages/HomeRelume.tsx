import React from "react";
import { Header } from "@/components/Header";
import { Header83 } from "@/components/relume/header-83";
import { Layout369 } from "@/components/relume/layout-369";
import { Layout239 } from "@/components/relume/layout-239";
import { Layout514 } from "@/components/relume/layout-514";
import { Cta31 } from "@/components/relume/cta-31";
import { Header83_1 } from "@/components/relume/header-83_1";
import { Layout145 } from "@/components/relume/layout-145";
import { Layout513 } from "@/components/relume/layout-513";
import { Footer3 } from "@/components/relume/footer-03";

/**
 * DAYRADE Homepage using Relume component layouts
 * 
 * This page uses the exact Relume components from the design export
 * with DAYRADE brand copy and styling applied.
 */
export default function HomeRelume() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Custom DAYRADE Navigation */}
      <Header />
      
      {/* Hero Section - Parallax scroll effect with image grid */}
      <Header83 />
      
      {/* How It Works - 3-step process with cards */}
      <Layout369 />
      
      {/* Divisions Overview */}
      <Layout239 />
      
      {/* Why DAYRADE - Animated scroll sections */}
      <Layout514 />
      
      {/* CTA Section */}
      <Cta31 />
      
      {/* Financial Literacy Section */}
      <Header83_1 />
      
      {/* Community/Learn Section */}
      <Layout145 />
      
      {/* Final Features/Benefits */}
      <Layout513 />
      
      {/* Footer */}
      <Footer3 />
    </div>
  );
}

