import { connect } from 'react-redux';

import { ChannelCard } from 'components/ChannelCard';
import { Chat } from 'components/Chat';
import { VideoPlayer } from 'components/VideoPlayer/VideoPlayer';

import { Channel } from 'store/types';
import { PagesMapState } from 'store/types';

type VideoSinglePageProps = {
  channel: Channel;
};

function VideoSinglePage({ channel }: VideoSinglePageProps) {
  return (
    <div className="flex justify-between gap-4">
      <div>
        <VideoPlayer />

        <ChannelCard type="full" channel={channel} />
      </div>

      <Chat />
    </div>
  );
}

const mapStateToProps = (state: PagesMapState) => ({
  channel: state.channel.data
});

const VideoSinglePageContent = connect(mapStateToProps)(VideoSinglePage);

export { VideoSinglePageContent };
