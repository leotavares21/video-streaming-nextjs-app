type SectionProps = {
  children: React.ReactNode;
};

export function Section({ children }: SectionProps) {
  return (
    <section className="mb-8 pt-4 border-t border-gray-700">{children}</section>
  );
}
