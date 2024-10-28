type CarouselProps = {
  imgUrl?: string;
  description?: string;
  attribution?: string;
};
export const CarouselSlide = ({
  imgUrl,
  description,
  attribution,
}: CarouselProps) => (
  <figure>
    <img src={imgUrl} />
    <figcaption data-testid="caption">
      <strong>{description}</strong>
      &nbsp;{attribution}
    </figcaption>
  </figure>
);
