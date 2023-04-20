import { connect } from 'react-redux';

import ChannelInfoCard from 'components/ChannelInfoCard';
import VideoPlayer from 'components/VideoPlayer';
import VideosThumb from 'components/VideosThumb';

import { PagesMapState, Channel, Channel_Status } from 'store/types';

type ChannelPageProps = {
  channel: Channel;
  status: Channel_Status;
};

function ChannelPage({ channel, status }: ChannelPageProps) {
  // Check if the channel is live and filter by the first video in the list
  const channelFilter = status.live
    ? channel.videos.filter((video, index) => index > 0)
    : channel.videos;

  return (
    <>
      <ChannelInfoCard
        className="border-1 border-b border-gray-200 pb-4 mb-8"
        channel={channel}
      />

      {status.live && (
        <section className="mb-8">
          <span className="bg-accent uppercase inline-block font-medium px-4 py-2 mb-4 rounded-lg">
            Ao Vivo
          </span>
          <VideoPlayer className="w-2/3 mx-auto h-[30rem]" />
        </section>
      )}

      <section className="mb-8">
        <h2>Videos</h2>
        <VideosThumb videos={channelFilter} />
      </section>
    </>
  );
}
const mapStateToProps = (state: PagesMapState) => ({
  channel: state.channel.data,
  status: state.channel.status
});

export default connect(mapStateToProps)(ChannelPage);
