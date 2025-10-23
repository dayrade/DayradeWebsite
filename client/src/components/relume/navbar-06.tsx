"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";
import { Link } from "wouter";
import {
  BarChart3,
  Trophy,
  Calendar,
  BookOpen,
  Users,
  Info,
  UserPlus,
  LogIn,
  CheckCircle,
  Ticket,
  Award,
  TrendingUp,
  Target,
  Zap,
  Crown,
  LayoutDashboard,
  Podcast,
  Star,
  Mail,
  HelpCircle,
} from "lucide-react";

type MegaMenuLink = {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
};

type MegaMenuColumn = {
  title: string;
  links: MegaMenuLink[];
};

type NavItemType = {
  title: string;
  megaMenu: MegaMenuColumn[];
};

const navigationData: NavItemType[] = [
  {
    title: "How It Works",
    megaMenu: [
      {
        title: "Trading paths",
        links: [
          {
            title: "Onboarding",
            description: "Start your trading journey",
            url: "/how-it-works",
            icon: <UserPlus className="w-5 h-5" />,
          },
          {
            title: "Verification [KYC]",
            description: "Get verified, compete fairly",
            url: "/verification/kyc",
            icon: <CheckCircle className="w-5 h-5" />,
          },
        ],
      },
      {
        title: "Featured insights",
        links: [
          {
            title: "Trading Accounts & Tickets",
            description: "Access tournaments, track progress",
            url: "/trading-accounts-tickets",
            icon: <Ticket className="w-5 h-5" />,
          },
          {
            title: "Rewards & User Status",
            description: "Earn points, unlock perks",
            url: "/rewards-user-status",
            icon: <Award className="w-5 h-5" />,
          },
        ],
      },
      {
        title: "Quick access",
        links: [
          {
            title: "Login",
            description: "Secure account access",
            url: "/login",
            icon: <LogIn className="w-5 h-5" />,
          },
          {
            title: "Sign up",
            description: "Start your trading journey",
            url: "/signup",
            icon: <UserPlus className="w-5 h-5" />,
          },
        ],
      },
    ],
  },
  {
    title: "Divisions",
    megaMenu: [
      {
        title: "Trading paths",
        links: [
          {
            title: "Divisions",
            description: "Find your competitive level",
            url: "/divisions",
            icon: <LayoutDashboard className="w-5 h-5" />,
          },
          {
            title: "Elevator",
            description: "Entry level trading arena",
            url: "/elevator",
            icon: <TrendingUp className="w-5 h-5" />,
          },
        ],
      },
      {
        title: "Featured insights",
        links: [
          {
            title: "Crusader",
            description: "Sharpen skills, compete harder",
            url: "/crusader",
            icon: <Target className="w-5 h-5" />,
          },
          {
            title: "Raider",
            description: "Elite traders, highest stakes",
            url: "/raider",
            icon: <Crown className="w-5 h-5" />,
          },
        ],
      },
      {
        title: "Quick access",
        links: [
          {
            title: "Login",
            description: "Secure account access",
            url: "/login",
            icon: <LogIn className="w-5 h-5" />,
          },
          {
            title: "Sign up",
            description: "Start your trading journey",
            url: "/signup",
            icon: <UserPlus className="w-5 h-5" />,
          },
        ],
      },
    ],
  },
  {
    title: "Tournaments",
    megaMenu: [
      {
        title: "Trading paths",
        links: [
          {
            title: "Tournaments",
            description: "Compete for real prizes",
            url: "/tournaments",
            icon: <Trophy className="w-5 h-5" />,
          },
          {
            title: "Schedule",
            description: "Browse and register now",
            url: "/schedule",
            icon: <Calendar className="w-5 h-5" />,
          },
        ],
      },
      {
        title: "Featured insights",
        links: [
          {
            title: "Leaderboard",
            description: "See top performers worldwide",
            url: "/leaderboard",
            icon: <BarChart3 className="w-5 h-5" />,
          },
          {
            title: "Creator Kit",
            description: "Stream, earn, build your brand",
            url: "/creator-kit",
            icon: <Zap className="w-5 h-5" />,
          },
        ],
      },
      {
        title: "Quick access",
        links: [
          {
            title: "Login",
            description: "Secure account access",
            url: "/login",
            icon: <LogIn className="w-5 h-5" />,
          },
          {
            title: "Sign up",
            description: "Start your trading journey",
            url: "/signup",
            icon: <UserPlus className="w-5 h-5" />,
          },
        ],
      },
    ],
  },
  {
    title: "Learn",
    megaMenu: [
      {
        title: "Trading paths",
        links: [
          {
            title: "Learn",
            description: "Master markets, master money",
            url: "/learn",
            icon: <BookOpen className="w-5 h-5" />,
          },
        ],
      },
      {
        title: "Featured insights",
        links: [
          {
            title: "Daily Lessons",
            description: "Bite-sized trading education",
            url: "/daily-lessons",
            icon: <Calendar className="w-5 h-5" />,
          },
        ],
      },
      {
        title: "Quick access",
        links: [
          {
            title: "Glossary",
            description: "Trading terms explained",
            url: "/glossary",
            icon: <BookOpen className="w-5 h-5" />,
          },
          {
            title: "Sign up",
            description: "Start your trading journey",
            url: "/signup",
            icon: <UserPlus className="w-5 h-5" />,
          },
        ],
      },
    ],
  },
  {
    title: "Community",
    megaMenu: [
      {
        title: "Trading paths",
        links: [
          {
            title: "Community",
            description: "Trade alone, win together",
            url: "/community",
            icon: <Users className="w-5 h-5" />,
          },
          {
            title: "Podcast",
            description: "Expert insights and strategies",
            url: "/podcast",
            icon: <Podcast className="w-5 h-5" />,
          },
        ],
      },
      {
        title: "Featured insights",
        links: [
          {
            title: "Player Spotlights",
            description: "Real traders, real stories",
            url: "/player-spotlights",
            icon: <Star className="w-5 h-5" />,
          },
          {
            title: "Blog",
            description: "Trading tips and updates",
            url: "/blog",
            icon: <BookOpen className="w-5 h-5" />,
          },
        ],
      },
      {
        title: "Quick access",
        links: [
          {
            title: "Login",
            description: "Secure account access",
            url: "/login",
            icon: <LogIn className="w-5 h-5" />,
          },
          {
            title: "Sign up",
            description: "Start your trading journey",
            url: "/signup",
            icon: <UserPlus className="w-5 h-5" />,
          },
        ],
      },
    ],
  },
  {
    title: "About",
    megaMenu: [
      {
        title: "Trading paths",
        links: [
          {
            title: "About",
            description: "Trading should be a sport",
            url: "/about",
            icon: <Info className="w-5 h-5" />,
          },
        ],
      },
      {
        title: "Featured insights",
        links: [
          {
            title: "Contact",
            description: "Get help fast",
            url: "/contact",
            icon: <Mail className="w-5 h-5" />,
          },
          {
            title: "FAQ",
            description: "Quick answers, common questions",
            url: "/faq",
            icon: <HelpCircle className="w-5 h-5" />,
          },
        ],
      },
      {
        title: "Quick access",
        links: [
          {
            title: "Login",
            description: "Secure account access",
            url: "/login",
            icon: <LogIn className="w-5 h-5" />,
          },
          {
            title: "Sign up",
            description: "Start your trading journey",
            url: "/signup",
            icon: <UserPlus className="w-5 h-5" />,
          },
        ],
      },
    ],
  },
];

