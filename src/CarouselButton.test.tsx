import { render, screen } from '@testing-library/react';
import CarouselButton from './CarouselButton';

describe('CarouselButton', () => {
  it('renders a button element', () => {
    render(<CarouselButton />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});