import { RiVideoAddFill } from 'react-icons/ri';
import { connect } from 'react-redux';

import { useModal } from 'hooks/useModal';
import { useTabClick } from 'hooks/useTabClick';

import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import { Tab } from 'components/Tab';
import { VideosThumb } from 'components/VideosThumb/VideosThumb';

import { PagesMapState, User } from 'store/types';

type ProfilePageProps = {
  user: User;
};

const ProfilePage = ({ user }: ProfilePageProps) => {
  const { activeTab, handleTabClick } = useTabClick();
  const { openModal, setOpenModal, closeModal } = useModal();

  return (
    <div className="flex flex-col">
      <h1 className="flex lg:justify-start justify-center">Configuração</h1>
      <div className="flex lg:justify-start justify-center mb-12">
        <Tab
          handleTab={() => handleTabClick(1)}
          tabNumber={1}
          activeTab={activeTab}
        >
          Perfil
        </Tab>
        <Tab
          handleTab={() => handleTabClick(2)}
          tabNumber={2}
          activeTab={activeTab}
        >
          Videos
        </Tab>
      </div>

      {activeTab === 1 && (
        <div className="flex flex-col items-center lg:items-start lg:flex-row">
          <div className="lg:w-1/3 w-full flex flex-col items-center mb-20 lg:mb-0">
            <div className="flex flex-col items-center mb-8">
              <img
                src={user.img}
                alt="person"
                className="w-36 h-36 rounded-full  border-4 border-primary mb-4"
              />
              <div className="flex flex-col items-center">
                <span className="text-xl font-medium mb-4">{`${user.name} ${user.last_name}`}</span>
                <div className="flex justify-center gap-4">
                  <span>59 videos</span>
                  <span className="border-gray-200 px-4 border-r-2 border-l-2">
                    12 mil inscritos
                  </span>
                  <span>21 inscrições</span>
                </div>
              </div>
            </div>
            <Button>Atualizar foto</Button>
          </div>

          <div className="lg:w-2/3 w-full lg:pl-24 pl-0 lg:border-l-2 lg:border-l-gray-200 border-l-0">
            <form action="" className="w-full">
              <div className="flex sm:flex-row flex-col sm:justify-between items-center gap-4 border-b-2 border-gray-200 mb-8">
                <h2>Informações básicas</h2>
                <div className="flex gap-4 mb-4">
                  <Button variant="accent" type="reset">
                    Cancelar
                  </Button>

                  <Button type="submit">Confirmar</Button>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between gap-4 mb-8">
                  <div className="flex flex-col w-full">
                    <label htmlFor="name" className="mb-3">
                      Nome
                    </label>
                    <input
                      type="text"
                      placeholder="Nome"
                      className="input-form input-outline"
                      name="name"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <label htmlFor="lastname" className="mb-3">
                      Sobrenome
                    </label>
                    <input
                      type="text"
                      placeholder="Sobrenome"
                      className="input-form input-outline"
                      name="lastname"
                    />
                  </div>
                </div>
                <label htmlFor="email" className="mb-3">
                  E-mail
                </label>
                <input
                  type="text"
                  className="mb-8 input-form input-outline"
                  placeholder="E-mail"
                  name="email"
                />

                <label htmlFor="about" className="mb-3">
                  Sobre
                </label>
                <textarea
                  className="mb-8 input-form input-outline"
                  placeholder="Descrição"
                  name="about"
                />
              </div>
            </form>
          </div>
        </div>
      )}

      {activeTab === 2 && (
        <div className="relative">
          <Button variant="accent" onClick={() => setOpenModal(true)}>
            <span className="text-xl">Iniciar Live</span>
            <RiVideoAddFill className="text-accent text-3xl" />
          </Button>

          <Modal
            title="Criar nova live"
            isOpen={openModal}
            onClose={closeModal}
          >
            <form className="p-4">
              <div className="mb-4">
                <label htmlFor="title" className="text-black font-medium mb-2">
                  Título
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="input-auth"
                  placeholder="Título"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="text-black font-medium mb-2"
                >
                  Descrição
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="input-auth"
                  placeholder="Descrição (opcional)"
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit">Criar</Button>
              </div>
            </form>
          </Modal>

          <section>
            <h2 className="my-8">Lives passadas</h2>

            <VideosThumb videos={user.my_channel.videos} />
          </section>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: PagesMapState) => ({
  user: state.user.data
});

const ProfilePageContent = connect(mapStateToProps)(ProfilePage);

export { ProfilePageContent };
