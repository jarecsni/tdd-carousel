import { ComponentPropsWithRef } from 'react';

type CarouselProps = {
  imgUrl?: string;
  description?: string;
  attribution?: string;
};
export const CarouselSlide = ({
  imgUrl,
  description,
  attribution,
  ...rest
}: CarouselProps & ComponentPropsWithRef<'figure'>) => (
  <figure {...rest}>
    <img src={imgUrl} />
    <figcaption data-testid="caption">
      <strong>{description}</strong>
      &nbsp;{attribution}
    </figcaption>
  </figure>
);
