import { connect } from 'react-redux';

import { useTabClick } from 'hooks/useTabClick';

import { ChannelPreview } from 'components/ChannelPreview';
import { Tab } from 'components/Tab';
import { VideosThumb } from 'components/VideosThumb/VideosThumb';

import { PagesMapState, User, Videos } from 'store/types';

type HomePageProps = {
  lives: Videos[];
  user: User;
};

function HomePage({ lives, user }: HomePageProps) {
  const { activeTab, handleTabClick } = useTabClick();

  return (
    <>
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
      {activeTab === 1 && <VideosThumb videos={lives} />}
      {activeTab === 2 && <VideosThumb videos={user.following.videos} />}
      {activeTab === 3 && <ChannelPreview channels={user.following.channels} />}
    </>
  );
}

const mapStateToProps = (state: PagesMapState) => ({
  lives: state.lives.data,
  user: state.user.data
});

const HomePageContent = connect(mapStateToProps)(HomePage);

export { HomePageContent };
