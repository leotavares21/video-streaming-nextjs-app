import Link from 'next/link';
import React from 'react';
import { connect } from 'react-redux';

import Tab from 'components/Tab';
import VideosThumb from 'components/VideosThumb';

import { PagesMapState, Videos } from 'store/types';

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
      {activeTab === 1 && <VideosThumb />}
      {activeTab === 2 && (
        <div
          className="grid grid-cols-5 gap-4"
          data-testid="subscriptions-container"
        >
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
