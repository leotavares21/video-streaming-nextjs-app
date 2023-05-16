import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  variant?: 'gray-style' | 'search-style';
};

export function Input(props: InputProps) {
  const { register } = useFormContext();

  if (props.variant === 'gray-style') {
    return (
      <input
        id={props.name}
        className="input-base input-gray"
        {...register(props.name)}
        {...props}
      />
    );
  }
  if (props.variant === 'search-style') {
    return (
      <input
        id={props.name}
        className="input-default py-3 pr-8 pl-10"
        {...register(props.name)}
        {...props}
      />
    );
  }
  if (props.type === 'file') {
    return (
      <input
        hidden
        id={props.name}
        accept="image/*"
        {...register(props.name)}
        {...props}
      />
    );
  }
  return (
    <input
      id={props.name}
      className="input-base input-default"
      {...register(props.name)}
      {...props}
    />
  );
}
