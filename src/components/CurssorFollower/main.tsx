import React, { useEffect, useRef, useState } from 'react';
import './style.css'; // Import the CSS styles
import useCounterStore from '../../store/animateScreen';
import { MdArrowOutward } from 'react-icons/md';
import useScrollBackgroundColor from '../../hook/useScrollBgColor';

const CursorFollower: React.FC = () => {
  const {hover,link} = useCounterStore((state) =>state)
  const ballRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const speed = 1;

  const nav1 = [
    { id: "home", color: "bg-primary" },
    { id: "about", color: "bg-primary" },
    { id: "work-header", color: "bg-primary" },
    { id: "work", color: "bg-primary" },
    { id: "process", color: "bg-primary" },
    { id: "getInTouch", color: "bg-white" },
  ]
  const navBgColor = useScrollBackgroundColor(nav1);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.pageX, y: event.pageY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      if (ballRef.current) {
        const ball = ballRef.current;
        const distX = mousePosition.x - (ball.offsetLeft + ball.clientWidth / 2);
        const distY = mousePosition.y - (ball.offsetTop + ball.clientHeight / 2);

        ball.style.left = ball.offsetLeft + distX * speed + 'px';
        ball.style.top = ball.offsetTop + distY * speed + 'px';

        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [mousePosition]);

  return (
    <div className="relative z-50 animate-zoomIn xl:block hidden">

      <div
        ref={ballRef}
        className={`ball ${navBgColor} p-2 opacity-100 ${hover&&link ?" p-4":hover?"grow border-primary border": 'ball' }   bg-primary`}
      >

        {hover&&link?<MdArrowOutward className='h-10 w-10 text-white'/>:null
        }
      </div>
    </div>
  );
};

export default CursorFollower;