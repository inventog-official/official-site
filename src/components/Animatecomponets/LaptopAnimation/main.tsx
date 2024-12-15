import  { useState, useEffect } from 'react';

const LaptopComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const laptopContainer = document.querySelector('.laptop-container');
      //@ts-ignore
      if (scrollPosition >= laptopContainer?.offsetTop - window.innerHeight / 2) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <div className={`laptop-container ${isOpen ? 'laptop-open' : 'laptop-close'}`}>
        <div className="laptop">
          <div className="laptop-screen">
            <img src="image.jpg" alt="Image on laptop screen" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopComponent;