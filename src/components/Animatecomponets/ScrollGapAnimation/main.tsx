import React, { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, MotionStyle } from 'framer-motion';

interface ScrollGapAnimationProps {
  children?: ReactNode;
  className?: string;
  innerClassName?: string;
  scrollConfig?: {
    topRange?: number[];
    bottomRange?: number[];
  };
}

const ScrollGapAnimation: React.FC<ScrollGapAnimationProps> = ({ 
  children, 
  className = '',
  innerClassName = '',
  scrollConfig = {} 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Configurable ranges with defaults
  const topRange = scrollConfig.topRange || [0, 0.5, 1];
  const bottomRange = scrollConfig.bottomRange || [0, 0.5, 1];

  // Transforms for margin top and bottom
  const marginTop = useTransform(
    scrollYProgress, 
    topRange, 
    ['0%', '50%', '60%']
  );

  const marginBottom = useTransform(
    scrollYProgress, 
    bottomRange, 
    ['60%', '50%', '0%']
  );

  // Combine styles
  const animationStyles: MotionStyle = {
    marginTop: marginTop,
    marginBottom: marginBottom
  };

  return (
    <div ref={containerRef} className={className}>
      <motion.div 
        style={animationStyles}
        className={`flex  bg-black ${innerClassName}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollGapAnimation;