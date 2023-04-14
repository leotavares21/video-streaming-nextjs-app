import Link from 'next/link';
import React from 'react';
import { RiVideoAddFill } from 'react-icons/ri';
import { connect } from 'react-redux';

import Tab from 'components/Tab';

import { PagesMapState } from 'store/types';

type ProfileProps = {
  activeTab: number;
};

const ProfilePage = ({ activeTab }: ProfileProps) => {
  const [videos] = React.useState([
    {
      id: 1,
      title: 'Video 1',
      thumbnail: 'https://source.unsplash.com/random/500x400?video',
      live: false,
      viewers: 1520,
      total_views: 8564,
      channel: 'Channel 1',
      channel_img: 'https://source.unsplash.com/random/200x200?person'
    },
    {
      id: 2,
      title: 'Video 2',
      thumbnail: 'https://source.unsplash.com/random/500x400?video',
      live: false,
      viewers: 840,
      total_views: 5487,
      channel: 'Channel 2',
      channel_img: 'https://source.unsplash.com/random/200x200?person'
    }
  ]);
  return (
    <div className="flex flex-col">
      <h1 className="flex lg:justify-start justify-center">Configuração</h1>
      <div className="flex lg:justify-start justify-center mb-12">
        <Tab tabNumber={1}>Perfil</Tab>
        <Tab tabNumber={2}>Vídeos</Tab>
      </div>

      {activeTab === 1 && (
        <div className="flex flex-col items-center lg:items-start lg:flex-row">
          <div className="lg:w-1/3 w-full text-center mb-20 lg:mb-0">
            <figure className="flex flex-col items-center mb-6">
              <img
                src="https://source.unsplash.com/random/200x200?person"
                alt="person"
                className="w-36 h-36 rounded-full  border-4 border-secondary mb-4"
              />
              <figcaption className="text-xl font-medium">User</figcaption>
            </figure>

            <button className="btn btn-secondary">Atualizar foto</button>
          </div>

          <div className="lg:w-2/3 w-full lg:pl-24 pl-0 lg:border-l-2 lg:border-l-gray border-l-0">
            <form action="" className="w-full">
              <div className="flex sm:flex-row flex-col sm:justify-between items-center gap-4 border-b-2 border-gray mb-8">
                <h2>Informações básicas</h2>
                <div className="flex gap-4 mb-4">
                  <button className="btn border-2 border-secondary">
                    Cancel
                  </button>
                  <button className="btn btn-secondary">Save</button>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between gap-4 mb-8">
                  <div className="flex flex-col w-full">
                    <label htmlFor="" className="mb-3">
                      Nome
                    </label>
                    <input
                      type="text"
                      placeholder="Nome"
                      className="px-4 py-2 w-full text-black focus:outline-none focus:ring-2 focus:ring-secondary rounded-xl"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <label htmlFor="" className="mb-3">
                      Sobrenome
                    </label>
                    <input
                      type="text"
                      placeholder="Sobrenome"
                      className="px-4 py-2 w-full text-black focus:outline-none focus:ring-2 focus:ring-secondary rounded-xl"
                    />
                  </div>
                </div>
                <label htmlFor="" className="mb-3">
                  E-mail
                </label>
                <input
                  type="text"
                  className="px-4 py-2 mb-8 text-black focus:outline-none focus:ring-2 focus:ring-secondary rounded-xl"
                  placeholder="E-mail"
                />

                <label htmlFor="" className="mb-3">
                  Sobre
                </label>
                <textarea
                  className="px-4 py-2 mb-8 text-black focus:outline-none focus:ring-2 focus:ring-secondary rounded-xl"
                  placeholder="Descrição"
                />
              </div>
            </form>
          </div>
        </div>
      )}

      {activeTab === 2 && (
        <div>
          <button
            type="button"
            className="flex gap-3 items-center btn border-2 border-accent mb-8"
          >
            <span className="text-xl">Iniciar Live</span>
            <RiVideoAddFill className="text-accent text-3xl" />
          </button>

          <section>
            <h2 className="mb-8">Lives passadas</h2>

            <div
              className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4"
              data-testid="videos-container"
            >
              {videos.map((video) => (
                <Link
                  href="username/video/123"
                  key={video.id}
                  className="relative h-60"
                >
                  {video.live && (
                    <span className="absolute top-5 left-5 bg-accent text-white px-2 py-1 rounded-full text-sm mr-2">
                      Ao vivo
                    </span>
                  )}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-50 bg-gradient-to-b from-transparent to-black rounded-b-3xl">
                    <div className="flex items-center justify-between mb-2">
                      <figure className="flex justify-between items-center gap-4">
                        {video.live && (
                          <img
                            src={video.channel_img}
                            alt={video.channel}
                            className="rounded-full w-20 h-20"
                          />
                        )}

                        <figcaption>
                          <div className="font-medium text-lg">
                            {video.title}
                          </div>
                          {video.live && (
                            <div className="text-gray-100 text-sm">
                              {video.channel}
                            </div>
                          )}
                        </figcaption>
                      </figure>

                      <span className="text-gray-100">
                        {video.total_views} visualizações
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: PagesMapState) => ({
  activeTab: state.tab.activeTab
});

export default connect(mapStateToProps)(ProfilePage);
