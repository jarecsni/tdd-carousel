import { render, screen } from '@testing-library/react';
import { CarouselSlide } from './CarouselSlide';
describe('CarouselSlide', () => {
  it('renders a <figure>', () => {
    render(<CarouselSlide />);
    expect(screen.getByRole('figure')).toBeInTheDocument();
  });
  it('renders and <img> and a <figcaption>', () => {
    render(<CarouselSlide />);
    const figure = screen.getByRole('figure');
    const img = screen.getByRole('img');
    const figcaption = screen.getByTestId('caption');
    expect(figure).toContainElement(img);
    expect(figure).toContainElement(figcaption);
  });
  it('uses `description` and `attribution` as the caption', () => {
    const props = {
      description: 'A jaw-droppingly spectacular image',
      attribution: 'by Johnny Jarecsni',
    };
    render(<CarouselSlide {...props} />);
    const figcaption = screen.getByTestId('caption');
    expect(figcaption).toHaveTextContent(
      `${props.description} ${props.attribution}`
    );
  });
  it('passes imgUrl through to the <img>', () => {
    const imgUrl = 'https://example.com/image.png';
    render(<CarouselSlide imgUrl={imgUrl} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', imgUrl);
  });
  it('passes other props through to the <figure>', () => {
    const props = {
      className: 'my-carousel-slide',
      'data-testid': 'my-slide',
    };
    render(<CarouselSlide {...props} />);
    const figure = screen.getByRole('figure');
    expect(figure).toHaveClass(props.className);
    expect(figure).toHaveAttribute('data-testid', props['data-testid']);
  });
});
