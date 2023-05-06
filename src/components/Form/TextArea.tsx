import { TextareaHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
  variant?: 'gray-style';
};

export function TextArea(props: TextAreaProps) {
  const { register } = useFormContext();

  if (props.variant === 'gray-style') {
    return (
      <textarea
        id={props.name}
        className="input-base input-gray scroll-style h-32 resize-none"
        {...register(props.name)}
        {...props}
      />
    );
  }
  return (
    <textarea
      id={props.name}
      className="input-base input-default scroll-style h-32 resize-none"
      {...register(props.name)}
      {...props}
    />
  );
}