export function Navbar6() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const isMobile = useMediaQuery("(max-width: 991px)");

  useEffect(() => {
    if (!isMobile) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="relative">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <a className="text-2xl font-bold text-[#C8FF00]">
                Dayrade<sup className="text-xs">®</sup>
              </a>
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
              <>
                <div className="flex items-center gap-6">
                  {navigationData.map((item, index) => (
                    <div
                      key={index}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-[#00BFA5] transition-colors">
                        {item.title}
                        <RxChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.title ? "rotate-180" : ""
                          }`}
                        />
                        {activeDropdown === item.title && (
                          <span className="absolute -top-1 -right-2 w-2 h-2 bg-[#00BFA5] rounded-full"></span>
                        )}
                      </button>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center gap-3">
                  <Link href="/signup">
                    <Button variant="outline" size="sm">
                      Sign up
                    </Button>
                  </Link>
                  <Link href="/learn">
                    <Button variant="default" size="sm">
                      Learn
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Centered MegaMenu Container - rendered outside the main nav container for perfect centering */}
        {!isMobile && (
          <div className="absolute left-0 right-0 top-full pointer-events-none">
            {navigationData.map((item, index) => (
              <AnimatePresence key={index}>
                {activeDropdown === item.title && (
                  <div 
                    className="pointer-events-auto"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="mx-auto mt-2 w-[var(--mega-menu-width)] max-w-[var(--mega-menu-max-width)] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl p-8"
                      style={{
                        maxWidth: 'min(var(--mega-menu-width), var(--mega-menu-max-width))'
                      }}
                    >
                      <div className="grid grid-cols-4 gap-8">
                        {item.megaMenu.map((column, colIndex) => (
                          <div key={colIndex}>
                            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 whitespace-nowrap">
                              {column.title}
                            </h3>
                            <div className="space-y-3">
                              {column.links.map((link, linkIndex) => (
                                <Link key={linkIndex} href={link.url}>
                                  <a className="block group">
                                    <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                      <div className="text-gray-400 group-hover:text-[#00BFA5] transition-colors mt-0.5 flex-shrink-0">
                                        {link.icon}
                                      </div>
                                      <div className="min-w-0">
                                        <div className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[#00BFA5] transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                                          {link.title}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">
                                          {link.description}
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                        {/* Trending Content Column */}
                        <div>
                          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 whitespace-nowrap">
                            Trending content
                          </h3>
                          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg h-48 flex items-center justify-center">
                            <Podcast className="w-12 h-12 text-white" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            ))}
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-900 dark:bg-gray-100 transition-all ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gray-900 dark:bg-gray-100 transition-all ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gray-900 dark:bg-gray-100 transition-all ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="container mx-auto px-4">
        <AnimatePresence>
          {isMobile && isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden pb-4"
            >
              <div className="space-y-4 pt-4">
                {navigationData.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.title ? null : item.title
                        )
                      }
                      className="flex items-center justify-between w-full text-left font-medium text-gray-900 dark:text-gray-100"
                    >
                      {item.title}
                      <RxChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="mt-3 space-y-4 overflow-hidden"
                        >
                          {item.megaMenu.map((column, colIndex) => (
                            <div key={colIndex}>
                              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                                {column.title}
                              </h4>
                              <div className="space-y-2">
                                {column.links.map((link, linkIndex) => (
                                  <Link key={linkIndex} href={link.url}>
                                    <a
                                      className="block p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      <div className="flex items-center gap-2">
                                        {link.icon}
                                        <div>
                                          <div className="font-medium text-sm text-gray-900 dark:text-gray-100">
                                            {link.title}
                                          </div>
                                          <div className="text-xs text-gray-600 dark:text-gray-400">
                                            {link.description}
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="flex flex-col gap-2 pt-2">
                  <Link href="/signup">
                    <Button variant="outline" className="w-full">
                      Sign up
                    </Button>
                  </Link>
                  <Link href="/learn">
                    <Button variant="default" className="w-full">
                      Learn
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

