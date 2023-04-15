import VideosThumb from 'components/VideosThumb';

export default function ChannelPage() {
  return (
    <div>
      <div className="flex justify-between mb-8">
        <figure className="flex items-center gap-6">
          <img
            src="https://source.unsplash.com/random/200x200?person"
            alt="person"
            className="w-28 h-28 rounded-full  border-4 border-secondary mb-4"
          />
          <figcaption className=" text-center text-xl font-medium">
            Username
          </figcaption>
          <span>12 mil inscritos</span>
        </figure>

        <button>Inscrever-se</button>
      </div>

      <section>
        <h1>Videos</h1>
        <VideosThumb />
      </section>
    </div>
  );
}
