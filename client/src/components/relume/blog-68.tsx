"use client";

import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { RxChevronRight } from "react-icons/rx";
import { Link } from "wouter";

const useCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index: number) => {
    return `mx-[3px] inline-block size-2 rounded-full ${
      current === index + 1 ? "bg-scheme-text" : "bg-scheme-text/20"
    }`;
  };

  return { api, setApi, current, handleDotClick, dotClassName };
};

const blogPosts = [
  {
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    category: "Strategy",
    readTime: "7 min read",
    title: "Risk Management: The Secret to Tournament Longevity",
    description: "Master position sizing, daily loss limits, and risk-reward ratios to stay competitive across all three divisions. Learn from top performers who protect capital first.",
    href: "/faq#safety-compliance"
  },
  {
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    category: "Success Stories",
    readTime: "5 min read",
    title: "From Elevator to Raider: Sarah's 6-Month Journey",
    description: "How one beginner trader climbed through all three divisions using disciplined practice, community feedback, and relentless journaling.",
    href: "/divisions"
  },
  {
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    category: "Rewards",
    readTime: "6 min read",
    title: "Maximizing Your DAYRADE Reward Points System",
    description: "Unlock free tickets and exclusive perks by completing daily lessons, referring friends, and maintaining consistency. Your complete guide to the rewards program.",
    href: "/faq#rewards-prizes"
  },
  {
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    category: "Community",
    readTime: "4 min read",
    title: "Meet Your Hosts: Toro, Grizz, Jet & Orin",
    description: "Get to know the personalities behind the mic. From Toro's momentum calls to Grizz's risk wisdom, discover how each host brings unique edge to your trading education.",
    href: "/podcast"
  },
  {
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    category: "Psychology",
    readTime: "8 min read",
    title: "Tournament Psychology: Building Unshakeable Discipline",
    description: "The mental frameworks elite traders use to stay calm under pressure, stick to their plan, and avoid FOMO in live competitions.",
    href: "/learn"
  },
  {
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    category: "Education",
    readTime: "6 min read",
    title: "The Economic Calendar: Your Hidden Trading Edge",
    description: "Learn how CPI releases, FOMC decisions, and earnings calls create volatility windows. Timing your trades around catalysts separates good from great.",
    href: "/schedule"
  },
  {
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    category: "Analysis",
    readTime: "5 min read",
    title: "Crusader Division Breakdown: What Winners Do Differently",
    description: "Data analysis reveals the three habits that separate Crusader winners from the pack. Spoiler: it's not about being the most aggressive trader.",
    href: "/crusader"
  },
  {
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    category: "Tutorial",
    readTime: "9 min read",
    title: "Your First Elevator Tournament: Complete Setup Guide",
    description: "Step-by-step walkthrough from account creation to your first trade. Everything beginners need to know before entering the Elevator Division.",
    href: "/elevator"
  },
  {
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    category: "Market Insights",
    readTime: "7 min read",
    title: "Reading the Tape: Level 2 Data in Real Tournaments",
    description: "Advanced execution techniques for Raider competitors. How top traders use order flow and Time & Sales to nail precise entries.",
    href: "/raider"
  }
];

export function Blog68() {
  const carouselState = useCarousel();
  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Blog</p>
              <h2 className="heading-h2 mb-3 font-bold md:mb-4">
                Latest Insights and Stories
              </h2>
              <p className="text-medium">
                Expert analysis, success stories, and educational content from the DAYRADE arena
              </p>
            </div>
          </div>
          <div className="hidden md:flex">
            <Link href="/blog">
              <Button title="View all" variant="secondary" data-testid="button-view-all-blog">
                View All
              </Button>
            </Link>
          </div>
        </div>
        <Carousel
          setApi={carouselState.setApi}
          opts={{ loop: true, align: "start" }}
        >
          <CarouselContent className="ml-0">
            {blogPosts.map((post, index) => (
              <CarouselItem key={index} className="basis-[95%] pr-6 pl-0 sm:basis-[80%] md:basis-1/3 md:pr-8">
                <Card>
                  <a
                    href={post.href}
                    className="flex size-full flex-col items-center justify-start"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="aspect-[3/2] size-full object-cover"
                    />
                    <div className="px-5 py-6 md:p-6">
                      <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                        <Badge className="mr-4">{post.category}</Badge>
                        <p className="text-small inline font-semibold">
                          {post.readTime}
                        </p>
                      </div>
                      <h2 className="heading-h5 mb-2 font-bold">
                        {post.title}
                      </h2>
                      <p>
                        {post.description}
                      </p>
                      <Button
                        title="Read more"
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                        className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                        data-testid={`button-read-more-${index}`}
                      >
                        Read more
                      </Button>
                    </div>
                  </a>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex items-center justify-between">
            <div className="mt-8 flex w-full items-center justify-start">
              {blogPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={carouselState.handleDotClick(index)}
                  className={carouselState.dotClassName(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center justify-end gap-2 md:gap-4">
              <CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0" />
              <CarouselNext className="static right-0 top-0 size-12 -translate-y-0" />
            </div>
          </div>
        </Carousel>
        <div className="mt-10 flex md:hidden">
          <Link href="/blog" className="w-full">
            <Button title="View all" variant="secondary" className="w-full" data-testid="button-view-all-blog-mobile">
              View All
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
