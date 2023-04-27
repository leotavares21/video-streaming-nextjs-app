import { connect } from 'react-redux';

import ChannelCard from 'components/ChannelCard';
import VideoPlayer from 'components/VideoPlayer';
import VideosThumb from 'components/VideosThumb';

import { PagesMapState, Channel, Channel_Status } from 'store/types';

type ChannelPageProps = {
  channel: Channel;
  status: Channel_Status;
};

function ChannelPage({ channel, status }: ChannelPageProps) {
  // Check if the channel is live and filter by the first video in the list
  const channelFiltered = status.live
    ? channel.videos.filter((video, index) => index > 0)
    : channel.videos;

  return (
    <>
      <ChannelCard type="subscribe" channel={channel} />

      {status.live && (
        <section className="mb-8 pt-4 border-gray-500 border-t">
          <span className="bg-accent uppercase inline-block font-medium px-4 py-2 mb-4 rounded-lg">
            Ao Vivo
          </span>
          <VideoPlayer className="w-2/3 mx-auto h-[30rem]" />
        </section>
      )}

      <section className="mb-8 pt-4 border-gray-500 border-t">
        <h2>Videos</h2>
        <VideosThumb videos={channelFiltered} />
      </section>
    </>
  );
}
const mapStateToProps = (state: PagesMapState) => ({
  channel: state.channel.data,
  status: state.channel.status
});

export default connect(mapStateToProps)(ChannelPage);
