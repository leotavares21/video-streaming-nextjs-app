type ChannelPreviewFigure = {
  children: React.ReactNode;
};

export function PreviewFigure({ children }: ChannelPreviewFigure) {
  return (
    <figure className="flex justify-between items-center gap-4">
      {children}
    </figure>
  );
}
