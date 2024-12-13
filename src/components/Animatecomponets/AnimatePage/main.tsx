import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useCounterStore from '../../../store/animateScreen';

interface AnimatedPageProps {
  colors: string[];
  duration: number;
}

const AnimatedPage = ({ colors, duration }: AnimatedPageProps) => {
  const { deActive, setPageAnimationComplete } = useCounterStore((state) => state);
  const [isExiting, setIsExiting] = useState(false);
  const [animateScreens, setAnimateScreens] = useState(
    colors.reduce((acc, _, index) => ({ ...acc, [index]: index === 0 }), {})
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);
    }, duration);

    return () => clearInterval(interval);
  }, [duration]);

  const variants = {
    initial: { opacity: 0, y: '100vh', height: '100%' },
    animate: { opacity: 1, y: 0, height: isExiting ? 0 : '100%' },
  };

  const handleScreenAnimationComplete = (index: number) => {
    if (index < colors.length - 1) {
      setAnimateScreens((prevAnimateScreens) => ({ ...prevAnimateScreens, [index + 1]: true }));
    } else {
      if (isExiting) {
        deActive();
        setPageAnimationComplete();
      }
    }
  };

  return (
    <div>
      {colors.map((color, index) => (
        <motion.div
          key={index}
          initial="initial"
          animate={(animateScreens as any)[index] ? 'animate' : 'initial'}
          exit="exit"
          variants={variants}
          transition={{ duration: 0.6, delay: 0 }}
          onAnimationComplete={() => handleScreenAnimationComplete(index)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: color,
            zIndex: index + 1,
            overflow: 'hidden',
          }}
        >
          {/* Yossu can add content here */}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedPage;