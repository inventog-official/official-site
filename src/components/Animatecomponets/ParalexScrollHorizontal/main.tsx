import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxHorizontalScrollProps {
  children: ReactNode[];
  width?: any;
  className?: string;
  className2?: string;
  className1?: string;
  childClassName?: string;
  scaleRange?: [number, number]; // Add this prop for scale range
}

const ParallaxHorizontalScroll: React.FC<ParallaxHorizontalScrollProps> = ({
  children,
  width = 1200,
  className,
  className1,
  className2,
  childClassName,
  scaleRange = [0.8, 1], // Default scale range
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange); // Use scaleRange prop

  return (
    <section
      ref={targetRef}
      className={`md:h-[400vh] ${className} flex flex-col`}
    >
      <div
        className={`sticky top-0 w-screen ${className1} h-screen xl:flex xl:visible lg:flex lg:visible hidden overflow-hidden`}
      >
        <motion.div
          style={{ x, width: width }}
          className={`flex ${className2}`}
        >
          {children.map((child, index) => (
            <motion.div
              key={index}
              style={index==0?{}:{ scale }}
              className={`flex-shrink-0 ${childClassName}`}
            >
              {child}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="sticky top-0 justify-center items-center py-12 gap-12 md:visible lg:hidden xl:hidden flex flex-col">
        {children.map((child, index) => (
          <div key={index} className="flex-shrink-0 w-screen">
            {child}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParallaxHorizontalScroll;
