import { motion } from 'framer-motion';

const EmailLink = () => {
  return (
    <div className="relative inline-block">
      <motion.span
        className="font-semibold cursor-pointer"
        whileHover={{ color: '#1d4ed8', scale: 1.05 }} // Change text color and scale on hover
        transition={{ duration: 0.3 }} // Smooth transition for text color and scale
      >
        office@Inventog.com
      </motion.span>
      <motion.div
        className="absolute left-0 bottom-0 h-1 bg-black" // Initial border color
        initial={{ width: 0 }} // Start with width 0 (hidden)
        animate={{ width: 0 }} // Keep it hidden initially
        whileHover={{ 
          width: '100%', 
          backgroundColor: '#1d4ed8',
          transition: { duration: 0.5, ease: [0.68, -0.55, 0.27, 1.55] } // Custom easing for a smoother effect
        }} 
        transition={{ duration: 0.5 }} // Animation duration for initial state
      />
    </div>
  );
};

export default EmailLink;