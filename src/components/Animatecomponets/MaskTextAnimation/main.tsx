import React from 'react';
import {  motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define the type for the props if you have any. 
// For this example, I'm assuming there are no props, but you can adjust as needed.
interface MaskTextProps {
  phrases: string[]; // Assuming phrases is an array of strings
}

export const MaskText: React.FC<MaskTextProps> = ({ phrases }) => {
  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0",
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i }
    })
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div ref={ref} style={{ fontSize: "5vw" }}>
      {
        phrases.map((phrase, index) => {
          return (
            <div key={index}  className="m-0 font-[700]">
              <motion.p
                custom={index}
                variants={animation}
                initial="initial"
                animate={inView ? "enter" : ""}
              >
                {phrase}
              </motion.p>
            </div>
          );
        })
      }
    </div>
  );
};