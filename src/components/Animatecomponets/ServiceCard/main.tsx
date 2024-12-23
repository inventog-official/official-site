import React from 'react';
import { motion,} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Service {
  icon: React.ReactNode; // Adjust the type based on what you expect for the icon
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;

}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Only trigger the animation once
    threshold: 0.2, // Trigger when 30% of the component is in view
  });

  // Use the scroll position to control the icon's movement
   // Adjust the range as needed

  return (
    <motion.div
      ref={ref}
      key={index}
      className="rounded-[60px] flex justify-center items-start px-10 xl:gap-12 gap-5 py-3 flex-col shadow-lg w-full h-full bg-black transition-transform transform hover:scale-110 hover:shadow-2xl"
      initial={{ opacity: 0, scale: 0.8 }} // Start smaller
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }} // Scale to full size when in view
      transition={{
        duration: 0.3, // Increase duration for smoother effect
        ease: 'easeInOut', // Use a predefined easing function
        delay: index * 0.2,
      }}
    >
      <div className='w-full relative bg-gradient-to-r from-white to-gray-100/40 border shadow-lg rounded-3xl xl:h-32 h-24  justify-start items-center px-4 flex '>
      
        <motion.div
          className="xl:text-4xl text-xl w-[80%]   relative  text-wrap  text-primary font-semibold flex justify-start" // Align to the left
          initial={{ opacity: 0 }} // Start with opacity 0
          animate={{ opacity: inView ? 1 : 0 }} // Fade in when in view
          transition={{
            duration: 1.4, // Duration for the title animation
            ease: 'easeInOut',
            delay: index * 0.3, // Delay based on index for staggered effect
          }}
        >
          {service.title}
        </motion.div>
        <motion.div
        className="text-5xl  absolute  flex justify-end right-2 w-full text-blue-500"
        initial={{ x: -400 }} // Start from the left
        animate={{ x: inView ? 0 : -400 }} // Move to the original position when in view
        transition={{
          duration: 1,
          ease: 'easeInOut',
          delay: index * 0.2, // Delay based on index for staggered effect
        }}
      >
        <div className="fill-white w-16">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"
      ></path>
    </svg>
  </div>
        {/* {service.icon} */}
      </motion.div>
      </div>
      <p className="text-gray-300 text-2xl font-sans">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;