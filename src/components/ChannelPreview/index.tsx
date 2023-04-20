import Link from 'next/link';

type ChannelPreviewProps = {
  channels: { name: string; img: string; slug: string }[];
};
export default function ChannelPreview({ channels }: ChannelPreviewProps) {
  return (
    <div className="grid grid-cols-5 gap-4">
      {channels.map((channel, index) => (
        <div className="flex items-center justify-between mb-2" key={index}>
          <Link href={`/${channel.slug}`}>
            <figure className="flex justify-between items-center gap-4">
              <img
                src={channel.img}
                alt={channel.name}
                className="rounded-full w-20 h-20"
              />

              <figcaption className="text-gray-100 text-lg font-medium">
                {channel.name}
              </figcaption>
            </figure>
          </Link>
        </div>
      ))}
    </div>
  );
}
