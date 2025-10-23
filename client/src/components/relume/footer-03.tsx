"use client";

import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Footer3() {
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 bg-background dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <a href="/" className="text-2xl font-bold text-[#C8FF00]">
                DAYRADE<sup className="text-xs">®</sup>
              </a>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="text-small mb-1 font-semibold text-foreground">Address</p>
              <p className="text-small mb-5 md:mb-6 text-muted-foreground">
                Level 1, 123 Trading Street, Sydney, Australia
              </p>
              <p className="text-small mb-1 font-semibold text-foreground">Contact</p>
              <a
                href="tel:18001234567"
                className="text-small block underline text-muted-foreground hover:text-foreground"
              >
                1800 DAYRADE HELP
              </a>
              <a
                href="mailto:info@dayrade.com"
                className="text-small block underline text-muted-foreground hover:text-foreground"
              >
                info@dayrade.com
              </a>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              <a href="#" className="text-foreground hover:text-[#00BFA5] transition-colors">
                <BiLogoFacebookCircle className="size-6" />
              </a>
              <a href="#" className="text-foreground hover:text-[#00BFA5] transition-colors">
                <BiLogoInstagram className="size-6" />
              </a>
              <a href="#" className="text-foreground hover:text-[#00BFA5] transition-colors">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#" className="text-foreground hover:text-[#00BFA5] transition-colors">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#" className="text-foreground hover:text-[#00BFA5] transition-colors">
                <BiLogoYoutube className="size-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              <li className="text-small py-2 font-semibold">
                <a href="/tournaments" className="text-foreground hover:text-[#00BFA5] transition-colors">Tournaments</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="/divisions" className="text-foreground hover:text-[#00BFA5] transition-colors">Divisions</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="/learn" className="text-foreground hover:text-[#00BFA5] transition-colors">Learn</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="/community" className="text-foreground hover:text-[#00BFA5] transition-colors">Community</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="/about" className="text-foreground hover:text-[#00BFA5] transition-colors">About</a>
              </li>
            </ul>
            <ul>
              <li className="text-small py-2 font-semibold">
                <a href="/podcast" className="text-foreground hover:text-[#00BFA5] transition-colors">Podcast</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="/blog" className="text-foreground hover:text-[#00BFA5] transition-colors">Blog</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="/faq" className="text-foreground hover:text-[#00BFA5] transition-colors">FAQ</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="/contact" className="text-foreground hover:text-[#00BFA5] transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-border" />
        <div className="text-small flex flex-col-reverse items-start justify-between pt-6 pb-4 md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-8 md:mt-0 text-muted-foreground">© 2025 DAYRADE. All Rights Reserved.</p>
          <ul className="text-small grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            </li>
            <li className="underline">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            </li>
            <li className="underline">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookies Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
