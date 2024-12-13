import { motion } from 'framer-motion';
import React from 'react';



// Define the props interface
interface HorizontalScrollProps {
    key:any;
  children?: React.ReactNode; // Optional children prop
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({  children ,key}) => {
  return (
    
        <motion.div
          key={key}
          className="min-w-[300px] min-h-[90%] rounded-lg bg-gray-200 flex items-center justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          {/* Display the card title */}
        {children}
        </motion.div>
     
  );
};

export default HorizontalScroll;