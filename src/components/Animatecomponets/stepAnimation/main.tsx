import React from "react";
import { motion } from "framer-motion";
import AnimatedCircularProgress from "../CircleProgress/main";
import { useInView } from "react-intersection-observer";

interface StepProgressAnimationProps {
  stepNumber: number; // The step number to display in the circular progress
  firstContent: string; // Background color for the first div
  secondContent: string; // Background color for the second div
  lineEnable?: boolean;
  title:string
}

const StepProgressAnimation: React.FC<StepProgressAnimationProps> = ({
  stepNumber,
  firstContent,
  secondContent,
  lineEnable = true,
  title
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the element is visible
    triggerOnce: true, // Only trigger once
  });

  return (
    <div className="w-full flex flex-col md:flex-row justify-start gap-4 h-auto">
      <span className="w-full relative md:w-[13%] flex flex-col items-center">
        <AnimatedCircularProgress
          className="z-20  relative "
          text={stepNumber}
        />

        {/* Animated Lines */}
        <motion.span
          className="w-full xl:hidden  absolute z-10 top-3 h-1 bg-primary"
          initial={{ width: 0 }} // Start with width 0
          animate={{ width: inView ? "80%" : "0%" }} // Animate to full width when in view
          transition={{ duration: 1 }}
        />
        <motion.span
          className="w-full xl:hidden absolute z-10 top-10 h-1 bg-primary"
          initial={{ width: 0 }} // Start with width 0
          animate={{ width: inView ? "90%" : "0%" }} // Animate to full width when in view
          transition={{ duration: 1, delay: 0.2 }} // Delay for staggered effect
        />
        <motion.span
          className="w-full xl:hidden absolute z-10 top-16 h-1 bg-primary"
          initial={{ width: 0 }} // Start with width 0
          animate={{ width: inView ? "100%" : "0%" }} // Animate to full width when in view
          transition={{ duration: 1, delay: 0.4 }} // Delay for staggered effect
        />
          <span ref={ref} className="h-full flex justify-center w-full">
            {lineEnable?   <motion.div
              className="w-1 h-auto bg-primary"
              initial={{ opacity: 0, height: 0 }} // Start with opacity 0 and height 0
              animate={{ opacity: inView ? 1 : 0, height: inView ? "auto" : 0 }} // Animate based on inView
              transition={{ duration: 1 }}
            ></motion.div>:null}
         
          </span>
      </span>
      <div className="w-full md:w-[80%] flex flex-col gap-2 md:flex-row">
        <div className="w-full md:w-[70%] text-white text-left flex flex-col gap-4 md:gap-10 justify-start p-4 md:p-20">
          <p className="text-3xl md:text-5xl">{title}</p>
          <span>{firstContent}</span>
        </div>
        <div className="w-full md:w-[30%] p-4 md:p-20 text-white">
          {secondContent}
        </div>
      </div>
    </div>
  );
};

export default StepProgressAnimation;
