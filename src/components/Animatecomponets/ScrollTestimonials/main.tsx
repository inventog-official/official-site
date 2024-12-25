// import React, { useRef } from "react";
// import { useScroll, useTransform } from "framer-motion";
// import Card from "./card";


// interface ScrollTestimonialsProps {
//   row1Cards: string[];
//   row2Cards: string[];
// }

// const ScrollTestimonials: React.FC<ScrollTestimonialsProps> = ({
//   row1Cards,
//   row2Cards,
// }) => {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   // Track the horizontal scroll progress within the container
//   const { scrollXProgress } = useScroll({ container: scrollRef });

//   // Transform the scroll progress to adjust the x position for animations
//   const row1X = useTransform(scrollXProgress, [0, 1], [0, 300]); // Row 1 moves to the right
//   const row2X = useTransform(scrollXProgress, [0, 1], [0, -300]); // Row 2 moves to the left

//   return (
//     <div className="relative w-full h-full">
//       <div
//         ref={scrollRef}
//         className="overflow-x-scroll whitespace-nowrap w-full h-full flex flex-col gap-11 scrollbar-hide"
//       >
//         {/* Row 1 */}
//         <div
//           className="flex gap-5"
//           style={{
//             transform: `translateX(${row1X.get()}%)`,
//           }}
//         >
//           {row1Cards.map((text, index) => (
//             <Card key={index} text={text} />
//           ))}
//         </div>

//         {/* Row 2 */}
//         <div
//           className="flex gap-5"
//           style={{
//             transform: `translateX(${row2X.get()}%)`,
//           }}
//         >
//           {row2Cards.map((text, index) => (
//             <Card key={index} text={text} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollTestimonials;
// import React from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
import {  BsHeartFill } from 'react-icons/bs';

// const testimonials = [
//   {
//     name: "John Doe",
//     text: "This service is fantastic! Highly recommend to everyone.",
//     position: "CEO, Company A"
//   },
//   {
//     name: "Jane Smith",
//     text: "A wonderful experience from start to finish.",
//     position: "Manager, Company B"
//   },
//   {
//     name: "Alice Johnson",
//     text: "I couldn't be happier with the results!",
//     position: "Designer, Company C"
//   }
// ];

const Testimonials = () => {
//   const { scrollY } = useScroll();
  
  // Transform the scroll position to control opacity and y position
//   const yTransform = useTransform(scrollY, [0, 300], [100, 0]);
//   const opacityTransform = useTransform(scrollY, [0, 300], [0, 1]);

  return (
    <div className=" px-24 max-w-full mx-auto">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 relative mb-4 md:mb-0">
                            <img src="https://bbbzdlyncfcnmzxxaubm.supabase.co/storage/v1/object/gms-api/public/banner-img/3f49feb424a78b862cc3.webp" alt="Lush green plants on a rocky surface" className="rounded-lg w-full h-full relative object-cover" />
                            <div className="text-5xl flex  absolute font-bold text-white flex-col  -top-2 justify-start w-full items-start">
                            {/* <h2 className="text-2xl font-bold mb-4">Hear From Our Satisfied Clients Have To Say <span className="text-black">❤️</span></h2> */}

                                <h2 className='text-wrap bg-white text-black p-2  px-3 '>
                                    Hear from our 
                                </h2>
                                <h2 className='text-wrap bg-white text-black p-2  px-3 rounded-r-3xl'>
                                    satisfied  clients
                                </h2> <h2 className='text-wrap flex gap-2 justify-center items-center bg-white text-black p-2  px-3 rounded-br-3xl'>
                                  
                                    have to say  <BsHeartFill className='h-8 w-8'/>
                                </h2>
                            </div>
                            <div className="text-4xl flex  absolute font-bold text-white right-10   bottom-4 justify-start w-full items-end">10.9K+</div>
                        </div>
                        <div className="md:w-1/2 md:pl-8">
                            <div className="bg-green-200 p-4 rounded-lg mb-4">
                                <div className="flex items-center mb-2">
                                    <div className="text-yellow-500">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-2">"Their team took our wellness brand and elevated it to new heights with their thoughtful designs and strategic branding, they've helped us create a cohesive and compelling brand identity."</p>
                                <div className="flex items-center">
                                    <img src="https://placehold.co/40" alt="Profile of Mark Ramirez" className="rounded-full w-10 h-10 mr-2" />
                                    <div>
                                        <p className="font-bold">Mark Ramirez</p>
                                        <p className="text-gray-500">Owner of Luma Inc</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg mb-4">
                                <div className="flex items-center mb-2">
                                    <div className="text-yellow-500">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-2">"As a fellow creative professional, I have high standards when it comes to design. Kelola not only met but exceeded those standards. Kelola also optimized it for a seamless user experience."</p>
                                <div className="flex items-center">
                                    <img src="https://placehold.co/40" alt="Profile of Thomas Gala" className="rounded-full w-10 h-10 mr-2" />
                                    <div>
                                        <p className="font-bold">Thomas Gala</p>
                                        <p className="text-gray-500">Founder Zenoth Wellness</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg mb-4">
                                <div className="flex items-center mb-2">
                                    <div className="text-yellow-500">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-2">"Their team took our wellness brand and elevated it to new heights with their thoughtful designs and strategic branding, they've helped us create a cohesive and compelling brand identity."</p>
                                <div className="flex items-center">
                                    <img src="https://placehold.co/40" alt="Profile of another client" className="rounded-full w-10 h-10 mr-2" />
                                    <div>
                                        <p className="font-bold">Another Client</p>
                                        <p className="text-gray-500">Owner of Another Company</p>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        
                    </div>
                    {/* <div className="bg-green-200 p-4 rounded-lg text-center">
                                <p className="font-bold text-lg">Are u The Next One!</p>
                                <button className="bg-white text-green-500 font-bold py-2 px-4 rounded mt-2">Join Now</button>
                            </div> */}
                </div>

    // <div className="py-12 bg-gray-100 text-center">
    //   <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
    //   <div className="flex flex-col items-center space-y-6">
    //     {testimonials.map((testimonial, index) => (
    //       <motion.div
    //         key={index}
    //         className="bg-white rounded-lg shadow-lg p-6 w-80 transition-transform transform hover:scale-105"
    //         style={{
    //           y: yTransform,
    //           opacity: opacityTransform,
    //         }}
    //         transition={{ duration: 0.5 }}
    //       >
    //         <p className="text-gray-600 italic">"{testimonial.text}"</p>
    //         <h4 className="mt-4 text-lg font-semibold text-gray-800">{testimonial.name}</h4>
    //         <h5 className="text-sm text-gray-500">{testimonial.position}</h5>
    //       </motion.div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Testimonials;