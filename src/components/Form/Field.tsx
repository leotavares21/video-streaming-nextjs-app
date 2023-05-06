type FieldProps = React.HTMLAttributes<HTMLDivElement> & {
  customRef?: React.MutableRefObject<null>;
};

export function Field(props: FieldProps) {
  return (
    <div
      className="flex flex-col gap-1 w-full"
      {...props}
      ref={props.customRef}
    />
  );
}
