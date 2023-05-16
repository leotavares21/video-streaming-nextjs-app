type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function Container(props: ContainerProps) {
  return (
    <div className="flex justify-center items-center h-screen" {...props} />
  );
}
