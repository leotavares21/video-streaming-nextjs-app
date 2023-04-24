import Link from 'next/link';

type ChannelPreviewProps = {
  channels: { name: string; img: string; slug: string }[];
  type?: 'search';
};
export default function ChannelPreview({
  channels,
  type
}: ChannelPreviewProps) {
  if (type === 'search') {
    return (
      <div className="text-black" data-testid="channel-preview">
        {channels.map((channel, index) => (
          <Link
            href={`/${channel.slug}`}
            className="flex mb-2 p-1 hover:bg-gray-100"
            key={index}
          >
            <figure className="flex justify-between items-center gap-4">
              <img
                src={channel.img}
                alt={channel.name}
                className="rounded-full w-10 h-10"
              />

              <figcaption className="text-gray-500 text-lg">
                {channel.name}
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
    );
  }
  return (
    <div className="flex flex-wrap gap-24" data-testid="channel-preview">
      {channels.map((channel, index) => (
        <Link href={`/${channel.slug}`} className="flex mb-2" key={index}>
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
      ))}
    </div>
  );
}
