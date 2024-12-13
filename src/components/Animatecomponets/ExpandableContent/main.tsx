import React from 'react';
import { motion } from 'framer-motion';

interface ExpandableContentProps {
  initialText: string;
  originalContent: React.ReactNode; // Allow any valid React node
  position: 'top' | 'bottom';
  isOpen: boolean; // New prop to determine if this content is open
  onToggle: () => void; // New prop for the toggle function
}

const ExpandableContent: React.FC<ExpandableContentProps> = ({ initialText, originalContent, position, isOpen, onToggle }) => {
  return (
    <div>
      {position === 'top' && (
        <>
          <motion.button
            onClick={onToggle} // Use the passed toggle function
            transition={{ duration: 0.5 }} // Match the button movement duration with the content
            className={` text-slate-300 hover:text-slate-500 transition-all duration-100  font-bold text-3xl rounded text ${isOpen?"text-slate-500":""}`}
          >
            {initialText}
          </motion.button>
          <motion.div
            className='p-2'
            initial={{ height: 0, opacity: 0 }}
            animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            exit={{ height: 0, opacity: 0 }} // Ensure exit animation is smooth
            transition={{ duration: 0.5 }} // Adjust duration for smoothness
            style={{ overflow: 'hidden' }}
          >
            {originalContent}
          </motion.div>
        </>
      )}
      {position === 'bottom' && (
        <>
          <motion.button
            onClick={onToggle} // Use the passed toggle function
            transition={{ duration: 0.5 }} // Match the button movement duration with the content
            className={` text-slate-300 hover:text-slate-500 transition-all duration-100 font-bold  text-3xl rounded ${isOpen?"text-slate-500":""}`}
          >
            {initialText}
          </motion.button>
          <motion.div
            className='p-2'
            initial={{ height: 0, opacity: 0 }}
            animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            exit={{ height: 0, opacity: 0 }} // Ensure exit animation is smooth
            transition={{ duration: 0.5 }} // Adjust duration for smoothness
            style={{ overflow: 'hidden' }}
          >
            {originalContent}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ExpandableContent;