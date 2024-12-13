import { useEffect, useState } from 'react';

interface Section {
  id: string;
  color: string;
}

const useScrollBackgroundColor = (sections: Section[]): string => {
  const [bgColor, setBgColor] = useState<string>(sections[0].color);

  useEffect(() => {
    const handleScroll = () => {

      for (const section of sections) {
        const targetElement = document.getElementById(section.id);
        if (targetElement) {
          const rect = targetElement.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom >= 0) {
            setBgColor(section.color);
            break; // Exit loop once the current section is found
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return bgColor;
};

export default useScrollBackgroundColor;