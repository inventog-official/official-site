import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, MotionStyle } from "framer-motion";

interface ScrollGapAnimationProps {
  children?: ReactNode;
  className?: string;
  innerClassName?: string;
  rightToLeftEnable?: boolean;
  scrollConfig?: {
    topRange?: number[];
    bottomRange?: number[];
    rightRange?: number[];
    leftRange?: number[];
  };
}

const ScrollGapAnimation: React.FC<ScrollGapAnimationProps> = ({
  children,
  className = "",
  innerClassName = "",
  scrollConfig = {},
  rightToLeftEnable = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress, scrollXProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Configurable ranges with defaults
  const topRange = scrollConfig.topRange || [0, 0.5, 1];
  const bottomRange = scrollConfig.bottomRange || [0, 0.5, 1];
  const leftRange = scrollConfig.leftRange || [0, 0.5, 1];
  const rightRange = scrollConfig.rightRange || [1, 0.5, 0];

  // Transforms for margin top and bottom
  const marginTop = useTransform(scrollYProgress, topRange, [
    "0%",
    "50%",
    "60%",
  ]);

  const marginBottom = useTransform(scrollYProgress, bottomRange, [
    "60%",
    "50%",
    "0%",
  ]);
  const marginLeft = useTransform(scrollXProgress, leftRange, [
    "0%",
    "50%",
    "100%",
  ]);

  const marginRight = useTransform(scrollXProgress, rightRange, [
    "100%",
    "50%",
    "0%",
  ]);

  // Combine styles
  const animationStyles: MotionStyle = rightToLeftEnable
    ? {
        marginLeft: marginLeft,
        marginRight: marginRight,
      }
    : {
        marginTop: marginTop,
        marginBottom: marginBottom,
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
