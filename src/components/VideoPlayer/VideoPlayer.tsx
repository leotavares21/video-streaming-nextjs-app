import React from 'react';
import ReactPlayer from 'react-player/youtube';

import { ClientOnly } from 'components/ClientOnly';

type VideoPlayerProps = {
  className?: string;
};

export function VideoPlayer({ className }: VideoPlayerProps) {
  return (
    <ClientOnly className={`w-[60rem] h-[35rem] ${className}`}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        width="100%"
        height="100%"
      />
    </ClientOnly>
  );
}
