import React, { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface SplitTextProps extends MotionProps {
  children: ReactNode;
}

export const SplitText: React.FC<SplitTextProps> = ({ children, ...rest }) => {
  const words = (children as string).split(' ');

  return (
    <>
      {words.map((word, i) => (
        <div
          key={`${children}-${i}`} // Use a more unique key
          style={{ display: 'inline-block', overflow: 'hidden' }}
        >
          <motion.div
            {...rest}
            style={{ display: 'inline-block', willChange: 'transform' }}
            custom={i}
          >
            {word + (i !== words.length - 1 ? '\u00A0' : '')}
          </motion.div>
        </div>
      ))}
    </>
  );
};