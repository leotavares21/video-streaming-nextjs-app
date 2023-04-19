import Link from 'next/link';
import { MdOutlineAttachMoney } from 'react-icons/md';

import Chat from 'components/Chat';
import VideoPlayer from 'components/VideoPlayer';

const Video = () => {
  return (
    <div className="flex gap-12">
      <div className="w-2/3 h-[30rem]">
        <VideoPlayer className="h-full" />

        <div className="flex items-center justify-between my-4">
          <figure className="flex items-center gap-6">
            <Link href="/username">
              <img
                src="https://source.unsplash.com/random/200x200?person"
                alt="person"
                className="w-20 h-20 rounded-full border-4 border-secondary"
              />
            </Link>
            <figcaption className="text-xl font-medium">Username</figcaption>
            <span className="text-gray-200">12 mil seguidores</span>
          </figure>

          <div className="flex gap-4">
            <button className="flex items-center justify-center btn border-2 border-gray-200">
              <MdOutlineAttachMoney className="text-xl" /> <span>Apoiar</span>
            </button>
            <button className="btn border-2 border-accent">Seguir</button>
          </div>
        </div>
      </div>
      <Chat className="w-1/3 h-[35rem]" username="John Lemon" />
    </div>
  );
};

export default Video;
