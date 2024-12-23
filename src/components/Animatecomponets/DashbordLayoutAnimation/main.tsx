import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StickyCenterDiv: React.FC = () => {
  const { scrollY, scrollYProgress } = useScroll();

  const width = useTransform(scrollY, [0, 10, 2000], ['100%', '100%', '20%']);
  const scaleX = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [3, 1, 1, 1]);
  const scaleY = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [3, 1, 1, 1]);
  const scaleX2 = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [3, 1, 1, 1]);
  const scaleY2 = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [3, 1, 1, 1]);

  return (
    <div className='flex justify-center bg-orange-400 relative h-[350vh] xl:h-[800vh]'>
      <motion.div
        className='rounded-xl h-[40vh] xl:h-[90vh] w-full'
        style={{
          scaleX,
          scaleY,
          width: width,
          position: 'sticky',
          top: '10%',
          bottom: "10%",
          transform: 'translateY(-50%)',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
       <div className="flex flex-col w-full h-full rounded-xl bg-gray-900 p-[1%] text-white">
  {/* Header Skeleton */}
  <header className="flex justify-between items-center p-[2%] bg-gray-800">
    <div className="w-[25%] h-[6%] bg-gray-700 rounded"></div>
    <nav className="space-x-2 md:space-x-4">
      <div className="inline-block w-[12%] h-[6%] bg-gray-700 rounded"></div>
      <div className="inline-block w-[12%] h-[6%] bg-gray-700 rounded"></div>
      <div className="inline-block w-[12%] h-[6%] bg-gray-700 rounded"></div>
      <div className="inline-block w-[12%] h-[6%] bg-gray-700 rounded"></div>
    </nav>
    <div className="w-[12%] h-[6%] bg-gray-700 rounded"></div>
  </header>

  <div className="flex flex-1 flex-col md:flex-row">
    {/* Sidebar Skeleton */}
    <aside className="w-full md:w-[25%] bg-gray-800 p-[2%]">
      <ul className="space-y-2">
        <li className="h-[8%] bg-gray-700 rounded"></li>
        <li className="h-[8%] bg-gray-700 rounded"></li>
        <li className="h-[8%] bg-gray-700 rounded"></li>
        <li className="h-[8%] bg-gray-700 rounded"></li>
      </ul>
    </aside>

    {/* Main Editing Area Skeleton */}
    <main className="flex-grow p-[2%]">
      <div className="canvas h-full p-[2%] bg-gray-800 border border-gray-600 flex items-center justify-center flex-col">
        <div className="w-full h-full bg-gray-700 rounded mb-[4%]"></div>
        {/* Edited Image Card */}
        <motion.div
  style={{ scaleX: scaleX2, scaleY: scaleY2 }}
  className="bg-gray-700 rounded p-[2%] w-full max-w-xs"
>
  <motion.img
    src="https://bbbzdlyncfcnmzxxaubm.supabase.co/storage/v1/object/gms-api/public/banner-img/3f49feb424a78b862cc3.webp"
    alt="Edited"
    className="w-full h-full object-cover rounded"
    initial={{
      scale: 1,
      height: "100vh", // Take full viewport height initially
      width: "100vw", // Take full viewport width initially
    }}
    animate={{
      height: ["100vh", "auto"], // Shrinks to auto-height as scaling animation works
      width: ["100vw", "auto"],
    }}
    transition={{
      duration: 0.8, // Adjust duration for smoothness
      ease: "easeInOut",
    }}
  />
  <div className="mt-[2%] text-sm text-gray-300">Edited Image Title</div>
</motion.div>

      </div>
      <div className="toolbar mt-[4%] space-x-2 md:space-x-4">
        <div className="inline-block w-[16%] h-[8%] bg-gray-700 rounded"></div>
        <div className="inline-block w-[16%] h-[8%] bg-gray-700 rounded"></div>
        <div className="inline-block w-[16%] h-[8%] bg-gray-700 rounded"></div>
        <div className="inline-block w-[16%] h-[8%] bg-gray-700 rounded"></div>
      </div>
    </main>
  </div>

  {/* Status Bar Skeleton */}
  <footer className="flex justify-between items-center p-[2%] bg-gray-800">
    <div className="w-[25%] h-[6%] bg-gray-700 rounded"></div>
    <div className="action-buttons space-x-2 md:space-x-4">
      <div className="inline-block w-[16%] h-[8%] bg-gray-700 rounded"></div>
      <div className="inline-block w-[16%] h-[8%] bg-gray-700 rounded"></div>
    </div>
  </footer>
</div>
      </motion.div>
    </div>
  );
};

export default StickyCenterDiv;