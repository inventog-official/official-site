import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { wholePageContent } from "../../../utils/pageContent";
import SlideUp from "../SlideUpTextAnimation/main";

const AnimatedText: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only trigger once
  });

  const [bgColorVisible, setBgColorVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      // Delay the background color animation until the text is fully visible
      const timer = setTimeout(() => {
        setBgColorVisible(true);
      }, 1000); // Adjust the delay as needed

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <div className={`relative ${className} flex   w-full`}>
      <SlideUp
        className={` rounded-full  animate-slideIn w-full px-4 z-10 text-white flex items-center justify-center`}
        text={text}
      />

      <span className="absolute">
        <motion.span
          ref={ref}
          className={` rounded-full px-4 text-white flex items-center justify-center`}
          initial={{ opacity: 0, width: 0 }} // Start with text invisible
          animate={{
            opacity: 1, // Fade in the text
            backgroundColor: bgColorVisible
              ? wholePageContent.themeColor.primary
              : "transparent", // Change background color
            width: bgColorVisible ? "100%" : 0, // Animate width to full when background color is visible
          }}
          transition={{ duration: 1 }} // Duration of the animation
          style={{
            transformOrigin: "left", // Set transform origin to the left
            // height: '100%', // Ensure it covers the full height
          }}
        >
          <span className="text-transparent">{text}</span>
        </motion.span>
      </span>
    </div>
  );
};

export default AnimatedText;
