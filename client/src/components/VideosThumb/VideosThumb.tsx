import Link from 'next/link';

import { Video } from 'store/@types';

type VideosThumbProps = {
  videos?: Video[];
};

export function VideosThumb({ videos }: VideosThumbProps) {
  return (
    <div
      className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4"
      data-testid="videos-thumbs"
    >
      {videos?.map((video) => (
        <Link
          href="/username/video/123"
          className="relative h-60"
          key={video.id}
        >
          {video.live && (
            <span className="absolute top-5 left-5 bg-accent text-gray-50 px-2 py-1 rounded-full text-sm mr-2">
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
              <div className="flex justify-between items-center gap-4">
                <img
                  src={video.profileImg}
                  alt={video.profile}
                  className="rounded-full w-12 h-12"
                />
                <div>
                  <p className="font-medium text-lg">{video.title}</p>
                  <p className="text-gray-100 text-sm">{video.profile}</p>
                </div>
              </div>
              <span className="text-gray-100">
                {video.totalViews} visualizações
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
