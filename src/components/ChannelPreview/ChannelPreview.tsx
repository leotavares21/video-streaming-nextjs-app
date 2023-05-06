import Link from 'next/link';

import { Channel } from 'store/types';

import { PreviewFigure } from './components/PreviewFigure';

type ChannelPreviewProps = {
  channels: Channel[];
  type?: 'search';
};

export function ChannelPreview({ channels, type }: ChannelPreviewProps) {
  if (type === 'search') {
    return (
      <>
        {channels.map((channel) => (
          <Link
            href={`/${channel.slug}`}
            className="flex mb-2 p-1 hover:bg-gray-100"
            key={channel.id}
          >
            <PreviewFigure>
              <img
                src={channel.channelImg}
                alt={channel.name}
                className="rounded-full w-10 h-10"
              />

              <figcaption className="text-gray-500 text-lg">
                {channel.name}
              </figcaption>
            </PreviewFigure>
          </Link>
        ))}
      </>
    );
  }
  return (
    <div className="flex flex-wrap md:justify-between md:gap-4 gap-12">
      {channels.map((channel) => (
        <Link
          href={`/${channel.slug}`}
          className="flex mb-2 p-2 rounded-xl bg-gray-500 bg-opacity-25 hover:bg-gray-700 hover:bg-opacity-50"
          key={channel.id}
        >
          <PreviewFigure>
            <img
              src={channel.channelImg}
              alt={channel.name}
              className="rounded-full w-20 h-20"
            />

            <figcaption className="text-gray-100 text-lg font-medium">
              {channel.name}
            </figcaption>
          </PreviewFigure>
        </Link>
      ))}
    </div>
  );
}
