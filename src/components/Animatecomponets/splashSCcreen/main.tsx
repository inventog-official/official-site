import  { useEffect, useState } from 'react';

const CircleAnimation = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Start the animation immediately
        setIsAnimating(true);

        // Hide the component after the animation completes
        const animationTimer = setTimeout(() => {
            setIsVisible(false);
        }, 2000); // Match this duration to the circle animation duration

        return () => clearTimeout(animationTimer);
    }, []);

    if (!isVisible) return null; // Return null to hide the component

    return (
        <div className="relative w-full h-screen bg-white overflow-hidden flex items-center justify-center">
            <div
                className={`absolute w-[200vw] xl:top-[60%] lg:top-[26%] top-[35%] right-0 md:top-[60%] z-10 h-[200vw] bg-primary rounded-full transition-all duration-[2s] ease-in-out ${
                    isAnimating ? 'clip-0' : 'clip-50'
                }`}
                style={{
                    // Center vertically
                    right: '-16%', // Start from left
                    transform: 'translateY(-50%)' // Adjust for vertical centering
                }}
            ></div>
        </div>
    );
};

export default CircleAnimation;
