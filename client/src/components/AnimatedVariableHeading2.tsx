import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedVariableHeadingProps {
  children: React.ReactNode;
  className?: string;
  /** Target width values for each word (25-151 for Roboto Flex) */
  widths?: number[];
  /** Animation duration in seconds */
  duration?: number;
  /** Delay before animation starts in seconds */
  delay?: number;
}

/**
 * AnimatedVariableHeading Component
 * 
 * Uses font-stretch property (higher-level CSS) instead of font-variation-settings
 * for better browser compatibility and simpler animation.
 * 
 * Font-stretch maps to the wdth axis automatically when font-stretch descriptor
 * is properly declared in @font-face.
 * 
 * Roboto Flex width range: 25-151 (25% to 151%)
 */
export default function AnimatedVariableHeading({
  children,
  className = '',
  widths = [],
  duration = 1.2,
  delay = 0.2,
}: AnimatedVariableHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Split text into words
  const text = typeof children === 'string' ? children : String(children);
  const words = text.split(' ');

  return (
    <h1 ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25em' }}>
      {words.map((word, index) => {
        const targetWidth = widths[index] || 100;
        
        return (
          <motion.span
            key={index}
            style={{
              display: 'inline-block',
              fontFamily: '"Roboto Flex", sans-serif',
              fontStretch: '100%', // Start at normal width
            }}
            animate={
              isInView
                ? {
                    fontStretch: `${targetWidth}%`,
                  }
                : {}
            }
            transition={{
              duration,
              delay: delay + index * 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </h1>
  );
}

