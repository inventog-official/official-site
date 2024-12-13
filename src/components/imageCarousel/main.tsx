import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaBoxOpen, FaMobileAlt } from 'react-icons/fa'; // Importing icons from react-icons

const ColosseumComponent: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      title: 'Web Development',
      icon: <FaCode />, // Use the icon component directly
      image: '/home/fullmen.png',
    },
    {
      title: 'Web Applications',
      icon: <FaLaptopCode />,
      image: '/home/menWithlap.png',
    },
    {
      title: 'Web Products',
      icon: <FaBoxOpen />,
      image: '/home/womenWithLap.png',
    },
    {
      title: 'Mobile Apps',
      icon: <FaMobileAlt />,
      image: '/home/fullmen.png',
    },
  ];

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

 

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative h-[65vh] p-4 py-4  rounded-xl overflow-hidden animate-floating"> {/* Add floating effect */}
      {/* Background Image */}
      <img
        src={slides[slideIndex].image}
        alt={slides[slideIndex].title}
        className="absolute z-30 bottom-12 inset-0  animate-slideIn h-[53vh] xl:h-full w-full object-cover transition duration-300 filter grayscale hover:grayscale-0"
      />
        <motion.div
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         transition={{ duration: 0.5 }}
         className="z-10 absolute  h-[80%] w-[80%] rounded-xl opacity-80"
        >
{/* <FaCode/> */}
        </motion.div>
      {/* Background Layer */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="z-10 absolute bg-primary/80 h-[80%] w-[75%] rounded-xl opacity-80"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="z-10 absolute top-20 left-20 bg-primary/80 h-[80%] w-[75%] rounded-xl opacity-80"
      />

      {/* Slider Content with Icons */}
      <motion.div
        className="z-40 absolute  -bottom-40 left-24 w-full h-1/2 rounded-xl  flex items-start justify-start"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className='flex gap-1 items-center'>
        <div className=" text-2xl font-bold  bg-white p-1 rounded-xl text-primary">{slides[slideIndex].icon}</div> 
        <div className="text-white text-2xl font-bold px-4 ">{slides[slideIndex].title}</div> 
        </span>


      </motion.div>
      

      {/* Navigation Buttons */}
      {/* <button
        className="absolute top-1/2 left-4 z-30 text-white text-lg font-bold"
        onClick={handlePrevSlide}
      >
        &#8592;
      </button>
      <button
        className=" absolute top-1/2 right-4 z-30 text-white text-lg font-bold"
        onClick={handleNextSlide}
      >
        &#8594;
      </button> */}

      {/* Indicators */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${slideIndex === index ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ColosseumComponent;

  {/* {images.map((src, index) => (
        <div
          key={index}
          className={`item ${visibleImages.includes(index) ? 'swiper-slide-active' : ''} 
                      ${index === 0 ? 'col-span-4 flex' : ''} 
                      ${index > 0 && index < 4 ? 'col-span-1' : ''} 
                      ${index >= 4 ? 'col-span-2' : ''}`}
        >
          <img
            className="w-full h-full object-cover rounded-md"
            src={src}
            alt=""
          />
        </div>
      ))} */}

  //     const [visibleImages, setVisibleImages] = useState<number[]>([]);

  // useEffect(() => {
  //   const revealImages = async () => {
  //     for (let i = 0; i < images.length; i++) {
  //       await new Promise(resolve => setTimeout(resolve, 500)); // Wait 500ms before revealing the next image
  //       setVisibleImages(prev => [...prev, i]);
  //     }
  //   };

  //   revealImages();
  // }, []);