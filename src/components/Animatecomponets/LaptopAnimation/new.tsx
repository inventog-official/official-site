// import React from 'react';
// import dynamic from 'next/dynamic';
// import SmoothScroll from './main';

// // Dynamically import the Earth component
// const Earth = dynamic(() => import('./earth'), {
//   ssr: false,
//   loading: () => <img src="/assets/placeholder.png" alt="Loading..." />,
// });

// const Earth3D: React.FC = () => {
//   return (
//     <SmoothScroll>
//       <main className="h-[60vw] bg-[#0f0f0f] mt-[100vh] mb-[100vh] relative flex items-center justify-center">
//         <Earth />
//       </main>
//     </SmoothScroll>
//   );
// };

// export default Earth3D;