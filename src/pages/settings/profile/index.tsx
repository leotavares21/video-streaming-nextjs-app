import React from 'react';
import { RiVideoAddFill } from 'react-icons/ri';
import { connect } from 'react-redux';

import Tab from 'components/Tab';
import VideosThumb from 'components/VideosThumb';

import { PagesMapState } from 'store/types';

type ProfileProps = {
  activeTab: number;
};

const ProfilePage = ({ activeTab }: ProfileProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="flex lg:justify-start justify-center">Configuração</h1>
      <div className="flex lg:justify-start justify-center mb-12">
        <Tab tabNumber={1}>Perfil</Tab>
        <Tab tabNumber={2}>Vídeos</Tab>
      </div>

      {activeTab === 1 && (
        <div className="flex flex-col items-center lg:items-start lg:flex-row">
          <div className="lg:w-1/3 w-full flex flex-col items-center mb-20 lg:mb-0">
            <figure className="flex flex-col items-center">
              <img
                src="https://source.unsplash.com/random/200x200?person"
                alt="person"
                className="w-36 h-36 rounded-full  border-4 border-secondary mb-4"
              />
              <figcaption className="flex flex-col items-center">
                <span className="text-xl font-medium mb-4">Username</span>
                <div className="flex justify-center gap-4">
                  <span>59 videos</span>
                  <span className="border-gray px-4 border-r-2 border-l-2">
                    12 mil inscritos
                  </span>
                  <span>21 inscrições</span>
                </div>
              </figcaption>
            </figure>

            <button className="btn btn-secondary mt-8">Atualizar foto</button>
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

            <VideosThumb />
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
