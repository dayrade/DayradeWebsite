import React from "react";

interface VideoIframeProps {
  video: string;
  className?: string;
}

export function VideoIframe({ video, className = "" }: VideoIframeProps) {
  return (
    <div className={`relative aspect-video ${className}`}>
      <iframe
        src={video}
        className="absolute inset-0 size-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video"
      />
    </div>
  );
}

