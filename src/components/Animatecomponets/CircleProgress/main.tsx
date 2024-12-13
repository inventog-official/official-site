import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface CircularProgressProps {
  progress: number;
  text:any
}

const CircularProgress: React.FC<CircularProgressProps> = ({ progress,text }) => {
  const radius = 70; // Radius of the circle
  const strokeWidth = 3; // Width of the stroke
  const normalizedRadius = radius - strokeWidth * 0.5; // Adjusted radius
  const circumference = normalizedRadius * 2 * Math.PI; // Circumference of the circle
  const strokeDashoffset = circumference - (progress / 100) * circumference; // Calculate the offset

  return (
    <svg className='' height={radius * 2} width={radius * 2}>
      <circle
        stroke="#e6e6e6"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <motion.circle
        stroke="#1D4ED8"
        fill="#00000"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        strokeDasharray={circumference + ' ' + circumference}
        strokeDashoffset={strokeDashoffset}
        initial={{ strokeDashoffset: circumference }} // Initial state
        animate={{ strokeDashoffset }} // Animate to the calculated offset
        transition={{ duration: 1.5 }} // Duration of the animation
      />
      <text
      className='text-white'
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="60"
        fill="#ffff"
      >
        {text}.
      </text>
    </svg>
  );
};

const AnimatedCircularProgress: React.FC<{text:any,className?:string}> = ({text,className}) => {
  const [progress, setProgress] = useState<number>(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once

  useEffect(() => {
    if (isInView) {
      setProgress(100); // Set progress to 100 when in view
    }
  }, [isInView]);

  return (
    <div className={`${className}  z-30`} ref={ref} >
      <CircularProgress text={text} progress={progress} />
    </div>
  );
};

export default AnimatedCircularProgress;