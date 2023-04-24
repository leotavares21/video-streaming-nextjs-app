import { connect } from 'react-redux';

import ChannelCard from 'components/ChannelCard';
import Chat from 'components/Chat';
import VideoPlayer from 'components/VideoPlayer';

import { PagesMapState } from 'store/types';

type VideoProps = {
  channel: {
    name: string;
    slug: string;
    channel_img: string;
    followers: number;
  };
};

const VideoPage = ({ channel }: VideoProps) => {
  return (
    <div className="flex gap-12">
      <div className="w-2/3 h-[30rem]">
        <VideoPlayer className="h-full" />

        <ChannelCard type="full" channel={channel} />
      </div>
      <div className="w-1/3 h-[35rem]">
        <Chat />
      </div>
    </div>
  );
};

const mapStateToProps = (state: PagesMapState) => ({
  channel: state.channel.data
});

export default connect(mapStateToProps)(VideoPage);
