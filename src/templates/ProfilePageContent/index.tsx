import { ProfileCard } from 'components/ProfileCard';
import { Section } from 'components/Section';
import { VideoPlayer } from 'components/VideoPlayer/VideoPlayer';
import { VideosThumb } from 'components/VideosThumb/VideosThumb';

import { useProfileStore } from 'store';

export function ProfilePageContent() {
  const {
    state: { isLive, profile }
  } = useProfileStore();

  // Check if the profile is live and filter by the first video in the list
  const profileVideosFiltered = isLive
    ? profile.videos?.filter((video, index) => index > 0)
    : profile.videos;

  return (
    <>
      <ProfileCard type="follow" profile={profile} />

      {isLive && (
        <Section>
          <VideoPlayer url={profile.videos?.[0].url} className="mx-auto" />
        </Section>
      )}

      <Section>
        <h2>Videos</h2>
        <VideosThumb videos={profileVideosFiltered} />
      </Section>
    </>
  );
}
