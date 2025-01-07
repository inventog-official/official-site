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
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Trigger when 30% of the component is in view
  });

  // Use the scroll position to control the icon's movement
   // Adjust the range as needed

  return (
    <motion.div
    ref={ref}
    key={index}
    className="rounded-[40px] xl:px-10 px-5 gap-6 font-sans flex-col h-[45vh] md:h-[40vh] lg:h-[45vh] xl:h-[500px] w-full justify-start items-center py-6 md:py-8 lg:py-10 flex  shadow-lg bg-black transition-transform transform hover:scale-110 hover:shadow-2xl"
    initial={{ opacity: 1, scale: 0.9 }}
    animate={{ opacity: inView ? 1 : 1, scale: inView ? 1 : 0.9 }}
    transition={{
      duration: 0.1,
      ease: "easeInOut",
      delay: index * 0.2,
    }}
  >
   <div className='h-[30%] w-full border border-primary rounded-3xl p-1 bg-primary/40'>
   <div className="w-full relative border  p-2 bg-gradient-to-r from-blue-600 to-indigo-700  border-primary shadow-lg rounded-3xl h-full justify-start items-center px-4 flex">
      <motion.div 
        className="text-xl md:text-3xl lg:text-3xl xl:text-4xl w-[80%] font-sans font-semibold text-white flex justify-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{
          duration: 1.4,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
      >
        {service.title}
      </motion.div>
      <motion.div
        className="absolute right-2 w-full text-white flex justify-end"
        initial={{ x: -400 }}
        animate={{ x: inView ? 0 : -400 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: index * 0.2,
        }}
      >
        <div className="w-10 md:w-14 lg:w-16 fill-white">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
            <path
              d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"
            ></path>
          </svg>
        </div>
      </motion.div>
    </div>
   </div>

    <div className='h-[70%] bg-primary/30 rounded-xl  p-3 overflow-y-auto'>
    <h2 className="text-gray-300 text-lg md:text-3xl lg:text-3xl xl:text-3xl font-sans">
      {service.description}
    </h2>
    </div>
   
  </motion.div>
  
  );
};

export default ServiceCard;