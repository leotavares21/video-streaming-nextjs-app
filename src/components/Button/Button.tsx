import Link from 'next/link';

import { UrlObject } from 'url';

import { handleStyleButton } from './utils';

type ButtonProps = {
  variant?: 'primary' | 'accent' | 'gray';
  type?: 'button' | 'submit' | 'reset';
  href?: UrlObject | string;
  onClick?: () => void;
  children: React.ReactNode;
};

export function Button({
  variant = 'primary',
  type = 'button',
  href,
  children,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href} legacyBehavior>
        <a className={handleStyleButton(variant)} {...props}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button type={type} className={handleStyleButton(variant)} {...props}>
      {children}
    </button>
  );
}
