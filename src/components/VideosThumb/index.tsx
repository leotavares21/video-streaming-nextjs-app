import Link from 'next/link';
import React from 'react';

import { Videos } from 'store/types';

type VideosThumbProps = {
  videos: Videos[];
  testid?: string;
};

function VideosThumb({ videos, testid }: VideosThumbProps) {
  return (
    <div
      className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4"
      data-testid={testid}
    >
      {videos.map((video) => (
        <Link
          href="username/video/123"
          key={video.id}
          className="relative h-60"
        >
          {video.live && (
            <span className="absolute top-5 left-5 bg-accent text-white px-2 py-1 rounded-full text-sm mr-2">
              Ao vivo
            </span>
          )}
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-50 bg-gradient-to-b from-transparent to-black rounded-b-3xl">
            <div className="flex items-center justify-between mb-2">
              <figure className="flex justify-between items-center gap-4">
                {video.live && (
                  <img
                    src={video.channel_img}
                    alt={video.channel}
                    className="rounded-full w-20 h-20"
                  />
                )}

                <figcaption>
                  <div className="font-medium text-lg">{video.title}</div>
                  {video.live && (
                    <div className="text-gray-100 text-sm">{video.channel}</div>
                  )}
                </figcaption>
              </figure>

              <span className="text-gray-100">
                {video.total_views} visualizações
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default VideosThumb;
