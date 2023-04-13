import Link from 'next/link';
import React, { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState(1);

  const [videos] = React.useState([
    {
      id: 1,
      title: 'Video 1',
      thumbnail: 'https://source.unsplash.com/random/500x400?video',
      live: true,
      viewers: 1520,
      channel: 'Channel 1',
      channel_img: 'https://source.unsplash.com/random/200x200?person'
    },
    {
      id: 2,
      title: 'Video 2',
      thumbnail: 'https://source.unsplash.com/random/500x400?video',
      live: true,
      viewers: 840,
      channel: 'Channel 2',
      channel_img: 'https://source.unsplash.com/random/200x200?person'
    },
    {
      id: 3,
      title: 'Video 3',
      thumbnail: 'https://source.unsplash.com/random/500x400?video',
      live: true,
      viewers: 510,
      channel: 'Channel 3',
      channel_img: 'https://source.unsplash.com/random/200x200?person'
    },
    {
      id: 4,
      title: 'Video 4',
      thumbnail: 'https://source.unsplash.com/random/500x400?video',
      live: true,
      viewers: 720,
      channel: 'Channel 4',
      channel_img: 'https://source.unsplash.com/random/200x200?person'
    }
  ]);

  return (
    <>
      <h1 className="text-3xl font-medium mb-4">Video Streaming</h1>
      <div className="flex mb-8">
        <button
          className={`flex items-center gap-2 text-xl py-2 pr-4 hover:brightness-90 ${
            activeTab === 1 ? 'text-secondary' : 'text-gray'
          }`}
          data-testid="tabActivation"
          onClick={() => setActiveTab(1)}
        >
          <div
            className={`w-1.5 h-1.5 rounded-full bg-secondary ${
              activeTab === 1 ? 'opacity-1' : 'opacity-0'
            }`}
          />
          <span>Em alta</span>
        </button>
        <button
          className={`flex items-center gap-2 text-xl py-2 pr-4 hover:brightness-90 ${
            activeTab === 2 ? 'text-secondary' : 'text-gray'
          }`}
          data-testid="tabActivation2"
          onClick={() => setActiveTab(2)}
        >
          <div
            className={`w-1.5 h-1.5 rounded-full bg-secondary ${
              activeTab === 2 ? 'opacity-1' : 'opacity-0'
            }`}
          />
          <span>Inscrições</span>
        </button>
      </div>
      {activeTab === 1 && (
        <div
          className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4"
          data-testid="videos-container"
        >
          {videos.map((video) => (
            <Link href="/video" key={video.id} className="relative h-60">
              <span className="absolute top-5 left-5 bg-accent text-white px-2 py-1 rounded-full text-sm mr-2">
                Ao vivo
              </span>
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-50 bg-gradient-to-b from-transparent to-black rounded-b-3xl">
                {video.live && (
                  <div className="flex items-center justify-between mb-2">
                    <figure className="flex justify-between items-center gap-4">
                      <img
                        src={video.channel_img}
                        alt={video.channel}
                        className="rounded-full w-20 h-20"
                      />

                      <figcaption>
                        <div className="font-medium text-lg">{video.title}</div>
                        <div className="text-gray-100 text-sm">
                          {video.channel}
                        </div>
                      </figcaption>
                    </figure>

                    <span className="text-gray-100">
                      {video.viewers} assistindo
                    </span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
      {activeTab === 2 && (
        <div className="grid grid-cols-5 gap-4">
          {videos.map((video) => (
            <div
              className="flex items-center justify-between mb-2"
              key={video.id}
            >
              <Link href="channel">
                <figure className="flex justify-between items-center gap-4">
                  <img
                    src={video.channel_img}
                    alt={video.channel}
                    className="rounded-full w-20 h-20"
                  />

                  <figcaption className="text-gray-100 text-lg font-medium">
                    {video.channel}
                  </figcaption>
                </figure>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
