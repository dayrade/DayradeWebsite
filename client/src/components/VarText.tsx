import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface VarTextProps {
  html: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  animate?: boolean;
}

interface ParsedSegment {
  text: string;
  weight: number;
  italic: boolean;
}

function parseHtmlToSegments(html: string): ParsedSegment[] {
  const segments: ParsedSegment[] = [];
  
  const spanRegex = /<span class=['"]([^'"]+)['"]>(.*?)<\/span>/g;
  let lastIndex = 0;
  let match;
  
  while ((match = spanRegex.exec(html)) !== null) {
    if (match.index > lastIndex) {
      const plainText = html.slice(lastIndex, match.index).trim();
      if (plainText) {
        segments.push({
          text: plainText,
          weight: 400,
          italic: false
        });
      }
    }
    
    const classes = match[1];
    const text = match[2];
    
    const weight = classes.match(/weight-(\d+)/)?.[1];
    const italic = classes.includes('italic');
    
    segments.push({
      text,
      weight: weight ? parseInt(weight) : 400,
      italic
    });
    
    lastIndex = spanRegex.lastIndex;
  }
  
  if (lastIndex < html.length) {
    const plainText = html.slice(lastIndex).trim();
    if (plainText) {
      segments.push({
        text: plainText,
        weight: 400,
        italic: false
      });
    }
  }
  
  return segments;
}

export default function VarText({ 
  html, 
  className = '', 
  as = 'span',
  animate = false
}: VarTextProps) {
  const Tag = as;
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.5
  });
  
  const cleanedHtml = html
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/HTML\s*/gi, '')
    .trim();
  
  const segments = parseHtmlToSegments(cleanedHtml);
  
  if (!animate || as === 'span' || as === 'div' || as === 'p') {
    return (
      <Tag className={className}>
        {segments.map((segment, index) => (
          <span
            key={index}
            style={{
              fontFamily: '"Roboto Flex", sans-serif',
              fontVariationSettings: `"wght" ${segment.weight}, "ital" ${segment.italic ? 1 : 0}`,
              display: 'inline'
            }}
          >
            {segment.text}
            {index < segments.length - 1 && ' '}
          </span>
        ))}
      </Tag>
    );
  }
  
  return (
    <Tag ref={ref} className={className}>
      {segments.map((segment, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          style={{
            fontFamily: '"Roboto Flex", sans-serif',
            fontVariationSettings: `"wght" ${segment.weight}, "ital" ${segment.italic ? 1 : 0}`,
            display: 'inline-block'
          }}
        >
          {segment.text}
          {index < segments.length - 1 && ' '}
        </motion.span>
      ))}
    </Tag>
  );
}

export function VarH1({ html, className = '', animate = true }: Omit<VarTextProps, 'as'>) {
  return <VarText html={html} className={`heading-h1 ${className}`} as="h1" animate={animate} />;
}

export function VarH2({ html, className = '', animate = true }: Omit<VarTextProps, 'as'>) {
  return <VarText html={html} className={`heading-h2 ${className}`} as="h2" animate={animate} />;
}

export function VarH3({ html, className = '', animate = true }: Omit<VarTextProps, 'as'>) {
  return <VarText html={html} className={`heading-h3 ${className}`} as="h3" animate={animate} />;
}

export function VarH4({ html, className = '', animate = true }: Omit<VarTextProps, 'as'>) {
  return <VarText html={html} className={`heading-h4 ${className}`} as="h4" animate={animate} />;
}

export function VarH5({ html, className = '', animate = true }: Omit<VarTextProps, 'as'>) {
  return <VarText html={html} className={`heading-h5 ${className}`} as="h5" animate={animate} />;
}

export function VarH6({ html, className = '', animate = true }: Omit<VarTextProps, 'as'>) {
  return <VarText html={html} className={`heading-h6 ${className}`} as="h6" animate={animate} />;
}

export function VarP({ html, className = '', animate = false }: Omit<VarTextProps, 'as'>) {
  return <VarText html={html} className={className} as="p" animate={animate} />;
}
