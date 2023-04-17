import Chat from 'components/Chat';
import VideoPlayer from 'components/VideoPlayer';

const Video = () => {
  return (
    <div className="flex gap-12">
      <VideoPlayer />
      <Chat username="John Lemon" />
    </div>
  );
};

export default Video;
