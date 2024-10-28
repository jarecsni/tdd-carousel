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
});
