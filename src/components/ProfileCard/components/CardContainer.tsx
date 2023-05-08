type CardContainerProps = {
  children: React.ReactNode;
};

export function CardContainer({ children }: CardContainerProps) {
  return (
    <div className="flex items-center justify-between my-4 gap-2">
      {children}
    </div>
  );
}
