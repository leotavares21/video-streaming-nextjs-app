import Link from 'next/link';

import { Channel } from 'store/types';

type CardProps = {
  imgSize: string;
  channel: Channel;
};

export function Card({ imgSize, channel }: CardProps) {
  return (
    <figure className="flex items-center gap-6">
      <Link href={`/${channel.slug}`} className="flex items-center gap-6">
        <img
          src={channel.channelImg}
          alt={channel.name}
          className={`${imgSize} rounded-full border-4 border-primary`}
        />
        <figcaption className="text-xl font-medium">{channel.name}</figcaption>
      </Link>
      <span className="text-gray-200">{channel.followers} inscritos</span>
    </figure>
  );
}
