import React, { } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SplitText } from './splitText';
import { useInView } from 'react-intersection-observer';

const SlideUp: React.FC<{ text: any , delay?:number, duration?:number,className?:string}> = ({ text,delay=0.2,duration=2.5, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.3, // Adjust as needed
    triggerOnce: true, // Only trigger once
  });

  return (
    <div className={`${className}`} id="slide-up-text" ref={ref}>
      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0 }} // Start hidden
            animate={{ opacity: 1 }} // Fade in
            exit={{ opacity: 0 }} 
            transition={{ duration}}
          >
            <SplitText
              initial={{ y: '100%' }}
              animate="visible"
              variants={{
                visible: (i: number) => ({
                  y: 0,
                  transition: {
                    delay: i * delay
                  }
                })
              }}
            >
              {text}
            </SplitText>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SlideUp;