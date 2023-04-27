import Link from 'next/link';

import { Channel } from 'store/types';

type CardProps = {
  imgSize: string;
  channel: Channel;
};

type CardContainerProps = {
  children: React.ReactNode;
};

type ButtonGroupProps = CardContainerProps;

export function Card({ imgSize, channel }: CardProps) {
  return (
    <figure className="flex items-center gap-6">
      <Link href={`/${channel.slug}`} className="flex items-center gap-6">
        <img
          src={channel.channel_img}
          alt={channel.name}
          className={`${imgSize} rounded-full border-4 border-primary`}
        />
        <figcaption className="text-xl font-medium">{channel.name}</figcaption>
      </Link>
      <span className="text-gray-200">{channel.followers} inscritos</span>
    </figure>
  );
}

export function CardContainer({ children }: CardContainerProps) {
  return (
    <div className="flex items-center justify-between my-4 gap-2">
      {children}
    </div>
  );
}

export function ButtonGroup({ children }: ButtonGroupProps) {
  return <div className="flex gap-4">{children}</div>;
}
