import { Chat } from 'components/Chat';
import { ProfileCard } from 'components/ProfileCard';
import { VideoPlayer } from 'components/VideoPlayer/VideoPlayer';

import { useProfileStore } from 'store';

export function VideoSinglePageContent() {
  const {
    state: { profile }
  } = useProfileStore();

  return (
    <div className="flex justify-between gap-4">
      <div>
        <VideoPlayer url={profile.videos?.[0].url} />

        <ProfileCard type="full" profile={profile} />
      </div>

      <Chat />
    </div>
  );
}
