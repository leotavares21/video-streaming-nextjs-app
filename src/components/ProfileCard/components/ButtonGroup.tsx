type ButtonGroupProps = {
  children: React.ReactNode;
};

export function ButtonGroup({ children }: ButtonGroupProps) {
  return <div className="flex gap-4">{children}</div>;
}
