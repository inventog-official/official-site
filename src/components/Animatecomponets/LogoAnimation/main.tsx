import { useEffect } from 'react';

const LogoAnimation = ({ onComplete }:{onComplete:() =>void}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5889); // Animation duration
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    // <div className="flex items-center  t justify-center h-screen bg-primary">

    //   <div className="animate-slideUp    transition-all duration-1000">
    //     <p className='text-[300px]  font-thin w-auto transition-all duration-500 text-white'>W</p>
      
    //   </div>
    // </div>

    <div className="w-screen h-screen  bg-primary flex items-center justify-center font-cabin-condensed">
    <div className="relative w-[500px] h-[150px]">
      <div
        id="ball"
        className="absolute top-[27.5px] md:left-[10px]  left-0 h-[98px] w-[100px] bg-white rounded-full shadow-lg z-10 animate-ballmove"
      ></div>
      <p
        id="xyz"
        className="absolute top-[50px] left-[85px] md:left-[115px] text-[40px] font-bold text-white animate-textreveal whitespace-nowrap overflow-hidden"
      >
        WEDATZ
      </p>
    </div>
  </div>
  );
};

export default LogoAnimation;

