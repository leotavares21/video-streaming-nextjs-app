import { useState } from 'react';
import { connect } from 'react-redux';

import ChannelPreview from 'components/ChannelPreview';
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
        <ChannelPreview
          channels={user.following.channels}
          data-testid="following-container"
        />
      )}
    </>
  );
}

const mapStateToProps = (state: PagesMapState) => ({
  lives: state.lives.data,
  user: state.user.data
});

export default connect(mapStateToProps)(HomePage);
