import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Carousel } from './Carousel';
describe('Carousel', () => {
  const slides = [
    {
      imgUrl: 'https://example.com/slide1.png',
      description: 'Slide 1',
      attribution: 'John Doe',
    },
    {
      imgUrl: 'https://example.com/slide2.png',
      description: 'Slide 2',
      attribution: 'Katie Smith',
    },
    {
      imgUrl: 'https://example.com/slide3.png',
      description: 'Slide 3',
      attribution: 'Fred Johnson',
    },
  ];
  it('renders a <div>', () => {
    render(<Carousel />);
    expect(screen.getByTestId('carousel')).toBeInTheDocument();
  });
  it('renders the first slide by default', () => {
    render(<Carousel slides={slides} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', slides[0].imgUrl);
  });
  it('advances to the next slide when the next button is clicked', async () => {
    render(<Carousel slides={slides} />);
    const img = screen.getByRole('img');
    //const nextButton = screen.getByRole('button', { name: /next/i });
    const nextButton = screen.getByTestId('next-button');
    const user = userEvent.setup();
    await user.click(nextButton);
    expect(img).toHaveAttribute('src', slides[1].imgUrl);
    await user.click(nextButton);
    expect(img).toHaveAttribute('src', slides[2].imgUrl);
    await user.click(nextButton);
    expect(img).toHaveAttribute('src', slides[0].imgUrl);
  });
});
