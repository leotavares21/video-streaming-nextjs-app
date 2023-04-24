import Link from 'next/link';
import { SiCashapp } from 'react-icons/si';

import Button from 'components/Button';

type ChannelCardProps = {
  channel: {
    name: string;
    slug: string;
    channel_img: string;
    followers: number;
  };
  type?: 'full';
};

export default function ChannelCard({ channel, type }: ChannelCardProps) {
  if (type === 'full') {
    return (
      <div className="flex items-center justify-between my-4 gap-2">
        <figure className="flex items-center gap-6">
          <Link href={`/${channel.slug}`} className="flex items-center gap-6">
            <img
              src={channel.channel_img}
              alt={channel.name}
              className="w-20 h-20 rounded-full border-4 border-primary"
            />
            <figcaption className="text-xl font-medium">
              {channel.name}
            </figcaption>
          </Link>
          <span className="text-gray-200">{channel.followers} inscritos</span>
        </figure>

        <div className="flex gap-4">
          <Button variant="gray">
            <SiCashapp className="text-xl" />
            <span>Apoiar</span>
          </Button>
          <Button variant="accent">Seguir</Button>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-between mb-4 gap-2">
      <figure className="flex items-center gap-6">
        <Link href={`/${channel.slug}`} className="flex items-center gap-6">
          <img
            src={channel.channel_img}
            alt={channel.name}
            className="w-24 h-24 rounded-full border-4 border-primary"
          />
          <figcaption className="text-xl font-medium">
            {channel.name}
          </figcaption>
        </Link>
        <span className="text-gray-200">{channel.followers} inscritos</span>
      </figure>

      <Button variant="accent">Inscrever-se</Button>
    </div>
  );
}
