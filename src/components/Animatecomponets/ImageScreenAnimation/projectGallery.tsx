import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ImageCard from "./main";
import { useNavigate } from "react-router-dom";
import useCounterStore from "../../../store/animateScreen";

interface ImageData {
  description: string;
  category: string[];
  imageUrl: string;
  backgroundColor: string;
  title: string;
  path: string;
}

interface ProjectGalleryProps {
  imageData: ImageData[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ imageData }) => {
  const { deActive,setHovered, setLinkHovered } = useCounterStore();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();
  const [isPaddingAnimationActive, setIsPaddingAnimationActive] = useState(false);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    setIsPaddingAnimationActive(true); // Start padding animation

    // Scroll to the clicked image card with smooth animation
    const targetElement = imageRefs.current[index];
    if (targetElement) {
      smoothScrollTo(targetElement.offsetTop, 600); // Adjust duration as needed
    }
  };

  const smoothScrollTo = (targetY: number, duration: number) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 7); // Ensure progress does not exceed 1
      const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Easing function

      window.scrollTo(0, startY + distance * easeInOutQuad(progress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        // After scrolling, navigate to the new path
        navigate(imageData[selectedIndex!].path);
        deActive();
      }
    };

    requestAnimationFrame(animateScroll);
  };

  // Effect to disable scrolling during animation
  useEffect(() => {
    if (isPaddingAnimationActive) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      const timeoutId = setTimeout(() => {
        document.body.style.overflow = ""; // Re-enable scrolling
      }, 500); // Adjust the delay as needed

      return () => clearTimeout(timeoutId);
    }

    return () => {
      document.body.style.overflow = ""; // Ensure scrolling is re-enabled on unmount
    };
  }, [isPaddingAnimationActive]);

  return (
    <div className={`h-full hidden xl:flex flex-col w-full gap-10`}>
      {imageData.map((data, index) => (
        <motion.div
     
        onMouseEnter={() => {
          setHovered(true);
          setLinkHovered(true);
        }}
        onMouseLeave={() => {
          setLinkHovered(false);
          setHovered(false);
        }}
          initial={{ padding: "36px" }} // Initial styles
          animate={{
            padding: isPaddingAnimationActive ? "0px" : "36px", // Remove padding on click
          }}
          onAnimationComplete={() => {
            if (isPaddingAnimationActive) {
              navigate(data.path)
            }
          }}
          transition={{ duration: 0.6 }} // Duration of the transition
          key={index}
          onClick={() =>{
            console.log(data.path)
            navigate(data.path)
              handleImageClick(index)}}
          ref={(el) => (imageRefs.current[index] = el)} // Store reference to each image card
          className="flex h-screen justify-center items-center w-full" // Center the image card
        >
          <ImageCard
          
            // onClick={() => { handleImageClick(index)}}
            key={index}
            description={data.description}
            category={data.category}
            className={`${
              selectedIndex == null ? "rounded-lg" : "rounded-none"
            } h-full w-full cursor-pointer`}
            imageUrl={data.imageUrl}
            backgroundColor={data.backgroundColor}
            title={data.title}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGallery;