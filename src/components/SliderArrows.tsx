import React from 'react';

export interface ArrowProps {
  onClick?: () => void;
}

const baseClasses = `
  absolute text-5xl text-brown-600 
  hover:text-brown-800 
  focus:outline-none 
  transition 
  duration-300 
  transform 
  hover:scale-110 
  active:scale-90 
  hover:-translate-y-1
  active:shadow-2xl
`;

export const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className={`-left-25 bottom-30 cursor-pointer ${baseClasses}`}
    onClick={onClick}
  >
    ←
  </button>
);

export const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className={`-right-25 bottom-30 cursor-pointer ${baseClasses}`}
    onClick={onClick}
  >
    →
  </button>
);
