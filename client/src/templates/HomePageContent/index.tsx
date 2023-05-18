import { useTabClick } from 'hooks/useTabClick';

import { ProfilePreview } from 'components/ProfilePreview';
import { Tab } from 'components/Tab';
import { VideosThumb } from 'components/VideosThumb/VideosThumb';

import { useTrendVideosStore, useLivesStore, useUserStore } from 'store';

export function HomePageContent() {
  const { activeTab, handleTabClick } = useTabClick();
  const {
    state: { trendVideos }
  } = useTrendVideosStore();

  const {
    state: { lives }
  } = useLivesStore();

  const {
    state: { user }
  } = useUserStore();

  return (
    <>
      <div className="flex mb-8">
        <Tab
          handleTab={() => handleTabClick(1)}
          tabNumber={1}
          activeTab={activeTab}
        >
          Em alta
        </Tab>
        <Tab
          handleTab={() => handleTabClick(2)}
          tabNumber={2}
          activeTab={activeTab}
        >
          Ao vivo
        </Tab>
        <Tab
          handleTab={() => handleTabClick(3)}
          tabNumber={3}
          activeTab={activeTab}
        >
          Para você
        </Tab>
        <Tab
          handleTab={() => handleTabClick(4)}
          tabNumber={4}
          activeTab={activeTab}
        >
          Seguindo
        </Tab>
      </div>
      {activeTab === 1 && <VideosThumb videos={trendVideos} />}
      {activeTab === 2 && <VideosThumb videos={lives} />}
      {activeTab === 3 && <VideosThumb videos={user.following.videos} />}
      {activeTab === 4 && <ProfilePreview profiles={user.following.profiles} />}
    </>
  );
}
