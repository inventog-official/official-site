import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaRegClock,
  FaSearch,
  FaCogs,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const WhyInventOG = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Adjust as needed
    triggerOnce: true, // Only trigger once
  });

  return (
    <div ref={ref} className="flex flex-col gap-14 mx-auto xl:px-20 ">
      <h2
        className={`xl:text-[70px] ${inView?"animate-slideIn":""} text-4xl text-start  font-bold px-10  mt-10`}
      >
        Why InventOG?
      </h2>
      <div className="flex flex-col items-center">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 mt-4 text-gray-200">
          {[
            {
              icon: <FaLaptopCode className="text-indigo-500 h-14 w-14" />,
              title: "Cutting-Edge Technology",
              description:
                "We leverage the latest tools and frameworks to build solutions that are scalable, secure, and future-ready.",
            },
            {
              icon: <FaCogs className="text-green-500 h-14 w-14" />,
              title: "Tailored Solutions",
              description:
                "Our services are customized to meet your specific business objectives.",
            },
            {
              icon: <FaSearch className="text-red-500 h-14 w-14" />,
              title: "SEO-Optimized Development",
              description:
                "Websites and apps designed to rank higher on search engines, driving organic traffic and visibility.",
            },
            {
              icon: <FaRegClock className="text-yellow-500 h-14 w-14" />,
              title: "Timely Delivery",
              description:
                "Your time is valuable. We stick to deadlines without compromising on quality.",
            },
            {
              icon: <FaShieldAlt className="text-blue-500 h-14 w-14" />,
              title: "Enhanced Security",
              description:
                "Our solutions are built with industry-leading security measures to protect your data and users.",
            },
            {
              icon: <FaUsers className="text-purple-500 h-14 w-14" />,
              title: "User-Centric Design",
              description:
                "Delivering intuitive and engaging user experiences tailored to your audience.",
            },
            {
              icon: <FaUsers className="text-purple-500 h-14 w-14" />,
              title: "User-Centric Design",
              description:
                "Delivering intuitive and engaging user experiences tailored to your audience.",
            },
          ].map((feature, index) => (
            <motion.li
              key={index}
              className="flex flex-col  gap-5 items-center bg-gradient-to-br from-gray-100 to-gray-200 p-6 h-56 w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              animate={inView?{ opacity: 1, y: 0 }:{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center w-[96%] justify-between  gap-2">
                <span>{feature.icon}</span>
                <h3 className="text-xl font-bold w-[70%] text-black">
                  {feature.title}
                </h3>
              </div>
              <p className="text-lg text-gray-900 text-center">
                {feature.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhyInventOG;
