import React from 'react';
import ReactPlayer from 'react-player/youtube';

import { ClientOnly } from 'components/ClientOnly';

type VideoPlayerProps = {
  url?: string;
  className?: string;
};

export function VideoPlayer({ className, url }: VideoPlayerProps) {
  return (
    <ClientOnly className={`w-[60rem] h-[35rem] ${className}`}>
      <ReactPlayer url={url} width="100%" height="100%" />
    </ClientOnly>
  );
}
