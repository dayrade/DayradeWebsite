import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface AnimatedVariableHeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  parts: string[];
  widths: number[];
  weights?: number[];
  italics?: number[];
  fontSize?: string;
  lineHeight?: string;
  className?: string;
  debug?: boolean;
}

export default function AnimatedVariableHeading({ 
  level, 
  parts,
  widths,
  weights = parts.map(() => 700),
  italics = parts.map(() => 0),
  fontSize,
  lineHeight,
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
  
  const combinedClassName = `${headingClass} ${className}`;
  const style: React.CSSProperties = {};
  if (fontSize) style.fontSize = fontSize;
  if (lineHeight) style.lineHeight = lineHeight;
  
  return (
    <Tag ref={ref} className={combinedClassName} style={style}>
      {parts.map((part, index) => {
        const targetWidth = widths[index] || 100;
        const targetWeight = weights[index] || 700;
        const targetItalic = italics[index] || 0;
        
        return (
          <span key={index}>
            {index > 0 && ' '}
            <AnimatedWord
              text={part}
              targetWidth={targetWidth}
              targetWeight={targetWeight}
              targetItalic={targetItalic}
              isInView={isInView}
              delay={index * 0.15}
              debug={debug}
            />
          </span>
        );
      })}
    </Tag>
  );
}

function AnimatedWord({ 
  text, 
  targetWidth, 
  targetWeight, 
  targetItalic,
  isInView,
  delay,
  debug = false
}: { 
  text: string; 
  targetWidth: number; 
  targetWeight: number; 
  targetItalic: number;
  isInView: boolean;
  delay: number;
  debug?: boolean;
}) {
  const wdth = useMotionValue(100);
  const wght = useMotionValue(400);
  const ital = useMotionValue(0);
  
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
  
  const italSpring = useSpring(ital, {
    stiffness: 50,
    damping: 20,
    mass: 1
  });
  
  const fontVariationSettings = useTransform(
    [wdthSpring, wghtSpring, italSpring],
    ([w, wg, it]) => `"wdth" ${Math.round(w as number)}, "wght" ${Math.round(wg as number)}, "ital" ${(it as number).toFixed(2)}`
  );
  
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        wdth.set(targetWidth);
        wght.set(targetWeight);
        ital.set(targetItalic);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, targetWidth, targetWeight, targetItalic, delay, wdth, wght, ital]);

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
            [wdthSpring, wghtSpring, italSpring],
            ([w, wg, it]) => `wdth:${Math.round(w as number)} wght:${Math.round(wg as number)} ital:${(it as number).toFixed(1)}`
          )}
        </motion.span>
      )}
    </motion.span>
  );
}

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
