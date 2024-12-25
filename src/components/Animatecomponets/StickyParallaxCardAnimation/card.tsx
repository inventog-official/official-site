import { useTransform, motion, useScroll } from "framer-motion";
import { ReactNode, useRef } from "react";

interface CardProps {
  i: number;
  title: string;
  description?: string;
  src?: string;
  icon?: ReactNode;
  color: string;
  progress: any;
  range: [number, number];
  targetScale: number;
  className: string;
  style: any;
}

const Card: React.FC<CardProps> = ({
  i,
  style,
  icon,
  className,
  title,
  description,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div
      style={style}
      ref={container}
      className={`${className} h-screen   flex items-center justify-center sticky top-20`}
    >
     <motion.div
  style={{
    backgroundColor: color,
    scale,
    top: `calc(-5vh + ${i * 25}px)`,
  }}
  className="relative flex flex-col items-center justify-center max-w-[90%] xl:max-w-[800px] lg:max-w-[500px] md:max-w-[400px] w-full h-auto min-h-[450px] xl:min-h-[370px] lg:min-h-[500px] rounded-[25px] p-[30px] transform-gpu origin-top"
>
  <h2 className="text-center m-0 text-black font-[900] text-2xl lg:text-4xl">
    {title}
  </h2>
  <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-5 mt-5 xl:mt-10">
    <div className="w-full xl:w-1/2 text-start xl:text-start">
      <p className="text-lg lg:text-xl xl:text-4xl text-black">
        {description}
        <span className="first-letter:text-[28px] first-letter:font-title"></span>
      </p>
    </div>

    <motion.div
      style={{ scale: imageScale }}
      className="bg-black flex items-center justify-center rounded-lg w-full xl:w-1/2 min-h-[200px] xl:min-h-[300px]"
    >
      <span className="animate-floating">{icon}</span>
    </motion.div>
  </div>
</motion.div>

    </motion.div>
  );
};

export default Card;
