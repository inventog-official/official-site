import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ImageCardProps {
  imageUrl: string;
  className?: string;
  backgroundColor?: string;
  title?: string;
  description?: string;
  category?: string[];
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  className,
  backgroundColor = "lightblue",
  title = "Click to Close",
  category = [],
  description,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimateComplete, setAnimateComplete] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

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

  useEffect(() => {
    if (isHovered) {
      setShowTitle(true);
      const titleTimeout = setTimeout(() => {
        setShowCategory(true);
      }, 300); // Delay for category
      const descriptionTimeout = setTimeout(() => {
        setShowDescription(true);
      }, 600); // Delay for description

      return () => {
        clearTimeout(titleTimeout);
        clearTimeout(descriptionTimeout);
      };
    } else {
      setShowDescription(false);
      const descriptionTimeout = setTimeout(() => {
        setShowCategory(false);
      }, 300); // Delay for category
      const titleTimeout = setTimeout(() => {
        setShowTitle(false);
      }, 600); // Delay for title

      return () => {
        clearTimeout(descriptionTimeout);
        clearTimeout(titleTimeout);
      };
    }
  }, [isHovered]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
      ref={ref}
      className={`relative rounded-lg shadow-lg overflow-hidden ${className}`}
      style={{ backgroundColor: backgroundColor }}
    >
      {isOpen && (
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
        >
        </motion.div>
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
      {isAnimateComplete && (
        <div className={`absolute  z-10 h-full w-full flex flex-col justify-center items-center ${isHovered?"bg-black/60 transition-all duration-700":""}`}>
          <motion.span
            className={`text-[90px] text-white ${showTitle ? "animate-slideIn" : "animate-slideOut"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: showTitle ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            {title}
          </motion.span>
          <div className={`flex justify-between h-44 w-full absolute bottom-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
            <motion.div
              className="h-full w-[40%] flex gap-2 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: showCategory ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {category?.map((item, index) => (
                <p key={index} className="bg-white shadow-lg rounded-full p-2">
                  {item}
                </p>
              ))}
            </motion.div>
            <motion.div
              className="h-full w-[60%] text-4xl text-white text-center flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: showDescription ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="w-[90%]">
              {description}
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCard;