import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, ReactNode } from "react";

interface ParallexHorizontalScrollProps {
  children: ReactNode[]; // Accept an array of ReactNode
}

const ParallexHorizontalScroll: React.FC<ParallexHorizontalScrollProps> = ({
  children,
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);



  return (
    <section ref={targetRef} className="md:h-[400vh] flex flex-col px-10">
    <div className="sticky top-0  h-screen justify-center items-center  xl:flex xl:visible lg:flex lg:visible  hidden overflow-hidden">
      <motion.div style={{ x ,width:1200} } className="flex gap-10">
         {children.map((child, index) => (
            <div key={index} className="flex-shrink-0">
              {child}
            </div>
          ))}
    
      </motion.div>
    </div>
    
    <div className="sticky top-0 justify-center items-center py-12 gap-12 md:visible lg:hidden xl:hidden flex flex-col ">
    {children.map((child, index) => (
                <div key={index} className="flex-shrink-0">
                  {child}
                </div>
              ))}
    </div>
    </section>
  );
};

export default ParallexHorizontalScroll;

