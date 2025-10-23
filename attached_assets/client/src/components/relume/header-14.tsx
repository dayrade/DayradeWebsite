"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { VideoIframe } from "@/components/ui/video-iframe";
import { FaCirclePlay } from "react-icons/fa6";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Header14() {
  const formState = useForm();
  return (
    <section className="flex h-svh min-h-svh flex-col">
      <div className="relative flex-1">
        <Dialog>
          <DialogTrigger className="absolute inset-0 flex size-full items-center justify-center object-cover">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
              alt="Relume placeholder image"
              className="size-full object-cover"
            />
            <span className="absolute inset-0 z-10 bg-neutral-darkest/50" />
            <FaCirclePlay className="absolute z-20 size-16 text-white" />
          </DialogTrigger>
          <DialogContent>
            <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
          </DialogContent>
        </Dialog>
      </div>
      <div className="px-[5%]">
        <div className="container">
          <div className="grid grid-rows-1 items-start gap-y-5 py-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8 md:py-18 lg:gap-x-20 lg:gap-y-16 lg:py-20">
            <h1 className="heading-h1 font-bold">
              The Dayrade Debrief: Insights & Analysis
            </h1>
            <div>
              <p className="text-medium">
                Dive deep into market insights and trading wisdom. Uncover the
                stories behind the numbers.
              </p>
              <div className="mt-6 max-w-sm md:mt-8">
                <form
                  className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4"
                  onSubmit={formState.handleSubmit}
                >
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formState.email}
                    onChange={formState.handleSetEmail}
                  />
                  <Button title="Sign up">Sign up</Button>
                </form>
                <p className="text-tiny">
                  By clicking Sign Up you're confirming that you agree with our
                  Terms and Conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
