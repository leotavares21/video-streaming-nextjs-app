import { useEffect, useState } from 'react';

interface ClientOnlyProps {
  children: React.ReactNode;
  className?: string;
}

export function ClientOnly({ children, ...delegated }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}
