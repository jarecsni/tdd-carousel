import { render, screen } from '@testing-library/react';
import { CarouselButton } from './CarouselButton';

describe('CarouselButton', () => {
  it('renders a button element', () => {
    render(<CarouselButton />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
  it('passess children through to the button', () => {
    const text = 'Click me';
    render(<CarouselButton>{text}</CarouselButton>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('Click me');
  });
  it('passes other props through to the button', () => {
    const className = 'my-carousel-button';
    const dataAction = 'prev';
    render(<CarouselButton className={className} data-action={dataAction} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('my-carousel-button');
    expect(buttonElement).toHaveAttribute('data-action', 'prev');
  });
});