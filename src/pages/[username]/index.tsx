import { connect } from 'react-redux';

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
      <div className="flex items-center justify-between border-1 border-b border-gray-200 pb-4 mb-8">
        <figure className="flex items-center gap-6">
          <img
            src="https://source.unsplash.com/random/200x200?person"
            alt="person"
            className="w-28 h-28 rounded-full border-4 border-secondary"
          />
          <figcaption className="text-xl font-medium">
            {channel.name}
          </figcaption>
          <span className="text-gray-200">12 mil inscritos</span>
        </figure>

        <button className="btn border-2 border-accent">Inscrever-se</button>
      </div>

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
