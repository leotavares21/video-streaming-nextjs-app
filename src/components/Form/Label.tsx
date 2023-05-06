import { LabelHTMLAttributes } from 'react';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  variant?: 'gray-style';
};

export function Label(props: LabelProps) {
  if (props.htmlFor === 'avatar') {
    return <label className="btn btn-primary cursor-pointer" {...props} />;
  }
  if (props.variant === 'gray-style') {
    return <label className="text-gray-700 font-medium" {...props} />;
  }
  return <label className="my-2 font-medium" {...props} />;
}
