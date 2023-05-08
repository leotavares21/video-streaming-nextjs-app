import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vitest } from 'vitest';

import { handleStyleButton } from './utils';

import '@testing-library/jest-dom';

import { Button } from './Button';

describe('Button', () => {
  it('should render a button with the default variant and type', () => {
    const { getByRole } = render(<Button>Hello</Button>);
    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-primary');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveTextContent('Hello');
  });

  it('should render a button with a custom variant and type', () => {
    const { getByRole } = render(
      <Button variant="gray" type="submit">
        Submit
      </Button>
    );
    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('border-gray-200');
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveTextContent('Submit');
  });

  it('should render a link with the default variant and type', () => {
    const { getByRole } = render(<Button href="/about">About</Button>);
    const link = getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('btn-primary');
    expect(link).toHaveAttribute('href', '/about');
    expect(link).toHaveTextContent('About');
  });

  it('should render a link with a custom variant and href attribute', () => {
    const { getByRole } = render(
      <Button href="/contact" variant="accent">
        Contact
      </Button>
    );
    const link = getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('border-accent');
    expect(link).toHaveAttribute('href', '/contact');
    expect(link).toHaveTextContent('Contact');
  });

  it('should calls he onClick handler when clicked', () => {
    const handleClick = vitest.fn();
    const { getByRole } = render(
      <Button onClick={handleClick}>Click me</Button>
    );
    const button = getByRole('button');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});

describe('handleStyleButton', () => {
  it('should returns the correct class for the primary variant', () => {
    expect(handleStyleButton('primary')).toBe('btn btn-primary');
  });

  it('should returns the correct class for the accent variant', () => {
    expect(handleStyleButton('accent')).toBe('btn border-2 border-accent');
  });

  it('should returns the correct class for the gray variant', () => {
    expect(handleStyleButton('gray')).toBe('btn border-2 border-gray-200');
  });

  it('should returns the correct class for the black variant', () => {
    expect(handleStyleButton('black')).toBe(
      'btn bg-black text-gray-50 font-medium rounded-full hover:brightness-90'
    );
  });
});
