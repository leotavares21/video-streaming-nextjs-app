import { connect } from 'react-redux';

import { ChannelCard } from 'components/ChannelCard';
import { Section } from 'components/Section';
import { VideoPlayer } from 'components/VideoPlayer/VideoPlayer';
import { VideosThumb } from 'components/VideosThumb/VideosThumb';

import { PagesMapState, Channel, Channel_Status } from 'store/types';

type ChannelSiglePageProps = {
  channel: Channel;
  status: Channel_Status;
};

function ChannelSiglePage({ channel, status }: ChannelSiglePageProps) {
  // Check if the channel is live and filter by the first video in the list
  const channelFiltered = status.live
    ? channel.videos?.filter((video, index) => index > 0)
    : channel.videos;

  return (
    <>
      <ChannelCard type="subscribe" channel={channel} />

      {status.live && (
        <Section>
          <VideoPlayer className="mx-auto" />
        </Section>
      )}

      <Section>
        <h2>Videos</h2>
        <VideosThumb videos={channelFiltered} />
      </Section>
    </>
  );
}
const mapStateToProps = (state: PagesMapState) => ({
  channel: state.channel.data,
  status: state.channel.status
});

const ChannelSiglePageContent = connect(mapStateToProps)(ChannelSiglePage);

export { ChannelSiglePageContent };
