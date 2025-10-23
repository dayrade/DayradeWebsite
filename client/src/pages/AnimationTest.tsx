import React, { useState } from "react";
import { Button } from "@/components/ui/button";

function AnimatedWord({
  text,
  targetWidth,
  targetWeight,
  isAnimating,
  delay,
  debug = false
}: {
  text: string;
  targetWidth: number;
  targetWeight: number;
  isAnimating: boolean;
  delay: number;
  debug?: boolean;
}) {
  const [currentWidth, setCurrentWidth] = useState(100);
  
  React.useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setCurrentWidth(targetWidth);
      }, delay * 1000);
      return () => clearTimeout(timer);
    } else {
      setCurrentWidth(100);
    }
  }, [isAnimating, targetWidth, delay]);
  
  return (
    <span className="relative inline-block">
      {debug && (
        <span className="absolute -top-8 left-0 text-sm font-mono text-green-500 bg-black px-2 py-1 rounded z-10">
          {currentWidth}
        </span>
      )}
      <span
        className="inline-block"
        style={{
          fontFamily: "'Roboto Flex', sans-serif",
          fontVariationSettings: `'wdth' ${currentWidth}, 'wght' ${targetWeight}`,
          transition: 'font-variation-settings 3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {text}
      </span>
    </span>
  );
}

export default function AnimationTest() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showDebug, setShowDebug] = useState(true);

  const handleAnimate = () => {
    // Reset first
    setIsAnimating(false);
    setTimeout(() => {
      setIsAnimating(true);
    }, 100);
  };

  const handleReset = () => {
    setIsAnimating(false);
  };

  const parts = ["Your Path to", "Trading", "Mastery"];
  const widths = [50, 100, 150];
  const weights = [600, 700, 900];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-12">
        {/* Heading */}
        <h1 className="heading-h1 text-center">
          {parts.map((part, index) => (
            <React.Fragment key={index}>
              {index > 0 && " "}
              <AnimatedWord
                text={part}
                targetWidth={widths[index]}
                targetWeight={weights[index]}
                isAnimating={isAnimating}
                delay={index * 0.8}
                debug={showDebug}
              />
            </React.Fragment>
          ))}
        </h1>

        {/* Instructions */}
        <div className="text-center space-y-4">
          <p className="text-lg text-muted-foreground">
            Click "Animate" to watch the heading transform from uniform width (100) to dramatic variations:
          </p>
          <ul className="text-left inline-block space-y-2">
            <li><strong>"Your Path to"</strong> → Width 50 (ultra condensed)</li>
            <li><strong>"Trading"</strong> → Width 100 (normal)</li>
            <li><strong>"Mastery"</strong> → Width 150 (ultra expanded)</li>
          </ul>
        </div>

        {/* Controls */}
        <div className="flex gap-4 justify-center items-center">
          <Button 
            onClick={handleAnimate}
            size="lg"
            variant="default"
          >
            Animate
          </Button>
          <Button 
            onClick={handleReset}
            size="lg"
            variant="outline"
          >
            Reset
          </Button>
          <Button 
            onClick={() => setShowDebug(!showDebug)}
            size="lg"
            variant="secondary"
          >
            {showDebug ? "Hide" : "Show"} Debug
          </Button>
        </div>

        {/* Status */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Status: {isAnimating ? "🎬 Animating..." : "⏸️ Ready"}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Animation duration: 3 seconds per word (staggered by 0.8s)
          </p>
        </div>
      </div>
    </div>
  );
}

