import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // New state to track if animation has occurred

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      // Trigger animation only once
      if (isVisible && !hasAnimated) {
        setIsInView(true);
        setHasAnimated(true); // Set this to true to prevent further animations
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [hasAnimated]); // Add hasAnimated to the dependency array

  return (
    <motion.div
      ref={ref}
      initial={{ x: 1300, opacity: 0 }} // Start from the right and invisible
      animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate when in view
      transition={{ duration: 0.5 }} // Animation duration
      className=""
    >
      {children}
    </motion.div>
  );
};

const CardList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      className="flex gap-10  px-10 flex-col"
      initial="hidden"
      variants={{
        hidden: { transition: { staggerChildren: 0.7 } },
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
  
      {children}
    </motion.div>
  );
};

export default CardList;