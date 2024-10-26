import React from 'react';

interface CarouselButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const CarouselButton: React.FC<CarouselButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props}>
      {children}
    </button>
  );
};

export default CarouselButton;