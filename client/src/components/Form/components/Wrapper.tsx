type WrapperProps = React.HTMLAttributes<HTMLDivElement>;

export function Wrapper(props: WrapperProps) {
  return (
    <div
      className="flex justify-center items-center max-w-md mx-auto w-screen lg:px-6 sm:px-4 px-2 py-8 flex-col rounded-xl bg-gray-50"
      {...props}
    />
  );
}
