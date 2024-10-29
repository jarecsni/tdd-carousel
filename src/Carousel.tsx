import { CarouselSlide } from './CarouselSlide';

type Slide = {
  imgUrl?: string;
  description?: string;
  attribution?: string;
};

export const Carousel = ({ slides }: { slides?: Slide[] }) => {
  return (
    <div data-testid="carousel">
      <CarouselSlide {...slides?.[0]} />
    </div>
  );
};
