import React from 'react';

export interface ArrowProps {
  onClick?: () => void;
}

export const PrevArrow: React.FC<ArrowProps> = ({onClick }) => (
  <button
    className={`absolute -left-25 bottom-30 text-5xl text-brown-600 hover:text-brown-800 focus:outline-none`}
    onClick={onClick}
  >
    ←
  </button>
);

export const NextArrow: React.FC<ArrowProps> = ({onClick }) => (
  <button
    className={`absolute -right-25 bottom-30 text-5xl text-brown-600 hover:text-brown-800 focus:outline-none`}
    onClick={onClick}
  >
    →
  </button>
);