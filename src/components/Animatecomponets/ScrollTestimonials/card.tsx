// Card.tsx
import React from 'react';

interface CardProps {
  text: string;
}

const Card: React.FC<CardProps> = ({ text }) => {
  return (
    <div  className='w-[100%] border bg-slate-300  h-full p-40 '>
      {text}
    </div>
  );
};

export default Card;