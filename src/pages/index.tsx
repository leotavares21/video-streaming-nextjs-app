import Link from 'next/link';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import Tab from 'components/Tab';
import VideosThumb from 'components/VideosThumb';

import { PagesMapState, User, Videos } from 'store/types';

type HomeProps = {
  lives: Videos[];
  user: User;
};

function HomePage({ lives, user }: HomeProps) {
  const [activeTab, setActiveTab] = useState(1);

  function handleTabClick(tab: number) {
    setActiveTab(tab);
  }

  return (
    <>
      <h1>Video Streaming</h1>
      <div className="flex mb-8">
        <Tab
          handleTab={() => handleTabClick(1)}
          tabNumber={1}
          activeTab={activeTab}
        >
          Ao vivo
        </Tab>
        <Tab
          handleTab={() => handleTabClick(2)}
          tabNumber={2}
          activeTab={activeTab}
        >
          Para você
        </Tab>
        <Tab
          handleTab={() => handleTabClick(3)}
          tabNumber={3}
          activeTab={activeTab}
        >
          Seguindo
        </Tab>
      </div>
      {activeTab === 1 && (
        <VideosThumb videos={lives} testid="lives-container" />
      )}
      {activeTab === 2 && (
        <VideosThumb videos={user.following.videos} testid="foryou-container" />
      )}
      {activeTab === 3 && (
        <div
          className="grid grid-cols-5 gap-4"
          data-testid="following-container"
        >
          {lives.map((live) => (
            <div
              className="flex items-center justify-between mb-2"
              key={live.id}
            >
              <Link href="channel">
                <figure className="flex justify-between items-center gap-4">
                  <img
                    src={live.channel_img}
                    alt={live.channel}
                    className="rounded-full w-20 h-20"
                  />

                  <figcaption className="text-gray-100 text-lg font-medium">
                    {live.channel}
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
  lives: state.lives.data,
  user: state.user.data
});

export default connect(mapStateToProps)(HomePage);
