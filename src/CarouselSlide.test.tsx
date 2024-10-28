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
});
