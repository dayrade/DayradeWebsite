import { useRef } from "react";
import { Button } from "./button";

export interface DayradeCardProps {
  // Avatar/Profile
  avatarImage: string;
  avatarVideo?: string;
  username: string;
  bio: string;
  
  // Stats
  rank: number;
  pnl: number;
  followers: number;
  following: number;
  views: number;
  
  // Icons
  verificationIcon: string;
  rankIcon: string;
  pnlIcon: string;
  followersIcon: string;
  followingIcon: string;
  eyeIcon: string;
  
  // Optional customization
  className?: string;
  onDashboardClick?: () => void;
  onFollowClick?: () => void;
}

export const DayradeCard = ({
  avatarImage,
  avatarVideo,
  username,
  bio,
  rank,
  pnl,
  followers,
  following,
  views,
  verificationIcon,
  rankIcon,
  pnlIcon,
  followersIcon,
  followingIcon,
  eyeIcon,
  className = "",
  onDashboardClick,
  onFollowClick,
}: DayradeCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const formatPnl = (value: number) => {
    const sign = value >= 0 ? "+" : "";
    return `${sign}$${value.toLocaleString()}`;
  };

  return (
    <div 
      className={`w-full max-w-sm mx-auto bg-card border-[6px] border-border rounded-2xl overflow-hidden shadow-xl transition-all duration-300 group hover:shadow-2xl cursor-pointer relative ${className}`}
      data-testid={`card-player-${username.toLowerCase()}`}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      {/* Avatar Section - Full height but cropped to square initially */}
      <div 
        className="absolute inset-0 transition-all duration-300 pointer-events-none"
      >
        {/* Static Image - Full height */}
        <img
          src={avatarImage}
          alt={`${username} avatar`}
          className="absolute top-0 left-0 w-full h-full object-cover object-top transition-opacity duration-300 group-hover:opacity-0"
        />
        
        {/* Video on Hover - Full height */}
        {avatarVideo && (
          <video
            ref={videoRef}
            src={avatarVideo}
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}
        
        {/* Gradient Overlay (visible on hover) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      </div>
      
      {/* Card Content - Always visible at bottom with solid background */}
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4 z-20 bg-card group-hover:bg-transparent transition-colors duration-300">
        {/* Name and Bio */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold text-foreground" data-testid={`text-username-${username.toLowerCase()}`}>
              {username}
            </h3>
            <img src={verificationIcon} alt="Verified" className="w-4 h-4" />
          </div>
          <p className="text-sm text-foreground/80" data-testid={`text-bio-${username.toLowerCase()}`}>
            {bio}
          </p>
        </div>

        {/* Stats Row - Hidden on hover */}
        <div className="flex items-center justify-between text-sm group-hover:hidden transition-all duration-300">
          <div className="flex items-center gap-2">
            <img src={rankIcon} alt="Rank" className="w-4 h-4" />
            <span className="text-foreground/70" data-testid={`text-rank-${username.toLowerCase()}`}>#{rank}</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={pnlIcon} alt="PNL" className="w-4 h-4" />
            <span 
              className={pnl >= 0 ? "text-success font-semibold" : "text-destructive font-semibold"}
              data-testid={`text-pnl-${username.toLowerCase()}`}
            >
              {formatPnl(pnl)}
            </span>
          </div>
        </div>

        {/* Social Stats - Hidden on hover */}
        <div className="flex items-center justify-between text-xs text-foreground/60 group-hover:hidden transition-all duration-300">
          <div className="flex items-center gap-1.5">
            <img src={followersIcon} alt="Followers" className="w-3.5 h-3.5" />
            <span data-testid={`text-followers-${username.toLowerCase()}`}>{followers.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <img src={followingIcon} alt="Following" className="w-3.5 h-3.5" />
            <span data-testid={`text-following-${username.toLowerCase()}`}>{following.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <img src={eyeIcon} alt="Views" className="w-3.5 h-3.5" />
            <span data-testid={`text-views-${username.toLowerCase()}`}>{views.toLocaleString()}</span>
          </div>
        </div>

        {/* Action Buttons - Only visible on hover */}
        <div className="hidden group-hover:flex gap-3 pt-2 transition-all duration-300">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={onDashboardClick}
            data-testid={`button-dashboard-${username.toLowerCase()}`}
          >
            Dashboard
          </Button>
          <Button 
            className="flex-1 bg-primary hover:bg-primary/90"
            onClick={onFollowClick}
            data-testid={`button-follow-${username.toLowerCase()}`}
          >
            Follow +
          </Button>
        </div>
      </div>
    </div>
  );
};
