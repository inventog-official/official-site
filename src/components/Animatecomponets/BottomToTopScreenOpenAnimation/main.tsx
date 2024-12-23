import React, { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface BottomToTopScreenOpenAnimationProps {
  imageUrl?: string;
  className?: string;
  openScreenEnable?: boolean;
  backgroundColor?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const BottomToTopScreenOpenAnimation: React.FC<
  BottomToTopScreenOpenAnimationProps
> = ({
  imageUrl,
  className,
  backgroundColor = "lightblue",
  children,
  openScreenEnable = true,
  onClick,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimateComplete, setAnimateComplete] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the first intersection
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      onClick={() => onClick}
      ref={ref}
      className={`relative  shadow-lg overflow-hidden ${className}`}
      style={{ backgroundColor: backgroundColor }}
    >
      {isOpen && openScreenEnable && (
        <motion.div
          onAnimationComplete={() => setAnimateComplete(true)}
          initial={{ y: 0 }}
          animate={isVisible ? { y: "-100%" } : { y: 0 }}
          exit={{ scale: 0, y: "-100%" }}
          transition={{ duration: 1 }}
          className="z-30"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            backgroundColor: backgroundColor, // Semi-transparent background
          }}
          onClick={handleClose}
        ></motion.div>
      )}
    
        <motion.img
          src={imageUrl}
          className="z-0"
          alt="Your Image"
          initial={{ scale: 2 }} // Start at scale 1
          animate={isVisible && isOpen ? { scale: 1 } : { scale: 2 }} // Scale up when open
          exit={{ scale: 0 }} // Scale down when exiting
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            width: " 100%",
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0,
          }}
        />
      
      {isAnimateComplete && children}
    </div>
  );
};

export default BottomToTopScreenOpenAnimation;
