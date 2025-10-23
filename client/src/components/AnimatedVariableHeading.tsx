import React, { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface AnimatedVariableHeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  parts: string[];
  widths: number[]; // Font width values: 25-151 for Roboto Flex wdth axis
  weights?: number[]; // Optional font weights: 100-1000
  className?: string;
  debug?: boolean;
}

/**
 * AnimatedVariableHeading - Animated typography using Roboto Flex variable font
 * 
 * Uses font-variation-settings with "wdth" and "wght" axes directly.
 * Animates smoothly using Framer Motion's useMotionValue and useSpring.
 * 
 * Roboto Flex axes:
 * - wdth: 25-151 (width)
 * - wght: 100-1000 (weight)
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/font-variation-settings
 */
export default function AnimatedVariableHeading({ 
  level, 
  parts,
  widths,
  weights = parts.map(() => 700),
  className = '',
  debug = false
}: AnimatedVariableHeadingProps) {
  const Tag = level;
  const headingClass = `heading-${level}`;
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.3
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
              delay={index * 0.15}
              debug={debug}
            />
          </React.Fragment>
        );
      })}
    </Tag>
  );
}

/**
 * AnimatedWord - Individual word with width/weight animation using Framer Motion
 * 
 * Uses useMotionValue and useSpring for smooth, physics-based animations.
 * The motion values are transformed into font-variation-settings strings.
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
  // Motion values for smooth animation
  const wdth = useMotionValue(100);
  const wght = useMotionValue(400);
  
  // Spring animation for smooth, natural motion
  const wdthSpring = useSpring(wdth, {
    stiffness: 50,
    damping: 20,
    mass: 1
  });
  
  const wghtSpring = useSpring(wght, {
    stiffness: 50,
    damping: 20,
    mass: 1
  });
  
  // Transform motion values to font-variation-settings string
  const fontVariationSettings = useTransform(
    [wdthSpring, wghtSpring],
    ([w, wg]) => `"wdth" ${Math.round(w as number)}, "wght" ${Math.round(wg as number)}`
  );
  
  // Animate when in view
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        wdth.set(targetWidth);
        wght.set(targetWeight);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, targetWidth, targetWeight, delay, wdth, wght]);

  return (
    <motion.span
      style={{
        display: 'inline-block',
        fontFamily: '"Roboto Flex", sans-serif',
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
          {useTransform(
            [wdthSpring, wghtSpring],
            ([w, wg]) => `wdth:${Math.round(w as number)} wght:${Math.round(wg as number)}`
          )}
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
      widths={[75, 100, 150]}
      weights={[600, 700, 900]}
    />
  ),
  
  Divisions: () => (
    <AnimatedVariableHeading
      level="h2"
      parts={["Three", "Divisions.", "One", "Arena."]}
      widths={[75, 100, 75, 150]}
      weights={[600, 700, 600, 900]}
    />
  ),
  
  WhyDayrade: () => (
    <AnimatedVariableHeading
      level="h2"
      parts={["Why Dayrade is", "Different"]}
      widths={[75, 150]}
      weights={[600, 900]}
    />
  ),
  
  MasterMoney: () => (
    <AnimatedVariableHeading
      level="h2"
      parts={["Master", "Money.", "Not Just", "Markets."]}
      widths={[75, 100, 75, 150]}
      weights={[600, 700, 600, 900]}
    />
  ),
  
  YourArena: () => (
    <AnimatedVariableHeading
      level="h2"
      parts={["Your Arena", "Awaits"]}
      widths={[75, 150]}
      weights={[600, 900]}
    />
  ),
};

