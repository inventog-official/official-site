import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const TextAnimation = ({texts}:{texts:string[]}) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsExiting(true); // Start the exit animation

            // Change the text after the exit animation duration
            setTimeout(() => {
                setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setIsExiting(false); // Reset exit state
            }, 1200); // Match this duration with the exit animation duration
        }, 2800); // Total time before changing text (reveal + exit)

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="flex justify-start items-start  overflow-hidden  transition-all duration-300 h-full ">
            
            <motion.div
                initial={{ width: 150 }} // Initial width for the container
                animate={{ width: isExiting ? 150 : 'auto' }} // Width animation
                exit={{ width: 150 }} // Exit animation
                transition={{ duration: 1 }} // Duration of the animation
                className="overflow-hidden  whitespace-nowrap text-5xl  text-white bg-primary md:p-7 px-2 py-7 rounded-full text-left"
                style={{ transformOrigin: 'left' }} // Set transform origin to the right
            >
                               

                <motion.span
                    key={currentTextIndex}
                    initial={{ opacity: 0 }} // Start with opacity 0
                    animate={{ opacity: isExiting ? 0 : 1 }} // Fade out when exiting
                    exit={{ opacity: 0 }} // Exit animation
                    transition={{ duration: 1 }}
                    className={`md:text-[90px] text-5xl font-sans  font-bold overflow-hidden ${texts[currentTextIndex]===""?'px-10':"px-3"}`}  // Duration of the text animation
                >
                    {texts[currentTextIndex]} {/* Show text */}
                </motion.span>
            </motion.div>
        </div>
    );
};

export default TextAnimation;