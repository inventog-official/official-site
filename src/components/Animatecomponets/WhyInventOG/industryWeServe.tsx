import { motion } from 'framer-motion'
import { FaHeartbeat, FaShoppingCart, FaGraduationCap, FaHome, FaFilm } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const IndustryWeServe = () => {
    const { ref, inView } = useInView({
        threshold: 0.2, // Adjust as needed
        triggerOnce: true, // Only trigger once
      });
    
  return (
    <div className="xl:h-full   w-full flex flex-col gap-10 px-3  py-14">
        <motion.h2
          className="text-5xl font-bold text-center mt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Industries We Serve
        </motion.h2>
        <p className="text-center text-xl font-semibold mt-4 text-black ">
          From startups to enterprises, InventOG has experience working across
          various industries, including:
        </p>
        <ul
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 w-full justify-center text-center px-4"
        >
          {[
            {
              icon: <FaHeartbeat className="text-white h-24 w-24" />,
              title: "Healthcare",
            },
            {
              icon: <FaShoppingCart className="text-white h-24 w-24" />,
              title: "E-Commerce",
            },
            {
              icon: <FaGraduationCap className="text-white h-24 w-24" />,
              title: "Education",
            },
            {
              icon: <FaHome className="text-white h-24 w-24" />,
              title: "Real Estate",
            },
            {
              icon: <FaFilm className="text-white h-24 w-24" />,
              title: "Entertainment",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-r from-primary to-blue-300 p-2 rounded-full mb-2">
                {item.icon}
              </div>
              <h3 className="bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent text-2xl font-bold">
                {item.title}
              </h3>
            </motion.li>
          ))}
        </ul>
      </div>
  )
}

export default IndustryWeServe
