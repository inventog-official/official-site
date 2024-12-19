import React, { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, MotionStyle } from 'framer-motion';

interface ScrollX_AxisElementPositionAnimationProps {
  children?: ReactNode;
  className?: string;
  innerClassName?: string;
  scrollConfig?: {
    leftRange?: number[];
    rightRange?: number[];
  };
}

const ScrollX_AxisElementPositionAnimation: React.FC<ScrollX_AxisElementPositionAnimationProps> = ({ 
  children, 
  className = '',
  innerClassName = '',
  scrollConfig = {} 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollXProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Configurable ranges with defaults
  const leftRange = scrollConfig.leftRange || [0, 0.5, 1];
  const rightRange = scrollConfig.rightRange || [0, 0.5, 1];

  // Transforms for margin left and right
  const marginLeft = useTransform(
    scrollXProgress, 
    leftRange, 
    ['100%', '50%', '0%']
  );

  const marginRight = useTransform(
    scrollXProgress, 
    rightRange, 
    ['0%', '50%', '100%']
  );

  // Combine styles
  const animationStyles: MotionStyle = {
    marginLeft: marginLeft,
    marginRight: marginRight
  };

  return (
    <div ref={containerRef} className={className}>
      <motion.div 
        style={animationStyles}
        className={`flex bg-black ${innerClassName}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollX_AxisElementPositionAnimation;