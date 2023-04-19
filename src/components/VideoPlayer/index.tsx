import React from 'react';
import ReactPlayer from 'react-player/youtube';

import ClientOnly from 'components/ClientOnly';

interface VideoPlayerProps {
  className?: string;
}

export default function VideoPlayer({ ...delegated }: VideoPlayerProps) {
  return (
    <ClientOnly {...delegated}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        width="100%"
        height="100%"
      />
    </ClientOnly>
  );
}
