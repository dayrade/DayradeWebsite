import React, { useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

interface AnimatedVariableHeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  parts: string[];
  widths: number[]; // Font width values: 50 (ultra condensed) to 150 (ultra expanded)
  weights?: number[]; // Optional font weights: 100-900
  className?: string;
  debug?: boolean; // Show width values for debugging
}

/**
 * AnimatedVariableHeading - Animated typography using Anybody variable font
 * 
 * Creates dramatic headers with scroll-triggered animations that transition
 * font width from uniform (100) to variable widths (50-150).
 * 
 * Features:
 * - Starts with all words at width: 100 (uniform)
 * - Animates to target widths as header scrolls into view
 * - Uses Anybody variable font's width axis (50-150)
 * - Supports custom weights (100-900)
 * - All text uppercase with proper letter spacing
 * 
 * @example
 * <AnimatedVariableHeading 
 *   level="h1"
 *   parts={["Trade Like a", "Pro.", "Compete Like an", "Athlete."]}
 *   widths={[50, 125, 50, 125]}
 *   weights={[700, 700, 700, 700]}
 * />
 */
export default function AnimatedVariableHeading({ 
  level, 
  parts,
  widths,
  weights = parts.map(() => 700), // Default to bold
  className = '',
  debug = false
}: AnimatedVariableHeadingProps) {
  const Tag = level;
  const headingClass = `heading-${level}`;
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, // Only animate once
    amount: 0.8 // Trigger only when 80% of element is visible
  });
  
  return (
    <Tag ref={ref} className={`${headingClass} ${className}`}>
      {parts.map((part, index) => {
        const targetWidth = widths[index] || 100;
        const targetWeight = weights[index] || 700;
        
        return (
          <React.Fragment key={index}>
            {index > 0 && ' '}
            <AnimatedWord
              text={part}
              targetWidth={targetWidth}
              targetWeight={targetWeight}
              isInView={isInView}
              delay={index * 0.8}
              debug={debug}
            />
          </React.Fragment>
        );
      })}
    </Tag>
  );
}

/**
 * AnimatedWord - Individual word with width/weight animation
 */
function AnimatedWord({ 
  text, 
  targetWidth, 
  targetWeight, 
  isInView,
  delay,
  debug = false
}: { 
  text: string; 
  targetWidth: number; 
  targetWeight: number; 
  isInView: boolean;
  delay: number;
  debug?: boolean;
}) {
  // Create spring animations for smooth transitions
  const width = useSpring(100, {
    stiffness: 10,
    damping: 15,
    mass: 3
  });
  
  const weight = useSpring(targetWeight, {
    stiffness: 10,
    damping: 15,
    mass: 3
  });
  
  // Trigger animation when in view
  React.useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        width.set(targetWidth);
        weight.set(targetWeight);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, targetWidth, targetWeight, delay, width, weight]);
  
  // Transform numeric values to CSS font-variation-settings string
  const fontVariationSettings = useTransform(
    [width, weight],
    ([w, wg]) => `'wdth' ${w}, 'wght' ${wg}`
  );
  
  return (
    <motion.span
      style={{
        display: 'inline-block',
        fontFamily: 'Anybody, sans-serif',
        fontVariationSettings,
        position: 'relative'
      }}
    >
      {text}
      {debug && (
        <motion.span
          style={{
            position: 'absolute',
            top: '-20px',
            left: '0',
            fontSize: '10px',
            color: '#00ff00',
            backgroundColor: 'rgba(0,0,0,0.8)',
            padding: '2px 4px',
            borderRadius: '2px',
            fontFamily: 'monospace'
          }}
        >
          {width.get().toFixed(0)}
        </motion.span>
      )}
    </motion.span>
  );
}

/**
 * Preset heading components for common DAYRADE headers
 */
export const DayradeAnimatedHeadings = {
  Hero: () => (
    <AnimatedVariableHeading
      level="h1"
      parts={["Trade Like a", "Pro.", "Compete Like an", "Athlete."]}
      widths={[50, 125, 50, 125]}
      weights={[700, 900, 700, 900]}
    />
  ),
  
  HowItWorks: () => (
    <AnimatedVariableHeading
      level="h2"
      parts={["Your Path to", "Trading", "Mastery"]}
      widths={[75, 100, 125]}
      weights={[600, 700, 900]}
    />
  ),
  
  Divisions: () => (
    <AnimatedVariableHeading
      level="h2"
      parts={["Three", "Divisions.", "One", "Arena."]}
      widths={[75, 100, 75, 125]}
      weights={[600, 700, 600, 900]}
    />
  ),
  
  WhyDayrade: () => (
    <AnimatedVariableHeading
      level="h2"
      parts={["Why Dayrade is", "Different"]}
      widths={[75, 125]}
      weights={[600, 900]}
    />
  ),
  
  MasterMoney: () => (
    <AnimatedVariableHeading
      level="h2"
      parts={["Master", "Money.", "Not Just", "Markets."]}
      widths={[75, 100, 75, 125]}
      weights={[600, 700, 600, 900]}
    />
  ),
  
  YourArena: () => (
    <AnimatedVariableHeading
      level="h2"
      parts={["Your Arena", "Awaits"]}
      widths={[75, 125]}
      weights={[600, 900]}
    />
  ),
};

