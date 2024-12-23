import { useTransform, motion, useScroll } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface CardProps {
  i: number;
  title: string;
  description?: string;
  src?: string;
  icon?:ReactNode,
  color: string;
  progress: any;
  range: [number, number];
  targetScale: number;
  className:string
  style:any
}

const Card: React.FC<CardProps> = ({ i,style,icon,   className,title, description, src, color, progress, range, targetScale }) => {

  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div    style={style} ref={container} className={`${className}h-screen  flex items-center justify-center sticky top-20 xl:top-10`}>
      <motion.div 
        style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="flex flex-col relative -translate-y-1/4 xl:h-[400px] h-[500px] w-[270px] lg:h-[700px] lg:w-[500px] xl:w-[700px] rounded-[25px] p-[50px] transform-gpu origin-top"
      >
        <h2 className="text-start m-0 text-black font-[900] text-4xl">{title}</h2>
        <div className="flex flex-col xl:flex-row  h-full mt-[10px] xl:mt-[50px] gap-5">
          <div className="xl:w-1/2  w-full relative ">
            <p className="xl:text-3x lg::text-3xl  text-lg text-black">
              {description}
              <span className="first-letter:text-[28px] first-letter:font-title"></span>
            </p>
          
          </div>


<motion.div 
              style={{ scale: imageScale }}

className='bg-black   rounded-lg xl:w-1/2  lg:w-1/2 w-full h-full flex justify-center items-center'>

<span className='animate-floating'>
    {icon}
</span>
</motion.div>
          {/* <div className="relative w-1/2  rounded-xl flex items-center justify-center bg-black overflow-hidden">
            <motion.div
              className="w-full h-full absolute flex justify-center  items-center"
              style={{ scale: imageScale }}
            >
              <span className='w-full bg-black h-full'>
              {icon}
              </span>
              <img
                
                src={`https://bbbzdlyncfcnmzxxaubm.supabase.co/storage/v1/object/gms-api/public/banner-img/3f49feb424a78b862cc3.webp`}
                alt="image" 
                className="object-cover"
              />
            </motion.div>
          </div> */}

        </div>
      </motion.div>
    </motion.div>
  );
}

export default Card;