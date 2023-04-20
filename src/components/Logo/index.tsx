import Link from 'next/link';

export default function Logo() {
  return (
    <div className="md:w-1/3 sm:w-2/10">
      <Link href="/" className="flex flex-col items-center w-20">
        <span className="font-medium text-secondary">Video</span>
        <span className="font-medium">Streaming</span>
      </Link>
    </div>
  );
}
