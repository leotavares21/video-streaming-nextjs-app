import { connect } from 'react-redux';

import VideosThumb from 'components/VideosThumb';

import { PagesMapState, Videos } from 'store/types';

type ChannelPageProps = {
  videos: Videos[];
};

function ChannelPage({ videos }: ChannelPageProps) {
  return (
    <div>
      <div className="flex items-center justify-between border-1 border-b border-gray pb-4 mb-8">
        <figure className="flex items-center gap-6">
          <img
            src="https://source.unsplash.com/random/200x200?person"
            alt="person"
            className="w-28 h-28 rounded-full border-4 border-secondary"
          />
          <figcaption className="text-xl font-medium">Username</figcaption>
          <span className="text-gray">12 mil inscritos</span>
        </figure>

        <button className="btn border-2 border-accent">Inscrever-se</button>
      </div>

      <section>
        <h1>Videos</h1>
        <VideosThumb videos={videos} />
      </section>
    </div>
  );
}
const mapStateToProps = (state: PagesMapState) => ({
  videos: state.videos.data
});

export default connect(mapStateToProps)(ChannelPage);
