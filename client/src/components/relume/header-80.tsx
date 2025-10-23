"use client";

import { Button } from "@/components/ui/button";
import { DayradeCard } from "@/components/ui/dayrade-card";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const useRelume = () => {
  const transformRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: transformRef });
  const animatedScrollYProgress = useSpring(scrollYProgress, { bounce: 0 });
  const yFirst = useTransform(
    animatedScrollYProgress,
    [0, 1],
    ["0vh", "-87.5vh"],
  );
  const ySecond = useTransform(
    animatedScrollYProgress,
    [0, 1],
    ["0vh", "-39.6vh"],
  );

  return {
    transformRef,
    yFirst,
    ySecond,
  };
};

export function Header80() {
  const useActive = useRelume();

  const handleDashboard = () => {
    console.log("Dashboard clicked");
  };

  const handleFollow = () => {
    console.log("Follow clicked");
  };

  return (
    <section
      ref={useActive.transformRef}
      className="relative h-[150vh] px-[5%] md:h-[300vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute top-0 right-auto bottom-0 left-0 z-10">
          <motion.div
            className="flex flex-col gap-[26vw] pt-[70vh]"
            style={{ y: useActive.yFirst }}
          >
            {/* Large foreground card - scale 1.0 */}
            <div className="relative w-[20vw]" style={{ transformOrigin: "top left" }}>
              <DayradeCard
                avatarImage="/assets/toro-profile.png"
                avatarVideo="/assets/toro-profile-video.mp4"
                username="Toro"
                bio="Badass trader focused on Cash money!"
                rank={7}
                pnl={67357}
                followers={312}
                following={312}
                views={312}
                verificationIcon="/assets/icons/Verification_Icon_Container.svg"
                rankIcon="/assets/icons/Rank.svg"
                pnlIcon="/assets/icons/PNL.svg"
                followersIcon="/assets/icons/Followers.svg"
                followingIcon="/assets/icons/Following.svg"
                eyeIcon="/assets/icons/Eye.svg"
                onDashboardClick={handleDashboard}
                onFollowClick={handleFollow}
              />
            </div>
            {/* Large foreground card - scale 1.0 */}
            <div className="relative w-[20vw] left-[52vw] mt-[-46vw] lg:left-[58vw]" style={{ transformOrigin: "top left" }}>
              <DayradeCard
                avatarImage="/assets/toro-profile.png"
                avatarVideo="/assets/toro-profile-video.mp4"
                username="Toro"
                bio="Badass trader focused on Cash money!"
                rank={7}
                pnl={67357}
                followers={312}
                following={312}
                views={312}
                verificationIcon="/assets/icons/Verification_Icon_Container.svg"
                rankIcon="/assets/icons/Rank.svg"
                pnlIcon="/assets/icons/PNL.svg"
                followersIcon="/assets/icons/Followers.svg"
                followingIcon="/assets/icons/Following.svg"
                eyeIcon="/assets/icons/Eye.svg"
                onDashboardClick={handleDashboard}
                onFollowClick={handleFollow}
              />
            </div>
            {/* Medium card - scale 0.75 */}
            <div className="relative w-[20vw] left-[4vw] mt-[-5vw]" style={{ transform: "scale(0.75)", transformOrigin: "top left" }}>
              <DayradeCard
                avatarImage="/assets/toro-profile.png"
                avatarVideo="/assets/toro-profile-video.mp4"
                username="Toro"
                bio="Badass trader focused on Cash money!"
                rank={7}
                pnl={67357}
                followers={312}
                following={312}
                views={312}
                verificationIcon="/assets/icons/Verification_Icon_Container.svg"
                rankIcon="/assets/icons/Rank.svg"
                pnlIcon="/assets/icons/PNL.svg"
                followersIcon="/assets/icons/Followers.svg"
                followingIcon="/assets/icons/Following.svg"
                eyeIcon="/assets/icons/Eye.svg"
                onDashboardClick={handleDashboard}
                onFollowClick={handleFollow}
              />
            </div>
            {/* Small card - scale 0.6 */}
            <div className="relative w-[20vw] left-[64vw] mt-[-45vw]" style={{ transform: "scale(0.6)", transformOrigin: "top left" }}>
              <DayradeCard
                avatarImage="/assets/toro-profile.png"
                avatarVideo="/assets/toro-profile-video.mp4"
                username="Toro"
                bio="Badass trader focused on Cash money!"
                rank={7}
                pnl={67357}
                followers={312}
                following={312}
                views={312}
                verificationIcon="/assets/icons/Verification_Icon_Container.svg"
                rankIcon="/assets/icons/Rank.svg"
                pnlIcon="/assets/icons/PNL.svg"
                followersIcon="/assets/icons/Followers.svg"
                followingIcon="/assets/icons/Following.svg"
                eyeIcon="/assets/icons/Eye.svg"
                onDashboardClick={handleDashboard}
                onFollowClick={handleFollow}
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute top-0 right-0 bottom-0 left-auto z-0"
          style={{ y: useActive.ySecond }}
        >
          <div className="flex flex-col gap-[26vw] pt-[70vh]">
            {/* Medium background card - scale 0.75 */}
            <div className="relative w-[20vw]" style={{ transform: "scale(0.75)", transformOrigin: "top right" }}>
              <DayradeCard
                avatarImage="/assets/toro-profile.png"
                avatarVideo="/assets/toro-profile-video.mp4"
                username="Toro"
                bio="Badass trader focused on Cash money!"
                rank={7}
                pnl={67357}
                followers={312}
                following={312}
                views={312}
                verificationIcon="/assets/icons/Verification_Icon_Container.svg"
                rankIcon="/assets/icons/Rank.svg"
                pnlIcon="/assets/icons/PNL.svg"
                followersIcon="/assets/icons/Followers.svg"
                followingIcon="/assets/icons/Following.svg"
                eyeIcon="/assets/icons/Eye.svg"
                onDashboardClick={handleDashboard}
                onFollowClick={handleFollow}
              />
            </div>
            {/* Small background card - scale 0.6 */}
            <div className="relative w-[20vw] right-[50vw] mt-[-44vw] lg:right-[54vw]" style={{ transform: "scale(0.6)", transformOrigin: "top right" }}>
              <DayradeCard
                avatarImage="/assets/toro-profile.png"
                avatarVideo="/assets/toro-profile-video.mp4"
                username="Toro"
                bio="Badass trader focused on Cash money!"
                rank={7}
                pnl={67357}
                followers={312}
                following={312}
                views={312}
                verificationIcon="/assets/icons/Verification_Icon_Container.svg"
                rankIcon="/assets/icons/Rank.svg"
                pnlIcon="/assets/icons/PNL.svg"
                followersIcon="/assets/icons/Followers.svg"
                followingIcon="/assets/icons/Following.svg"
                eyeIcon="/assets/icons/Eye.svg"
                onDashboardClick={handleDashboard}
                onFollowClick={handleFollow}
              />
            </div>
          </div>
        </motion.div>
        <div className="relative container flex h-full max-w-lg items-center pt-16 pb-24 text-center md:pt-24 lg:py-28">
          <div>
            <h1 className="heading-h1 mb-5 font-bold md:mb-6">
              Unleash your trading spirit animal
            </h1>
            <p className="text-medium relative z-20">
              Your inner trader has a wild heart. Discover the animal that
              embodies your market instincts and strategic prowess.
            </p>
            <div className="relative z-20 mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Generate" data-testid="button-generate">
                Generate
              </Button>
              <Button title="Explore" variant="secondary" data-testid="button-explore">
                Explore
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 mt-[35rem] md:mt-[100vh]" />
      </div>
    </section>
  );
}
