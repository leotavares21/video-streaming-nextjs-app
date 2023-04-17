import Link from 'next/link';
import React from 'react';
import { MdOutlineAttachMoney } from 'react-icons/md';
import ReactPlayer from 'react-player/youtube';

import ClientOnly from 'components/ClientOnly';

export default function VideoPlayer() {
  return (
    <ClientOnly className="w-2/3 h-[30rem]">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        width="100%"
        height="100%"
      />

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
          <span className="text-gray">12 mil seguidores</span>
        </figure>

        <div className="flex gap-4">
          <button className="flex items-center justify-center btn border-2 border-gray">
            <MdOutlineAttachMoney className="text-xl" /> <span>Apoiar</span>
          </button>
          <button className="btn border-2 border-accent">Seguir</button>
        </div>
      </div>
    </ClientOnly>
  );
}
