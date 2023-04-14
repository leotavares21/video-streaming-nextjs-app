import Link from 'next/link';
import React from 'react';
import { connect } from 'react-redux';

import Tab from 'components/Tab';

import { PagesMapState } from 'store/types';

type Videos = {
  id: number;
  title: string;
  thumbnail: string;
  live: boolean;
  viewers: number;
  channel: string;
  channel_img: string;
};

type HomeProps = {
  activeTab: number;
  videos: Videos[];
};

function HomePage({ activeTab, videos }: HomeProps) {
  return (
    <>
      <h1>Video Streaming</h1>
      <div className="flex mb-8">
        <Tab tabNumber={1}>Em alta</Tab>
        <Tab tabNumber={2}>Inscrições</Tab>
      </div>
      {activeTab === 1 && (
        <div
          className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4"
          data-testid="videos-container"
        >
          {videos.map((video) => (
            <Link
              href="username/video/123"
              key={video.id}
              className="relative h-60"
            >
              <span className="absolute top-5 left-5 bg-accent text-white px-2 py-1 rounded-full text-sm mr-2">
                Ao vivo
              </span>
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-50 bg-gradient-to-b from-transparent to-black rounded-b-3xl">
                {video.live && (
                  <div className="flex items-center justify-between mb-2">
                    <figure className="flex justify-between items-center gap-4">
                      <img
                        src={video.channel_img}
                        alt={video.channel}
                        className="rounded-full w-20 h-20"
                      />

                      <figcaption>
                        <div className="font-medium text-lg">{video.title}</div>
                        <div className="text-gray-100 text-sm">
                          {video.channel}
                        </div>
                      </figcaption>
                    </figure>

                    <span className="text-gray-100">
                      {video.viewers} assistindo
                    </span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
      {activeTab === 2 && (
        <div className="grid grid-cols-5 gap-4">
          {videos.map((video) => (
            <div
              className="flex items-center justify-between mb-2"
              key={video.id}
            >
              <Link href="channel">
                <figure className="flex justify-between items-center gap-4">
                  <img
                    src={video.channel_img}
                    alt={video.channel}
                    className="rounded-full w-20 h-20"
                  />

                  <figcaption className="text-gray-100 text-lg font-medium">
                    {video.channel}
                  </figcaption>
                </figure>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state: PagesMapState) => ({
  activeTab: state.tab.activeTab,
  videos: state.videos.data
});

export default connect(mapStateToProps)(HomePage);
