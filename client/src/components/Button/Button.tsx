import Link from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import { handleStyleButton } from './utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: 'primary' | 'accent' | 'gray' | 'black';
    type?: 'button' | 'submit' | 'reset';
    className?: string;
  };

export function Button({
  variant = 'primary',
  type = 'button',
  className,
  ...props
}: ButtonProps) {
  if (props.href) {
    return (
      <Link href={props.href} legacyBehavior>
        <a
          className={`${handleStyleButton(variant)} ${className}`}
          {...props}
        />
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`${handleStyleButton(variant)} ${className}`}
      {...props}
    />
  );
}
