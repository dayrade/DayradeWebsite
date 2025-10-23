import { DayradeCard } from "./DayradeCard";

// Import your assets
import toroProfileImage from "../assets/toro-profile.png";
import toroProfileVideo from "../assets/toro-profile-video.mp4";
import VerificationIcon from "../assets/icons/Verification_Icon_Container.svg";
import RankIcon from "../assets/icons/Rank.svg";
import PNLIcon from "../assets/icons/PNL.svg";
import FollowersIcon from "../assets/icons/Followers.svg";
import FollowingIcon from "../assets/icons/Following.svg";
import EyeIcon from "../assets/icons/Eye.svg";

export const DayradeCardDemo = () => {
  const handleDashboard = () => {
    console.log("Dashboard clicked");
  };

  const handleFollow = () => {
    console.log("Follow clicked");
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Dayrade Card Component</h1>
          <p className="text-muted-foreground">
            Hover over the card to see the video and action buttons
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Example 1: Default */}
          <DayradeCard
            avatarImage={toroProfileImage}
            avatarVideo={toroProfileVideo}
            username="Toro"
            bio="Badass trader focused on Cash money!"
            rank={7}
            pnl={67357}
            followers={312}
            following={312}
            views={312}
            verificationIcon={VerificationIcon}
            rankIcon={RankIcon}
            pnlIcon={PNLIcon}
            followersIcon={FollowersIcon}
            followingIcon={FollowingIcon}
            eyeIcon={EyeIcon}
            onDashboardClick={handleDashboard}
            onFollowClick={handleFollow}
          />

          {/* Example 2: Custom Stats */}
          <DayradeCard
            avatarImage={toroProfileImage}
            avatarVideo={toroProfileVideo}
            username="Apex Trader"
            bio="Momentum trading specialist with aggressive strategy"
            rank={1}
            pnl={-12543}
            followers={1523}
            following={89}
            views={45231}
            verificationIcon={VerificationIcon}
            rankIcon={RankIcon}
            pnlIcon={PNLIcon}
            followersIcon={FollowersIcon}
            followingIcon={FollowingIcon}
            eyeIcon={EyeIcon}
            onDashboardClick={handleDashboard}
            onFollowClick={handleFollow}
          />
        </div>
      </div>
    </div>
  );
};
