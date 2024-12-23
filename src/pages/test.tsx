import { motion, useScroll, useTransform } from "framer-motion";

const ScrollAnimation = () => {
  // Track scroll progress
  const { scrollYProgress } = useScroll();

  // Animations for width, height, and other properties
  // const width = useTransform(scrollYProgress, [0, 0.05, 0.10, 0.15, 1], [
  //   "100%",
  //   "50%", // Desktop view
  //   "30%",  // iPad view
  //   "25%",  // Phone view
  //   "0%",   // Maintain Phone view
  // ]);

  // const height = useTransform(scrollYProgress, [0, 0.01, 0.02, 0.03, 1], [
  //   "100vh", // Desktop view
  //   "50vh", 
  //   "50vh", // iPad view
  //   "80vh",  // Phone view
  //   "100vh", // Maintain Phone view
  // ]);

  // Border radius for rounded corners during scroll
  const borderRadius = useTransform(scrollYProgress, [0.66, 1], [
    "0%",    // Phone view
    "20%",   // Rounded in phone view
  ]);

  // Scaling effect as you scroll
  const scale = useTransform(scrollYProgress, [0, 0.01, 0.9, 1], [9, 1, 1, 1]);

  // Top and Bottom spacing animation
  const top = useTransform(scrollYProgress, [0, 0.2, 0.5, 1], [-800, 0, 0, 0]); // Start off-screen

  return (
    <div className="h-[200vh] overflow-hidden w-full bg-gray-800 relative flex items-center justify-center">
      {/* Animated Div */}
      <motion.div
        className="sticky h-full   w-full  bg-slate-50  rounded-lg flex flex-col items-center justify-center text-white"
        style={{
          borderRadius,
          // height,
          // width
        }}
      >
          
        {/* Dashboard Layout */}
        <div className="flex absolute flex-col h-full  ">
          <div className="bg-gray-700 p-4 rounded-lg shadow-md w-3/4">
            <h2 className="text-lg font-semibold">Widget 1</h2>
            <p>Some information about Widget 1.</p>
          </div>
       
          <motion.div
            style={{
              scale,
              top,

            }}
            className="bg-gray-700 p-4 rounded-xl shadow-md w-3/4"
          >
            <img className="h-[20vh] rounded-xl w-full" src="https://bbbzdlyncfcnmzxxaubm.supabase.co/storage/v1/object/gms-api/public/banner-img/3f49feb424a78b862cc3.webp"/>
            <h2 className="text-lg font-semibold">Widget 3</h2>
            <p>Some information about Widget 3.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;