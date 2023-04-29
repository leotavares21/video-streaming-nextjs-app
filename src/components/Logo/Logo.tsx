import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center">
      <span className="font-medium text-primary">Video</span>
      <span className="font-medium">Streaming</span>
    </Link>
  );
}
