type ProfilePreviewFigure = {
  children: React.ReactNode;
};

export function PreviewFigure({ children }: ProfilePreviewFigure) {
  return (
    <figure className="flex justify-between items-center gap-4">
      {children}
    </figure>
  );
}
