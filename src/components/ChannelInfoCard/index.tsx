import React from 'react';

type ChannelInfoCardProps = {
  channel: { name: string; channel_img: string; followers: number };
  className?: string;
};

export default function ChannelInfoCard({
  channel,
  className
}: ChannelInfoCardProps) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <figure className="flex items-center gap-6">
        <img
          src={channel.channel_img}
          alt={channel.name}
          className="w-28 h-28 rounded-full border-4 border-secondary"
        />
        <figcaption className="text-xl font-medium">{channel.name}</figcaption>
        <span className="text-gray-200">{channel.followers} inscritos</span>
      </figure>

      <button className="btn border-2 border-accent">Inscrever-se</button>
    </div>
  );
}
