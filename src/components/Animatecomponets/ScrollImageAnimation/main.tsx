import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  MotionStyle,
} from "framer-motion";
import useCounterStore from "../../../store/animateScreen";

// Detailed type definitions
type EasingFunction = (t: number) => number;
type TransformRange = [string | number, string | number, string | number];

// Comprehensive configuration interface
interface ScrollImageConfig {
  translateY?: {
    range?: TransformRange;
    enabled?: boolean;
  };
  scale?: {
    range?: TransformRange;
    enabled?: boolean;
  };
  opacity?: {
    range?: TransformRange;
    enabled?: boolean;
  };
  rotation?: {
    range?: TransformRange;
    enabled?: boolean;
  };
  easing?: EasingFunction;
}

// Props interface
interface ScrollImageProps {
  src: string;
  alt?: string;
  text?:string;
  onClick?:() =>void;
  className?: string;
  containerClassName?: string;
  config?: ScrollImageConfig;
}

// Default configuration
const defaultConfig: ScrollImageConfig = {
  translateY: {
    range: ["-15%", "0%", "15%"],
    enabled: true,
  },
  scale: {
    range: [1.05, 1, 1.05],
    enabled: true,
  },
  opacity: {
    range: [0.8, 1, 0.8],
    enabled: false,
  },
  rotation: {
    range: ["-5deg", "0deg", "5deg"],
    enabled: false,
  },
  easing: (t: number) =>
    t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2,
};

const ScrollImage: React.FC<ScrollImageProps> = ({
  src,
  alt = "Scroll animated image",
  className = "",
  containerClassName = "",
  text="",
  config = {},
  onClick
}) => {
  // Merge default and provided configurations
  const [isHovered, setIsHovered] = useState(false);
  const {setHovered,setLinkHovered} = useCounterStore((state) =>state)
  const [isVisible, setIsVisible] = useState(false);

  const mergedConfig: ScrollImageConfig = {
    ...defaultConfig,
    ...config,
    translateY: { ...defaultConfig.translateY, ...config.translateY },
    scale: { ...defaultConfig.scale, ...config.scale },
    opacity: { ...defaultConfig.opacity, ...config.opacity },
    rotation: { ...defaultConfig.rotation, ...config.rotation },
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Utility function to create smooth transforms
  const createSmoothTransform = (
    input: MotionValue<number>,
    config: {
      range?: TransformRange;
      enabled?: boolean;
    }
  ): MotionValue<string | number> | undefined => {
    if (!config.enabled || !config.range) return undefined;

    return useTransform(input, [0, 0.5, 1], config.range, {
      ease: mergedConfig.easing,
    });
  };

  // Create individual transforms
  const transforms: MotionStyle = {
    ...(mergedConfig.translateY?.enabled && mergedConfig.translateY.range
      ? { y: createSmoothTransform(scrollYProgress, mergedConfig.translateY) }
      : {}),
    ...(mergedConfig.scale?.enabled && mergedConfig.scale.range
      ? { scale: createSmoothTransform(scrollYProgress, mergedConfig.scale) }
      : {}),
    ...(mergedConfig.opacity?.enabled && mergedConfig.opacity.range
      ? {
          opacity: createSmoothTransform(scrollYProgress, mergedConfig.opacity),
        }
      : {}),
    ...(mergedConfig.rotation?.enabled && mergedConfig.rotation.range
      ? {
          rotate: createSmoothTransform(scrollYProgress, mergedConfig.rotation),
        }
      : {}),
  };


  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsVisible(true);
    setHovered(true)
    setLinkHovered(true)
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHovered(false)
    setLinkHovered(false)
    // Delay the slide-out animation
    setTimeout(() => {
      setIsVisible(false);
    }, 500); // Adjust this duration to match the slide-in duration
  };

  return (
    <div
      ref={containerRef}
      className={`
        relative 
        h-[100vh] 
        w-full 
        rounded-l-xl 
        overflow-hidden 
        ${containerClassName}
      `}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={`
          flex justify-center 
          absolute 
          items-center
          group
          inset-0 
          ${className}
        `}
      
        style={transforms}
      >
       {isVisible && (
        <span
          className={`text-white text-[80px] flex-wrap  w-[50%] font-[1000] absolute mx-auto transition-all duration-300 ${
            isHovered ? 'animate-slideIn' : 'animate-slideOut'
          }`}
        >
          {text}
        </span>
      )}

        <img
          src={src}
          alt={alt}
          className="
            w-full 
            h-full 
            object-cover 
          "
        />
      </motion.div>
    </div>
  );
};

export default ScrollImage;
