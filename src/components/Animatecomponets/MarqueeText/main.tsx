

import { useEffect } from 'react';
import useCounterStore from '../../../store/animateScreen';

interface MarqueeTextProps {
  duration: number;
  texts:string[];
  navigatePage:string
}

const MarqueeText = ({  duration ,navigatePage,texts}: MarqueeTextProps) => {
  const {  setCrossTextAnimation,} = useCounterStore((state) => state);

  const element = document.getElementById(navigatePage);

  useEffect(() => {
    const interval = setInterval(() => {
        // Trigger the scroll
        //@ts-ignore
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Set a timeout to change the animation state after the scroll duration
        setTimeout(() => {
            setCrossTextAnimation(false);
        }, duration); // Use the same duration as the scroll animation

    }, duration);

    return () => clearInterval(interval);
}, [duration]);


  return (
    <div id="marquee" className=" overflow-hidden h-screen  flex   w-full  bg-black text-primary">
                <div className='h-full w-full -rotate-12 flex flex-col gap-10  '>
                    
                <div className=" flex gap-10   items-center w-full animate-marqueeRight">
                    {texts.map((text) =>{
                        return(<h2 className=' text-[100px] font-[1000]'>
                            {text}
                        </h2>)
                    })}
                </div>
                <div className="  flex gap-10 items-center w-full animate-marqueeLeft">
                    {texts.map((text) =>{
                        return(<h2 className=' text-[100px] font-[1000]'>
                            {text}
                        </h2>)
                    })}
                </div>
                <div className=" flex gap-10   items-center w-full animate-marqueeRight">
                    {texts.map((text) =>{
                        return(<h2 className=' text-[100px] font-[1000]'>
                            {text}
                        </h2>)
                    })}
                </div>
                <div className="  flex gap-10 items-center w-full animate-marqueeLeft">
                    {texts.map((text) =>{
                        return(<h2 className=' text-[100px] font-[1000]'>
                            {text}
                        </h2>)
                    })}
                </div>
                </div>
            </div>
  );
};

export default MarqueeText;