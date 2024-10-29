import React from 'react';
import { CarouselButton } from './CarouselButton';
import { CarouselSlide } from './CarouselSlide';

type Slide = {
  imgUrl?: string;
  description?: string;
  attribution?: string;
};

export const Carousel = ({ slides }: { slides?: Slide[] }) => {
  const [slideIndex, setSlideIndex] = React.useState(0);
  return (
    <div data-testid="carousel">
      <CarouselSlide {...slides?.[slideIndex]} />
      <CarouselButton
        data-testid="next-button"
        onClick={() => {
          if (!slides) return;
          setSlideIndex((i) => (i + 1) % slides.length);
        }}
      />
    </div>
  );
};
